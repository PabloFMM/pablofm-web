import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, f as renderScript, r as renderComponent, w as renderSlot, x as renderHead } from './astro/server_FuGetkE-.mjs';
import 'piccolore';
/* empty css                          */
import 'clsx';

const navItems = [
  { label: "Proyectos", href: "/proyectos", id: "proyectos" },
  { label: "Sobre mí", href: "/sobre-mi", id: "sobre-mi" },
  { label: "Contacto", href: "/contacto", id: "contacto" },
  {
    label: "Numinia",
    id: "numinia",
    children: [
      { label: "Agente", href: "/agente", id: "agente" },
      { label: "Archive", href: "/archive", id: "archive" },
      { label: "Auditoría", href: "/auditoria", id: "auditoria" },
      { label: "CAO", href: "/cao", id: "cao" },
      { label: "Continuidad", href: "/continuidad", id: "continuidad" },
      { label: "Decisiones", href: "/decisiones", id: "decisiones" },
      { label: "Gaps", href: "/gaps", id: "gaps" },
      { label: "Idioma", href: "/idioma", id: "idioma" },
      { label: "Missions", href: "/missions", id: "missions" },
      { label: "Misiones", href: "/misiones", id: "misiones" },
      { label: "NWOS", href: "/nwos", id: "nwos" },
      { label: "Planos", href: "/planos", id: "planos" },
      { label: "Reportes", href: "/reportes", id: "reportes" },
      { label: "Simulaciones", href: "/simulaciones", id: "simulaciones" },
      { label: "Soluciones", href: "/soluciones", id: "soluciones" },
      { label: "Ventas", href: "/ventas", id: "ventas" },
      { label: "Wardley", href: "/wardley", id: "wardley" }
    ]
  }
];

