import { CtaButton } from "./CtaButton";

export function SiteNav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:py-8">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-base">
            P
          </span>
          <span className="font-display text-lg tracking-tight text-foreground">
            Pedro Ward
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a>
          <a href="#osteopatia" className="hover:text-foreground transition-colors">Osteopatia</a>
          <a href="#fisioterapia" className="hover:text-foreground transition-colors">Fisioterapia</a>
          <a href="#agendar" className="hover:text-foreground transition-colors">Contato</a>
        </div>
        <CtaButton size="md">Agendar consulta</CtaButton>
      </nav>
    </header>
  );
}
