import { useEffect, useState } from "react";
import { z } from "zod";
import { X } from "lucide-react";
import { buildWhatsAppUrl, useWhatsApp } from "./WhatsAppContext";
import { maskPhone } from "@/lib/mask";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  telefone: z.string().trim().min(14, "Informe um telefone válido").max(15),
});

export function WhatsAppModal() {
  const { isOpen, close } = useWhatsApp();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [telefone, setTelefone] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse({
      nome: fd.get("nome"),
      telefone: fd.get("telefone"),
    });

    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }

    const { nome } = result.data;
    const message = `Olá! Me chamo ${nome}, e gostaria de mais informações. Pode me ajudar?`;
    const url = buildWhatsAppUrl(message);
    window.open(url, "_blank", "noopener,noreferrer");
    setErrors({});
    close();
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        aria-label="Fechar"
        onClick={close}
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-card animate-in fade-in zoom-in-95 duration-200">
        <button
          type="button"
          aria-label="Fechar"
          onClick={close}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="space-y-2 mb-6">
          <h3 className="font-display text-2xl">Falar no WhatsApp</h3>
          <p className="text-sm text-muted-foreground">
            Preencha seus dados e continue a conversa direto com o Pedro.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Nome</label>
            <input
              type="text"
              name="nome"
              maxLength={120}
              placeholder="Seu nome completo"
              className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            {errors.nome && <p className="text-xs text-destructive">{errors.nome}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Telefone</label>
            <input
              type="tel"
              name="telefone"
              inputMode="numeric"
              value={telefone}
              onChange={(e) => setTelefone(maskPhone(e.target.value))}
              maxLength={15}
              placeholder="(14) 99999-9999"
              className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            {errors.telefone && <p className="text-xs text-destructive">{errors.telefone}</p>}
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center rounded-full bg-primary px-6 py-4 font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5"
          >
            Continuar no WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