const $$Astro$1 = createAstro("https://pablofm.com");
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navigation;
  const { activeNav } = Astro2.props;
  const numaniaIds = navItems.find((i) => i.id === "numinia")?.children?.map((c) => c.id) ?? [];
  const numaniaActive = numaniaIds.includes(activeNav ?? "");
  return renderTemplate`${maybeRenderHead()}<nav class="sticky top-0 z-50 border-b border-border/50 bg-background/85 backdrop-blur-xl"> <div class="mx-auto flex h-14 max-w-[1100px] items-center justify-between px-6"> <a href="/" class="font-display text-xl text-foreground transition-colors hover:text-accent">
Pablo <em class="text-accent">FM</em> </a> <!-- Desktop nav --> <div class="hidden items-center gap-1 sm:flex"> <a href="/velo"${addAttribute([
    "mr-2 rounded-full border px-4 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.15em] transition-all",
    activeNav === "velo" ? "border-accent bg-accent/10 text-accent" : "border-accent/40 text-accent/80 hover:border-accent hover:bg-accent/10 hover:text-accent"
  ], "class:list")}>
Try NWOS
</a> ${navItems.map((item) => {
    if (item.children) {
      return renderTemplate`<div class="relative" data-dropdown> <button data-dropdown-btn${addAttribute([
        "flex items-center gap-1 rounded-full px-4 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.15em] transition-all",
        numaniaActive ? "border border-accent bg-accent/10 text-accent" : "border border-transparent text-muted-foreground hover:border-border hover:bg-card hover:text-foreground"
      ], "class:list")}> ${item.label} <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-200" data-chevron> <polyline points="6 9 12 15 18 9"></polyline> </svg> </button> <!-- invisible bridge to prevent gap-triggered close --> <div class="absolute right-0 top-full h-3 w-full" data-bridge></div> <!-- Dropdown panel --> <div data-dropdown-panel class="absolute right-0 top-full mt-3 hidden w-48 rounded-xl border border-border bg-background/95 py-2 shadow-xl backdrop-blur-xl"> ${item.children.map((child) => renderTemplate`<a${addAttribute(child.href, "href")}${addAttribute([
        "block px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.15em] transition-colors",
        activeNav === child.id ? "bg-accent/10 text-accent" : "text-muted-foreground hover:bg-card hover:text-foreground"
      ], "class:list")}> ${child.label} </a>`)} </div> </div>`;
    }
    return renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute([
      "rounded-full px-4 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.15em] transition-all",
      activeNav === item.id ? "border border-accent bg-accent/10 text-accent" : "border border-transparent text-muted-foreground hover:border-border hover:bg-card hover:text-foreground"
    ], "class:list")}> ${item.label} </a>`;
  })} </div> <!-- Mobile hamburger --> <button id="mobile-menu-btn" class="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-card hover:text-foreground sm:hidden" aria-label="Abrir menú" aria-expanded="false"> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"> <line x1="3" y1="6" x2="21" y2="6"></line> <line x1="3" y1="12" x2="21" y2="12"></line> <line x1="3" y1="18" x2="21" y2="18"></line> </svg> </button> </div> <!-- Mobile menu --> <div id="mobile-menu" class="hidden border-t border-border/50 bg-background/95 backdrop-blur-xl sm:hidden"> <div class="flex flex-col gap-1 px-6 py-4"> <a href="/velo"${addAttribute([
    "rounded-lg px-4 py-2.5 font-mono text-[0.7rem] uppercase tracking-[0.15em] transition-colors",
    activeNav === "velo" ? "bg-accent/10 text-accent" : "text-accent/80 hover:bg-accent/10 hover:text-accent"
  ], "class:list")}>
Try NWOS
</a> ${navItems.map((item) => {
    if (item.children) {
      return renderTemplate`<div> <div${addAttribute([
        "rounded-lg px-4 py-2.5 font-mono text-[0.7rem] uppercase tracking-[0.15em]",
        numaniaActive ? "text-accent" : "text-muted-foreground"
      ], "class:list")}> ${item.label} </div> <div class="ml-4 flex flex-col gap-1 border-l border-border/50 pl-3"> ${item.children.map((child) => renderTemplate`<a${addAttribute(child.href, "href")}${addAttribute([
        "rounded-lg px-3 py-2 font-mono text-[0.65rem] uppercase tracking-[0.15em] transition-colors",
        activeNav === child.id ? "bg-accent/10 text-accent" : "text-muted-foreground hover:bg-card hover:text-foreground"
      ], "class:list")}> ${child.label} </a>`)} </div> </div>`;
    }
    return renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute([
      "rounded-lg px-4 py-2.5 font-mono text-[0.7rem] uppercase tracking-[0.15em] transition-colors",
      activeNav === item.id ? "bg-accent/10 text-accent" : "text-muted-foreground hover:bg-card hover:text-foreground"
    ], "class:list")}> ${item.label} </a>`;
  })} </div> </div> </nav> ${renderScript($$result, "/home/node/.openclaw/workspace/pablofm-web/src/components/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/node/.openclaw/workspace/pablofm-web/src/components/Navigation.astro", void 0);

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pablofm",
    icon: "linkedin"
  },
  {
    label: "X / Twitter",
    href: "https://x.com/Pablo_FMM",
    icon: "twitter"
  }
];

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="border-t border-border"> <div class="mx-auto max-w-[1100px] px-6 py-12"> <div class="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-start"> <!-- Brand --> <div> <a href="/" class="font-display text-2xl text-foreground">
Pablo <em class="text-accent">FM</em> </a> <p class="mt-2 max-w-xs text-sm text-muted-foreground">
Construyo cosas que conectan personas.
</p> </div> <!-- Nav links --> <div class="flex flex-col gap-2 text-center sm:text-left"> <span class="mb-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-dim">Navegación</span> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="text-sm text-muted-foreground transition-colors hover:text-foreground"> ${item.label} </a>`)} </div> <!-- Social links --> <div class="flex flex-col gap-2 text-center sm:text-left"> <span class="mb-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-dim">Social</span> ${socialLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} target="_blank" rel="noopener noreferrer" class="text-sm text-muted-foreground transition-colors hover:text-accent"> ${link.label} </a>`)} </div> </div> <!-- Copyright --> <div class="mt-12 border-t border-border/50 pt-6 text-center"> <p class="font-mono text-xs text-dim">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Pablo FM. Todos los derechos reservados.
</p> </div> </div> </footer>`;
}, "/home/node/.openclaw/workspace/pablofm-web/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://pablofm.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Pablo FM \u2014 Emprendedor y creador",
    description = "Construyo cosas que conectan personas. Emprendedor, cofundador de Videona, inversor y creador multidisciplinar.",
    canonicalPath = "",
    ogImage,
    activeNav
  } = Astro2.props;
  const siteUrl = "https://pablofm.com";
  const canonical = `${siteUrl}${canonicalPath}`;
  const resolvedOgImage = ogImage ?? `${siteUrl}/og-default.png`;
  return renderTemplate(_a || (_a = __template(['<html lang="es" class="dark"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"', '><meta name="description"', '><meta name="theme-color" content="#050505"><link rel="canonical"', '><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:locale" content="es_ES"><meta property="og:image"', '><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', "><!-- Fonts: Geist (loaded via @fontsource-variable in Layout frontmatter) --><title>", '</title><!-- Umami Analytics \u2014 privacy-first, no cookies --><script defer src="https://analytics.pablofm.com/script.js" data-website-id="3754d1da-a351-42a2-99da-c104b922d958"><\/script>', "", '</head> <body class="relative overflow-x-hidden"> <!-- MMO Starfield background --> <canvas id="starfield" class="pointer-events-none fixed inset-0 -z-20" aria-hidden="true"></canvas> <!-- Subtle accent glow (\xE1mbar/cobre) --> <div class="pointer-events-none fixed inset-0 -z-10 bg-accent-glow" aria-hidden="true"></div> ', ' <main id="main"> ', " </main> ", " <!-- MMO Starfield script \u2014 requestAnimationFrame, zero dependencies --> ", " </body> </html>"])), addAttribute(Astro2.generator, "content"), addAttribute(description, "content"), addAttribute(canonical, "href"), addAttribute(canonical, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(resolvedOgImage, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(resolvedOgImage, "content"), title, renderSlot($$result, $$slots["head"]), renderHead(), renderComponent($$result, "Navigation", $$Navigation, { "activeNav": activeNav }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderScript($$result, "/home/node/.openclaw/workspace/pablofm-web/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"));
}, "/home/node/.openclaw/workspace/pablofm-web/src/layouts/Layout.astro", void 0);

export { $$Layout as $, socialLinks as s };
