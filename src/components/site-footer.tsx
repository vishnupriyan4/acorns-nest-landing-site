import { BrandMark } from "@/components/brand-mark";
import { FOOTER } from "@/lib/content";

const FOOTER_LINKS = [
  { href: "#product", label: "Product" },
  { href: "#roles", label: "Roles" },
  { href: "#ai", label: "Insights" },
  { href: "#demo", label: "Walkthrough" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <BrandMark size="sm" />
          <p className="mt-3 text-sm leading-6 text-muted">{FOOTER.blurb}</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-muted">
          {FOOTER_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-primary">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-border/60">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted sm:px-8">
          © {new Date().getFullYear()} Acorns Nest. {FOOTER.legal}
        </p>
      </div>
    </footer>
  );
}
