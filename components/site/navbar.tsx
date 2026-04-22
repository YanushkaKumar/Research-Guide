"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/site-content";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090f1f]/70 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="rounded-full border border-blue-300/25 bg-blue-500/15 px-4 py-2 text-[11px] font-semibold tracking-[0.17em] text-blue-100">
        PROJECT LAB
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-zinc-300 transition hover:text-blue-200">
              {item.label}
            </Link>
          ))}
          <Button asChild size="lg">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </nav>

        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 text-white md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#050915]/95 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm text-zinc-200">
                {item.label}
              </Link>
            ))}
            <Button asChild>
              <Link href="/contact" onClick={() => setOpen(false)}>
                Start Your Project
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
