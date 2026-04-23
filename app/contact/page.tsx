import type { Metadata } from "next";
import { ContactForm } from "@/components/site/contact-form";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";

export const metadata: Metadata = {
  title: "Contact | PartTime Tech Studio",
  description: "Share your project goals and get a practical timeline and quote.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen text-[color:var(--text-primary)]">
      <Navbar />
      <main className="section-shell py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-[0.95fr_1.1fr]">
          <div
            className="mesh-border rounded-2xl border border-[color:var(--line)] bg-cover bg-center p-6 md:p-8"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(6, 12, 29, 0.52), rgba(6, 12, 29, 0.82)), url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80')",
            }}
          >
            <p className="inline-flex rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs uppercase tracking-[0.14em] text-white">
              Free Discovery Session
            </p>
            <h1 className="mt-5 text-5xl leading-[0.9] text-white md:text-6xl" style={{ fontFamily: "var(--font-display), serif" }}>
              Design Brief Gateway
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
              Tell me what you need to launch, improve, or automate. You&apos;ll receive a clear breakdown of scope, timeline,
              and budget options.
            </p>
          </div>

          <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-6 md:p-8">
            <p className="inline-flex rounded-full border border-[color:var(--line)] bg-[color:var(--accent-soft)] px-3 py-1 text-xs uppercase tracking-[0.14em] text-[color:var(--accent)]">
              Project Intake Form
            </p>
            <h2 className="mt-4 text-4xl leading-[0.94] md:text-5xl" style={{ fontFamily: "var(--font-display), serif" }}>
              Define Your Mission
            </h2>
            <p className="mt-3 text-[color:var(--text-muted)] md:text-lg">
              The more context you share, the better I can suggest the fastest and smartest execution route.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
