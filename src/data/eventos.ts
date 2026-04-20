// Fuente de datos de eventos — histórico de eventos a los que asiste Pablo FM / Numen Games

export interface Charla {
  titulo: string;
  ponente: string;
  aprendizaje?: string;
}

export interface Evento {
  id: string;
  nombre: string;
  fecha: string;
  fechaFin?: string;
  ubicacion: string;
  ciudad: string;
  url?: string;
  descripcion: string;
  asistentes: string[];
  charlas?: Charla[];
  aprendizajes?: string[];
  contactos?: string[];
  reflexion?: string;
  estado: "pasado" | "en-curso" | "próximo";
}

export const eventos: Evento[] = [
  {
    id: "codemotion-madrid-2026",
    nombre: "Codemotion Madrid 2026",
    fecha: "2026-04-20",
    fechaFin: "2026-04-21",
    ubicacion: "La Nave, C. Cifuentes 5, Villaverde",
    ciudad: "Madrid",
    url: "https://conferences.codemotion.com/madrid/",
    descripcion:
      "Conferencia de referencia para desarrolladores, líderes tech y visionarios en España. Tracks: IA, backend, frontend, DevOps, quantum computing, cultura tech.",
    asistentes: [
      "Pablo FM",
      "Christian Märtens — Oracle de Numinia, responsable de narrativa y lore",
    ],
    charlas: [],
    aprendizajes: [],
    contactos: [],
    reflexion: undefined,
    estado: "en-curso",
  },
];
