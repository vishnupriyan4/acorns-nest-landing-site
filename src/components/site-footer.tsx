import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { StoreBadges } from "@/components/store-badges";
import { FOOTER } from "@/lib/content";

const FOOTER_LINKS = [
  { href: "/#product", label: "Product" },
  { href: "/#roles", label: "Roles" },
  { href: "/#get-the-app", label: "Get the app" },
  { href: "/#ai", label: "AI Insights" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#walkthrough", label: "Walkthrough" },
] as const;

const LEGAL_LINKS = [
  { href: "/about", label: "About" },
  { href: "/nova-scotia", label: "Nova Scotia" },
  { href: "/pricing", label: "Pricing" },
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
] as const;

export function SiteFooter() {
  const c = FOOTER.company;

  return (
    <footer className="border-t border-border/70 bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <BrandMark size="sm" />
          <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
            {FOOTER.blurb}
          </p>
          <StoreBadges className="mt-5" />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Explore
          </p>
          <nav className="mt-3 flex flex-col gap-2 text-sm font-medium text-muted">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                scroll={link.href.startsWith("/#") ? false : undefined}
                className="transition hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/*
          NAP (Name / Address / Phone / email). Rendered in plain text so
          Google and AI crawlers can extract it. Mirrored in Organization
          JSON-LD. Keep this in sync with /support, both app stores, and
          any directory listings (Capterra, G2, Crunchbase, LinkedIn).
        */}
        <address className="not-italic">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Contact
          </p>
          <p className="mt-3 text-sm font-semibold text-ink">{c.name}</p>
          <p className="mt-1 text-sm leading-6 text-muted">
            {c.streetAddress}
            <br />
            {c.locality}, {c.region} {c.postalCode}
            <br />
            {c.country}
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            <a
              href={`mailto:${c.email}`}
              className="font-medium text-primary hover:underline"
            >
              {c.email}
            </a>
            <br />
            <span className="text-xs">{c.hours}</span>
          </p>
        </address>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-xs text-muted sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {c.name} {FOOTER.legal}
          </p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 font-medium">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
