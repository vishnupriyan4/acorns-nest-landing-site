export const NAV_LINKS = [
  { href: "#product", label: "Product" },
  { href: "#roles", label: "Who it's for" },
  { href: "#ai", label: "Insights" },
] as const;

export const HERO = {
  eyebrow: "Childcare software built around the live day",
  headlineBefore: "See every classroom",
  headlineAfter: " while the day is still happening.",
  subhead:
    "Directors watch rooms, staff, menus, and reports from the admin. Teachers log check-in, naps, and lunch from the floor. Parents see if the class is out and today's menu during the day, then the care log once the centre publishes it.",
  primaryCta: "Book a walkthrough",
  secondaryCta: "See the product",
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
    label: "People who need the same day",
    detail: "Director, teacher, parent, kitchen",
  },
  {
    value: 3,
    suffix: "",
    label: "Ways to read attendance",
    detail: "Centre, classroom, and child",
  },
  {
    value: 4,
    suffix: "",
    label: "Meal slots, one weekly plan",
    detail: "Breakfast through afternoon snack",
  },
  {
    value: 1,
    suffix: "",
    label: "Log for the whole centre",
    detail: "Staff write it. Everyone else can see it.",
  },
] as const;

export const STORY_SECTIONS = [
  {
    id: "staff-home",
    topic: "Classroom home",
    kicker: "On the floor",
    title: "Who's in, who's out, and whether the class is on a trip.",
    body: "Teachers open the room and see the present count against the roster. When the group leaves the building, Outing Mode takes a destination and a return time, then tells parents so pickup can move with you. Tap a child for allergies, emergency contacts, and today's activity.",
    bullets: [
      "Present count on every child, against the room roster",
      "Outing Mode with destination, return time, and parent notice",
      "Child profiles one tap away for medical and emergency details",
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
    kicker: "The whole room, one save",
    title: "Check in the room before the coats are hung.",
    body: "Bulk Log covers Check In, Meals, and Naps. Select All when the room fills, then save with the current time or pick one. Mid-day Exit and Return cover appointments and sick leave. Nap timers start and stop for the children you selected, including more than one rest in a day.",
    bullets: [
      "Check In, Check Out, Mid-day Exit, and Return, with notes",
      "Meal intake in 25% steps, with infant milk in ounces",
      "Start and end nap timers for one child or the selected room",
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
    title: "Classroom notes land in the feed parents already open.",
    body: "Parents open Communicate and get a chronological card feed: public notes for the room or the centre, and private notes for their child. Teachers and directors write those cards. There is no second newsletter to keep in sync.",
    bullets: [
      "Public and private tabs, scoped to a classroom or the whole centre",
      "Date filter when a family needs last week, not only today",
      "New notes route into the same feed, including from the director desk",
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
    title: "Plan Monday's lunch. Parents see it Monday morning.",
    body: "Directors set Breakfast, Morning Snack, Lunch, and Afternoon Snack, Monday through Friday. Type the grid or upload a weekly PDF. The same slots appear on the parent home as today's menu, so the kitchen and the families are looking at one plan.",
    bullets: [
      "Week picker with a five-day meal grid",
      "PDF upload into the planner, then save the week",
      "Parent home reads the posted menu. No second copy on the fridge.",
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
    title: "Centre, classroom, or child. Then export the range.",
    body: "The Attendance Reporting Matrix groups occupancy the way you already talk about it: centre-wide, classroom by classroom, or child by child. Filter the dates, scan late and early flags, and download CSV. These are the same check-ins teachers saved in Bulk Log.",
    bullets: [
      "Centre-wide, classroom-level, and child-level views",
      "Date range up to a year, with a classroom filter",
      "Download CSV for the selected view",
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
    title: "Invite the team. Approve the hours that hit payroll.",
    body: "Staff Management is the roster: Teachers, substitutes and kitchen staff, assigned to rooms, with On duty where it matters. Directors review pending timesheets, approve or reject, and keep the history on Staff Timesheets.",
    bullets: [
      "Invite staff by type: lead, assistant, cook, or substitute",
      "Room lead and assistant assignment, with On duty on the card",
      "Timesheet approval for hourly substitutes",
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
    title: "Open one screen. Know what needs you.",
    body: "AI Insights sits on the director dashboard and reads the records staff already save. You get a briefing for the window you choose, and a short list of follow-ups, without recapping the week by hand.",
    bullets: [
      "A briefing from the day the rooms already logged",
      "Follow-ups you can take from the desk",
      "No extra data entry so the AI has something to say",
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
    title: "One note to the centre, a classroom, or a single family.",
    body: "Messages is Send and Inbox. Write to all parents, one classroom, or one child's family. Broadcasts can be General, Holiday, Field trip, or Picture day. Private notes can be Supply, Health, or Clothing. Inbox lists everything sent from the centre, including teacher notes.",
    bullets: [
      "Audience: whole daycare, one classroom, or one child's parents",
      "A category on the card so families know why it arrived",
      "Inbox with date, scope, classroom, and child filters",
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
    title: "Last week's naps and lunches, without asking at the door.",
    body: "Once the centre publishes the day, parents can look back at the same naps, meals, and attendance the teachers logged. Switch 1 Day, 7 Days, or 30 Days. It is the room's record, released when the care day wraps up.",
    bullets: [
      "1 Day, 7 Days, or 30 Days on the same child",
      "Meal intake readouts from the staff log",
      "Nap totals and attendance trend",
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
    title: "Allergies, pickups, and today's activity on one card.",
    body: "Staff open a child from the classroom list: attendance, naps, meals, medical allergies, dietary notes, emergency contacts, authorized pickups, and special instructions. Parents open the same child from Profile and see the classroom, status, and the details the centre keeps on file.",
    bullets: [
      "Medical allergies and dietary restrictions on the profile",
      "Emergency contacts and authorized pickups within reach on the floor",
      "Today's Activity timeline from attendance, nap, and meal logs",
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
  title: "Four jobs. One day's record.",
  body: "Directors, teachers, kitchen, and parents each get tools that fit how they work. Underneath, it is the same attendance, the same meals, and the same messages.",
} as const;

export const ROLES = [
  {
    id: "director",
    title: "Directors",
    kicker: "Admin web",
    summary: "The centre in view, without standing in the hallway.",
    points: [
      "Classroom Management: live tallies, Outing Mode, new learning spaces",
      "Invite staff and parents. Assign leads and assistants.",
      "Attendance reports at centre, classroom, and child",
      "Timesheet approval, Menu Planner, Messages, and AI Insights",
    ],
  },
  {
    id: "staff",
    title: "Teachers",
    kicker: "Staff mobile",
    summary: "Log the day from the room, not a back-office PC.",
    points: [
      "Classroom home with present tally and Outing Mode",
      "Bulk Log for attendance, nap timers, and meal intake",
      "Communicate: classroom notes or a private note to a family",
      "Child profiles with allergies, emergency contacts, and Quick Log",
    ],
  },
  {
    id: "parent",
    title: "Parents",
    kicker: "Family mobile",
    summary: "Know how the day went before you reach the door.",
    points: [
      "Home: check-in, Outing active, raise an absence, today's menu",
      "Communicate feed for classroom, centre-wide, and private notes",
      "History across 1, 7, and 30 days",
      "Child profile for the record the centre keeps on file",
    ],
  },
  {
    id: "cook",
    title: "Kitchen",
    kicker: "Menus & dietary care",
    summary: "The week's meals live where rooms and families already look.",
    points: [
      "Weekly Menu Planner: breakfast, morning snack, lunch, afternoon snack",
      "PDF into the grid, then the same slots on parent home",
      "Allergies and dietary restrictions on each child's profile",
      "Teachers log intake in 25% steps. Infant milk in ounces.",
    ],
  },
] as const;

export const CLASSROOM_DEMO = {
  kicker: "Try a classroom",
  title: "Tap the room. Watch the log move.",
  body: "A live mock of the staff log. No account needed. Toggle attendance, start a nap, cycle lunch, or send Outing Mode. Families see check-in and outings in the moment. Naps and meals publish with the day.",
} as const;

export const HOW_IT_WORKS_INTRO = {
  kicker: "How a day runs",
  title: "Write it once. Release it when you're ready.",
} as const;

export const STEPS = [
  {
    title: "Open the room",
    body: "Teachers Select All and Check In, start nap timers when rest begins, and keep allergy-aware profiles one tap away.",
  },
  {
    title: "Publish the day on your clock",
    body: "Naps, meals, and the day's care log stay in the room until the centre releases them, at the end of the day or at a time you set. Outing Mode and announcements can notify families as soon as staff choose to send them. Directors already have the live rooms.",
  },
  {
    title: "Close with a record",
    body: "Attendance layers, substitute timesheets, and AI Insights turn today's logs into tomorrow's follow-up.",
  },
] as const;

export const AI_SECTION = {
  title: "The week, already read for you",
  body: "Directors open AI Insights and get a briefing from the logs the rooms already keep. Where the centre is holding, and where a conversation might help. You still decide what to do.",
} as const;

export const AI_SIGNALS = [
  {
    title: "See the centre first",
    body: "A picture of the window you choose, without walking every hallway or exporting a report to find it.",
  },
  {
    title: "Know the next conversation",
    body: "When a room or a family needs a follow-up, it sits on a short list instead of hiding in last week's numbers.",
  },
  {
    title: "Stay in the product",
    body: "Insights open the same classrooms, messages, and reports you already use. Nothing extra to learn, and nothing extra to log.",
  },
] as const;

export const CTA = {
  kicker: "See it with your kind of day",
  title: "Walk the product against rooms that look like yours.",
  body: "We'll go through Classroom Management, Bulk Log, and the parent home with menus, messages, and attendance the way a real centre runs them.",
  bullets: [
    "Director tour: classrooms, reports, Menu Planner, Messages, AI Insights",
    "Staff and parent mobile: home, Bulk Log, Communicate, History",
    "Come with a typical day. We'll map the product onto it.",
  ],
  submit: "Book a walkthrough",
  successTitle: "We'll be in touch.",
} as const;

export const FOOTER = {
  blurb:
    "Childcare software for directors, teachers, kitchen teams, and families. The day's record, from the rooms to the people who need it.",
  legal: "Built for centres that want calmer days and clearer records.",
} as const;

export const SCREENSHOT_STEMS = [
  HERO_SHOTS.classrooms.stem,
  HERO_SHOTS.parentHome.stem,
  ...STORY_SECTIONS.map((section) => section.screenshot.stem),
] as const;
