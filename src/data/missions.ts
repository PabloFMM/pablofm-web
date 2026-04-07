// missions.ts — reads directly from numinia-digital-agents repo at build time
// Source of truth: ../numinia-digital-agents/missions/**/*.md
// Falls back to static data if repo not available (e.g. Vercel CI without submodule)

import fs from "node:fs";
import path from "node:path";

export type MissionStatus = "todo" | "in-progress" | "in-review" | "done" | "freeze" | "cancelled";
export type MissionPriority = "critical" | "high" | "medium" | "low";
export type MissionType = "biological" | "digital" | "hybrid";
export type MissionEffort = "XS" | "S" | "M" | "L" | "XL";
export type MissionGuild = "Sentinels" | "Alchemists" | "Exegetes" | "Procurators";

export interface Mission {
  id: string;
  title: string;
  area: string;
  guild: MissionGuild;
  type: MissionType;
  priority: MissionPriority;
  effort: MissionEffort;
  status: MissionStatus;
  hasDetail?: boolean;
  assignedTo?: string;
  parentMission?: string;
  subMissions?: string[];
  started?: string;
  completed?: string;
  freezeReason?: string;
  // Costs — mock until MIS-048
  humanCostEur: number;
  computeCostEur: number | null;
}

// Human cost estimate: effort × rate (€65/h avg freelancer)
const HUMAN_COST: Record<MissionEffort, number> = { XS: 130, S: 520, M: 1560, L: 3900, XL: 7800 };
// Compute mock estimate (digital/hybrid — biological = null)
const COMPUTE_MOCK: Record<MissionEffort, number> = { XS: 0.5, S: 1.5, M: 4, L: 10, XL: 25 };

// ── YAML frontmatter parser (no deps needed — simple regex) ──────────────────
function parseFrontmatter(content: string): Record<string, string> {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const result: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    let val = line.slice(colonIdx + 1).trim();
    // Remove surrounding quotes
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    result[key] = val;
  }
  return result;
}

// ── Normalize values from repo frontmatter → typed fields ───────────────────
function normalizeStatus(v: string): MissionStatus {
  const map: Record<string, MissionStatus> = {
    "todo": "todo", "en-curso": "in-progress", "in-progress": "in-progress",
    "active": "in-progress", "en-revision": "in-review", "in-review": "in-review",
    "revision": "in-review", "done": "done", "freeze": "freeze", "frozen": "freeze",
    "cancelled": "cancelled", "backlog": "todo",
  };
  return map[v?.toLowerCase()] ?? "todo";
}

function normalizePriority(v: string): MissionPriority {
  const map: Record<string, MissionPriority> = {
    "critical": "critical", "crítica": "critical", "critica": "critical",
    "high": "high", "alta": "high",
    "medium": "medium", "media": "medium",
    "low": "low", "baja": "low",
  };
  return map[v?.toLowerCase()] ?? "medium";
}

function normalizeType(v: string): MissionType {
  const map: Record<string, MissionType> = {
    "digital": "digital", "biological": "biological",
    "biológico": "biological", "biologico": "biological",
    "hybrid": "hybrid", "híbrido": "hybrid", "hibrido": "hybrid",
  };
  return map[v?.toLowerCase()] ?? "hybrid";
}

function normalizeEffort(v: string): MissionEffort {
  const valid = ["XS", "S", "M", "L", "XL"];
  return (valid.includes(v?.toUpperCase()) ? v.toUpperCase() : "M") as MissionEffort;
}

function normalizeGuild(v: string): MissionGuild {
  const map: Record<string, MissionGuild> = {
    "sentinels": "Sentinels", "centinelas": "Sentinels",
    "alchemists": "Alchemists", "alquimistas": "Alchemists",
    "exegetes": "Exegetes", "exegetas": "Exegetes",
    "procurators": "Procurators", "procuradores": "Procurators",
  };
  return map[v?.toLowerCase()] ?? "Sentinels";
}

