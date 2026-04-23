"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/site-content";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[#0a0d1d]/80 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <Link href="/" className="text-base font-bold uppercase tracking-[0.14em] text-[color:var(--accent)] md:text-lg">
          Quantum Build Lab
        </Link>

        <nav className="hidden items-center gap-2 rounded-xl border border-[color:var(--line)] bg-[#131832]/75 p-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm uppercase tracking-[0.08em] text-[color:var(--text-muted)] transition hover:bg-[#1c2244] hover:text-[color:var(--accent)]"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="lg" className="cut-button ml-1">
            <Link href="/contact">Start Project</Link>
          </Button>
        </nav>

        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--line)] bg-[#11162f] text-[color:var(--text-primary)] md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[color:var(--line)] bg-[#0b0f22] px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.08em] text-[color:var(--text-muted)]"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="cut-button">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Start Project
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
