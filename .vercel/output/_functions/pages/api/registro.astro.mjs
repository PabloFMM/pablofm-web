import { Octokit } from 'octokit';
export { renderers } from '../../renderers.mjs';

function sanitize(name) {
  return name.toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}
const prerender = false;
const POST = async ({ request }) => {
  try {
    const { companyName, email, acceptedTerms } = await request.json();
    if (!companyName || !email || !acceptedTerms) {
      return new Response(
        JSON.stringify({ error: "Todos los campos son obligatorios" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const slug = sanitize(companyName);
    const org = undefined                          ;
    const templateRepo = undefined                                    ;
    const token = undefined                            ;
    if (!org || !templateRepo || !token) {
      console.error("Missing env vars: GITHUB_ORG, GITHUB_TEMPLATE_REPO, or GITHUB_TOKEN");
      return new Response(
        JSON.stringify({ error: "Configuración del servidor incompleta" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
    const octokit = new Octokit({ auth: token });
    await octokit.request(
      "POST /repos/{template_owner}/{template_repo}/generate",
      {
        template_owner: org,
        template_repo: templateRepo,
        owner: org,
        name: slug,
        private: true,
        description: `NWOS Workspace for ${companyName}`
      }
    );
    await new Promise((resolve) => setTimeout(resolve, 3e3));
    const filesToPersonalize = [
      "README.md",
      "canon/C-001-mission-vision-values.md",
      "canon/C-002-culture.md",
      "canon/C-003-org-structure.md",
      "canon/C-004-glossary.md"
    ];
    for (const filePath of filesToPersonalize) {
      try {
        const { data: fileData } = await octokit.request(
          "GET /repos/{owner}/{repo}/contents/{path}",
          { owner: org, repo: slug, path: filePath }
        );
        const content = Buffer.from(
          fileData.content,
          "base64"
        ).toString("utf-8");
        const updated = content.replace(/\{\{COMPANY_NAME\}\}/g, companyName).replace(/\{\{RESPONSIBLE_EMAIL\}\}/g, email).replace(
          /\{\{DEPLOY_DATE\}\}/g,
          (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
        );
        await octokit.request(
          "PUT /repos/{owner}/{repo}/contents/{path}",
          {
            owner: org,
            repo: slug,
            path: filePath,
            message: `Personalize ${filePath} for ${companyName}`,
            content: Buffer.from(updated).toString("base64"),
            sha: fileData.sha
          }
        );
      } catch (e) {
        console.warn(`Skipping ${filePath}:`, e);
      }
    }
    const repoUrl = `https://github.com/${org}/${slug}`;
    return new Response(
      JSON.stringify({ success: true, slug, repoUrl }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Deploy error:", error);
    if (error.status === 422) {
      return new Response(
        JSON.stringify({ error: "Ya existe un workspace con ese nombre" }),
        { status: 422, headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