// ── Read .md files from a folder ─────────────────────────────────────────────
function readMissionsFromFolder(folderPath: string, status: MissionStatus): Mission[] {
  if (!fs.existsSync(folderPath)) return [];
  const files = fs.readdirSync(folderPath).filter(f => f.endsWith(".md") && f !== "TEMPLATE.md");
  const missions: Mission[] = [];

  for (const file of files) {
    try {
      const content = fs.readFileSync(path.join(folderPath, file), "utf-8");
      const fm = parseFrontmatter(content);

      const id = fm.id?.replace(/^"/, "").replace(/"$/, "") || file.replace(/\.md$/, "").split("-").slice(0, 2).join("-").toUpperCase();
      if (!id.startsWith("MIS-")) continue;

      // Normalize ID to 3-digit format (MIS-037 not MIS-00037)
      const normalizedId = id.replace(/^MIS-0+(\d{1,3})$/, "MIS-$1").replace(/^MIS-(\d)$/, "MIS-00$1").replace(/^MIS-(\d{2})$/, "MIS-0$1");

      const rawStatus = fm.status || status;
      const finalStatus = normalizeStatus(rawStatus);
      const effort = normalizeEffort(fm.effort);
      const type = normalizeType(fm.tipo || fm.type);

      const mission: Mission = {
        id: normalizedId,
        title: fm.title || fm.titulo || normalizedId,
        area: fm.area || "CAO",
        guild: normalizeGuild(fm.guild),
        type,
        priority: normalizePriority(fm.priority || fm.prioridad),
        effort,
        status: finalStatus,
        assignedTo: fm.assigned_to || fm.assignedTo || undefined,
        parentMission: fm.parent_mission || undefined,
        started: fm.started || undefined,
        completed: fm.completed || undefined,
        freezeReason: fm.freeze_reason || undefined,
        humanCostEur: HUMAN_COST[effort],
        computeCostEur: type === "biological" ? null : COMPUTE_MOCK[effort],
      };

      missions.push(mission);
    } catch {
      // skip malformed files
    }
  }

  return missions;
}

// ── IDs that have a detail page in /misiones/[id] ───────────────────────────
const DETAIL_IDS = new Set([
  "MIS-016", "MIS-037", "MIS-051", "MIS-053", "MIS-052", "MIS-054", "MIS-055",
]);

// ── Main loader ──────────────────────────────────────────────────────────────
function loadMissions(): Mission[] {
  const repoBase = path.resolve(
    import.meta.dirname ?? path.dirname(new URL(import.meta.url).pathname),
    "../../..",
    "numinia-digital-agents/missions"
  );

  const folders: [string, MissionStatus][] = [
    [path.join(repoBase, "queue"),   "todo"],
    [path.join(repoBase, "active"),  "in-progress"],
    [path.join(repoBase, "review"),  "in-review"],
    [path.join(repoBase, "done"),    "done"],
    [path.join(repoBase, "freeze"),  "freeze"],
    // Legacy fallback
    [path.join(repoBase, "backlog"), "todo"],
  ];

  const seen = new Set<string>();
  const all: Mission[] = [];

  for (const [folder, status] of folders) {
    const batch = readMissionsFromFolder(folder, status);
    for (const m of batch) {
      if (!seen.has(m.id)) {
        seen.add(m.id);
        all.push({ ...m, hasDetail: DETAIL_IDS.has(m.id) });
      }
    }
  }

  // Sort by ID number
  all.sort((a, b) => {
    const na = parseInt(a.id.replace("MIS-", ""), 10);
    const nb = parseInt(b.id.replace("MIS-", ""), 10);
    return na - nb;
  });

  return all;
}

export const missions: Mission[] = loadMissions();

// ── Display helpers ──────────────────────────────────────────────────────────

export const PRIORITY_ORDER: Record<MissionPriority, number> = {
  critical: 0, high: 1, medium: 2, low: 3,
};

export const PRIORITY_COLOR: Record<MissionPriority, string> = {
  critical: "bg-red/10 text-red",
  high: "bg-accent/10 text-accent",
  medium: "bg-yellow/10 text-yellow",
  low: "bg-green/10 text-green-400",
};

export const PRIORITY_ICON: Record<MissionPriority, string> = {
  critical: "🔴", high: "🟠", medium: "🟡", low: "🟢",
};

export const TYPE_ICON: Record<MissionType, string> = {
  biological: "🧬", digital: "🤖", hybrid: "🔀",
};

export const STATUS_LABEL: Record<MissionStatus, string> = {
  "todo": "To Do",
  "in-progress": "In Progress",
  "in-review": "In Review",
  "done": "Done",
  "freeze": "Freeze",
  "cancelled": "Cancelled",
};

export const STATUS_COLOR: Record<MissionStatus, string> = {
  "todo": "border-border bg-card",
  "in-progress": "border-accent/20 bg-accent/5",
  "in-review": "border-yellow/20 bg-yellow/5",
  "done": "border-green/20 bg-green/5",
  "freeze": "border-dim/20 bg-dim/5",
  "cancelled": "border-dim/10 bg-dim/5 opacity-50",
};

export const STATUS_ID_COLOR: Record<MissionStatus, string> = {
  "todo": "text-dim",
  "in-progress": "text-accent",
  "in-review": "text-yellow",
  "done": "text-green-400",
  "freeze": "text-dim",
  "cancelled": "text-dim",
};

export const GUILDS = ["Sentinels", "Alchemists", "Exegetes", "Procurators"] as const;
export const AREAS = [...new Set(missions.map(m => m.area))].sort();
