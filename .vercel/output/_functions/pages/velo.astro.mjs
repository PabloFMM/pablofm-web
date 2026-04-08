/* empty css                                  */
import { c as createComponent, r as renderComponent, f as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_FuGetkE-.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_UQBdr0Sa.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                                */
export { renderers } from '../renderers.mjs';

function DeployForm() {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  async function handleDeploy() {
    if (!companyName || !email || !acceptedTerms) return;
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ companyName, email, acceptedTerms })
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Error desconocido");
        return;
      }
      setStatus("success");
      setResult(data);
    } catch (e) {
      setStatus("error");
      setErrorMsg("Error de conexión. Inténtalo de nuevo.");
    }
  }
  if (status === "success" && result) {
    return /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-md space-y-6 text-center", children: /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-green-500/30 bg-green-500/10 p-8", children: [
      /* @__PURE__ */ jsx("p", { className: "font-mono text-[0.7rem] uppercase tracking-[0.2em] text-green-400", children: "Workspace deployed" }),
      /* @__PURE__ */ jsx("h3", { className: "mt-3 font-display text-2xl text-foreground", children: result.slug }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Tu workspace está listo en GitHub." }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: result.repoUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-accent/90",
          children: "Abrir workspace →"
        }
      )
    ] }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-md space-y-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsx("label", { className: "block font-mono text-[0.7rem] uppercase tracking-[0.15em] text-dim", children: "Nombre de la organización" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          value: companyName,
          onChange: (e) => setCompanyName(e.target.value),
          placeholder: "Acme Corp",
          disabled: status === "loading",
          className: "w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-dim transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsx("label", { className: "block font-mono text-[0.7rem] uppercase tracking-[0.15em] text-dim", children: "Email del responsable" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          value: email,
          onChange: (e) => setEmail(e.target.value),
          placeholder: "ceo@acme.com",
          disabled: status === "loading",
          className: "w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-dim transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("label", { className: "flex items-start gap-3 cursor-pointer", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "checkbox",
          checked: acceptedTerms,
          onChange: (e) => setAcceptedTerms(e.target.checked),
          disabled: status === "loading",
          className: "mt-0.5 h-4 w-4 rounded border-border bg-card accent-accent disabled:opacity-50"
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground leading-relaxed", children: "Acepto los términos y condiciones del despliegue del workspace NWOS." })
    ] }),
    status === "error" && /* @__PURE__ */ jsx("div", { className: "rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400", children: errorMsg }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleDeploy,
        disabled: !companyName || !email || !acceptedTerms || status === "loading",
        className: "w-full rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed",
        children: status === "loading" ? /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block h-4 w-4 animate-spin rounded-full border-2 border-background/30 border-t-background" }),
          "Desplegando workspace..."
        ] }) : "Deploy Workspace"
      }
    )
  ] });
}

const prerender = false;
const $$Velo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "El Velo \u2014 NWOS", "activeNav": "velo", "data-astro-cid-xwhd2h6r": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="velo-hero" data-astro-cid-xwhd2h6r> <canvas id="stardust" class="absolute inset-0 h-full w-full" data-astro-cid-xwhd2h6r></canvas> <div class="relative z-10 flex flex-col items-center gap-8 text-center px-6" data-astro-cid-xwhd2h6r> <p class="font-mono text-[0.75rem] uppercase tracking-[0.2em] text-accent/80" data-astro-cid-xwhd2h6r>
NWOS · Numen Workspace OS
</p> <p class="velo-cta" data-astro-cid-xwhd2h6r>
Cruza el umbral donde tu organización despierta.
</p> <p class="max-w-md text-sm text-muted-foreground leading-relaxed" data-astro-cid-xwhd2h6r>
Despliega el workspace de documentación de tu organización en segundos.
        Un click, sistema completo con agentes IA.
</p> <a href="#deploy" class="velo-btn" data-astro-cid-xwhd2h6r>
Desplegar workspace ↓
</a> </div> </div>  <section id="deploy" class="py-20 border-t border-border/40" data-astro-cid-xwhd2h6r> <div class="mx-auto max-w-[1100px] px-6" data-astro-cid-xwhd2h6r> <div class="text-center mb-10" data-astro-cid-xwhd2h6r> <p class="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent mb-3" data-astro-cid-xwhd2h6r>
Iteración 1
</p> <h2 class="font-display text-3xl sm:text-4xl text-foreground mb-3" data-astro-cid-xwhd2h6r>
Deploy Workspace
</h2> <p class="text-sm text-muted-foreground max-w-sm mx-auto" data-astro-cid-xwhd2h6r>
Crea un repositorio GitHub con toda la estructura documental de tu organización, listo para que los agentes lo pueblen.
</p> </div> ${renderComponent($$result2, "DeployForm", DeployForm, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/DeployForm", "client:component-export": "default", "data-astro-cid-xwhd2h6r": true })} </div> </section> ` })}  ${renderScript($$result, "/home/node/.openclaw/workspace/pablofm-web/src/pages/velo.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/node/.openclaw/workspace/pablofm-web/src/pages/velo.astro", void 0);

const $$file = "/home/node/.openclaw/workspace/pablofm-web/src/pages/velo.astro";
const $$url = "/velo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Velo,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
