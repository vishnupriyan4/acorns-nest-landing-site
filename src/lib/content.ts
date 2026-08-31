export const NAV_LINKS = [
  { href: "#product", label: "Product" },
  { href: "#features", label: "Features" },
  { href: "#roles", label: "Who it's for" },
  { href: "#ai", label: "AI Insights" },
] as const;

export const MARQUEE_ITEMS = [
  "Attendance & check-in",
  "Nap timers",
  "Meal & milk logs",
  "Outing Mode",
  "Parent announcements",
  "Event RSVPs",
  "Weekly menus",
  "Staff timesheets",
  "Classroom rosters",
  "AI operational insights",
  "Attendance reports",
  "Allergy-aware profiles",
] as const;

export const STATS = [
  { value: 4, suffix: "", label: "Roles in one nest", detail: "Directors, teachers, parents, kitchen" },
  { value: 12, suffix: "+", label: "Daily workflows", detail: "From the first check-in to pickup" },
  { value: 3, suffix: "", label: "Report layers", detail: "Centre, classroom, and child" },
  { value: 1, suffix: "", label: "Shared source of truth", detail: "Staff logs, parents see it live" },
] as const;

export const FEATURES = [
  {
    id: "attendance",
    title: "Attendance that keeps pace",
    body: "Teachers check children in and out with live timestamps, mid-day sick leave, and a Mark All Present action when the room fills at once.",
    accent: "primary",
  },
  {
    id: "naps",
    title: "Millisecond nap timers",
    body: "Start one child or the whole room. Multiple naps accumulate into a daily total, with a manual picker when you need to correct a window.",
    accent: "info",
  },
  {
    id: "meals",
    title: "Meals, snacks & infant milk",
    body: "Log intake in 25% steps, track formula or expressed milk in ounces, and surface the same numbers on the parent home view.",
    accent: "warning",
  },
  {
    id: "comms",
    title: "Parent communication",
    body: "Broadcast announcements by classroom, preview the card before you send, and keep a chronological feed families actually read.",
    accent: "primary",
  },
  {
    id: "outing",
    title: "Outing Mode",
    body: "Flip a toggle, add a destination and return time, and parents are notified so pickup plans can move with the group.",
    accent: "success",
  },
  {
    id: "reports",
    title: "Director reporting matrix",
    body: "Group attendance by centre, classroom, or child. Export ranges, review hourly timesheets, and approve shifts before payroll.",
    accent: "info",
  },
] as const;

export const ROLES = [
  {
    id: "director",
    title: "Directors",
    kicker: "Admin dashboard",
    summary: "See the whole centre without standing in the hallway.",
    points: [
      "Classroom console with live tallies and Outing Mode",
      "Staff provisioning, invitations, and timesheet approval",
      "Attendance reports at centre, room, and child level",
      "AI Insights on naps, attendance, and engagement",
    ],
  },
  {
    id: "staff",
    title: "Teachers",
    kicker: "Staff mobile app",
    summary: "Log the day from the floor, not a back-office PC.",
    points: [
      "Bulk attendance, naps, and meals in one log",
      "Child profiles with allergies and emergency contacts",
      "Direct messages and classroom broadcasts",
      "Digital punch-clock for hourly support staff",
    ],
  },
  {
    id: "parent",
    title: "Parents",
    kicker: "Family mobile app",
    summary: "Know how the day went before pickup.",
    points: [
      "Live attendance, nap, and meal readouts",
      "Announcement feed matched to their classroom",
      "Event schedule with one-tap RSVP",
      "Outing alerts when the group leaves site",
    ],
  },
  {
    id: "cook",
    title: "Kitchen",
    kicker: "Menu & nutrition",
    summary: "Plan the week and stay aligned with the rooms.",
    points: [
      "Weekly menus across breakfast, snacks, and lunch",
      "Intake logs that flow back to families",
      "Infant milk type and ounce tracking",
      "Centre-wide visibility for dietary notes",
    ],
  },
] as const;

export const STEPS = [
  {
    title: "Open the room",
    body: "Teachers mark the classroom present, start nap timers, and keep allergy-aware profiles one tap away.",
  },
  {
    title: "The nest stays in sync",
    body: "Meals, milk, outings, and announcements write once. Directors and parents read the same record in real time.",
  },
  {
    title: "Close the day with insight",
    body: "Attendance matrices, timesheets, and AI trend cards turn the day's logs into decisions for tomorrow.",
  },
] as const;

export const AI_SIGNALS = [
  {
    title: "Attendance anomalies",
    body: "Spot unusual absence clusters by classroom before they become a staffing problem.",
  },
  {
    title: "Nap pattern trends",
    body: "See which rooms are logging shorter rest windows and whether totals are drifting week over week.",
  },
  {
    title: "Engagement signals",
    body: "Surface activity and communication patterns so directors can coach, not just compile reports.",
  },
] as const;

export const SCREENSHOTS = [
  {
    id: "admin-classrooms",
    src: "/screenshots/admin-classrooms.png",
    label: "Director · Classrooms",
    caption: "Room cards, live occupancy, and Outing Mode in the admin dashboard.",
    kind: "desktop" as const,
    mock: "classrooms" as const,
  },
  {
    id: "admin-reports",
    src: "/screenshots/admin-reports.png",
    label: "Director · Reports",
    caption: "Centre, classroom, and child attendance with export-ready ranges.",
    kind: "desktop" as const,
    mock: "reports" as const,
  },
  {
    id: "mobile-staff",
    src: "/screenshots/mobile-staff-dashboard.png",
    label: "Staff · Classroom",
    caption: "Present tally, outing toggle, and child rows on the teacher home.",
    kind: "mobile" as const,
    mock: "staff" as const,
  },
  {
    id: "mobile-parent",
    src: "/screenshots/mobile-parent-home.png",
    label: "Parent · Today",
    caption: "A child's attendance, meals, and rest recap on the family home.",
    kind: "mobile" as const,
    mock: "parent" as const,
  },
] as const;

export const PRODUCT_VIEWS = [
  {
    id: "director",
    label: "Director dashboard",
    eyebrow: "Admin web",
    title: "Macro oversight without losing the room.",
    body: "Directors run classrooms, staff, menus, and reports from a wide cream canvas — the same purple brand language as the mobile nest.",
    screenshot: SCREENSHOTS[0],
    bullets: [
      "Live classroom console with staff assignments",
      "Timesheet review before payroll",
      "Multi-level attendance analytics",
    ],
  },
  {
    id: "staff",
    label: "Staff app",
    eyebrow: "Mobile-first",
    title: "Built for the floor, not a desktop.",
    body: "Teachers log attendance, naps, and meals in bulk, then open a child profile for allergies, emergency contacts, or a parent message.",
    screenshot: SCREENSHOTS[2],
    bullets: [
      "Bulk log for attendance, naps, and meals",
      "Outing Mode with parent notification",
      "Voice-ready observation notes on the roadmap",
    ],
  },
  {
    id: "parent",
    label: "Parent app",
    eyebrow: "Family view",
    title: "Transparent days, calmer pickups.",
    body: "Parents see the same attendance, nap, and nutrition record staff just logged — plus announcements, events, and outing alerts.",
    screenshot: SCREENSHOTS[3],
    bullets: [
      "Daily health and intake readouts",
      "Classroom announcement feed",
      "RSVP that flips from interested to Going",
    ],
  },
] as const;
