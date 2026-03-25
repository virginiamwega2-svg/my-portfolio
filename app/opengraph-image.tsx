import { ImageResponse } from "next/og";

export const alt          = "Virginia Mwega — Software Engineer";
export const size         = { width: 1200, height: 630 };
export const contentType  = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0D0C0B",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 88px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Left accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "4px",
            background: "#C9A96E",
          }}
        />

        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(201,169,110,0.05)",
            filter: "blur(80px)",
          }}
        />

        {/* VM monogram badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "60px",
            height: "60px",
            border: "1px solid rgba(201,169,110,0.3)",
            borderRadius: "12px",
            background: "rgba(201,169,110,0.08)",
            marginBottom: "44px",
            fontFamily: "monospace",
            fontSize: "18px",
            fontWeight: "bold",
            color: "#C9A96E",
            letterSpacing: "1px",
          }}
        >
          VM
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "76px",
            fontWeight: "bold",
            color: "#F0EBE3",
            letterSpacing: "-2.5px",
            lineHeight: 1,
            marginBottom: "20px",
          }}
        >
          Virginia Mwega
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: "22px",
            color: "#C9A96E",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: "36px",
          }}
        >
          Software Engineer
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "22px",
            color: "#5C5652",
            lineHeight: 1.65,
            maxWidth: "620px",
          }}
        >
          Full-stack engineer building fast, elegant web applications
          with React, Next.js, Python, and PostgreSQL.
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "88px",
            fontSize: "15px",
            color: "#2E2B29",
            fontFamily: "monospace",
            letterSpacing: "0.05em",
          }}
        >
          virginiamwega.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
