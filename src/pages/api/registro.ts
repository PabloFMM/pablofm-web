import type { APIRoute } from "astro";
import { Octokit } from "octokit";

function sanitize(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { companyName, email, acceptedTerms } = await request.json();

    if (!companyName || !email || !acceptedTerms) {
      return new Response(
        JSON.stringify({ error: "Todos los campos son obligatorios" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const slug = sanitize(companyName);
    const org = import.meta.env.GITHUB_ORG;
    const templateRepo = import.meta.env.GITHUB_TEMPLATE_REPO;
    const token = import.meta.env.GITHUB_TOKEN;

    if (!org || !templateRepo || !token) {
      console.error("Missing env vars: GITHUB_ORG, GITHUB_TEMPLATE_REPO, or GITHUB_TOKEN");
      return new Response(
        JSON.stringify({ error: "Configuración del servidor incompleta" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const octokit = new Octokit({ auth: token });

    // Create repo from template
    await octokit.request(
      "POST /repos/{template_owner}/{template_repo}/generate",
      {
        template_owner: org,
        template_repo: templateRepo,
        owner: org,
        name: slug,
        private: true,
        description: `NWOS Workspace for ${companyName}`,
      }
    );

    // Wait for GitHub to finish copying files
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Personalize files — replace placeholders with real data
    const filesToPersonalize = [
      "README.md",
      "canon/C-001-mission-vision-values.md",
      "canon/C-002-culture.md",
      "canon/C-003-org-structure.md",
      "canon/C-004-glossary.md",
    ];

    for (const filePath of filesToPersonalize) {
      try {
        const { data: fileData } = await octokit.request(
          "GET /repos/{owner}/{repo}/contents/{path}",
          { owner: org, repo: slug, path: filePath }
        );

        const content = Buffer.from(
          (fileData as any).content,
          "base64"
        ).toString("utf-8");

        const updated = content
          .replace(/\{\{COMPANY_NAME\}\}/g, companyName)
          .replace(/\{\{RESPONSIBLE_EMAIL\}\}/g, email)
          .replace(
            /\{\{DEPLOY_DATE\}\}/g,
            new Date().toISOString().split("T")[0]
          );

        await octokit.request(
          "PUT /repos/{owner}/{repo}/contents/{path}",
          {
            owner: org,
            repo: slug,
            path: filePath,
            message: `Personalize ${filePath} for ${companyName}`,
            content: Buffer.from(updated).toString("base64"),
            sha: (fileData as any).sha,
          }
        );
      } catch (e) {
        console.warn(`Skipping ${filePath}:`, e);
      }
    }

    // Trigger agent population (await) — user waits for completion
    const baseUrl = new URL(request.url).origin;
    const populateRes = await fetch(`${baseUrl}/api/populate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, companyName, email }),
    });

    if (!populateRes.ok) {
      const text = await populateRes.text().catch(() => "");
      console.error("Populate failed:", populateRes.status, text);
      return new Response(
        JSON.stringify({ error: "Error poblando el workspace. Inténtalo de nuevo." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const repoUrl = `https://github.com/${org}/${slug}`;

    return new Response(
      JSON.stringify({ success: true, slug, repoUrl }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error: any) {
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
