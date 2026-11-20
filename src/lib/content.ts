// Root-relative so the header keeps working from /privacy and /terms.
export const NAV_LINKS = [
  { href: "/#product", label: "Product" },
  { href: "/#roles", label: "Who it's for" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#get-the-app", label: "Get the app" },
] as const;

export const APP_STORES = {
  kicker: "Now on the App Store and Google Play",
  title: "Get the Acorns Nest daycare app on the phone already in the room.",
  body: "Scan a code with your camera, or tap the store that matches your phone. Your centre creates the account. Accept the invite with the code in your email, install the app, then sign in.",
  heroLabel: "Teachers and families",
  listings: [
    {
      id: "app-store",
      name: "App Store",
      platform: "iPhone and iPad",
      href: "https://apps.apple.com/ca/app/acorns-nest/id6806698503",
      badgeSrc: "/stores/app-store-badge.svg",
      badgeAlt: "Download on the App Store",
      badgeWidth: 120,
      badgeHeight: 40,
      qrSrc: "/stores/qr-app-store.png",
      qrAlt: "QR code that opens Acorns Nest on the App Store",
    },
    {
      id: "google-play",
      name: "Google Play",
      platform: "Android phones and tablets",
      href: "https://play.google.com/store/apps/details?id=com.acornsnest.app",
      badgeSrc: "/stores/google-play-badge.png",
      badgeAlt: "Get it on Google Play",
      badgeWidth: 155,
      badgeHeight: 60,
      qrSrc: "/stores/qr-play-store.png",
      qrAlt: "QR code that opens Acorns Nest on Google Play",
    },
  ],
} as const;

export const HERO = {
  eyebrow: "Built in Halifax for licensed childcare centres",
  headlineBefore: "The day,",
  headlineAfter: " written once.",
  tagline: "Daycare management software for licensed childcare centres in Canada.",
  subhead:
    "Teachers log attendance, meals, milk, diapers and naps once, in the room. You decide when families see the day: as it's logged, or at a time you set. You stop writing that day a second time. Attendance reports export in one click when someone asks.",
  offers: [
    { label: "Join our pilot", href: "#walkthrough" },
    {
      label: "Running a home daycare? The first 20 eligible join free.",
      href: "/home-daycare",
    },
    { label: "Conditions apply.", href: "/home-daycare" },
  ],
  primaryCta: "Book a walkthrough",
  secondaryCta: "Take a look around",
} as const;

export const MARQUEE_ITEMS = [
  "Attendance & check-in",
  "Nap logs",
  "Meal & milk logs",
  "Outing Mode",
  "Parent announcements",
  "Weekly menus",
  "Substitute timesheets",
  "Classroom rosters",
  "Attendance reports",
  "Allergy-aware profiles",
  "AI Insights",
  "Billing, your way",
] as const;

export const STATS = [
  {
    value: 4,
    suffix: "",
    label: "Roles reading one day",
    detail: "Director, teacher, parent, kitchen",
  },
  {
    value: 3,
    suffix: "",
    label: "Ways to slice attendance",
    detail: "Centre, classroom, and child",
  },
  {
    value: 3,
    suffix: "",
    label: "Meal slots, one tidy plan",
    detail: "Breakfast, lunch, evening snack",
  },
  {
    value: 1,
    suffix: "",
    label: "Record everyone trusts",
    detail: "Staff write it once. Everyone else just reads.",
  },
] as const;

export const STORY_SECTIONS = [
  {
    id: "staff-home",
    topic: "Classroom home",
    kicker: "Life on the floor",
    title: "Attendance and check-in: who's here, who's out, and who's off to the park.",
    body: "Open your room and the present count is already there, matched against the roster. Heading out? Outing Mode takes the destination and an expected return, then lets the families of children on the outing know where you went and when you're back. Tap any child for allergies, emergency contacts, and how their day is going.",
    bullets: [
      "A present count you can trust at a glance",
      "Outing Mode: destination, return time, parents in the loop",
      "Allergies and emergency contacts one tap from your thumb",
    ],
    screenshot: {
      stem: "staff-home",
      hint: "staff-home.mp4",
      kind: "mobile" as const,
      capture: "Staff → Classroom home, Outing Mode on",
    },
  },
  {
    id: "staff-log",
    topic: "Bulk Log",
    kicker: "One save, whole room",
    title: "Check the room in before the last coat is hung.",
    body: "Bulk Log covers check-in, meals, milk, diapers, and naps. Hit Select All when everyone floods in, then save on the current time or pick your own. Appointments get Mid-day Exit and Return. Start and end naps for one sleeper or the whole room, and yes, more than one nap a day.",
    bullets: [
      "Check In, Check Out, Mid-day Exit, and Return, notes included",
      "Meals, milk feeds, and diaper checks from the same screen",
      "Naps started and ended for one child or every mat in the room, or at a time you set",
    ],
    screenshot: {
      stem: "staff-log",
      hint: "staff-log.png",
      kind: "mobile" as const,
      capture: "Staff → Bulk Log, Check In selected",
    },
  },
  {
    id: "parent-history",
    topic: "Families",
    kicker: "On your clock",
    title: "Parent updates: you decide when the day reaches them.",
    body: "Parents do not check children in or out. You choose when meals, milk, diapers, and naps open for families. Outings and messages go the moment you send them. A teacher's post with photos waits for your OK first, unless you turn that off. A planned absence comes from the family. Today's absence is marked in the room.",
    bullets: [
      "The care log opens as it's logged, or at the time you choose",
      "Outings and announcements go out as soon as you send them",
      "History on the same child, from the record staff already saved",
    ],
    screenshot: {
      stem: "parent-history",
      hint: "parent-history.mp4",
      kind: "mobile" as const,
      capture: "Parent → History, 7 Days tab",
    },
  },
  {
    id: "director-desk",
    topic: "Director's desk",
    kicker: "The office work, once",
    title: "Menus, newsletters and attendance reports: the binder closes when the day does.",
    body: "Upload the menu PDF you already make, keep up to four saved weeks, and place them on the calendar. You can still change a single day. The week's notes and photos become a newsletter you review, then share with families, including as an announcement. Attendance for the centre, a room, or one child exports in one click when someone asks for it.",
    bullets: [
      "Menu weeks repeat from the PDF you already use",
      "Newsletter drafted from the room, ready for you to review and share",
      "Compliance-ready attendance report in one click",
      "Billing, your way. Keep your own records, or turn your invoices digital with our invoice tool, at no extra cost. Or let Acorns Nest collect tuition online for you through Stripe. If you take payments through Stripe, Stripe's processing fees apply, and we'll tell you what they are before you turn it on. Each centre chooses what fits.",
    ],
    screenshot: {
      stem: "reports",
      hint: "reports.png",
      kind: "desktop" as const,
      capture: "Director → Reports → Student Attendance",
    },
  },
  {
    id: "ai-insights",
    topic: "AI Insights",
    kicker: "From the logs the rooms already keep",
    title: "Your Monday recap, already written.",
    body: "AI Insights reads the records your team already saves and hands back a short briefing for the window you choose, plus the follow-ups actually worth your morning. No new forms, no week-in-review spreadsheet.",
    bullets: [
      "A briefing built from the day your rooms already logged",
      "Follow-ups you can act on from the desk",
      "Nothing extra to enter to make it worth opening",
    ],
    screenshot: {
      stem: "ai-insights",
      hint: "ai-insights.png",
      kind: "desktop" as const,
      capture: "Director → AI Insights",
    },
  },
] as const;

export const HERO_SHOTS = {
  classrooms: {
    stem: "classrooms",
    hint: "classrooms.png",
    capture: "Director → Classrooms",
  },
  parentHome: {
    stem: "parent-home",
    hint: "parent-home.png",
    capture: "Parent → Home",
  },
} as const;

export const ROLES_INTRO = {
  kicker: "Who it's for",
  title: "Four jobs, one day, told once: directors, teachers, kitchen staff and families.",
  body: "Directors, teachers, kitchen staff, and families each get the view that fits their hands. Underneath, it's the same attendance, the same meals, the same notes.",
} as const;

export const ROLES = [
  {
    id: "director",
    title: "Directors",
    kicker: "Admin web",
    summary: "The whole centre, without pacing the hallway.",
    points: [
      "Classrooms: present counts, active outings, and new rooms when you need them",
      "Invite staff and parents. Approve substitute hours before payroll.",
      "Menu from the PDF you already make. Newsletter you review and share.",
      "Attendance reports to export. Billing, your way. AI Insights",
    ],
  },
  {
    id: "staff",
    title: "Teachers",
    kicker: "Staff mobile",
    summary: "Log the day from the room, not the office PC.",
    points: [
      "Classroom home with the present tally and Outing Mode",
      "Bulk Log for attendance, naps, meals, milk, and diapers",
      "A classroom note or a private word to one family",
      "Notes and photos families never see, unless you put them in a newsletter",
    ],
  },
  {
    id: "parent",
    title: "Parents",
    kicker: "Family mobile",
    summary: "The day, as it's logged or at your set time. Staff do the sign-ins.",
    points: [
      "Home: where their child is, outings, absences, and today's menu",
      "Room, centre, and private notes. They do not check anyone in",
      "A planned absence they can send ahead",
      "History from the record the room already logged",
    ],
  },
  {
    id: "cook",
    title: "Kitchen",
    kicker: "Menus & dietary care",
    summary: "What the children ate, against the menu the director posted.",
    points: [
      "Today's menu is on parent home. Nothing taped to the door.",
      "Allergies and dietary needs on the child's card",
      "Teachers log intake in the room, and milk feeds in ounces or millilitres.",
      "Kitchen staff use the staff app in the rooms they're assigned to. The director plans the menu.",
    ],
  },
] as const;

export const CLASSROOM_DEMO = {
  kicker: "Try a classroom",
  title: "Go ahead, tap the room.",
  body: "A working mock of the staff log, no account needed. Check someone in, start a nap, log lunch, send the class to the park. Families see check-in and outings right away. Naps and meals show up as they're logged, or at your release time, whichever you choose.",
} as const;

export const HOW_IT_WORKS_INTRO = {
  kicker: "How a day runs",
  title: "Write it once. Share it when you're ready.",
} as const;

export const STEPS = [
  {
    title: "Coats off, room in",
    body: "Select All and check the room in, start naps when the mats come out, and keep allergy notes a tap from your thumb.",
  },
  {
    title: "You choose when families see it",
    body: "Meals, milk, diapers, and naps open as they're logged, or at the time you set. Outings and announcements go the moment staff hit send, and teacher photos wait for your OK if you want them to. Directors see the rooms all along.",
  },
  {
    title: "Doors closed, day recorded",
    body: "Attendance, substitute hours, and AI Insights turn tonight's logs into tomorrow's follow-up.",
  },
] as const;

export const AI_SECTION = {
  title: "The week, already read for you",
  body: "Directors open AI Insights and get a plain-English briefing from the logs the rooms already keep: where the centre is steady, and where a quick conversation would help.",
  note: "AI writes the first draft. You still decide the follow-up. We don't use your centre's records to train AI models. You can run the centre without opening AI Insights.",
  href: "/#ai",
} as const;

export const AI_SIGNALS = [
  {
    title: "The centre at a glance",
    body: "A read on whatever window you choose, without pacing three hallways or exporting two reports to find it.",
  },
  {
    title: "The next conversation, surfaced",
    body: "When a room or a family could use a follow-up, it's on a short list instead of buried in last month's numbers.",
  },
  {
    title: "No homework",
    body: "It runs on the logs your team already saves, and opens the same classrooms, messages, and reports you use every day.",
  },
] as const;

export const PRICING = {
  kicker: "Pricing",
  title: "Daycare management software pricing: one plan for your centre.",
  intro:
    "Acorns Nest Inc. offers one flat plan per centre, sized by how many children you care for. Every plan includes unlimited staff and family logins. We're working with licensed childcare centres in Atlantic Canada.",
  detail:
    "Pilot centres can ask for custom work when something in your building doesn't match the default flow. Book a walkthrough, name your centre, and we'll send pricing by email. If you're outside Atlantic Canada, you can still write in. We'll tell you straight if we're not ready in your province yet.",
  homeOfferBefore: "Running a daycare from your home? Acorns Nest is ",
  homeOfferLink: "free for the first 20 eligible daycares run from home",
  homeOfferHref: "/home-daycare",
  homeOfferAfter:
    ". Some features may differ, and we give at least 2 months' notice before the offer changes.",
  /** Cross-page links use #walkthrough (the form). Same-page hero links may use #demo. */
  walkthroughHref: "/#walkthrough",
  walkthroughCta: "Book a walkthrough",
  existingCentresBefore: "Question about your Acorns Nest Inc. account or invoice? Email ",
  existingCentresAfter: ". Weekdays, from Halifax.",
} as const;

export const ABOUT = {
  kicker: "About",
  title: "Built in Halifax for the room, not the back-office PC.",
  intro:
    "Acorns Nest Inc. makes daycare management software for licensed childcare centres. Teachers log the day from the floor. Directors run the centre from a web dashboard. Parents read the same record, as it's logged or at the time your centre sets.",
  story: [
    "We started Acorns Nest because the daily record in most centres still splits across paper, text threads, and an office computer nobody has time for at nap time.",
    "The product went live in 2026 with iOS, Android, and a director dashboard. We're based in Halifax, piloting with a licensed daycare centre now, and opening pilots across Atlantic Canada.",
  ],
  loadTitle: "Less rebuild, same logs",
  load: [
    "The day still has to be written once. Staff log check-in, meals, milk, diapers and naps in the room. Directors should not rebuild that into a Monday recap.",
    "AI Insights reads those logs and drafts a short briefing, plus the follow-ups worth a conversation. You decide what to do with it. We don't use your centre's records to train AI models. You can run the centre without opening it.",
  ],
  aiHref: "/#ai",
  aiCta: "See AI Insights",
  foundersTitle: "Who builds it",
  founders: [
    {
      name: "Vishnu Priyan Mahendran",
      role: "Co-founder and Director",
      bio: "Product and engineering. Works with directors at our pilot centre and on day-to-day product direction.",
    },
    {
      name: "Vignesh Moorthy",
      role: "Co-founder and Director",
      bio: "Product and engineering. Helps centres get from first walkthrough to staff and parents on the app.",
    },
  ],
  contactTitle: "Reach us",
  walkthroughHref: "/#walkthrough",
  walkthroughCta: "Book a walkthrough",
} as const;

export const NOVA_SCOTIA = {
  kicker: "Nova Scotia",
  title: "Daycare software for licensed centres in Nova Scotia.",
  intro:
    "Acorns Nest Inc. builds Acorns Nest in Halifax for the same daily work NS centres already do: check-in, naps, meals, parent messages, menus, and attendance records you can export when someone asks.",
  sections: [
    {
      title: "For directors and owners",
      body: "See every classroom on one screen. Run Menu Planner, Messages, substitute timesheets, and attendance reports by centre, room, or child. AI Insights reads the logs your team already keeps and surfaces follow-ups worth a morning conversation.",
    },
    {
      title: "For staff and families",
      body: "Teachers use Bulk Log in the room. Parents see their child's status, get outing alerts and announcements, and see the day's care record as it's logged or at the time you set. Teacher photos wait for your OK by default.",
    },
    {
      title: "Pilot in Atlantic Canada",
      body: "We are signing pilot centres across Atlantic Canada, including Nova Scotia. Pricing is by quote. Pilot centres can ask for custom work when their workflow needs something specific.",
    },
    {
      title: "Provincial fees and records",
      body: "Acorns Nest is not a subsidy filing system. Billing, your way. Keep your own records, or turn your invoices digital with our invoice tool, at no extra cost. Or let Acorns Nest collect tuition online for you through Stripe. If you take payments through Stripe, Stripe's processing fees apply, and we'll tell you what they are before you turn it on. Each centre chooses what fits. Either way, attendance and the daily care log are already in one place when paperwork is due.",
    },
    {
      title: "Built and supported from Halifax",
      body: "Built and supported from Halifax, Monday to Friday, 9 a.m. to 5 p.m. Atlantic Time.",
    },
  ],
  walkthroughHref: "/#walkthrough",
  walkthroughCta: "Book a walkthrough",
  pricingHref: "/pricing",
  pricingCta: "See pricing",
} as const;

export const CTA = {
  kicker: "See it with your kind of day",
  title: "Bring us a Tuesday. We'll walk it with you.",
  body: "We'll go through the director dashboard, Bulk Log, and the parent home using rooms, menus, and messages that look like yours.",
  bullets: [
    "Director tour: classrooms, reports, Menu Planner, Messages, AI Insights",
    "Staff and parent mobile: Home, Bulk Log, Inbox, History",
    "Bring a typical day. We'll map the product onto it.",
  ],
  submit: "Send my request",
  successTitle: "Talk soon.",
} as const;

export const BOOKING = {
  /** Public short link to the Google appointment schedule (opens in a new tab). */
  shareUrl: "https://calendar.app.google/iF9nF9D6DmjsN3aL7",
  /** Embeddable version of the same schedule (the short link blocks iframes). */
  embedUrl:
    "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0B5U9InBzcYgeQyPaOWdW3hbZTTDlIS3FsA7UeTuCeE1hxCdWm3J0w-M6AdNO0XrK1IXIJiL8O?gv=true",
  pageKicker: "Book a walkthrough",
  pageTitle: "Pick a time that works for you.",
  pageBody:
    "Choose any open slot below. It goes straight onto our calendar and Google emails you a confirmation with the meeting details.",
  fallbackPrompt: "Can't find a time that suits?",
  fallbackCta: "Send us a request instead",
} as const;

export const FOOTER = {
  blurb:
    "Daycare management software for licensed childcare centres across Canada. One day's record, shared with everyone who needs it.",
  legal: "Built in Halifax, Nova Scotia for centres that want calmer days and clearer records.",
  company: {
    name: "Acorns Nest Inc.",
    streetAddress: "5651 Ogilvie Street, Unit 411",
    locality: "Halifax",
    region: "NS",
    postalCode: "B3H 1B9",
    country: "Canada",
    countryCode: "CA",
    email: "support@acornsnest.com",
    hours: "Monday to Friday, 9 a.m. to 5 p.m. Atlantic Time",
    founders: ["Vishnu Priyan Mahendran", "Vignesh Moorthy"],
  },
} as const;

/**
 * Homepage FAQ. Each answer starts with the subject ("Acorns Nest…")
 * and ends with a complete fact — this is how LLMs quote.
 * Mirrored into FAQPage JSON-LD for Google/AI retrieval.
 */
export const HOMEPAGE_FAQ = [
  {
    question: "What is Acorns Nest?",
    answer:
      "Acorns Nest is daycare management software for licensed childcare centres in Canada, built by Acorns Nest Inc. in Halifax, Nova Scotia. Directors run the centre from a web dashboard; teachers, kitchen staff and parents use the iOS and Android app.",
  },
  {
    question: "What does Acorns Nest do?",
    answer:
      "Teachers log check-in, naps, meals, milk, and diapers once, in the room. Directors run menus, newsletters, messages, substitute hours, and attendance reports from that same record. You choose when families see the care log. Outings and announcements can go as soon as you send them.",
  },
  {
    question: "Who is Acorns Nest for?",
    answer:
      "Licensed childcare centres in Canada: directors, teachers and early childhood educators, substitutes, kitchen staff, and the parents and guardians of enrolled children.",
  },
  {
    question: "How do parents and staff get access?",
    answer:
      "There is no public sign-up. The centre invites each parent or staff member by email with a code. They accept the invite at acornsnest.com/accept-invite, install the app, and sign in.",
  },
  {
    question: "Does Acorns Nest send updates to parents in real time?",
    answer:
      "You decide. Meals, milk, diapers, and naps can open as staff log them, or all at once at a time the centre sets (6 p.m. unless you change it). Outings and announcements go out as soon as staff send them.",
  },
  {
    question: "How does Acorns Nest handle children's privacy?",
    answer:
      "Children do not have accounts. Acorns Nest does not sell personal information and does not use it for advertising. Data is processed on the centre's instructions. Our Privacy Policy sets out the detail.",
  },
  {
    question: "Where is Acorns Nest built?",
    answer:
      "Acorns Nest is built in Halifax, Nova Scotia by Acorns Nest Inc. The product is designed for licensed daycare centres across Canada.",
  },
  {
    question: "How much does Acorns Nest cost?",
    answer:
      "Acorns Nest has one flat plan per centre, sized by how many children you care for, with unlimited staff and family logins. We don't list prices on the site: book a walkthrough and we'll send yours by email. If you run a daycare from your home, Acorns Nest is free for the first 20 eligible daycares that join. Some features may differ, and we give at least 2 months' notice before the offer changes. Pilot centres in Atlantic Canada can ask for custom work. Start at acornsnest.com/#walkthrough or read acornsnest.com/pricing.",
    link: {
      phrase: "If you run a daycare from your home",
      href: "/home-daycare",
    },
  },
  {
    question: "Can families pay tuition in the app?",
    answer:
      "Yes, if your centre wants it. Billing, your way. Keep your own records, or turn your invoices digital with our invoice tool, at no extra cost. Or let Acorns Nest collect tuition online for you through Stripe. If you take payments through Stripe, Stripe's processing fees apply, and we'll tell you what they are before you turn it on. Each centre chooses what fits.",
  },
] as const;

export const SUPPORT_TOPICS = [
  "Signing in or invitations",
  "Notifications",
  "A record looks wrong",
  "Account deletion",
  "Privacy request",
  "Something else",
] as const;

export const SUPPORT = {
  kicker: "Support",
  title: "Help with Acorns Nest.",
  intro:
    "Acorns Nest Inc. builds Acorns Nest for licensed childcare centres. Your centre creates and manages the accounts, so your director can answer most questions fastest. For everything else, write to us and a person will read it.",
  contact: {
    email: "support@acornsnest.com",
    hours: "Monday to Friday, 9 a.m. to 5 p.m. Atlantic Time",
    reply: "We reply within one business day.",
    address: [
      "Acorns Nest Inc.",
      "5651 Ogilvie Street, Unit 411",
      "Halifax, Nova Scotia B3H 1B9",
      "Canada",
    ],
  },
  start: {
    title: "Getting into the app",
    steps: [
      {
        title: "Your centre invites you",
        body: "There is no public sign-up. Your director adds you as a parent, teacher, kitchen staff, or substitute, and an invitation arrives at the email address the centre has on file.",
      },
      {
        title: "Enter the code and sign in",
        body: "Open acornsnest.com/accept-invite, enter the code from the invitation, and choose a password. Then install the app and sign in with the same email. Parents land on their child's home screen; staff pick a classroom.",
      },
      {
        title: "Allow notifications",
        body: "Notifications carry outing alerts, messages from your centre, classroom visit updates, and, if your centre shares the day as it's logged, a short note when a meal, milk feed, nap or diaper check is saved. If you skipped the prompt, turn Acorns Nest back on under Settings, Notifications on your device.",
      },
    ],
  },
  faqs: [
    {
      question: "I never received my invitation.",
      answer:
        "Check your spam folder for a message from Acorns Nest, then ask your director to confirm the email address on your account and resend. The message contains a code, not a link. Enter it at acornsnest.com/accept-invite. Invitations go to the address the centre holds on file, which is often a work address for staff.",
    },
    {
      question: "I can't sign in or I forgot my password.",
      answer:
        "Use Forgot password on the sign-in screen and we'll email a reset link. If no email arrives within a few minutes, your account may be under a different address, so ask your director to check.",
    },
    {
      question: "Something in my child's record looks wrong.",
      answer:
        "Naps, meals, and attendance are logged by the teachers in the room, and allergies, contacts, and pickup lists are maintained by the centre. Raise it with your centre first, since they can correct it directly. Write to us if a correction won't save.",
    },
    {
      question: "Notifications aren't arriving.",
      answer:
        "Confirm notifications are enabled for Acorns Nest in your device settings, then sign out and back in so the app can re-register. Your centre chooses whether you see each entry as it's logged or the full care record at a set time. With a set time, you won't get an alert for each entry.",
    },
    {
      question: "Who can see information about my child?",
      answer:
        "Staff assigned to your child's classroom, your centre's director, and the guardians on that child's record. Acorns Nest does not sell personal information and does not use it for advertising. Our Privacy Policy sets out the detail.",
    },
    {
      question: "How do I delete my account?",
      answer:
        "Because accounts are created by your centre, deletion is handled by request rather than in the app. Email support@acornsnest.com from the address on the account, or ask your director to submit it, and include the account holder's name and the centre name.",
    },
  ],
  form: {
    title: "Send us a message",
    body: "Tell us what happened and which centre you're with. If you're writing about a specific child, use their first name only.",
    submit: "Send message",
    successTitle: "Message sent.",
    successBody: "We'll reply to the email address you left, usually within one business day.",
  },
} as const;

export const SCREENSHOT_STEMS = [
  HERO_SHOTS.classrooms.stem,
  HERO_SHOTS.parentHome.stem,
  ...STORY_SECTIONS.map((section) => section.screenshot.stem),
] as const;
