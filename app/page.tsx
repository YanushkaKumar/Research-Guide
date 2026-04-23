import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Hero } from "@/components/site/hero";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ServiceCard } from "@/components/site/service-card";
import { ProjectCard } from "@/components/site/project-card";
import { PricingCard } from "@/components/site/pricing-card";
import { TestimonialCard } from "@/components/site/testimonial-card";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services, strengths, processSteps, pricingPlans, testimonials } from "@/data/site-content";
import { projects } from "@/data/projects";

const stats = [
  { value: "32+", label: "Live Deployments" },
  { value: "14", label: "Industries Activated" },
  { value: "96%", label: "Milestone Accuracy" },
  { value: "5.0", label: "Client Sentiment" },
];

const tickerItems = [
  "Interface Direction",
  "Behavioral UX",
  "Conversion Flows",
  "Automation Logic",
  "AI Experience",
  "Firebase",
  "Cloud Operations",
  "Service Growth",
];

const imageStrip = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
];

export default function Home() {
  return (
    <div className="min-h-screen text-[color:var(--text-primary)]">
      <Navbar />
      <main>
        <Hero />

        <section className="section-shell py-6">
          <div className="grid gap-4 md:grid-cols-12">
            {imageStrip.map((image, index) => (
              <div
                key={image}
                className={`h-56 rounded-2xl border border-[color:var(--line)] bg-cover bg-center ${
                  index === 0 ? "md:col-span-5" : index === 1 ? "md:col-span-4" : "md:col-span-3"
                }`}
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(8, 13, 29, 0.2), rgba(8, 13, 29, 0.6)), url('${image}')`,
                }}
                aria-label={`Service image ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <section id="about" className="section-shell pb-6 pt-4 md:pb-10">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {stats.map((item, index) => (
              <div
                key={item.label}
                className={`rounded-2xl border border-[color:var(--line)] bg-[linear-gradient(170deg,rgba(17,22,44,0.88),rgba(10,13,27,0.95))] p-6 md:p-8 ${
                  index % 2 === 0 ? "md:-translate-y-2" : "md:translate-y-2"
                }`}
              >
                <p className="text-5xl leading-none text-[color:var(--accent)] md:text-6xl" style={{ fontFamily: "var(--font-display), serif" }}>
                  {item.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[color:var(--text-muted)]">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="overflow-hidden border-y border-[color:var(--line)] bg-[#0c1023] py-4">
          <div className="flex whitespace-nowrap text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--text-primary)]">
            <div className="ticker-track flex min-w-max items-center gap-10 px-8">
              {[...tickerItems, ...tickerItems].map((item, index) => (
                <span key={`${item}-${index}`} className="inline-flex items-center gap-10">
                  <span>{item}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section-shell py-20">
          <div className="mb-10">
            <p className="section-label">Selected Build Signals</p>
            <h2 className="section-title mt-3">
              Systems Crafted For <span className="italic text-[color:var(--accent)]">Real Market Pressure</span>
            </h2>
            <p className="section-subtitle">From conversion websites to AI workflows, these builds prioritize both distinctive aesthetics and measurable outcomes.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} className={index === 0 ? "md:col-span-2" : ""} />
            ))}
          </div>
        </section>

        <section id="services" className="section-shell py-20">
          <div className="mb-10 md:flex md:items-end md:justify-between">
            <div>
              <p className="section-label">Service Framework</p>
              <h2 className="section-title mt-3">Modular Services, Unified Experience</h2>
              <p className="section-subtitle">Each service can run standalone or combine into a complete roadmap from interface concept to automated release.</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} title={service.title} description={service.description} icon={service.icon} />
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {strengths.map((item) => (
              <Card key={item}>
                <CardContent className="flex items-center gap-3 p-6">
                  <CheckCircle2 className="h-5 w-5 text-[color:var(--accent)]" />
                  <p className="text-sm text-[color:var(--text-primary)]">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="process" className="section-shell py-20">
          <p className="section-label">Operational Flow</p>
          <h2 className="section-title mt-3">How Complexity Stays Controlled</h2>
          <p className="section-subtitle">The process is engineered to keep velocity high while preserving decision clarity at each milestone.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Card key={step} className="relative overflow-hidden">
                <div className="absolute right-4 top-4 text-6xl text-[color:var(--accent-soft)]" style={{ fontFamily: "var(--font-display), serif" }}>
                  0{index + 1}
                </div>
                <CardContent className="p-6">
                  <p className="text-xs uppercase tracking-[0.14em] text-[color:var(--accent)]">Step {index + 1}</p>
                  <p className="mt-4 text-base leading-relaxed text-[color:var(--text-primary)]">{step}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="pricing" className="section-shell py-20">
          <h2 className="section-title">Investment Architectures</h2>
          <p className="section-subtitle">Flexible pricing lanes designed around ambition, timeline intensity, and technical depth.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </section>

        <section className="section-shell py-20">
          <h2 className="section-title">What Clients Remember</h2>
          <p className="section-subtitle">Strong visual direction matters, but clear business movement matters more. These notes reflect both.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell py-16 md:py-20">
          <div className="neo-card relative overflow-hidden p-8 md:p-12">
            <div className="pointer-events-none absolute right-8 top-8 h-24 w-24 rounded-full border border-[color:var(--accent)]/60" />
            <div className="pointer-events-none absolute left-10 top-16 h-3 w-3 rounded-full bg-[color:var(--accent)]" />
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-[color:var(--accent)]">
                <Sparkles className="h-3.5 w-3.5" /> Strategic Discovery Session
              </p>
              <h2 className="max-w-3xl text-5xl leading-[0.92] text-[color:var(--text-primary)] md:text-7xl" style={{ fontFamily: "var(--font-display), serif" }}>
                Build a service experience people <span className="italic text-[color:var(--accent)]">instantly recognize</span>
              </h2>
              <p className="mt-4 max-w-xl text-[color:var(--text-muted)]">
                Share your current product, offer, or service challenge. You will get a practical roadmap covering UX direction,
                development phases, and deployment strategy.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="cut-button px-10">
                <a href="https://wa.me/94722382901" target="_blank" rel="noreferrer">
                  Start On WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[color:var(--line)] text-[color:var(--text-primary)]">
                <Link href="/contact">
                  Open Brief Form <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
