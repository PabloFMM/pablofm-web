import { useState } from "react";

export default function DeployForm() {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [result, setResult] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleDeploy() {
    if (!companyName || !email || !acceptedTerms) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ companyName, email, acceptedTerms }),
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

  // ── Success state ──
  if (status === "success" && result) {
    return (
      <div className="mx-auto max-w-md space-y-6 text-center">
        <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-8">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-green-400">
            Workspace deployed
          </p>
          <h3 className="mt-3 font-display text-2xl text-foreground">
            {result.slug}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Tu workspace está listo en GitHub.
          </p>
          <a
            href={result.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-accent/90"
          >
            Abrir workspace →
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            An AI agent is now researching your company and populating the workspace. Check the
            STATUS.md file in your repo for progress.
          </p>
        </div>
      </div>
    );
  }

  // ── Form state ──
  return (
    <div className="mx-auto max-w-md space-y-5">
      {/* Company name */}
      <div className="space-y-1.5">
        <label className="block font-mono text-[0.7rem] uppercase tracking-[0.15em] text-dim">
          Nombre de la organización
        </label>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Acme Corp"
          disabled={status === "loading"}
          className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-dim transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50"
        />
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label className="block font-mono text-[0.7rem] uppercase tracking-[0.15em] text-dim">
          Email del responsable
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ceo@acme.com"
          disabled={status === "loading"}
          className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-dim transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50"
        />
      </div>

      {/* Terms */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={acceptedTerms}
          onChange={(e) => setAcceptedTerms(e.target.checked)}
          disabled={status === "loading"}
          className="mt-0.5 h-4 w-4 rounded border-border bg-card accent-accent disabled:opacity-50"
        />
        <span className="text-sm text-muted-foreground leading-relaxed">
          Acepto los términos y condiciones del despliegue del workspace NWOS.
        </span>
      </label>

      {/* Error */}
      {status === "error" && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
          {errorMsg}
        </div>
      )}

      {/* Submit */}
      <button
        onClick={handleDeploy}
        disabled={!companyName || !email || !acceptedTerms || status === "loading"}
        className="w-full rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-background/30 border-t-background" />
            Desplegando workspace...
          </span>
        ) : (
          "Deploy Workspace"
        )}
      </button>
    </div>
  );
}
