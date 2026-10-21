import { FOOTER, HOMEPAGE_FAQ } from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://acornsnest.com";

type JsonLd = Record<string, unknown>;

function JsonLdScript({ data, id }: { data: JsonLd | JsonLd[]; id: string }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      // JSON.stringify output is safe to inject here.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * JSON-LD for the homepage.
 *
 * Three graphs:
 *  - Organization: who Acorns Nest Inc. is (NAP, founders, country served).
 *  - WebSite: the site itself, so Google can resolve it as a brand entity.
 *  - SoftwareApplication: the product, which is what AI engines actually
 *    cite when answering "best daycare software in Canada".
 *
 * Separate <script> blocks for FAQPage so AI/Google can parse the FAQ
 * block independently (and so Google can show FAQ rich results).
 *
 * Do NOT add aggregateRating until you have genuine third-party reviews —
 * fake rating schema is a Google manual action risk.
 */
export function HomepageSchema() {
  const org: JsonLd = {
    "@type": "Organization",
    "@id": `${siteUrl}/#org`,
    name: FOOTER.company.name,
    alternateName: "Acorns Nest",
    url: `${siteUrl}/`,
    logo: `${siteUrl}/logo.png`,
    email: FOOTER.company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: FOOTER.company.streetAddress,
      addressLocality: FOOTER.company.locality,
      addressRegion: FOOTER.company.region,
      postalCode: FOOTER.company.postalCode,
      addressCountry: FOOTER.company.countryCode,
    },
    founder: FOOTER.company.founders.map((name) => ({
      "@type": "Person",
      name,
    })),
    areaServed: { "@type": "Country", name: "Canada" },
    sameAs: [
      "https://apps.apple.com/ca/app/acorns-nest/id6806698503",
      "https://play.google.com/store/apps/details?id=com.acornsnest.app",
    ],
  };

  const website: JsonLd = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: `${siteUrl}/`,
    name: "Acorns Nest",
    publisher: { "@id": `${siteUrl}/#org` },
    inLanguage: "en-CA",
  };

  const software: JsonLd = {
    "@type": "SoftwareApplication",
    "@id": `${siteUrl}/#app`,
    name: "Acorns Nest",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Childcare management software",
    operatingSystem: "iOS 15.1+, Android, Web (director dashboard)",
    description:
      "Daycare management app for licensed childcare centres in Canada: attendance and check-in, nap and meal logs, parent communication, weekly menus, staff timesheets, attendance reports and AI Insights.",
    url: `${siteUrl}/`,
    publisher: { "@id": `${siteUrl}/#org` },
    inLanguage: "en-CA",
    downloadUrl: [
      "https://apps.apple.com/ca/app/acorns-nest/id6806698503",
      "https://play.google.com/store/apps/details?id=com.acornsnest.app",
    ],
    // Add `offers` once pricing is published. Omit aggregateRating until
    // there are genuine third-party reviews (fake ratings risk a manual action).
  };

  const faq: JsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOMEPAGE_FAQ.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  const graph: JsonLd = {
    "@context": "https://schema.org",
    "@graph": [org, website, software],
  };

  return (
    <>
      <JsonLdScript id="ld-homepage" data={graph} />
      <JsonLdScript id="ld-faq" data={faq} />
    </>
  );
}
