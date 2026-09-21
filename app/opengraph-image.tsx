import { ImageResponse } from "next/og";
import { OKAN_COLORS } from "@/constants/colors";
import { OKAN } from "@/constants/okan";

export const alt = "OKAN Coffee House";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PETALS = [
  { left: 8, top: 0 },
  { left: 22, top: 8 },
  { left: 17, top: 24 },
  { left: 0, top: 24 },
  { left: -5, top: 8 },
] as const;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: OKAN_COLORS.cream,
          color: OKAN_COLORS.ink,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
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
                display: "flex",
                width: 42,
                height: 40,
                position: "relative",
              }}
            >
              {PETALS.map((petal) => (
                <div
                  key={`${petal.left}-${petal.top}`}
                  style={{
                    display: "flex",
                    position: "absolute",
                    left: petal.left,
                    top: petal.top,
                    width: 18,
                    height: 18,
                    borderRadius: 18,
                    background: OKAN_COLORS.sunflower,
                  }}
                />
              ))}
              <div
                style={{
                  display: "flex",
                  position: "absolute",
                  left: 13,
                  top: 12,
                  width: 12,
                  height: 12,
                  borderRadius: 12,
                  background: OKAN_COLORS.cream,
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                width: 4,
                height: 12,
                background: OKAN_COLORS.olive,
                marginTop: -2,
              }}
            />
            <div
              style={{
                display: "flex",
                width: 22,
                height: 4,
                background: OKAN_COLORS.wood,
              }}
            />
            <div
              style={{
                display: "flex",
                width: 18,
                height: 16,
                background: OKAN_COLORS.wood,
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              letterSpacing: 10,
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            {OKAN.shortName}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 820,
            fontWeight: 500,
          }}
        >
          Specialty coffee, V60 pour-over and espresso in Salmiya, Kuwait.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: OKAN_COLORS.olive,
            letterSpacing: 2,
          }}
        >
          Specialty coffee · {OKAN.city}, {OKAN.country}
        </div>
      </div>
    ),
    { ...size },
  );
}
