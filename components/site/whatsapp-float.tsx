import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/94722382901"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[color:var(--accent)] bg-[linear-gradient(130deg,var(--accent),#49d6ff)] text-[#02212a] shadow-[0_14px_28px_rgba(107,242,255,0.45)] transition hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
