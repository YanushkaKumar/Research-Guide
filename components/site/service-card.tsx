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
      <Card className="h-full">
        <CardHeader>
          <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-blue-300/25 bg-blue-500/15 text-blue-100">
            <Icon className="h-5 w-5" />
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-zinc-300">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
