import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";
import { readLegalDocument } from "@/lib/legal";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  const document = await readLegalDocument("privacy-policy");

  return {
    title: document.title,
    description: document.description,
    alternates: { canonical: "/privacy" },
    openGraph: {
      title: `${document.title} | Acorns Nest`,
      description: document.description,
      url: "/privacy",
      type: "article",
    },
  };
}

export default async function PrivacyPolicyPage() {
  const document = await readLegalDocument("privacy-policy");

  return <LegalPage document={document} />;
}
