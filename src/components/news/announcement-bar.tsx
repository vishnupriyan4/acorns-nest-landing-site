import Link from "next/link";

import { PP_HOME, PP_PATH } from "@/lib/news/point-pleasant";

/**
 * Slim homepage bar under the fixed header. Not sticky; scrolls away.
 * Server-rendered with a fixed spot in the flow, so it causes no layout shift.
 * Lives outside <main> so the complementary landmark stays top level.
 */
export function AnnouncementBar() {
  return (
    <aside aria-label="Announcement" className="mt-14 bg-primary-muted sm:mt-[72px]">
      <p className="mx-auto min-h-11 max-w-6xl px-5 py-2.5 text-center text-sm leading-6 text-ink sm:px-8">
        <span className="hidden sm:inline">{PP_HOME.bannerText} </span>
        <Link
          href={PP_PATH}
          className="font-semibold text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {PP_HOME.readLink}
        </Link>
      </p>
    </aside>
  );
}
