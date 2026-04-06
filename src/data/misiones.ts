// Fuente de datos de misiones — futura: GitHub API de numinia-agents
// Por ahora: datos completos inline

export interface Mision {
  id: string;
  titulo: string;
  area: string;
  gremio: string;
  tipo: "biológico" | "digital" | "híbrido";
  prioridad: "crítica" | "alta" | "media" | "baja";
  esfuerzo: "XS" | "S" | "M" | "L" | "XL";
  estado: "backlog" | "en-curso" | "revision" | "done";
  historia: string;
  criterios: string[];
  epistemico: string;
  pragmatico: string;
}

export const misiones: Mision[] = [
  {
    id: "MIS-001", titulo: "Definir el MVP de Numinia en una página",
    area: "Producto", gremio: "Alquimistas", tipo: "biológico", prioridad: "crítica", esfuerzo: "S", estado: "backlog",
    historia: "Como fundador, quiero un documento de una página que defina exactamente qué es Numinia MVP, para que todos los Oráculos trabajen sobre el mismo modelo mental.",
    criterios: ["Documento ≤1 página: qué hace, quién lo usa, qué problema resuelve, qué NO incluye el MVP", "Aprobado por los 4 Oráculos", "Publicado como MVP.md en el repositorio"],
    epistemico: "Sabemos si hay consenso real o divergencia oculta entre fundadores.",
    pragmatico: "Elimina conversaciones circulares. Todo el trabajo posterior tiene referencia única."
  },
  {
    id: "MIS-002", titulo: "Mapa de usuario: quién paga y por qué",
    area: "Producto", gremio: "Exegetas", tipo: "biológico", prioridad: "crítica", esfuerzo: "S", estado: "backlog",
    historia: "Como equipo, quiero identificar los 3 perfiles de usuario más probables que pagarían por Numinia hoy, para diseñar el producto hacia demanda real.",
    criterios: ["3 fichas de usuario con: descripción, dolor principal, disposición a pagar, canal de acceso", "Al menos 2 fichas validadas con conversación real", "Fichas enlazadas desde MVP.md"],
    epistemico: "Aprendemos si el ICP es B2B, B2C o una mezcla.",
    pragmatico: "Decisiones de diseño ancladas en personas reales."
  },
  {
    id: "MIS-003", titulo: "Prototipo navegable de Numinia",
    area: "Producto", gremio: "Alquimistas", tipo: "híbrido", prioridad: "crítica", esfuerzo: "M", estado: "backlog",
    historia: "Como potencial cliente, quiero ver y tocar cómo funciona Numinia, para decidir si vale mi tiempo y dinero.",
    criterios: ["Prototipo en Figma con ≥5 pantallas clave", "Flujo completo: entrada → experiencia central → salida/valor", "Usado en al menos 3 sesiones de validación con externos"],
    epistemico: "Sabemos qué confunde o emociona antes de escribir código.",
    pragmatico: "Herramienta de venta y captación de inversión lista en días."
  },
  {
    id: "MIS-004", titulo: "Definir el modelo de monetización v1",
    area: "Producto", gremio: "Procuradores", tipo: "biológico", prioridad: "crítica", esfuerzo: "S", estado: "backlog",
    historia: "Como fundador, quiero un modelo de monetización claro para Numinia v1, para poder hablar de dinero con clientes desde el primer día.",
    criterios: ["Máximo 2 modelos de precio definidos", "Precio tentativo con justificación (benchmarks)", "Documento PRICING.md en el repositorio"],
    epistemico: "Aprendemos si el mercado valida precios en conversaciones reales.",
    pragmatico: "Se puede cobrar. Sin modelo, no hay ingresos."
  },
  {
    id: "MIS-005", titulo: "Landing page de Numinia con captura de leads",
    area: "Producto", gremio: "Alquimistas", tipo: "híbrido", prioridad: "crítica", esfuerzo: "M", estado: "backlog",
    historia: "Como equipo, quiero una landing que capture emails de interesados, para construir lista de espera antes del lanzamiento.",
    criterios: ["Landing en numengames.com/numinia", "Formulario conectado a lista de email", "Propuesta de valor clara en ≤10 segundos", "Tracking Umami activo", "50 emails en primeros 30 días"],
    epistemico: "Medimos interés real antes de construir el producto completo.",
    pragmatico: "Lista de espera = audiencia para lanzamiento + prueba social."
  },
  {
    id: "MIS-016", titulo: "Nginx + SSL para todos los servicios del servidor",
    area: "Infraestructura", gremio: "Centinelas", tipo: "digital", prioridad: "crítica", esfuerzo: "M", estado: "done",
    historia: "Como operador, quiero todos los servicios accesibles via HTTPS con subdominios propios, para que nada sea accesible por IP:puerto.",
    criterios: ["Nginx instalado como reverse proxy", "SSL via Let's Encrypt para analytics.pablofm.com y cal.pablofm.com", "Puertos 3001/3002 cerrados externamente", "Renovación SSL automática"],
    epistemico: "Revela la madurez real de la infraestructura actual.",
    pragmatico: "Infraestructura profesional. Los links son compartibles."
  },
  {
    id: "MIS-017", titulo: "Pipeline de Prospección B2B (50 leads)",
    area: "Ventas", gremio: "Procuradores", tipo: "híbrido", prioridad: "crítica", esfuerzo: "M", estado: "backlog",
    historia: "Como Pablo, quiero una lista de 50 prospectos calificados con contactos directos, para iniciar conversaciones de venta esta semana.",
    criterios: ["50 prospectos en CRM: nombre, empresa, email, LinkedIn, pain point", "Segmentados por vertical: estudios indie, publishers, DAOs gaming", "Al menos 10 con conexión directa en LinkedIn", "Template de primer contacto aprobado"],
    epistemico: "Mapea el espacio de compradores reales antes de optimizar el pitch.",
    pragmatico: "Sin pipeline no hay ventas."
  },
  {
    id: "MIS-018", titulo: "Propuesta de Valor Comercial (One-Pager)",
    area: "Ventas", gremio: "Exegetas", tipo: "digital", prioridad: "crítica", esfuerzo: "S", estado: "backlog",
    historia: "Como prospecto, quiero entender en 30 segundos qué hace Numen Games, para decidir si vale continuar la conversación.",
    criterios: ["One-pager con: problema, solución, diferenciador, tracción, CTA", "Versión corta (tweet) y extendida (email)", "Revisado por Oráculo no-técnico para validar claridad"],
    epistemico: "Fuerza la articulación honesta del diferenciador antes de salir a vender.",
    pragmatico: "Reduce fricción en cada conversación comercial."
  },
  {
    id: "MIS-019", titulo: "Outreach secuencial a 20 prospectos",
    area: "Ventas", gremio: "Procuradores", tipo: "híbrido", prioridad: "crítica", esfuerzo: "M", estado: "backlog",
    historia: "Como equipo de ventas, quiero ejecutar una secuencia de 3 toques a 20 prospectos, para conseguir al menos 5 calls agendadas esta quincena.",
    criterios: ["Secuencia: toque 1 (email/DM), toque 2 (+3 días), toque 3 (+7 días)", "20 prospectos contactados con mensaje personalizado", "Tracker diario con estado", "Mínimo 5 respuestas positivas o calls agendadas"],
    epistemico: "Mide tasa de respuesta real y valida el pitch.",
    pragmatico: "Objetivo directo: reuniones que pueden convertirse en contratos."
  },
  {
    id: "MIS-027", titulo: "Mejora de numengames.com",
    area: "Contenido", gremio: "Alquimistas", tipo: "digital", prioridad: "crítica", esfuerzo: "M", estado: "backlog",
    historia: "Como visitante, quiero entender en 5 segundos qué es Numen Games, para decidir si contactar o explorar más.",
    criterios: ["Hero section con propuesta de valor clara, sin jerga", "Servicios visibles en primera pantalla", "CTA principal funcionando", "Tiempo de carga <3s en mobile", "SEO básico: title tags, meta descriptions, og:image"],
    epistemico: "Una web confusa es señal de que el posicionamiento interno tampoco está claro.",
    pragmatico: "Aumenta conversión orgánica."
  },
  {
    id: "MIS-031", titulo: "Revisión final del Grant Arbitrum",
    area: "Financiación", gremio: "Procuradores", tipo: "digital", prioridad: "crítica", esfuerzo: "M", estado: "backlog",
    historia: "Como fundador, quiero revisar y cerrar el borrador del grant Arbitrum, para enviarlo en el próximo ciclo de evaluación.",
    criterios: ["Marcar secciones incompletas y completarlas", "Verificar presupuesto consistente con roadmap", "Revisión interna de al menos un Oráculo", "Enviar via portal oficial Arbitrum Grants"],
    epistemico: "Clarifica la propuesta de valor de Numen Games dentro del ecosistema blockchain.",
    pragmatico: "Primera fuente de financiación externa sin dilución de equity."
  },
  {
    id: "MIS-037", titulo: "Crear repositorio numinia-agents",
    area: "CAO", gremio: "Centinelas", tipo: "digital", prioridad: "crítica", esfuerzo: "M", estado: "backlog",
    historia: "Como coordinador CAO, quiero inicializar el repositorio numinia-agents, para tener la fuente de verdad del sistema de agentes.",
    criterios: ["Repo creado con estructura: /agents, /missions, /logs, /protocols, /docs", "README.md inicial con propósito y arquitectura", "Licencia CC0 y .gitignore configurados", "Branch protection rules activadas"],
    epistemico: "Establece el espacio de conocimiento canónico de la inteligencia operativa de Numen Games.",
    pragmatico: "Sin repositorio no hay colaboración ni historial."
  },
  {
    id: "MIS-038", titulo: "Diseñar Briefing Protocol v1.0",
    area: "CAO", gremio: "Centinelas", tipo: "digital", prioridad: "crítica", esfuerzo: "M", estado: "backlog",
    historia: "Como coordinador CAO, quiero un protocolo estándar de briefing para activar agentes, para que cada sesión comience con contexto suficiente.",
    criterios: ["Documentado en protocols/briefing-v1.md", "Define: estructura mínima, archivos a leer, orden de inicialización", "Plantilla con variables reemplazables", "Probado en sesión real con tiempo <3 minutos"],
    epistemico: "Hace explícito qué información es realmente crítica para que un agente funcione.",
    pragmatico: "Reduce tiempo muerto al inicio de cada sesión."
  },
  {
    id: "MIS-044", titulo: "GAPS.md — Mapa de carencias de Numen Games",
    area: "Documentación", gremio: "Procuradores", tipo: "híbrido", prioridad: "crítica", esfuerzo: "S", estado: "backlog",
    historia: "Como equipo, quiero un documento estructurado de carencias actuales, para tomar decisiones informadas sobre prioridades.",
    criterios: ["Carencias documentadas por área: dinero, técnica, equipo, producto, comercial", "Cada carencia: descripción, impacto, solución propuesta, prioridad", "Revisado con Pablo en sesión dedicada", "Publicado como GAPS.md"],
    epistemico: "Sin mapa de carencias, los recursos se asignan a lo urgente pero no a lo importante.",
    pragmatico: "Base para decisiones estratégicas de Q2."
  },
  {
    id: "MIS-048", titulo: "Sistema de costes por agente",
    area: "Operaciones", gremio: "Centinelas", tipo: "digital", prioridad: "crítica", esfuerzo: "M", estado: "backlog",
    historia: "Como Pablo, quiero saber exactamente cuánto gasta cada agente por día y por misión, para optimizar costes y justificar la inversión.",
    criterios: ["API de Anthropic conectada para datos de uso real", "Coste por misión registrado en logs", "Coste diario visible en reporte de las 8am", "Dashboard /cao actualizado con coste real"],
    epistemico: "Sin datos de coste reales, no se puede optimizar.",
    pragmatico: "Diferencia entre gasto controlado y gasto opaco."
  },
  {
    id: "MIS-051", titulo: "Integración Gmail, Calendar y Drive con gog",
    area: "CAO", gremio: "Centinelas", tipo: "digital", prioridad: "crítica", esfuerzo: "M", estado: "done",
    historia: "Como agente CAO, quiero acceso a Gmail, Calendar y Drive de Numen Games, para gestionar comunicaciones, reuniones y documentos de forma autónoma.",
    criterios: ["gog instalado y autenticado con khepri@ai.numengames.com", "Gmail: leer, enviar y responder emails", "Calendar: crear eventos con invitados", "Drive: listar y buscar archivos", "GOG_KEYRING_PASSWORD configurada en OpenClaw"],
    epistemico: "Valida que los agentes digitales pueden actuar en el mundo real, no solo en código.",
    pragmatico: "Nimrod puede enviar emails, convocar reuniones y gestionar documentos sin intervención humana."
  },
  {
    id: "MIS-052", titulo: "Infraestructura on-premises — PC dedicado",
    area: "Infraestructura", gremio: "Centinelas", tipo: "digital", prioridad: "alta", esfuerzo: "L", estado: "en-curso",
    historia: "Como operador, quiero un PC dedicado on-premises con Ubuntu 24.04 y Ollama, para reducir costes de inferencia en un 60-70% ejecutando modelos locales.",
    criterios: ["Ubuntu 24.04 LTS instalado en Ryzen 9 7950X + RTX 4080", "NVIDIA drivers + CUDA configurados", "Ollama instalado con Mistral 7B, Qwen2.5 14B", "OpenClaw conectado al nodo local", "Migración de servicios del servidor VPS"],
    epistemico: "Determina qué modelos caben en 16 GB VRAM y qué tareas pueden migrar a local.",
    pragmatico: "Reducción drástica de coste mensual en API de Anthropic."
  },
  {
    id: "MIS-053", titulo: "Khepri — Email de Numen Games operativo",
    area: "CAO", gremio: "Centinelas", tipo: "digital", prioridad: "alta", esfuerzo: "S", estado: "done",
    historia: "Como Nimrod, quiero que khepri@ai.numengames.com sea una identidad digital real y operativa, para que los agentes puedan comunicarse profesionalmente en nombre de Numen Games.",
    criterios: ["Cuenta khepri@ai.numengames.com creada en Google Workspace", "gog autenticado con Gmail, Calendar y Drive", "Primer email enviado a externo (cberuete@gmail.com)", "Primera invitación de calendario creada con asistentes externos", "Identidad con nombre y firma: Nimrod, Guardián de las Puertas"],
    epistemico: "Los agentes digitales necesitan identidad verificable para actuar en el mundo.",
    pragmatico: "Canal de comunicación profesional para la CAO sin coste adicional de herramientas."
  },
];
