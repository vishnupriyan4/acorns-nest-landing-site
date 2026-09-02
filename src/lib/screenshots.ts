import fs from "node:fs";
import path from "node:path";

import { SCREENSHOT_STEMS } from "@/lib/content";

const IMAGE = /\.(png|jpe?g|webp|gif)$/i;

function fileStem(name: string): string {
  return name.replace(IMAGE, "").toLowerCase();
}

export function listScreenshotFiles(): string[] {
  const dir = path.join(process.cwd(), "public", "screenshots");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => IMAGE.test(name) && !name.startsWith("."))
    .sort((a, b) => a.localeCompare(b));
}

export function resolveShot(
  stem: string,
  files: string[] = listScreenshotFiles(),
): string | null {
  const hit = files.find((name) => fileStem(name) === stem.toLowerCase());
  return hit ? `/screenshots/${hit}` : null;
}

export function resolveAllShots(
  files: string[] = listScreenshotFiles(),
): Record<string, string | null> {
  const shots: Record<string, string | null> = {};
  for (const stem of SCREENSHOT_STEMS) {
    shots[stem] = resolveShot(stem, files);
  }
  return shots;
}
