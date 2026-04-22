"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { ProjectItem } from "@/types/project";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
      <Card className="h-full">
        <CardHeader>
          <div
            className="mb-4 h-44 rounded-2xl border border-white/20 bg-cover bg-center"
            style={{ backgroundImage: `linear-gradient(180deg, rgba(4,8,20,0.2), rgba(4,8,20,0.62)), url('${project.image}')` }}
          >
            <div className="flex h-full items-end p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-cyan-100">Case Study</p>
            </div>
          </div>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-relaxed text-zinc-300">{project.description}</p>
          <p className="rounded-lg border border-emerald-300/20 bg-emerald-400/10 px-3 py-2 text-xs font-semibold text-emerald-100">
            {project.result}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <p className="text-xs text-zinc-400">{project.techStack.join(" • ")}</p>
          <div className="flex gap-2">
            <Button asChild variant="outline" className="flex-1">
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                View Demo <ExternalLink className="ml-1 h-3.5 w-3.5" />
              </a>
            </Button>
            <Button asChild className="flex-1">
              <a href={project.codeUrl} target="_blank" rel="noreferrer">
                View Code <Code2 className="ml-1 h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
