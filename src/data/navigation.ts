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
      { label: "NWOS", href: "/nwos", id: "nwos" },
      { label: "CAO", href: "/cao", id: "cao" },
      { label: "Misiones", href: "/misiones", id: "misiones" },
      { label: "Archive", href: "/archive", id: "archive" },
      { label: "Planos", href: "/planos", id: "planos" },
      { label: "Decisiones", href: "/decisiones", id: "decisiones" },
      { label: "Reportes", href: "/reportes", id: "reportes" },
      { label: "Gaps", href: "/gaps", id: "gaps" },
      { label: "Soluciones", href: "/soluciones", id: "soluciones" },
    ],
  },
];
