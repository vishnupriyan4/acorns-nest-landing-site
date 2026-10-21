import type { Metadata } from "next";

import { AcceptInviteForm } from "@/components/invite/accept-invite-form";
import { Reveal } from "@/components/ui/reveal";

const description =
  "Enter the invitation code from your centre, choose a password, and install Acorns Nest. The same page works for staff and parents.";

export const metadata: Metadata = {
  title: "Accept invite",
  description,
  alternates: { canonical: "/accept-invite" },
  // Functional page, not a landing page — keep it out of search results.
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  openGraph: {
    title: "Accept invite | Acorns Nest",
    description,
    url: "/accept-invite",
    type: "website",
  },
};

export default function AcceptInvitePage() {
  return (
    <main className="pt-14 sm:pt-[72px]">
      <div className="mx-auto max-w-lg px-5 py-14 sm:px-8 sm:py-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Invitation
          </p>
          <h1 className="mt-3 font-brand text-[32px] leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Accept your invite.
          </h1>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
            Your centre already created the account. Open the link in the invitation, enter the
            code, then install the app.
          </p>
        </Reveal>
        <Reveal delayMs={60}>
          <div className="mt-8">
            <AcceptInviteForm />
          </div>
        </Reveal>
      </div>
    </main>
  );
}
