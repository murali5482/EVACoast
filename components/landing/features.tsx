import {
  Bell,
  Map,
  Route,
  ShieldCheck,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Map,
    title: "Live maps",
    description: "See conditions and key locations on one shared, real-time map.",
  },
  {
    icon: Bell,
    title: "Instant alerts",
    description: "Notify the right people the moment something changes.",
  },
  {
    icon: Route,
    title: "Route planning",
    description: "Build and share clear routes so everyone knows where to go.",
  },
  {
    icon: Users,
    title: "Team coordination",
    description: "Assign roles, track status and keep everyone aligned.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by default",
    description: "Your data is protected with modern authentication and access controls.",
  },
  {
    icon: Zap,
    title: "Fast setup",
    description: "Sign up and start planning in minutes, with no installs.",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Everything you need
        </h2>
        <p className="mt-3 text-muted-foreground">
          Simple tools that work together.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, description }) => (
          <Card key={title}>
            <CardHeader>
              <Icon className="mb-2 size-6 text-primary" />
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
