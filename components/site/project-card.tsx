"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { ProjectItem } from "@/types/project";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.22 }}>
      <Card className={cn("mesh-border h-full overflow-hidden", className)}>
        <CardHeader>
          <div
            className="mb-4 h-56 rounded-xl border border-[color:var(--line)] bg-cover bg-center"
            style={{ backgroundImage: `linear-gradient(180deg, rgba(7,20,33,0.18), rgba(7,20,33,0.72)), url('${project.image}')` }}
          >
            <div className="flex h-full items-end justify-between p-4">
              <p className="rounded-full border border-white/40 bg-black/35 px-2 py-1 text-xs uppercase tracking-[0.14em] text-white">Completed Project</p>
              <span className="rounded-full bg-[color:var(--accent)] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#08242a]">
                Live Signal
              </span>
            </div>
          </div>
          <CardTitle className="text-4xl leading-[0.95] md:text-5xl" style={{ fontFamily: "var(--font-display), serif" }}>
            {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-relaxed text-[color:var(--text-muted)]">{project.description}</p>
          <p className="rounded-xl border border-[color:var(--line)] bg-[color:var(--accent-soft)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--accent)]">
            {project.result}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <p className="text-xs uppercase tracking-[0.08em] text-[color:var(--text-muted)]">{project.techStack.join(" • ")}</p>
          <div className="flex gap-2">
            <Button asChild variant="outline" className="flex-1 border-[color:var(--line)] bg-[#131936]">
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                Preview <ExternalLink className="ml-1 h-3.5 w-3.5" />
              </a>
            </Button>
            <Button asChild className="cut-button flex-1">
              <a href={project.codeUrl} target="_blank" rel="noreferrer">
                Source <Code2 className="ml-1 h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
