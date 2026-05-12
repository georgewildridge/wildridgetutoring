import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
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
          backgroundColor: "#faf7f2",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontFamily: "serif",
            color: "#2c2c2c",
            fontWeight: 500,
          }}
        >
          Wildridge Tutoring
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#7a7570",
            marginTop: 16,
          }}
        >
          Private Tutoring in Brooklyn
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
