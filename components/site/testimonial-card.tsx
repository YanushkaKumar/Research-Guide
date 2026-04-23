import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
}

export function TestimonialCard({ name, role, quote }: TestimonialCardProps) {
  return (
    <Card className="mesh-border h-full">
      <CardContent className="space-y-4 p-6">
        <p className="text-sm leading-relaxed text-[color:var(--text-primary)]">&ldquo;{quote}&rdquo;</p>
        <div>
          <p className="text-3xl leading-none text-[color:var(--text-primary)]" style={{ fontFamily: "var(--font-display), serif" }}>
            {name}
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.08em] text-[color:var(--accent)]">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
}
