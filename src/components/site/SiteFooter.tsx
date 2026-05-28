import { MapPin, Instagram, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-display">
                P
              </span>
              <span className="font-display text-lg">Pedro Ward</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Fisioterapeuta e Osteopata. Atendimento focado em dor, movimento e funcionalidade.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <h4 className="font-display text-base text-foreground">Contato</h4>
            <p className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Bauru - SP
            </p>
            <p className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4 text-primary" /> Atendimento mediante avaliação
            </p>
            <p className="flex items-center gap-2 text-muted-foreground">
              <Instagram className="h-4 w-4 text-primary" />
              <a
                href="https://instagram.com/pedroward85"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                @pedroward85
              </a>
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <h4 className="font-display text-base text-foreground">Atendimentos</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Osteopatia</li>
              <li>Fisioterapia</li>
              <li>Reabilitação funcional</li>
              <li>Terceira idade</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground flex flex-col md:flex-row gap-2 justify-between">
          <p>© {new Date().getFullYear()} Pedro Ward — Fisioterapia & Osteopatia</p>
          <p>Bauru — SP</p>
        </div>
      </div>
    </footer>
  );
}
