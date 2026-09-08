import Link from "next/link";
import type { ReactNode } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

import { slugifyHeading, type LegalDocument } from "@/lib/legal";

function toPlainText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(toPlainText).join("");
  }
  if (node && typeof node === "object" && "props" in node) {
    return toPlainText((node as { props: { children?: ReactNode } }).props.children);
  }
  return "";
}

const markdownComponents: Components = {
  h2: ({ children }) => (
    <h2
      id={slugifyHeading(toPlainText(children))}
      className="mt-12 scroll-mt-28 font-brand text-xl tracking-tight text-ink first:mt-0 sm:text-2xl"
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 text-base font-semibold text-ink sm:text-lg">{children}</h3>
  ),
  p: ({ children }) => <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{children}</p>,
  ul: ({ children }) => (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-muted marker:text-primary sm:text-base">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-muted marker:text-primary sm:text-base">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
  hr: () => <hr className="mt-10 border-border" />,
  code: ({ children }) => (
    <code className="rounded-sm bg-surface-muted px-1.5 py-0.5 font-mono text-[0.85em] text-ink">
      {children}
    </code>
  ),
  a: ({ href, children }) => {
    const target = href ?? "#";

    if (target.startsWith("/")) {
      return (
        <Link href={target} className="font-medium text-primary underline-offset-4 hover:underline">
          {children}
        </Link>
      );
    }

    return (
      <a
        href={target}
        target={target.startsWith("http") ? "_blank" : undefined}
        rel={target.startsWith("http") ? "noopener noreferrer" : undefined}
        className="font-medium text-primary underline-offset-4 hover:underline"
      >
        {children}
      </a>
    );
  },
  table: ({ children }) => (
    <div className="mt-6 overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[32rem] border-collapse text-left text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-surface-muted">{children}</thead>,
  th: ({ children }) => (
    <th className="border-b border-border px-4 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-ink">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-border/60 px-4 py-3 align-top leading-6 text-muted">
      {children}
    </td>
  ),
};

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <main className="pt-14 sm:pt-[72px]">
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Legal</p>
        <h1 className="mt-3 font-brand text-[32px] leading-[1.1] tracking-tight text-ink sm:text-5xl">
          {document.title}
        </h1>
        <p className="mt-4 text-sm leading-6 text-muted sm:text-base">{document.description}</p>
        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-xs text-muted">
          <div className="flex gap-2">
            <dt className="font-semibold uppercase tracking-[0.08em]">Effective</dt>
            <dd>{document.effectiveDate}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-semibold uppercase tracking-[0.08em]">Last updated</dt>
            <dd>{document.lastUpdated}</dd>
          </div>
        </dl>

        <nav
          aria-label={`${document.title} contents`}
          className="mt-10 rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8"
        >
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            On this page
          </h2>
          <ol className="mt-4 grid gap-x-8 gap-y-2 text-sm text-muted sm:grid-cols-2">
            {document.sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="transition hover:text-primary">
                  {section.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="mt-12 rounded-2xl border border-border bg-background p-6 shadow-lg sm:p-10">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {document.body}
          </ReactMarkdown>
        </article>
      </div>
    </main>
  );
}
