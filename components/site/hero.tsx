"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="section-shell py-7 md:py-10">
      <div className="grid min-h-[80vh] grid-cols-1 gap-4 md:grid-cols-[1.2fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="glass-panel mesh-border relative flex flex-col justify-between overflow-hidden p-7 md:p-12"
        >
          <span className="orbital-dot left-8 top-8 h-3 w-3" />
          <span className="orbital-dot right-12 top-24 h-2 w-2 [animation-delay:1.2s]" />
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--accent-soft)] px-4 py-1 text-xs uppercase tracking-[0.16em] text-[color:var(--accent)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" /> Experimental Product Studio
            </p>
            <h1 className="mt-9 max-w-xl text-5xl leading-[0.92] text-[color:var(--text-primary)] md:text-7xl" style={{ fontFamily: "var(--font-display), serif" }}>
              Design That Feels
              <span className="block text-[color:var(--accent)]">Impossible To Ignore</span>
              <span className="block">And Hard To Replicate</span>
            </h1>
            <p className="mt-6 max-w-md text-sm uppercase tracking-[0.12em] text-[color:var(--text-muted)] md:text-base">
              Strategy, UI Direction, Product Engineering, Launch Systems
            </p>
            <p className="mt-9 max-w-xl text-lg leading-relaxed text-[color:var(--text-muted)]">
              Your part-time service brand can look premium and feel unmistakable. I combine advanced UI language,
              practical UX flow, and production-grade code to build high-converting digital experiences.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="cut-button px-10">
              <Link href="/#work">Explore Build Cases</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[color:var(--line)] bg-[#11162f]/70">
              <a href="https://wa.me/94722382901" target="_blank" rel="noreferrer">
                Book Discovery <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-panel relative overflow-hidden p-5 md:p-6"
        >
          <div className="absolute -left-12 top-28 h-40 w-40 rounded-full border border-[color:var(--accent)]/35" />
          <div className="absolute right-8 top-8 h-12 w-12 rotate-12 rounded-2xl border border-[color:var(--accent-2)]/60 bg-[#1b203e]/70" />
          <div
            className="h-[320px] rounded-2xl border border-[color:var(--line)] bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(7, 20, 33, 0.2), rgba(7, 20, 33, 0.62)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80')",
            }}
          />

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-[color:var(--line)] bg-[#131933] p-4">
              <p className="text-3xl font-semibold text-[color:var(--accent)]">48h</p>
              <p className="mt-1 text-xs uppercase tracking-[0.1em] text-[color:var(--text-muted)]">First draft turnaround</p>
            </div>
            <div className="rounded-xl border border-[color:var(--line)] bg-[#131933] p-4">
              <p className="text-3xl font-semibold text-[color:var(--accent)]">32+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.1em] text-[color:var(--text-muted)]">Client projects delivered</p>
            </div>
            <div className="rounded-xl border border-[color:var(--line)] bg-[#131933] p-4">
              <p className="text-3xl font-semibold text-[color:var(--accent)]">5.0</p>
              <p className="mt-1 text-xs uppercase tracking-[0.1em] text-[color:var(--text-muted)]">Average client rating</p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg-elevated)] p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-[color:var(--accent-2)]">What you get</p>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)]">
              Art-directed UI systems, conversion UX, custom build architecture, and delivery operations tailored to your business.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[color:var(--accent)]">
              <Sparkles className="h-3.5 w-3.5" /> Visual originality with measurable business outcomes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
