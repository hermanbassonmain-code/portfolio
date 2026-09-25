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
          background: "#0b1120",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#60a5fa",
          }}
        >
          {profile.title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            color: "#f1f5f9",
            marginTop: 20,
            letterSpacing: -2,
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            color: "#94a3b8",
            marginTop: 24,
          }}
        >
          {profile.tagline}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#60a5fa",
            marginTop: 60,
          }}
        >
          {profile.location} • {profile.email}
        </div>
      </div>
    ),
    { ...size }
  );
}
