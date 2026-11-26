/**
 * Point Pleasant Founding Advisory Committee announcement.
 *
 * Copy is approved word for word (see spec/point-pleasant-announcement-cursor-spec.md, local only).
 * Do not reword. Strings carry no surrounding quote marks; the Testimonial
 * component adds typographic quotes.
 */

/**
 * Go-live switch. While false the page is `noindex, nofollow` and stays out of
 * the sitemap. Flip to true only after the gates in the spec are met (Point
 * Pleasant approves wording and quotes, Vishnu approves the preview). The
 * llms.txt News line is added by hand in the same go-live commit.
 */
export const PP_ANNOUNCEMENT_LIVE = false;

/** Single source for every date on the page, in America/Halifax (AST, UTC-4). */
export const PP_PUBLISHED_ISO = "2026-11-30T09:00:00-04:00";
export const PP_PUBLISHED_LABEL = "November 30, 2026";

export const PP_PATH = "/news/point-pleasant-founding-advisory-committee";

export const PP_ORG = "Point Pleasant Child Care Centre";

export const PP_META = {
  title: "Point Pleasant Child Care Centre Joins Acorns Nest | Halifax",
  description:
    "Halifax's Point Pleasant Child Care Centre is the first member of the Acorns Nest Founding Advisory Committee, helping shape childcare software for directors.",
  imageAlt:
    "Point Pleasant Child Care Centre and Acorns Nest: Point Pleasant Child Care Centre joins the Acorns Nest Founding Advisory Committee",
} as const;

export const PP_ARTICLE = {
  h1: "Point Pleasant Child Care Centre joins the Acorns Nest Founding Advisory Committee",
  subhead: "A Halifax centre, helping shape the app built for directors like them.",
  bannerAlt:
    "Acorns Nest and Point Pleasant Child Care Centre logos side by side under the heading Founding Advisory Committee",
  /** Rendered as: `${leadBefore}<time>${PP_PUBLISHED_LABEL}</time>${leadAfter}` */
  leadBefore: "Halifax, Nova Scotia, ",
  leadAfter:
    ": Point Pleasant Child Care Centre has joined Acorns Nest, a Halifax-built childcare management app for daycare directors, as the first member of its Founding Advisory Committee.",
  intro: [
    "We're proud to share that Point Pleasant Child Care Centre has joined Acorns Nest as the first member of our Founding Advisory Committee, as our Founding Advisory Partner.",
    "Point Pleasant has been using Acorns Nest in their rooms since August 2026. Since then, we've been refining the app with them, feature by feature, around the real demands of a licensed centre, including the records and licensing requirements every director has to meet. Having a licensed centre here at home choose to keep building with us is a milestone for our small team, and one we don't take lightly.",
  ],
  committee: {
    title: "Introducing the Founding Advisory Committee",
    body: [
      "The Founding Advisory Committee is a small group of licensed childcare centres who help guide how Acorns Nest grows. Its members are directors and educators who live the realities of a centre every day, and they bring that experience to the table as we build.",
      "We created the committee because we believe childcare software should be shaped by the people who use it, not designed from the outside. Directors know where the pressure in a day really comes from. Educators know what helps in the room and what gets in the way. Families know what gives them peace of mind. The committee brings those voices into Acorns Nest from the very beginning.",
    ],
  },
  bothSides: {
    title: "Both sides of the day, covered",
    intro:
      "Every childcare day has two sides: the director running the centre, and the parent waiting to hear how their child's day went. Acorns Nest is built to see both.",
    cards: [
      {
        lead: "The director's view, from our Founding Advisory Committee.",
        body: "Point Pleasant and future committee members bring the realities of running a licensed centre straight into how we build: the pressure, the pace, and what actually helps a team get through the day.",
      },
      {
        lead: "The parent's view, from our founders.",
        body: "One of our founders is a parent himself. He knows the questions a parent asks at pickup, and the quiet worry of wondering how their child's day went.",
      },
    ],
    outro:
      "Bringing both together means families get the confidence they're looking for, and directors and staff aren't stretched thin to provide it. That's the balance Acorns Nest is built on.",
  },
  why: {
    title: "Why it matters",
    intro:
      "A product built only by its makers can drift away from real life. The committee keeps us grounded. It helps us make sure that:",
    bullets: [
      "what we build solves real problems that directors face, not imagined ones",
      "the app supports educators instead of adding to their workload",
      "families stay informed without putting pressure on staff",
      "the product stays calm, practical and true to how licensed centres in Nova Scotia actually run",
    ],
    outro:
      "Their guidance helps shape our priorities. The responsibility for the product, and for getting it right, stays with us.",
  },
  whyPp: {
    title: "Why Point Pleasant",
    body: "Point Pleasant has seen Acorns Nest up close, in real rooms on real days. They've been candid with us about what works and what doesn't, and they care deeply about the children, families and team in their centre. That combination of hands-on experience and honesty is exactly what a founding partner should bring. For a young company, there's no stronger vote of confidence than a centre choosing to keep building with us.",
  },
  everywhere: {
    title: "What it means for directors everywhere",
    body: "For every director who uses Acorns Nest, the committee is our promise of quality. The features you rely on are shaped by people who do the work you do and who hold us to a high standard. As we grow, that grounding stays with us, so the product stays practical, reliable and built to make your day lighter.",
  },
  halifax: {
    title: "Made in Halifax, for Nova Scotia",
    /** "licensed centres in Nova Scotia and Atlantic Canada" links to /nova-scotia. */
    before: "Acorns Nest is built here by a local team, for ",
    linkText: "licensed centres in Nova Scotia and Atlantic Canada",
    linkHref: "/nova-scotia",
    after:
      ". The Founding Advisory Committee keeps that local connection at the heart of what we do.",
  },
  pilot: {
    title: "Become a pilot centre",
    body: [
      "We're welcoming a small number of licensed Nova Scotia centres to pilot Acorns Nest. Pilot centres work closely with our team, see what's coming before others do, and help shape the product from the ground up. Seats on our Founding Advisory Committee are offered to centres from our pilot group, so piloting is the first step toward a seat at the table.",
      "If you're a director who wants a real voice in the tools your centre uses, we'd love to hear from you.",
    ],
    primaryCta: { label: "Express pilot interest", href: "/#walkthrough" },
    secondaryCta: { label: "Book a director walkthrough", href: "/book" },
  },
  closing: {
    line: "Built for the director's day, with families kept close.",
    cta: { label: "See how Acorns Nest works", href: "/#product" },
  },
} as const;

