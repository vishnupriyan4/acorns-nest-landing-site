"use client";

import { Bell } from "lucide-react";
import { useMemo, useState } from "react";

import { Reveal } from "@/components/ui/reveal";
import { CLASSROOM_DEMO } from "@/lib/content";

type Child = {
  id: string;
  name: string;
  initials: string;
  color: string;
  present: boolean;
  nap: boolean;
  meal: number;
};

const SEED: Child[] = [
  { id: "maya", name: "Maya Chen", initials: "MC", color: "#FDBA74", present: true, nap: false, meal: 75 },
  { id: "leo", name: "Leo Garcia", initials: "LG", color: "#C4B5FD", present: true, nap: true, meal: 50 },
  { id: "ava", name: "Ava Patel", initials: "AP", color: "#86EFAC", present: false, nap: false, meal: 0 },
  { id: "noah", name: "Noah Kim", initials: "NK", color: "#FCA5A5", present: true, nap: false, meal: 100 },
];

export function InteractiveDemo() {
  const [children, setChildren] = useState(SEED);
  const [toast, setToast] = useState<string | null>(null);
  const [outing, setOuting] = useState(false);

  const present = children.filter((c) => c.present).length;

  const notify = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 2500);
  };

  const togglePresent = (id: string) => {
    setChildren((rows) =>
      rows.map((row) => {
        if (row.id !== id) return row;
        const next = { ...row, present: !row.present, nap: row.present ? false : row.nap };
        notify(
          next.present
            ? `${row.name} checked in · parents can see it`
            : `${row.name} marked absent`,
        );
        return next;
      }),
    );
  };

  const toggleNap = (id: string) => {
    setChildren((rows) =>
      rows.map((row) => {
        if (row.id !== id || !row.present) return row;
        const next = { ...row, nap: !row.nap };
        notify(next.nap ? `Nap started for ${row.name}` : `Nap ended for ${row.name}`);
        return next;
      }),
    );
  };

  const cycleMeal = (id: string) => {
    setChildren((rows) =>
      rows.map((row) => {
        if (row.id !== id || !row.present) return row;
        const next = { ...row, meal: (row.meal + 25) % 125 };
        notify(`${row.name} lunch logged at ${next.meal}%`);
        return next;
      }),
    );
  };

  const parentFeed = useMemo(() => {
    return children
      .filter((c) => c.present)
      .map((c) => {
        const pending: string[] = [];
        if (c.nap) pending.push("nap");
        if (c.meal > 0) pending.push(`lunch ${c.meal}%`);
        return {
          name: c.name.split(" ")[0],
          line: "Checked in",
          pending:
            pending.length > 0
              ? `${pending.join(", ")} · publishes with today's log`
              : null,
        };
      });
  }, [children]);

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {CLASSROOM_DEMO.kicker}
          </p>
          <h2 className="mt-3 max-w-xl font-brand text-3xl tracking-tight text-ink sm:text-4xl">
            {CLASSROOM_DEMO.title}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
            {CLASSROOM_DEMO.body}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-xl border border-border bg-background p-5 shadow-md">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-brand text-lg text-ink">Little Sprouts</p>
                  <p className="text-sm text-muted">
                    {present} / {children.length} present
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setOuting((v) => !v);
                    notify(
                      outing
                        ? "Outing ended · parents notified"
                        : "Outing Mode · City Park · return 11:30",
                    );
                  }}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                    outing
                      ? "bg-tertiary-muted text-success-text"
                      : "bg-primary-muted text-primary"
                  }`}
                >
                  {outing ? "Outing live" : "Start outing"}
                </button>
              </div>

              <div className="mt-4 space-y-2">
                {children.map((child) => (
                  <div
                    key={child.id}
                    className="flex flex-wrap items-center gap-2 rounded-xl border border-border bg-cream/60 px-3 py-2.5"
                  >
                    <span
                      className="flex size-8 items-center justify-center rounded-full text-[11px] font-bold"
                      style={{ background: child.color }}
                    >
                      {child.initials}
                    </span>
                    <span className="min-w-[7rem] flex-1 text-sm font-semibold">
                      {child.name}
                    </span>
                    <button
                      type="button"
                      onClick={() => togglePresent(child.id)}
                      className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                        child.present
                          ? "bg-success-soft text-success-text"
                          : "bg-primary-muted text-primary"
                      }`}
                    >
                      {child.present ? "Present" : "Absent"}
                    </button>
                    <button
                      type="button"
                      disabled={!child.present}
                      onClick={() => toggleNap(child.id)}
                      className="rounded-full bg-info-soft px-2.5 py-1 text-[11px] font-semibold text-info disabled:opacity-40"
                    >
                      {child.nap ? "End nap" : "Start nap"}
                    </button>
                    <button
                      type="button"
                      disabled={!child.present}
                      onClick={() => cycleMeal(child.id)}
                      className="rounded-full bg-warning-soft px-2.5 py-1 text-[11px] font-semibold text-warning disabled:opacity-40"
                    >
                      Lunch {child.meal}%
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="relative overflow-hidden rounded-xl border border-border bg-cream p-5 shadow-md">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Parent feed
              </p>
              <p className="mt-1 font-brand text-lg text-ink">What families see now</p>
              <p className="mt-1 text-xs text-muted">
                Check-in and outings in the moment. Naps and meals when the centre publishes the day.
              </p>
              {outing ? (
                <div className="mt-4 rounded-lg bg-tertiary-muted px-3 py-2.5">
                  <p className="text-sm font-semibold">Outing · City Park Garden</p>
                  <p className="text-xs text-muted">Expected return 11:30 AM</p>
                </div>
              ) : null}
              <div className="mt-4 space-y-2">
                {parentFeed.length === 0 ? (
                  <p className="text-sm text-muted">No children checked in yet.</p>
                ) : (
                  parentFeed.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-xl border border-border bg-background px-3 py-2.5 shadow-sm"
                    >
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="text-xs text-muted">{item.line}</p>
                      {item.pending ? (
                        <p className="mt-1 text-[11px] text-muted">{item.pending}</p>
                      ) : null}
                    </div>
                  ))
                )}
              </div>

              {toast ? (
                <div
                  role="status"
                  className="absolute inset-x-4 bottom-4 flex items-center gap-2 rounded-lg bg-ink px-3 py-2.5 text-xs font-medium text-white shadow-lg"
                  style={{ animation: "toast-in 0.25s ease-out" }}
                >
                  <Bell className="size-3.5 shrink-0" />
                  {toast}
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
