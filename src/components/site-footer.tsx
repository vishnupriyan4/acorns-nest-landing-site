import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { StoreBadges } from "@/components/store-badges";
import { FOOTER } from "@/lib/content";

const FOOTER_LINKS = [
  { href: "/#product", label: "Product" },
  { href: "/#roles", label: "Roles" },
  { href: "/#get-the-app", label: "Get the app" },
  { href: "/#ai", label: "Insights" },
  { href: "/#demo", label: "Walkthrough" },
] as const;

const LEGAL_LINKS = [
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <BrandMark size="sm" />
          <p className="mt-3 text-sm leading-6 text-muted">{FOOTER.blurb}</p>
          <StoreBadges className="mt-5" />
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-muted">
          {FOOTER_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-xs text-muted sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Acorns Nest. {FOOTER.legal}
          </p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 font-medium">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-primary">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
