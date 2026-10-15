"use client";

import { CheckCircle2, Loader2 } from "lucide-react";
import { useActionState, useEffect, useState } from "react";

import { acceptInvite, finishInvitePassword, type AcceptInviteState } from "@/actions/accept-invite";
import { StoreBadges } from "@/components/store-badges";

const GET_THE_APP_URL = "https://acornsnest.com/#get-the-app";

const fieldClass =
  "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-border-focus focus:bg-primary-muted";

type AcceptInviteFormProps = {
  resumePassword?: boolean;
};

function inviteEmailFromLocation(): string {
  const query = window.location.search.replace(/^\?/, "");
  for (const part of query.split("&")) {
    if (!part) continue;
    const separator = part.indexOf("=");
    const rawKey = separator === -1 ? part : part.slice(0, separator);
    const rawValue = separator === -1 ? "" : part.slice(separator + 1);
    if (decodeURIComponent(rawKey) !== "email") continue;
    return decodeURIComponent(rawValue.replace(/\+/g, "%2B")).trim().toLowerCase();
  }
  return "";
}

export function AcceptInviteForm({ resumePassword = false }: AcceptInviteFormProps) {
  const [accepted, acceptAction, acceptPending] = useActionState(acceptInvite, null);
  const [finished, finishAction, finishPending] = useActionState(finishInvitePassword, null);
  const state: AcceptInviteState | null = finished ?? accepted;
  const pending = acceptPending || finishPending;
  const [email, setEmail] = useState<string | null>(null);
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  useEffect(() => {
    setEmail(inviteEmailFromLocation());
  }, []);
  const showPasswordRetry =
    !state?.ok && (state?.step === "password" || (resumePassword && state == null));

  if (state?.ok) {
    return (
      <div className="rounded-2xl border border-border bg-background p-6 text-center shadow-lg sm:p-8">
        <CheckCircle2 className="mx-auto size-10 text-tertiary" />
        <h2 className="mt-4 font-brand text-2xl tracking-tight text-ink">You're in.</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-muted">
          Install Acorns Nest, then sign in with the email you just used and the password you
          chose. Staff and parents use the same app.
        </p>
        <a
          href={GET_THE_APP_URL}
          referrerPolicy="no-referrer"
          className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover"
        >
          Get the app
        </a>
        <StoreBadges className="mt-5 justify-center" />
      </div>
    );
  }

  if (showPasswordRetry) {
    return (
      <form
        action={finishAction}
        className="rounded-2xl border border-border bg-background p-6 shadow-lg sm:p-8"
      >
        <h2 className="font-brand text-xl tracking-tight text-ink sm:text-2xl">Choose a password</h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          The code is accepted. Save a password so you can sign in after you install the app.
        </p>
        <div className="mt-6 space-y-4">
          <PasswordFields
            password={password}
            confirm={confirm}
            onPassword={setPassword}
            onConfirm={setConfirm}
          />
          {state && !state.ok ? <ErrorText>{state.error}</ErrorText> : null}
          <Submit pending={finishPending} label="Save password" pendingLabel="Saving…" />
        </div>
      </form>
    );
  }

  if (email === null) {
    return null;
  }

  if (!email) {
    return (
      <div className="rounded-2xl border border-border bg-background p-6 shadow-lg sm:p-8">
        <h2 className="font-brand text-xl tracking-tight text-ink sm:text-2xl">Open your invitation</h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          Use the Accept invite button in the email from your centre. That link already knows who
          was invited, so this page does not ask for an email address.
        </p>
      </div>
    );
  }

  return (
    <form
      action={acceptAction}
      className="rounded-2xl border border-border bg-background p-6 shadow-lg sm:p-8"
    >
      <h2 className="font-brand text-xl tracking-tight text-ink sm:text-2xl">Enter your code</h2>
      <p className="mt-3 text-sm leading-6 text-muted">
        This invite is for <span className="font-medium text-ink">{email}</span>. Enter the 6-digit
        or 8-digit code from that email. Staff and parents use the same page. The code is not a
        link, so it stays valid if your email provider scans the message.
      </p>
      <div className="mt-6 space-y-4">
        <input type="hidden" name="email" value={email} />
        <label className="block">
          <FieldLabel>Invitation code</FieldLabel>
          <input
            required
            name="code"
            inputMode="numeric"
            autoComplete="one-time-code"
            autoCapitalize="none"
            spellCheck={false}
            minLength={6}
            maxLength={8}
            pattern="[0-9]{6}|[0-9]{8}"
            className={`${fieldClass} tracking-[0.28em]`}
            placeholder="12345678"
            value={code}
            onChange={(event) => setCode(event.target.value.replace(/\D/g, "").slice(0, 8))}
          />
        </label>
        <PasswordFields
          password={password}
          confirm={confirm}
          onPassword={setPassword}
          onConfirm={setConfirm}
        />
        {state && !state.ok ? <ErrorText>{state.error}</ErrorText> : null}
        <Submit pending={pending} label="Accept invite" pendingLabel="Checking code…" />
      </div>
    </form>
  );
}

function PasswordFields({
  password,
  confirm,
  onPassword,
  onConfirm,
}: {
  password: string;
  confirm: string;
  onPassword: (value: string) => void;
  onConfirm: (value: string) => void;
}) {
  return (
    <>
      <label className="block">
        <FieldLabel>Password</FieldLabel>
        <input
          required
          type="password"
          name="password"
          autoComplete="new-password"
          minLength={6}
          className={fieldClass}
          placeholder="At least 6 characters"
          value={password}
          onChange={(event) => onPassword(event.target.value)}
        />
      </label>
      <label className="block">
        <FieldLabel>Confirm password</FieldLabel>
        <input
          required
          type="password"
          name="confirm"
          autoComplete="new-password"
          minLength={6}
          className={fieldClass}
          placeholder="Re-enter password"
          value={confirm}
          onChange={(event) => onConfirm(event.target.value)}
        />
      </label>
    </>
  );
}

function FieldLabel({ children }: { children: string }) {
  return (
    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
      {children}
    </span>
  );
}

function ErrorText({ children }: { children: string }) {
  return (
    <p className="text-sm text-danger-text" role="alert">
      {children}
    </p>
  );
}

function Submit({
  pending,
  label,
  pendingLabel,
}: {
  pending: boolean;
  label: string;
  pendingLabel: string;
}) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover disabled:opacity-70"
    >
      {pending ? <Loader2 className="size-4 animate-spin" /> : null}
      {pending ? pendingLabel : label}
    </button>
  );
}
