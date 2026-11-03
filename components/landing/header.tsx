import Link from "next/link";
import { Waves } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { buttonVariants } from "@/components/ui/button";
import { UserMenu } from "@/components/landing/user-menu";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
];

export async function Header() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const claims = data?.claims;

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Waves className="size-5" />
          Evacoast
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        {claims ? (
          <UserMenu email={(claims.email as string | undefined) ?? ""} />
        ) : (
          <Link href="/login" className={buttonVariants({ size: "sm" })}>
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
