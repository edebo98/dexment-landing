import { readFileSync } from "fs";
import path from "path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoBase64 = readFileSync(path.join(process.cwd(), "public", "logo-mark.png")).toString("base64");

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0B",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 36 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`data:image/png;base64,${logoBase64}`}
            width={48}
            height={48}
            alt=""
            style={{ display: "flex" }}
          />
          <div style={{ display: "flex", fontSize: 42, fontWeight: 700, color: "white", letterSpacing: -1 }}>
            Dexment
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            color: "white",
            letterSpacing: -2,
            marginBottom: 20,
          }}
        >
          Build With Confidence.
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#9C9C96", maxWidth: 820, textAlign: "center" }}>
          The construction intelligence platform for budgets, documents and progress.
        </div>
      </div>
    ),
    { ...size }
  );
}
