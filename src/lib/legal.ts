import { readFile } from "node:fs/promises";
import path from "node:path";

export const LEGAL_SLUGS = ["privacy-policy", "terms-of-use"] as const;

export type LegalSlug = (typeof LEGAL_SLUGS)[number];

export type LegalDocument = {
  title: string;
  description: string;
  effectiveDate: string;
  lastUpdated: string;
  body: string;
  sections: { id: string; heading: string }[];
};

const CONTENT_DIR = path.join(process.cwd(), "src", "content", "legal");

/** Anchor ids for the table of contents. Must match the `h2` renderer. */
export function slugifyHeading(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Minimal front matter reader for the `key: value` block our legal documents use.
 * Values may contain colons, so only the first one separates key from value.
 */
function splitFrontMatter(raw: string): { meta: Record<string, string>; body: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw);

  if (!match) {
    return { meta: {}, body: raw };
  }

  const meta: Record<string, string> = {};

  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(":");
    if (separator === -1) {
      continue;
    }
    meta[line.slice(0, separator).trim()] = line.slice(separator + 1).trim();
  }

  return { meta, body: raw.slice(match[0].length) };
}

function requireMeta(meta: Record<string, string>, key: string, slug: LegalSlug): string {
  const value = meta[key];

  if (!value) {
    throw new Error(`Legal document "${slug}" is missing the "${key}" front matter field.`);
  }

  return value;
}

export async function readLegalDocument(slug: LegalSlug): Promise<LegalDocument> {
  const raw = await readFile(path.join(CONTENT_DIR, `${slug}.md`), "utf8");
  const { meta, body } = splitFrontMatter(raw);

  const sections = [...body.matchAll(/^## (.+)$/gm)].map((heading) => ({
    id: slugifyHeading(heading[1]),
    heading: heading[1],
  }));

  return {
    title: requireMeta(meta, "title", slug),
    description: requireMeta(meta, "description", slug),
    effectiveDate: requireMeta(meta, "effectiveDate", slug),
    lastUpdated: requireMeta(meta, "lastUpdated", slug),
    body,
    sections,
  };
}
