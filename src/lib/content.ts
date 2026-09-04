export const NAV_LINKS = [
  { href: "#product", label: "Product" },
  { href: "#roles", label: "Who it's for" },
  { href: "#ai", label: "Insights" },
] as const;

export const HERO = {
  eyebrow: "Built for the busiest room in the building",
  headlineBefore: "See every classroom",
  headlineAfter: " while the day is in full swing.",
  subhead:
    "Directors get the whole centre on one screen. Teachers log check-in, naps, and lunch from the room, one save at a time. Parents see today's menu and outing news as it happens, then the full care log the moment you publish it.",
  primaryCta: "Book a walkthrough",
  secondaryCta: "Take a look around",
} as const;

export const MARQUEE_ITEMS = [
  "Attendance & check-in",
  "Nap timers",
  "Meal & milk logs",
  "Outing Mode",
  "Parent announcements",
  "Weekly menus",
  "Staff timesheets",
  "Classroom rosters",
  "Attendance reports",
  "Allergy-aware profiles",
  "AI Insights",
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
    value: 4,
    suffix: "",
    label: "Meal slots, one tidy plan",
    detail: "Breakfast through afternoon snack",
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
    title: "Who's here, who's out, and who's off to the park.",
    body: "Open your room and the present count is already there, matched against the roster. Heading out? Outing Mode takes the destination and a return time, then tells parents so pickup meets you where you actually are. Tap any child for allergies, emergency contacts, and how their day is going.",
    bullets: [
      "A present count you can trust at a glance",
      "Outing Mode: destination, return time, parents in the loop",
      "Allergies and emergency contacts one tap from your thumb",
    ],
    screenshot: {
      stem: "staff-home",
      hint: "staff-home.gif",
      kind: "mobile" as const,
      capture: "Staff → Classroom home, Outing Mode on",
    },
  },
  {
    id: "staff-log",
    topic: "Bulk Log",
    kicker: "One save, whole room",
    title: "Check the room in before the last coat is hung.",
    body: "Bulk Log covers Check In, Meals, and Naps. Hit Select All when everyone floods in, then save on the current time or pick your own. Appointments and early pickups get Mid-day Exit and Return. Nap timers run for one sleeper or the whole room, and yes, more than one nap a day.",
    bullets: [
      "Check In, Check Out, Mid-day Exit, and Return, notes included",
      "Meal intake in 25% steps, infant milk in ounces",
      "Nap timers for one child or every mat in the room",
    ],
    screenshot: {
      stem: "staff-log",
      hint: "staff-log.png",
      kind: "mobile" as const,
      capture: "Staff → Bulk Log, Check In selected",
    },
  },
  {
    id: "parent-communicate",
    topic: "Communicate",
    kicker: "What families actually read",
    title: "Notes that land where parents are already looking.",
    body: "Communicate is a clean card feed: room and centre notes out in the open, a quiet word about one child kept private. Teachers and directors write the cards, so there's no newsletter to rebuild every Friday afternoon.",
    bullets: [
      "Public and private tabs, per classroom or centre-wide",
      "A date filter for the parent asking about last Tuesday",
      "Notes from the director desk land in the same feed",
    ],
    screenshot: {
      stem: "parent-communicate",
      hint: "parent-communicate.png",
      kind: "mobile" as const,
      capture: "Parent → Communicate, public feed",
    },
  },
  {
    id: "menu-planner",
    topic: "Menu Planner",
    kicker: "The week on a grid",
    title: "Plan Monday's lunch once. Monday takes care of itself.",
    body: "Fill Breakfast, Morning Snack, Lunch, and Afternoon Snack from Monday to Friday. Type straight into the grid or drop in the weekly PDF you already make. The same slots show up on parent home as today's menu, so the kitchen and the families are finally reading one plan.",
    bullets: [
      "Week picker with a five-day meal grid",
      "Upload the PDF you already have, then save the week",
      "Today's menu on parent home. Nothing taped to the door.",
    ],
    screenshot: {
      stem: "menu-planner",
      hint: "menu-planner.png",
      kind: "desktop" as const,
      capture: "Director → Menu Planner, week grid filled",
    },
  },
  {
    id: "reports",
    topic: "Attendance reports",
    kicker: "How directors already think",
    title: "Centre, classroom, or child. Pick a lens and export.",
    body: "Attendance groups the way you already talk about it in a staff meeting: the whole centre, room by room, or one child. Filter the dates, spot the late arrivals and early pickups, then download the CSV for whoever's asking. Same check-ins your teachers saved in Bulk Log.",
    bullets: [
      "Centre-wide, classroom, and child views",
      "Any date range up to a year, filtered by room",
      "CSV download for the view you're looking at",
    ],
    screenshot: {
      stem: "reports",
      hint: "reports.png",
      kind: "desktop" as const,
      capture: "Director → Reports → Student Attendance",
    },
  },
  {
    id: "staff-management",
    topic: "Staff & timesheets",
    kicker: "The people in the rooms",
    title: "Invite the team. Approve the hours. Get back to the floor.",
    body: "Your roster in one place: teachers, substitutes, and kitchen staff, assigned to rooms, with On duty right on the card. Pending timesheets wait for your approve or reject, and the history stays put for payroll week.",
    bullets: [
      "Invite by role: lead, assistant, cook, or substitute",
      "Room assignments with On duty on the card",
      "Timesheet approval before payroll, not after",
    ],
    screenshot: {
      stem: "staff-management",
      hint: "staff-management.png",
      kind: "desktop" as const,
      capture: "Director → Staff Management, roster",
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
  {
    id: "messages",
    topic: "Messages",
    kicker: "From the director desk",
    title: "The whole centre, one room, or one family.",
    body: "Send and Inbox, that's the whole idea. Write to every parent, a single classroom, or one child's family. Tag it so families know at a glance whether it's picture day or a nudge about spare clothes. Inbox keeps everything the centre has sent, teacher notes included.",
    bullets: [
      "Audience: whole daycare, one classroom, or one family",
      "A category on every card, so nobody has to guess",
      "Inbox filters by date, scope, classroom, and child",
    ],
    screenshot: {
      stem: "messages",
      hint: "messages.png",
      kind: "desktop" as const,
      capture: "Director → Messages → Send",
    },
  },
  {
    id: "parent-history",
    topic: "History",
    kicker: "After pickup",
    title: "“How did she nap?” Answered before anyone asks.",
    body: "When you publish the day, families can look back at the same naps, meals, and attendance your teachers logged. One day, seven days, or thirty. It's the room's record, released on your schedule.",
    bullets: [
      "1 Day, 7 Days, or 30 Days on the same child",
      "Meal intake straight from the staff log",
      "Nap totals and the attendance trend",
    ],
    screenshot: {
      stem: "parent-history",
      hint: "parent-history.png",
      kind: "mobile" as const,
      capture: "Parent → History, 7 Days tab",
    },
  },
  {
    id: "child-profile",
    topic: "Child profile",
    kicker: "On file, on the floor",
    title: "Allergies, pickups, and the day so far. One card.",
    body: "Open a child from your room list and it's all there: attendance, naps, meals, allergies, dietary notes, emergency contacts, authorized pickups, and any special instructions. Parents see the same profile, so the details on file are the details everyone's working from.",
    bullets: [
      "Allergies and dietary needs right at the top",
      "Emergency contacts and authorized pickups, no filing cabinet",
      "Today's activity, built from the logs your team saved",
    ],
    screenshot: {
      stem: "child-profile",
      hint: "child-profile.png",
      kind: "mobile" as const,
      capture: "Staff → Classroom home → child row",
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
  title: "Four jobs. One day, told once.",
  body: "Directors, teachers, kitchen, and families each get the view that fits their hands. Underneath, it's the same attendance, the same meals, the same notes.",
} as const;

export const ROLES = [
  {
    id: "director",
    title: "Directors",
    kicker: "Admin web",
    summary: "The whole centre, without pacing the hallway.",
    points: [
      "Classroom Management: live tallies, Outing Mode, new learning spaces",
      "Invite staff and parents. Assign your leads and assistants.",
      "Attendance at centre, classroom, and child level",
      "Timesheets, Menu Planner, Messages, and AI Insights",
    ],
  },
  {
    id: "staff",
    title: "Teachers",
    kicker: "Staff mobile",
    summary: "Log the day from the room, not the office PC.",
    points: [
      "Classroom home with the present tally and Outing Mode",
      "Bulk Log for attendance, nap timers, and meal intake",
      "Communicate: a classroom note or a private word to one family",
      "Child profiles with allergies, contacts, and Quick Log",
    ],
  },
  {
    id: "parent",
    title: "Parents",
    kicker: "Family mobile",
    summary: "Know how the day went before the car door shuts.",
    points: [
      "Home: check-in, outings, absences, and today's menu",
      "Communicate feed for classroom, centre, and private notes",
      "History across 1, 7, and 30 days",
      "The profile the centre keeps on file",
    ],
  },
  {
    id: "cook",
    title: "Kitchen",
    kicker: "Menus & dietary care",
    summary: "This week's meals, where rooms and families already look.",
    points: [
      "Weekly Menu Planner: breakfast, morning snack, lunch, afternoon snack",
      "PDF into the grid, then straight onto parent home",
      "Allergies and dietary restrictions on every child's profile",
      "Teachers log intake in 25% steps. Infant milk in ounces.",
    ],
  },
] as const;

export const CLASSROOM_DEMO = {
  kicker: "Try a classroom",
  title: "Go ahead, tap the room.",
  body: "A working mock of the staff log, no account needed. Check someone in, start a nap, nudge lunch along, send the class to the park. Families see check-in and outings right away. Naps and meals go out when you publish the day.",
} as const;

export const HOW_IT_WORKS_INTRO = {
  kicker: "How a day runs",
  title: "Write it once. Share it when you're ready.",
} as const;

export const STEPS = [
  {
    title: "Coats off, room in",
    body: "Select All and check the room in, start nap timers when the mats come out, and keep allergy notes a tap from your thumb.",
  },
  {
    title: "Publish on your clock",
    body: "Naps, meals, and the day's care log stay in the room until you release them, at the end of the day or a time you set. Outings and announcements can go out the moment staff hit send. Directors see the live rooms all along.",
  },
  {
    title: "Doors closed, day recorded",
    body: "Attendance, substitute hours, and AI Insights turn tonight's logs into tomorrow's follow-up.",
  },
] as const;

export const AI_SECTION = {
  title: "The week, already read for you",
  body: "Directors open AI Insights and get a plain-English briefing from the logs the rooms already keep: where the centre is steady, and where a quick conversation would help. Every call is still yours.",
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

export const CTA = {
  kicker: "See it with your kind of day",
  title: "Bring us a Tuesday. We'll walk it with you.",
  body: "We'll go through the director dashboard, Bulk Log, and the parent home using rooms, menus, and messages that look like yours.",
  bullets: [
    "Director tour: classrooms, reports, Menu Planner, Messages, AI Insights",
    "Staff and parent mobile: home, Bulk Log, Communicate, History",
    "Bring a typical day. We'll map the product onto it.",
  ],
  submit: "Book a walkthrough",
  successTitle: "Talk soon.",
} as const;

export const FOOTER = {
  blurb:
    "Childcare software for directors, teachers, kitchen teams, and families. One day's record, shared with everyone who needs it.",
  legal: "Built for centres that want calmer days and clearer records.",
} as const;

export const SCREENSHOT_STEMS = [
  HERO_SHOTS.classrooms.stem,
  HERO_SHOTS.parentHome.stem,
  ...STORY_SECTIONS.map((section) => section.screenshot.stem),
] as const;
