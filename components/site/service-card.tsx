"use client";

import { motion } from "framer-motion";
import { Brain, Globe, Infinity, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ServiceIcon } from "@/data/site-content";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ServiceIcon;
}

const iconMap = {
  brain: Brain,
  smartphone: Smartphone,
  globe: Globe,
  infinity: Infinity,
} as const;

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const Icon = iconMap[icon];

  return (
    <motion.div whileHover={{ y: -6, scale: 1.01 }} transition={{ duration: 0.2 }}>
      <Card className="mesh-border h-full">
        <CardHeader>
          <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[color:var(--line)] bg-[linear-gradient(130deg,rgba(107,242,255,0.18),rgba(255,138,91,0.18))] text-[color:var(--accent)]">
            <Icon className="h-5 w-5" />
          </div>
          <CardTitle className="text-3xl leading-[0.95]" style={{ fontFamily: "var(--font-display), serif" }}>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-[color:var(--text-muted)]">{description}</p>
          <p className="mt-4 text-[10px] uppercase tracking-[0.16em] text-[color:var(--accent-3)]">Tailored Delivery Track</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
