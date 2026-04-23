import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PricingCardProps {
  name: string;
  subtitle: string;
  price: string;
  features: string[];
  featured?: boolean;
}

export function PricingCard({ name, subtitle, price, features, featured }: PricingCardProps) {
  return (
    <Card
      className={cn(
        "relative h-full overflow-hidden",
        featured &&
          "border-[color:var(--accent)]/60 bg-[linear-gradient(180deg,rgba(107,242,255,0.2),rgba(12,16,32,0.95))] shadow-[0_0_0_1px_rgba(107,242,255,0.2)]"
      )}
    >
      {featured && (
        <span className="absolute -top-3 left-6 rounded-full border border-[color:var(--accent)] bg-[color:var(--accent)] px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-[#06262d]">
          Most Popular
        </span>
      )}
      <CardHeader>
        <p className="text-sm uppercase tracking-[0.1em] text-[color:var(--accent)]">{subtitle}</p>
        <CardTitle className="text-5xl leading-none" style={{ fontFamily: "var(--font-display), serif" }}>
          {name}
        </CardTitle>
        <p className="text-3xl font-semibold text-[color:var(--text-primary)]">{price}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-[color:var(--text-primary)]">
              <Check className="mt-0.5 h-4 w-4 text-[color:var(--accent)]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--text-muted)]">
          Limited slots available each month
        </p>
      </CardContent>
    </Card>
  );
}
