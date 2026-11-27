import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { PP_ARTICLE, PP_META } from "@/lib/news/point-pleasant";

// Served from /news/point-pleasant-founding-advisory-committee/opengraph-image.
// Same frame as the site-wide OG image, plus both partner logos.
export const alt = PP_META.imageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function dataUri(file: string) {
  const bytes = await readFile(join(process.cwd(), "public", file));
  return `data:image/png;base64,${bytes.toString("base64")}`;
}

function Logo({ src }: { src: string }) {
  return (
    <div
      style={{
        width: 196,
        height: 196,
        borderRadius: 9999,
        background: "#FFFFFF",
        border: "4px solid #E8D4B8",
        boxShadow: "0 8px 16px rgba(17, 24, 39, 0.14)",
        display: "flex",
        overflow: "hidden",
      }}
    >
      <img src={src} width={188} height={188} alt="" style={{ borderRadius: 9999 }} />
    </div>
  );
}

export default async function OpengraphImage() {
  const [acornsNest, pointPleasant] = await Promise.all([
    dataUri("AcornsNest_circular_logo.png"),
    dataUri("PPCCC_circular_logo.png"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F8F3EA",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(232, 189, 139, 0.45) 0, transparent 55%), radial-gradient(circle at 80% 80%, rgba(205, 148, 90, 0.35) 0, transparent 55%)",
          padding: "64px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#B2693A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFF8EC",
              fontSize: 32,
              fontWeight: 800,
            }}
          >
            A
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 800,
              color: "#2C1B10",
              letterSpacing: "-0.01em",
            }}
          >
            Acorns Nest
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 48 }}>
          <div
            style={{
              display: "flex",
              flex: 1,
              fontSize: 54,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "#2C1B10",
            }}
          >
            {PP_ARTICLE.h1}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Logo src={acornsNest} />
            <div style={{ display: "flex", fontSize: 40, fontWeight: 800, color: "#5A4234" }}>
              ×
            </div>
            <Logo src={pointPleasant} />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#5A4234",
          }}
        >
          <div style={{ display: "flex" }}>acornsnest.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
