import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
}

export function TestimonialCard({ name, role, quote }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="space-y-4 p-6">
        <p className="text-sm leading-relaxed text-zinc-200">&ldquo;{quote}&rdquo;</p>
        <div>
          <p className="font-semibold text-cyan-100">{name}</p>
          <p className="text-xs uppercase tracking-[0.08em] text-zinc-400">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
}
