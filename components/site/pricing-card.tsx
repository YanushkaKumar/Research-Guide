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
        "relative h-full",
        featured &&
          "border-blue-300/45 bg-gradient-to-b from-blue-500/25 via-indigo-500/12 to-white/[0.02] shadow-[0_0_0_1px_rgba(96,165,250,0.25)]"
      )}
    >
      {featured && (
        <span className="absolute -top-3 left-6 rounded-full border border-blue-100/40 bg-blue-300 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-[#081a3d]">
          Most Popular
        </span>
      )}
      <CardHeader>
        <p className="text-sm text-blue-100">{subtitle}</p>
        <CardTitle>{name}</CardTitle>
        <p className="text-3xl font-semibold text-white">{price}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-zinc-200">
              <Check className="mt-0.5 h-4 w-4 text-blue-100" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.08em] text-amber-200">
          Limited slots available each month
        </p>
      </CardContent>
    </Card>
  );
}
