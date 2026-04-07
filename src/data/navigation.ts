export type NavChild = {
  label: string;
  href: string;
  id: string;
};

export type NavItem =
  | { label: string; href: string; id: string; children?: never }
  | { label: string; href?: never; id: string; children: NavChild[] };

export const navItems: NavItem[] = [
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
      { label: "Wardley", href: "/wardley", id: "wardley" },
    ],
  },
];
