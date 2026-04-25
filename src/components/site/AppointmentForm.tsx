import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  telefone: z
    .string()
    .trim()
    .min(8, "Informe um telefone válido")
    .max(20, "Telefone muito longo"),
  motivo: z.string().trim().min(3, "Conte um pouco sobre sua queixa").max(500),
});

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse({
      nome: fd.get("nome"),
      telefone: fd.get("telefone"),
      motivo: fd.get("motivo"),
    });

    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) {
        next[String(issue.path[0])] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setSubmitted(true);
    toast.success("Solicitação enviada! Em breve entraremos em contato.");
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-card">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-soft">
          <CheckCircle2 className="h-7 w-7 text-primary" />
        </div>
        <h3 className="font-display text-2xl">Recebemos sua solicitação</h3>
        <p className="mt-2 text-muted-foreground">
          Em breve entramos em contato para confirmar sua avaliação.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-card space-y-5"
    >
      <Field label="Nome" name="nome" placeholder="Seu nome completo" error={errors.nome} />
      <Field
        label="Telefone"
        name="telefone"
        type="tel"
        placeholder="(14) 99999-9999"
        error={errors.telefone}
      />
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Motivo da consulta</label>
        <textarea
          name="motivo"
          rows={4}
          maxLength={500}
          placeholder="Conte brevemente sua queixa ou objetivo"
          className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
        />
        {errors.motivo && <p className="text-xs text-destructive">{errors.motivo}</p>}
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center rounded-full bg-primary px-6 py-4 font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-10px_color-mix(in_oklab,var(--primary)_45%,transparent)]"
      >
        Quero agendar minha consulta
      </button>

      <p className="text-center text-xs text-muted-foreground">
        Atendimento personalizado mediante avaliação
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        maxLength={120}
        className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
