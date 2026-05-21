import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import path from "path";

export const alt = "SongMap — AI Song Structure Analyzer for iOS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BAR_HEIGHTS = [32, 48, 64, 80, 68, 52, 72, 80, 56, 40, 62, 76, 80, 66, 46, 34, 56, 72, 80, 62, 42, 66, 80, 72, 52, 36, 62, 76, 80, 66, 46, 56, 72, 80, 62, 42, 34, 52, 66, 48];
const SEGMENT_COLORS = ["#6C9FFF", "#7B8FFF", "#EC4899", "#10B981"];

export default function Image() {
  const iconBuffer = readFileSync(path.join(process.cwd(), "public/1024.png"));
  const iconBase64 = iconBuffer.toString("base64");
  const iconSrc = `data:image/png;base64,${iconBase64}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0D2045 0%, #1A3F85 50%, #0D2045 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* App icon + name */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "36px" }}>
          <img
            src={iconSrc}
            width={88}
            height={88}
            style={{ borderRadius: "20px" }}
          />
          <span style={{ fontSize: "56px", fontWeight: "800", color: "#FFFFFF", letterSpacing: "-1px" }}>
            SongMap
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "26px",
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
            marginBottom: "52px",
          }}
        >
          AI Song Structure Analyzer for iOS
        </div>

        {/* Waveform */}
        <div
          style={{
            display: "flex",
            gap: "6px",
            alignItems: "flex-end",
            height: "88px",
            marginBottom: "40px",
          }}
        >
          {BAR_HEIGHTS.map((h, i) => (
            <div
              key={i}
              style={{
                width: "18px",
                height: `${h}px`,
                background: SEGMENT_COLORS[Math.floor(i / 10) % SEGMENT_COLORS.length],
                borderRadius: "5px",
                opacity: 0.9,
              }}
            />
          ))}
        </div>

        {/* Section pills */}
        <div style={{ display: "flex", gap: "12px" }}>
          {["Intro", "Verse", "Chorus", "Bridge", "AI Feedback"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 20px",
                borderRadius: "100px",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.7)",
                fontSize: "18px",
                background: "rgba(255,255,255,0.08)",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
