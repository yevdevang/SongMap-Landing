import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SongMap — AI Song Structure Analyzer for iOS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BAR_HEIGHTS = [32, 48, 64, 80, 68, 52, 72, 80, 56, 40, 62, 76, 80, 66, 46, 34, 56, 72, 80, 62, 42, 66, 80, 72, 52, 36, 62, 76, 80, 66, 46, 56, 72, 80, 62, 42, 34, 52, 66, 48];
const SEGMENT_COLORS = ["#6C63FF", "#3B82F6", "#EC4899", "#10B981"];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050B14",
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
        {/* App badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "36px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "18px",
              background: "linear-gradient(135deg, #6C63FF 0%, #3B82F6 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "38px",
            }}
          >
            ♪
          </div>
          <span style={{ fontSize: "52px", fontWeight: "800", color: "#FFFFFF", letterSpacing: "-1px" }}>
            SongMap
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "26px",
            color: "#64748B",
            textAlign: "center",
            lineHeight: "1.4",
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
                opacity: 0.85,
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
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#94A3B8",
                fontSize: "18px",
                background: "rgba(255,255,255,0.04)",
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
