import { MapPin, Sparkles, HeartPulse, Activity, Hand, Shield, Smile } from "lucide-react";

import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CtaButton } from "@/components/site/CtaButton";
import { AppointmentForm } from "@/components/site/AppointmentForm";
import { WhatsAppProvider } from "@/components/site/WhatsAppContext";
import { WhatsAppModal } from "@/components/site/WhatsAppModal";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Toaster } from "@/components/ui/sonner";

import heroImg from "@/assets/hero-treatment.jpg";
import painImg from "@/assets/pain-problem.jpg";
import osteoImg from "@/assets/osteopathy.jpg";
import physioImg from "@/assets/physiotherapy.jpg";
import elderlyImg from "@/assets/elderly-active.jpg";
import careImg from "@/assets/pedro-ward.jpg";
import ctaImg from "@/assets/cta-final.jpg";

export default function App() {
  return (
    <WhatsAppProvider>
      <main className="min-h-screen bg-background text-foreground">
        <Toaster />
        <SiteNav />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grain" />
        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 md:pt-40 md:pb-28 grid lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              Atendimento em Bauru
            </span>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-balance">
              Dor não é normal.
              <br />
              <span className="text-primary italic">É um sinal.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl text-balance">
              Recupere seu movimento, reduza a dor e volte a fazer o que você gosta — com um tratamento focado na causa do problema.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <CtaButton size="lg">Agendar consulta</CtaButton>
              <span className="text-xs text-muted-foreground">
                Atendimento personalizado mediante avaliação
              </span>
            </div>

            <div className="pt-6 flex items-center gap-3 text-sm text-muted-foreground">
              <div className="h-px w-10 bg-border" />
              <span>Pedro Ward · Fisioterapeuta | Osteopatia</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-primary-soft -z-10 blur-2xl opacity-60" />
            <img
              src={heroImg}
              alt="Sala de atendimento clean e iluminada"
              width={1600}
              height={1100}
              className="w-full h-auto rounded-[2rem] object-cover shadow-soft"
            />
            <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 rounded-2xl bg-card border border-border px-5 py-4 shadow-card">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft">
                <HeartPulse className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Avaliação individual</p>
                <p className="text-xs text-muted-foreground">Cuidado humanizado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <img
            src={painImg}
            alt="Pessoa com desconforto nas costas"
            width={1200}
            height={1200}
            loading="lazy"
            className="w-full h-auto rounded-[2rem] object-cover shadow-card order-2 lg:order-1"
          />
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance">
              Você trata a dor… <br /> ou a <em className="not-italic text-primary">causa</em> dela?
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg">
              Muitos tratamentos focam apenas no local da dor. Mas o corpo funciona como um todo — e a origem do problema pode estar em outro ponto.
            </p>

            <blockquote className="rounded-2xl border-l-4 border-primary bg-primary-soft/50 px-6 py-4 font-display text-2xl text-foreground italic">
              É por isso que a dor volta.
            </blockquote>

            <CtaButton>Agendar consulta</CtaButton>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Pedro Ward
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance">
              Atendimento focado em <span className="text-primary">resultado real</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg">
              Atuo com foco em dor e funcionalidade, ajudando pacientes a:
            </p>

            <ul className="space-y-3">
              {[
                "Reduzir dores persistentes",
                "Recuperar movimentos",
                "Melhorar a qualidade de vida",
                "Evitar recorrência de lesões",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft text-primary">
                    <HeartPulse className="h-4 w-4" />
                  </span>
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-muted-foreground max-w-lg">
              Com uma abordagem individualizada, cada atendimento é pensado para o <span className="text-foreground font-medium">seu corpo</span> — não para um protocolo genérico.
            </p>

            <CtaButton>Agendar avaliação</CtaButton>
          </div>

          <img
            src={careImg}
            alt="Pedro Ward — Fisioterapeuta e Osteopata em Bauru"
            width={900}
            height={1200}
            loading="lazy"
            className="w-full h-auto rounded-[2rem] object-cover shadow-card"
          />
        </div>
      </section>

      {/* OSTEOPATIA */}
      <section id="osteopatia" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <img
            src={osteoImg}
            alt="Técnica manual de osteopatia"
            width={1200}
            height={1400}
            loading="lazy"
            className="w-full h-auto rounded-[2rem] object-cover shadow-card"
          />

          <div className="space-y-7">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Osteopatia
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance">
              Tratar a causa, <br /> não apenas o sintoma
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg">
              A osteopatia é uma abordagem manual que avalia o corpo de forma integrada, identificando tensões e desequilíbrios que geram dor.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <FeatureChip icon={<Sparkles className="h-4 w-4" />} label="Avaliação completa" />
              <FeatureChip icon={<Hand className="h-4 w-4" />} label="Técnicas manuais" />
              <FeatureChip icon={<Activity className="h-4 w-4" />} label="Liberação de tensões" />
              <FeatureChip icon={<HeartPulse className="h-4 w-4" />} label="Reequilíbrio do corpo" />
            </div>

            <blockquote className="rounded-2xl border-l-4 border-primary bg-primary-soft/50 px-6 py-4 font-display text-xl text-foreground italic max-w-lg">
              Você não precisa conviver com a dor. Você precisa entender de onde ela vem.
            </blockquote>

            <CtaButton>Agendar consulta</CtaButton>
          </div>
        </div>
      </section>

      {/* FISIOTERAPIA */}
      <section id="fisioterapia" className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-7 order-2 lg:order-1">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Fisioterapia
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance">
              Recupere seu movimento <br /> com <span className="text-primary">segurança</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg">
              A fisioterapia ajuda na recuperação, fortalecimento e reabilitação do corpo, respeitando seus limites.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <FeatureChip icon={<Activity className="h-4 w-4" />} label="Exercícios personalizados" />
              <FeatureChip icon={<HeartPulse className="h-4 w-4" />} label="Reabilitação funcional" />
              <FeatureChip icon={<Shield className="h-4 w-4" />} label="Fortalecimento progressivo" />
              <FeatureChip icon={<Sparkles className="h-4 w-4" />} label="Mais mobilidade" />
            </div>

            <blockquote className="rounded-2xl border-l-4 border-primary bg-primary-soft/50 px-6 py-4 font-display text-xl text-foreground italic max-w-lg">
              Movimento não é só atividade. É independência.
            </blockquote>

            <CtaButton>Agendar consulta</CtaButton>
          </div>

          <img
            src={physioImg}
            alt="Paciente em exercício de reabilitação"
            width={1200}
            height={1400}
            loading="lazy"
            className="w-full h-auto rounded-[2rem] object-cover shadow-card order-1 lg:order-2"
          />
        </div>
      </section>

      {/* TERCEIRA IDADE */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <img
            src={elderlyImg}
            alt="Pessoa idosa ativa caminhando"
            width={1400}
            height={1200}
            loading="lazy"
            className="w-full h-auto rounded-[2rem] object-cover shadow-card"
          />

          <div className="space-y-7">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Terceira idade
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance">
              Mais movimento, <br /> mais <span className="text-primary">autonomia</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg">
              Programas voltados para terceira idade com foco em equilíbrio, força e prevenção de quedas.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                { icon: <Shield className="h-4 w-4" />, text: "Mais segurança" },
                { icon: <Activity className="h-4 w-4" />, text: "Mais independência" },
                { icon: <Smile className="h-4 w-4" />, text: "Mais qualidade de vida" },
              ].map((b) => (
                <li key={b.text} className="flex items-center gap-3 text-foreground">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft text-primary">
                    {b.icon}
                  </span>
                  <span className="text-base">{b.text}</span>
                </li>
              ))}
            </ul>

            <CtaButton>Agendar consulta</CtaButton>
          </div>
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32 text-center space-y-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Diferencial
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance">
            Cada corpo exige um <span className="text-primary italic">cuidado único</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O tratamento é individualizado, baseado na sua dor, histórico e rotina.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden">
        <img
          src={ctaImg}
          alt="Pessoa em movimento ao amanhecer"
          width={1600}
          height={900}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/40" />
        <div className="relative mx-auto max-w-4xl px-6 py-28 md:py-36">
          <div className="max-w-xl space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Comece agora
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance">
              Comece entendendo <br /> sua <span className="text-primary">dor</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Uma avaliação pode mudar completamente sua qualidade de vida.
            </p>
            <CtaButton size="lg">Agendar consulta</CtaButton>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section id="agendar" className="bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Agendamento
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance">
              Agende sua <span className="text-primary">avaliação</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-md">
              Preencha seus dados e entraremos em contato para confirmar seu horário.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
              <MapPin className="h-4 w-4 text-primary" />
              Bauru — SP
            </div>
          </div>

          <AppointmentForm />
        </div>
      </section>

        <SiteFooter />
        <FloatingWhatsApp />
        <WhatsAppModal />
      </main>
    </WhatsAppProvider>
  );
}

function FeatureChip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm text-foreground">
      <span className="text-primary">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
