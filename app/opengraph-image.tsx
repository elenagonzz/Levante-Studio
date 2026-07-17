import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";
export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SAND = "#F5F1EA";
const INK = "#2B2B2B";
const MUTED = "#8b8474";

export default async function Image() {
  const logo = readFileSync(join(process.cwd(), "public", "logo-mark.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: SAND,
          color: INK,
          padding: 80,
        }}
      >
        {/* top meta */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            letterSpacing: 5,
            textTransform: "uppercase",
          }}
        >
          <span>Levante Studio Co.</span>
          <span style={{ color: MUTED }}>MMXXVI</span>
        </div>

        {/* center: monogram + statement */}
        <div style={{ display: "flex", alignItems: "center", gap: 64 }}>
          <img src={logoSrc} height={280} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 76, lineHeight: 1.05 }}>No creamos</span>
            <span style={{ fontSize: 76, lineHeight: 1.05 }}>webs.</span>
            <span
              style={{
                fontSize: 76,
                lineHeight: 1.05,
                fontStyle: "italic",
                color: MUTED,
              }}
            >
              Creamos sistemas.
            </span>
          </div>
        </div>

        {/* bottom meta */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: MUTED,
          }}
        >
          <span>Sistemas de Crecimiento Digital</span>
          <span>levantestudio.co</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
