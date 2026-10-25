import { ImageResponse } from "next/og";

// Served from /opengraph-image. Also used as the Twitter card image.
export const alt =
  "Acorns Nest: daycare management software built in Halifax, Nova Scotia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          padding: "72px 80px",
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

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#2C1B10",
              maxWidth: 980,
            }}
          >
            Daycare management software for licensed centres in Canada.
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.35,
              color: "#5A4234",
              maxWidth: 920,
            }}
          >
            Attendance, naps, meals, parent messages, weekly menus and staff
            timesheets in one daycare app. Built in Halifax, Nova Scotia.
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
          <div style={{ display: "flex", gap: 24 }}>
            <span>iPhone · iPad · Android · Web</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
