import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";
import { readLegalDocument } from "@/lib/legal";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  const document = await readLegalDocument("terms-of-use");

  return {
    title: document.title,
    description: document.description,
    alternates: { canonical: "/terms" },
    openGraph: {
      title: `${document.title} | Acorns Nest`,
      description: document.description,
      url: "/terms",
      type: "article",
    },
  };
}

export default async function TermsOfUsePage() {
  const document = await readLegalDocument("terms-of-use");

  return <LegalPage document={document} />;
}