export const PP_QUOTES = {
  director:
    "We've been approached by many of the leading apps in the industry. They all focus on the parent side, which puts more pressure on directors and staff. Acorns Nest is built around what a director actually needs, keeping parents in mind without losing that focus.",
  educator:
    "At another centre I worked at, the app required two photos per child every day, so it felt like a sales app. Acorns Nest has zero pressure. It eases my day-to-day reporting and makes my day simpler.",
} as const;

/** Visible FAQ and FAQPage JSON-LD read from this one list, so they always match. */
export const PP_FAQ = [
  {
    question: "What is the Acorns Nest Founding Advisory Committee?",
    answer:
      "The Founding Advisory Committee is a small group of licensed childcare centres who help guide how Acorns Nest grows. Its members are directors and educators who live the realities of a centre every day, and they bring that experience to the table as we build.",
  },
  {
    question: "Who is the first member?",
    answer:
      "Point Pleasant Child Care Centre has joined Acorns Nest as the first member of our Founding Advisory Committee, as our Founding Advisory Partner.",
  },
  {
    question: "How can a centre join?",
    answer:
      "We're welcoming a small number of licensed Nova Scotia centres to pilot Acorns Nest. Pilot centres work closely with our team, see what's coming before others do, and help shape the product from the ground up. Seats on our Founding Advisory Committee are offered to centres from our pilot group, so piloting is the first step toward a seat at the table. If you're a director who wants a real voice in the tools your centre uses, we'd love to hear from you.",
  },
] as const;

/** Homepage banner and teaser. */
export const PP_HOME = {
  bannerText: "Point Pleasant Child Care Centre joins our Founding Advisory Committee",
  readLink: "Read: Point Pleasant joins our Founding Advisory Committee",
  teaserTitle: "Point Pleasant Child Care Centre joins our Founding Advisory Committee",
  teaserBody: PP_ARTICLE.intro[0],
} as const;
