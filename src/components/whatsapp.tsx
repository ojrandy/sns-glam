import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { site } from "@/data/site";

const GREETING = "Hi SnS Glams! I'd like to ask about booking an appointment.";
export const whatsappUrl = (number: string) =>
  `https://wa.me/${number}?text=${encodeURIComponent(GREETING)}`;

export function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35ZM12.05 21.5h-.01a9.43 9.43 0 0 1-4.8-1.32l-.35-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.89.99 6.67 2.77a9.37 9.37 0 0 1 2.77 6.68c0 5.2-4.24 9.44-9.45 9.44Zm8.04-17.48A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.58 23.7l6.1-1.6a11.33 11.33 0 0 0 5.37 1.37h.01c6.26 0 11.36-5.1 11.37-11.36 0-3.04-1.18-5.89-3.34-8.04Z" />
    </svg>
  );
}

/** One pill-shaped WhatsApp chat button per studio number. */
export function WhatsAppButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {site.whatsapp.map((w) => (
        <a
          key={w.number}
          href={whatsappUrl(w.number)}
          target="_blank"
          rel="noreferrer"
          aria-label={`Chat on WhatsApp at ${w.label}`}
          className="inline-flex h-11 items-center gap-2.5 rounded-full bg-[#25D366] px-5 text-sm font-medium text-white shadow-md transition hover:bg-[#1ebe5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        >
          <WhatsAppIcon />
          {w.label}
        </a>
      ))}
    </div>
  );
}

/** Floating WhatsApp launcher, bottom-left on every page (Smartsupp chat owns bottom-right); opens a small picker for the two numbers. */
export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);
  return (
    <div
      ref={root}
      className="fixed bottom-5 left-5 z-40 flex flex-col items-start gap-3 sm:bottom-6 sm:left-6"
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="w-64 rounded-2xl bg-cream p-4 text-burgundy shadow-2xl ring-1 ring-rose/20"
          >
            <p className="font-display text-xl">Chat with us</p>
            <p className="mt-0.5 text-xs text-muted-foreground">Tap a number to open WhatsApp.</p>
            <div className="mt-3 grid gap-2">
              {site.whatsapp.map((w) => (
                <a
                  key={w.number}
                  href={whatsappUrl(w.number)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#1ebe5a]"
                >
                  <WhatsAppIcon className="size-5 shrink-0" />
                  {w.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close WhatsApp options" : "Chat with us on WhatsApp"}
        aria-expanded={open}
        className="grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,.45)] transition hover:scale-105 hover:bg-[#1ebe5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        {open ? <X className="size-6" /> : <WhatsAppIcon className="size-7" />}
      </button>
    </div>
  );
}
