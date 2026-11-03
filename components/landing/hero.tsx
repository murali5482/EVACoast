import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Plan every move before the tide turns
        </h1>
        <p className="max-w-lg text-lg text-muted-foreground">
          Evacoast helps coastal teams prepare, coordinate and respond faster,
          with everything in one place.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/signup" className={buttonVariants({ size: "lg" })}>
            Get started free
            <ArrowRight />
          </Link>
          <a
            href="#features"
            className={buttonVariants({ size: "lg", variant: "outline" })}
          >
            See features
          </a>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="relative aspect-square w-full max-w-md justify-self-center overflow-hidden rounded-3xl border bg-gradient-to-br from-primary/20 via-primary/5 to-background"
      >
        <svg viewBox="0 0 400 400" className="size-full text-primary">
          <circle cx="290" cy="110" r="46" fill="currentColor" opacity="0.25" />
          <path
            d="M0 250 Q50 220 100 250 T200 250 T300 250 T400 250 V400 H0Z"
            fill="currentColor"
            opacity="0.2"
          />
          <path
            d="M0 290 Q50 260 100 290 T200 290 T300 290 T400 290 V400 H0Z"
            fill="currentColor"
            opacity="0.35"
          />
          <path
            d="M0 330 Q50 300 100 330 T200 330 T300 330 T400 330 V400 H0Z"
            fill="currentColor"
            opacity="0.55"
          />
        </svg>
      </div>
    </section>
  );
}
