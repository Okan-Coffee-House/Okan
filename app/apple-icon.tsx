import { ImageResponse } from "next/og";
import { OKAN_COLORS } from "@/constants/colors";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const PETALS = [
  { left: 32, top: 2 },
  { left: 53, top: 17 },
  { left: 45, top: 42 },
  { left: 19, top: 42 },
  { left: 11, top: 17 },
] as const;

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: OKAN_COLORS.cream,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 96,
              height: 72,
              display: "flex",
              position: "relative",
            }}
          >
            {PETALS.map((petal) => (
              <div
                key={`${petal.left}-${petal.top}`}
                style={{
                  position: "absolute",
                  left: petal.left,
                  top: petal.top,
                  width: 32,
                  height: 32,
                  borderRadius: 32,
                  background: OKAN_COLORS.sunflower,
                }}
              />
            ))}
            <div
              style={{
                position: "absolute",
                left: 37,
                top: 22,
                width: 22,
                height: 22,
                borderRadius: 22,
                background: OKAN_COLORS.cream,
              }}
            />
          </div>
          <div
            style={{
              width: 8,
              height: 22,
              background: OKAN_COLORS.olive,
              marginTop: -4,
            }}
          />
          <div
            style={{
              width: 48,
              height: 8,
              background: OKAN_COLORS.wood,
            }}
          />
          <div
            style={{
              width: 40,
              height: 34,
              background: OKAN_COLORS.wood,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
