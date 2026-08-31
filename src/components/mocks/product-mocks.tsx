const AVATARS = ["#fdba74", "#c4b5fd", "#86efac", "#fca5a5", "#93c5fd"] as const;

function Initials({ name, color }: { name: string; color: string }) {
  return (
    <span
      className="flex size-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-foreground"
      style={{ background: color }}
    >
      {name}
    </span>
  );
}

export function AdminClassroomsMock() {
  return (
    <div className="flex h-full bg-surface text-[11px] leading-tight">
      <aside className="hidden w-[22%] flex-col border-r border-border/70 bg-cream p-3 sm:flex">
        <p className="font-brand text-[13px] text-primary">Acorns Nest</p>
        <p className="mb-3 text-[10px] text-muted">Admin Dashboard</p>
        {["AI Insights", "Reports", "Menus", "Classrooms", "Staff"].map((item, i) => (
          <div
            key={item}
            className={`relative mb-0.5 rounded-lg px-2.5 py-1.5 ${
              i === 3 ? "bg-primary-muted font-medium text-primary" : "text-muted"
            }`}
          >
            {item}
            {i === 3 ? (
              <span className="absolute inset-y-1 right-0 w-0.5 rounded-l-full bg-primary" />
            ) : null}
          </div>
        ))}
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-border/70 px-4 py-2.5">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-muted">
              Maple Grove
            </p>
            <p className="font-semibold text-foreground">Classrooms</p>
          </div>
          <span className="flex size-7 items-center justify-center rounded-full bg-primary-muted text-[10px] font-semibold text-primary">
            DC
          </span>
        </header>
        <div className="grid flex-1 gap-2.5 overflow-hidden p-3 sm:grid-cols-2">
          <article className="rounded-xl border border-border bg-background p-3 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold">
                  <span className="mr-1">🌱</span>Little Sprouts
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-muted">
                  Infants
                </p>
              </div>
              <span className="rounded-full bg-tertiary-muted px-2 py-0.5 text-[10px] font-semibold text-success-text">
                Stable
              </span>
            </div>
            <div className="mt-3 flex justify-between text-muted">
              <span>Students</span>
              <span>11 / 12</span>
            </div>
            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-surface">
              <div className="h-full w-[92%] rounded-full bg-warning" />
            </div>
            <p className="mt-3 text-foreground">Sarah Mitchell <span className="text-muted">(Lead)</span></p>
          </article>
          <article className="rounded-xl border border-border bg-background p-3 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold">
                  <span className="mr-1">🔬</span>Discovery Lab
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-muted">
                  Toddlers
                </p>
              </div>
              <span className="rounded-full bg-tertiary-muted px-2 py-0.5 text-[10px] font-semibold text-success-text">
                Outing Mode
              </span>
            </div>
            <div className="mt-3 rounded-lg bg-tertiary-muted px-2.5 py-2">
              <p className="font-semibold text-foreground">City Park Garden</p>
              <p className="mt-0.5 text-[10px] text-muted">Expected return 11:30 AM</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export function AdminReportsMock() {
  const days = [
    { d: "Mon", h: 92 },
    { d: "Tue", h: 88 },
    { d: "Wed", h: 95 },
    { d: "Thu", h: 90 },
    { d: "Fri", h: 86 },
  ];

  return (
    <div className="flex h-full flex-col bg-surface p-4 text-[11px]">
      <div className="mb-3 flex items-start justify-between">
        <div>
          <p className="font-brand text-sm text-foreground">Attendance Reporting Matrix</p>
          <p className="text-muted">Centre-wide · This week</p>
        </div>
        <span className="rounded-lg bg-primary px-2.5 py-1 text-[10px] font-semibold text-white">
          Download CSV
        </span>
      </div>
      <div className="grid gap-2 sm:grid-cols-3">
        {[
          ["Centre rate", "90%", "vs 87% last week"],
          ["Present today", "47 / 52", "2 mid-day sick leave"],
          ["Rooms outing", "1", "Discovery Lab"],
        ].map(([k, v, s]) => (
          <article key={k} className="rounded-xl border border-border bg-background p-3 shadow-sm">
            <p className="text-muted">{k}</p>
            <p className="mt-1 text-lg font-bold text-foreground">{v}</p>
            <p className="text-[10px] text-muted">{s}</p>
          </article>
        ))}
      </div>
      <article className="mt-2 flex-1 rounded-xl border border-border bg-background p-3 shadow-sm">
        <p className="mb-3 font-semibold">Weekly attendance trend</p>
        <div className="flex h-24 items-end gap-3">
          {days.map((day) => (
            <div key={day.d} className="flex flex-1 flex-col items-center gap-1">
              <div
                className="w-full rounded-t-md bg-primary/80"
                style={{ height: `${day.h}%` }}
              />
              <span className="text-[10px] text-muted">{day.d}</span>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}

export function StaffMobileMock() {
  const rows = [
    { name: "Maya Chen", initials: "MC", present: true, color: AVATARS[0] },
    { name: "Leo Garcia", initials: "LG", present: true, color: AVATARS[1] },
    { name: "Ava Patel", initials: "AP", present: false, color: AVATARS[2] },
    { name: "Noah Kim", initials: "NK", present: true, color: AVATARS[3] },
  ];

  return (
    <div className="flex h-full flex-col bg-cream px-3 pt-7 pb-3 text-[11px]">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-muted">
        Good morning
      </p>
      <p className="font-brand text-[17px] tracking-tight text-foreground">Little Sprouts</p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-xl border border-border bg-background p-2.5 shadow-sm">
          <p className="text-[10px] text-muted">Present</p>
          <p className="text-lg font-bold text-foreground">11 / 12</p>
        </div>
        <div className="rounded-xl border border-border bg-background p-2.5 shadow-sm">
          <p className="text-[10px] text-muted">Outing</p>
          <p className="text-sm font-semibold text-primary">Off site</p>
        </div>
      </div>
      <div className="mt-2 space-y-1.5">
        {rows.map((row) => (
          <div
            key={row.name}
            className="flex items-center gap-2 rounded-xl border border-border bg-background px-2 py-1.5 shadow-sm"
          >
            <Initials name={row.initials} color={row.color} />
            <span className="flex-1 font-semibold text-foreground">{row.name}</span>
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                row.present
                  ? "bg-success-soft text-success-text"
                  : "bg-primary-muted text-primary"
              }`}
            >
              {row.present ? "Present" : "Absent"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ParentMobileMock() {
  return (
    <div className="flex h-full flex-col bg-cream px-3 pt-7 pb-3 text-[11px]">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-muted">
        Sunday, August 30
      </p>
      <p className="font-brand text-[17px] tracking-tight text-foreground">Maya&apos;s day</p>
      <article className="mt-3 rounded-xl border border-border bg-background p-3 shadow-sm">
        <div className="flex items-center gap-2">
          <Initials name="MC" color={AVATARS[0]} />
          <div>
            <p className="font-semibold">Maya Chen</p>
            <p className="text-[10px] text-muted">Little Sprouts · Checked in 8:12 AM</p>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {[
            ["Nap", "1h 22m"],
            ["Lunch", "75%"],
            ["Milk", "4 oz"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg bg-surface px-2 py-1.5 text-center">
              <p className="text-[10px] text-muted">{k}</p>
              <p className="font-bold text-foreground">{v}</p>
            </div>
          ))}
        </div>
      </article>
      <article className="mt-2 rounded-xl border border-border bg-background p-3 shadow-sm">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-primary">
          Announcement
        </p>
        <p className="mt-1 font-semibold text-foreground">Park outing today</p>
        <p className="mt-0.5 text-muted">Discovery Lab is at City Park. Return by 11:30.</p>
      </article>
    </div>
  );
}

export function ProductMock({
  kind,
}: {
  kind: "classrooms" | "reports" | "staff" | "parent";
}) {
  switch (kind) {
    case "reports":
      return <AdminReportsMock />;
    case "staff":
      return <StaffMobileMock />;
    case "parent":
      return <ParentMobileMock />;
    default:
      return <AdminClassroomsMock />;
  }
}
