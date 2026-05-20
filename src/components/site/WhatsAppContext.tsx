import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

export const WHATSAPP_NUMBER = "5514997156318";

type Mode = "default" | "agendamento";

interface WhatsAppContextValue {
  open: (mode?: Mode) => void;
  close: () => void;
  isOpen: boolean;
  mode: Mode;
}

const Ctx = createContext<WhatsAppContextValue | null>(null);

export function WhatsAppProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("default");

  const open = useCallback((m: Mode = "default") => {
    setMode(m);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <Ctx.Provider value={{ open, close, isOpen, mode }}>{children}</Ctx.Provider>
  );
}

export function useWhatsApp() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useWhatsApp must be used within WhatsAppProvider");
  return ctx;
}

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
