import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { ArrowRight, Sparkles } from "lucide-react";
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

export default function Home() {
  return (
    <div className="min-h-screen text-zinc-100">
      <Navbar />
      <main>
        <Hero />

        <section className="section-shell py-14 md:py-16">
          <div className="glass-card p-6 md:p-8">
            <h2 className="section-title">Why Students Choose Us</h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {strengths.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-300" />
                  <p className="text-sm text-zinc-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section-shell py-16 md:py-20">
          <div className="mb-10">
            <h2 className="section-title">What I Build for Students</h2>
            <p className="section-subtitle">A complete project pipeline from idea validation to final delivery and support.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} title={service.title} description={service.description} icon={service.icon} />
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardContent className="p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.14em] text-blue-100">Studio Promise</p>
                <p className="mt-3 text-lg text-zinc-200 md:text-xl">
                  Every project is built with production standards, polished UI, and practical architecture so your submission stands out instantly.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.14em] text-blue-100">Delivery</p>
                <p className="mt-3 text-4xl font-semibold text-white" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
                  98%
                </p>
                <p className="mt-2 text-sm text-zinc-300">On-time submissions in last cycle</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="portfolio" className="section-shell py-16 md:py-20">
          <div className="mb-10 flex items-center justify-between gap-4">
            <div>
              <h2 className="section-title">Case Studies from My Portfolio</h2>
              <p className="section-subtitle">Project cards are fully data-driven so you can replace them with your latest work anytime.</p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="section-shell py-16 md:py-20">
          <h2 className="section-title">Project Workflow</h2>
          <p className="section-subtitle">Transparent steps that keep your academic milestones on track.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Card key={step} className="relative overflow-hidden">
                <div className="absolute right-4 top-4 text-5xl font-semibold text-white/10">0{index + 1}</div>
                <CardContent className="p-6">
                  <p className="text-xs uppercase tracking-[0.14em] text-blue-100">Step {index + 1}</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-100">{step}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="pricing" className="section-shell py-16 md:py-20">
          <h2 className="section-title">Pricing Plans</h2>
          <p className="section-subtitle">Choose a support level based on complexity, deadlines, and research depth.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </section>

        <section className="section-shell py-16 md:py-20">
          <h2 className="section-title">Student Feedback</h2>
          <p className="section-subtitle">Realistic experiences from project planning to final defense support.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </section>

        <section className="section-shell py-16 md:py-20">
          <div className="rounded-3xl border border-blue-300/20 bg-gradient-to-r from-[#162449] via-[#1a2b55] to-[#102138] p-8 md:flex md:items-center md:justify-between md:p-10">
            <div>
              <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-amber-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-amber-100">
                <Sparkles className="h-3.5 w-3.5" /> Limited Intake
              </p>
              <h2 className="text-2xl font-semibold text-white md:text-4xl" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
                Let&apos;s Build Your Final Year Project
              </h2>
              <p className="mt-2 text-zinc-100/90">Limited slots available this month. Start with WhatsApp and reserve your project timeline now.</p>
            </div>
            <div className="mt-5 flex gap-3 md:mt-0">
              <Button asChild size="lg">
                <a href="https://wa.me/94722382901" target="_blank" rel="noreferrer">
                  WhatsApp Now
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Contact Form <ArrowRight className="ml-1 h-4 w-4" />
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
