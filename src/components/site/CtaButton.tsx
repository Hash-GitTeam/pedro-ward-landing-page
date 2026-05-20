import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useWhatsApp } from "./WhatsAppContext";

interface CtaButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
}

export function CtaButton({
  children = "Agendar consulta",
  className,
  variant = "primary",
  size = "md",
}: CtaButtonProps) {
  const { open } = useWhatsApp();

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 group cursor-pointer";
  const sizes = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };
  const variants = {
    primary:
      "bg-primary text-primary-foreground shadow-soft hover:shadow-[0_14px_40px_-10px_color-mix(in_oklab,var(--primary)_45%,transparent)] hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-foreground border border-border hover:border-primary hover:text-primary",
  };

  return (
    <button
      type="button"
      onClick={() => open("default")}
      className={cn(base, sizes[size], variants[variant], className)}
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </button>
  );
}
