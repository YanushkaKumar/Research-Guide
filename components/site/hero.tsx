"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-14 pt-8 md:pb-20 md:pt-10">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="hero-overlay absolute inset-0 -z-10" />
      <div className="section-shell grid min-h-[72vh] gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <p className="mb-5 inline-flex rounded-full border border-blue-200/30 bg-blue-500/15 px-3 py-1 text-xs uppercase tracking-[0.14em] text-blue-100">
            Final Year Project Command Center
          </p>
          <h1 className="text-4xl font-semibold leading-[1.04] text-white md:text-7xl" style={{ fontFamily: "var(--font-sora), sans-serif", letterSpacing: "-0.03em" }}>
            Struggling with Your Final Year Project?
          </h1>
          <p className="mt-6 max-w-2xl text-base text-zinc-200 md:text-xl">
            I help ICT students build real-world ML, Mobile, Web & DevOps systems ready for submission and demo.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "React",
              "Firebase",
              "AWS",
              "Docker",
            ].map((tech) => (
              <span key={tech} className="rounded-full border border-blue-100/25 bg-white/10 px-3 py-1 text-xs font-semibold text-zinc-100">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/#portfolio">
                View My Work <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-4 md:p-6"
        >
          <div className="space-y-4 rounded-2xl border border-blue-100/15 bg-[#0b1429]/85 p-5">
            <div className="rounded-2xl border border-blue-100/20 bg-black/25 p-3">
              <div
                className="h-52 rounded-xl bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(5,8,20,0.12), rgba(5,8,20,0.62)), url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80')",
                }}
              />
            </div>
            <div className="relative rounded-2xl border border-blue-200/25 bg-blue-500/12 p-3 md:ml-16">
              <div
                className="h-36 rounded-xl bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(2,7,20,0.22), rgba(2,7,20,0.68)), url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80')",
                }}
              />
              <p className="mt-2 text-xs uppercase tracking-[0.12em] text-blue-100">Live project UI preview</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
