import Link from "next/link";
import { Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "For individuals getting started.",
    features: ["1 project", "Basic maps", "Email alerts"],
    cta: "Get started",
    href: "/signup",
    recommended: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For teams that need more.",
    features: ["Unlimited projects", "Live maps", "Route planning", "Priority support"],
    cta: "Start Pro",
    href: "/signup",
    recommended: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organisations.",
    features: ["Everything in Pro", "SSO and audit logs", "Dedicated support", "Custom integrations"],
    cta: "Contact sales",
    href: "/signup",
    recommended: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Simple pricing</h2>
        <p className="mt-3 text-muted-foreground">
          Start free and upgrade when you need to.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={cn(tier.recommended && "ring-2 ring-primary md:scale-105")}
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {tier.name}
                {tier.recommended && (
                  <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                    Recommended
                  </span>
                )}
              </CardTitle>
              <CardDescription>{tier.description}</CardDescription>
              <p className="pt-2">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-muted-foreground">{tier.period}</span>
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="size-4 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link
                href={tier.href}
                className={cn(
                  buttonVariants({
                    variant: tier.recommended ? "default" : "outline",
                  }),
                  "w-full",
                )}
              >
                {tier.cta}
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
