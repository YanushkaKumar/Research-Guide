import type { Metadata } from "next";
import { ContactForm } from "@/components/site/contact-form";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";

export const metadata: Metadata = {
  title: "Contact | Final Year Project Solutions",
  description: "Submit your project requirement and get a tailored implementation plan.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen text-zinc-100">
      <Navbar />
      <main className="section-shell py-16 md:py-20">
        <div className="mx-auto max-w-4xl soft-panel p-6 md:p-10">
          <p className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-cyan-100">
            Project Intake
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Start Your Project</h1>
          <p className="mt-3 text-zinc-300 md:text-lg">
            Share your requirement. Your details will be stored securely and you will receive a response on WhatsApp.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
