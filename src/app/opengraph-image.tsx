import { ImageResponse } from "next/og";
import { profile } from "@/data/cv";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 90px",
          background: "#05090f",
          backgroundImage:
            "linear-gradient(rgba(34,229,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,229,255,0.08) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#22e5ff",
          }}
        >
          {profile.title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            color: "#e6f4f8",
            marginTop: 20,
            letterSpacing: -2,
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#7d94a3",
            marginTop: 24,
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          {profile.tagline}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#22e5ff",
            marginTop: 60,
          }}
        >
          {profile.location} · {profile.email}
        </div>
      </div>
    ),
    { ...size }
  );
}
