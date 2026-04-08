import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_11EGoKql.mjs';
import { manifest } from './manifest_DVDRbMQ4.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/agente.astro.mjs');
const _page2 = () => import('./pages/api/registro.astro.mjs');
const _page3 = () => import('./pages/archive/_fondo_.astro.mjs');
const _page4 = () => import('./pages/archive.astro.mjs');
const _page5 = () => import('./pages/auditoria.astro.mjs');
const _page6 = () => import('./pages/cao.astro.mjs');
const _page7 = () => import('./pages/contacto.astro.mjs');
const _page8 = () => import('./pages/continuidad.astro.mjs');
const _page9 = () => import('./pages/decisiones/_id_.astro.mjs');
const _page10 = () => import('./pages/decisiones.astro.mjs');
const _page11 = () => import('./pages/gaps.astro.mjs');
const _page12 = () => import('./pages/idioma.astro.mjs');
const _page13 = () => import('./pages/misiones/_id_.astro.mjs');
const _page14 = () => import('./pages/misiones.astro.mjs');
const _page15 = () => import('./pages/missions/_id_.astro.mjs');
const _page16 = () => import('./pages/missions.astro.mjs');
const _page17 = () => import('./pages/nwos.astro.mjs');
const _page18 = () => import('./pages/openclaw-test.astro.mjs');
const _page19 = () => import('./pages/planos/meta.astro.mjs');
const _page20 = () => import('./pages/planos/_id_.astro.mjs');
const _page21 = () => import('./pages/planos.astro.mjs');
const _page22 = () => import('./pages/proyectos.astro.mjs');
const _page23 = () => import('./pages/reportes/diario-2026-04-02.astro.mjs');
const _page24 = () => import('./pages/reportes/diario-2026-04-03.astro.mjs');
const _page25 = () => import('./pages/reportes/diario-2026-04-05.astro.mjs');
const _page26 = () => import('./pages/reportes/diario-2026-04-06.astro.mjs');
const _page27 = () => import('./pages/reportes/diario-2026-04-07.astro.mjs');
const _page28 = () => import('./pages/reportes.astro.mjs');
const _page29 = () => import('./pages/simulaciones.astro.mjs');
const _page30 = () => import('./pages/sobre-mi.astro.mjs');
const _page31 = () => import('./pages/soluciones.astro.mjs');
const _page32 = () => import('./pages/velo.astro.mjs');
const _page33 = () => import('./pages/ventas.astro.mjs');
const _page34 = () => import('./pages/wardley.astro.mjs');
const _page35 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/agente.astro", _page1],
    ["src/pages/api/registro.ts", _page2],
    ["src/pages/archive/[fondo].astro", _page3],
    ["src/pages/archive/index.astro", _page4],
    ["src/pages/auditoria.astro", _page5],
    ["src/pages/cao.astro", _page6],
    ["src/pages/contacto.astro", _page7],
    ["src/pages/continuidad.astro", _page8],
    ["src/pages/decisiones/[id].astro", _page9],
    ["src/pages/decisiones.astro", _page10],
    ["src/pages/gaps.astro", _page11],
    ["src/pages/idioma.astro", _page12],
    ["src/pages/misiones/[id].astro", _page13],
    ["src/pages/misiones.astro", _page14],
    ["src/pages/missions/[id].astro", _page15],
    ["src/pages/missions.astro", _page16],
    ["src/pages/nwos.astro", _page17],
    ["src/pages/openclaw-test.astro", _page18],
    ["src/pages/planos/meta.astro", _page19],
    ["src/pages/planos/[id].astro", _page20],
    ["src/pages/planos.astro", _page21],
    ["src/pages/proyectos.astro", _page22],
    ["src/pages/reportes/diario-2026-04-02.astro", _page23],
    ["src/pages/reportes/diario-2026-04-03.astro", _page24],
    ["src/pages/reportes/diario-2026-04-05.astro", _page25],
    ["src/pages/reportes/diario-2026-04-06.astro", _page26],
    ["src/pages/reportes/diario-2026-04-07.astro", _page27],
    ["src/pages/reportes.astro", _page28],
    ["src/pages/simulaciones.astro", _page29],
    ["src/pages/sobre-mi.astro", _page30],
    ["src/pages/soluciones.astro", _page31],
    ["src/pages/velo.astro", _page32],
    ["src/pages/ventas.astro", _page33],
    ["src/pages/wardley.astro", _page34],
    ["src/pages/index.astro", _page35]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "005dfb4c-e8f8-4c6d-9e17-6d646ca202d1",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
