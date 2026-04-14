import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#f3efe7",
          color: "#111111",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.28) 0%, rgba(0,0,0,0.02) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 420,
            height: 420,
            borderRadius: "999px",
            background: "rgba(17,17,17,0.04)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: -140,
            left: -90,
            width: 360,
            height: 360,
            borderRadius: "999px",
            background: "rgba(216,35,35,0.08)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 56,
            top: 56,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: 13,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              opacity: 0.42,
            }}
          >
            Primus-Gallopp
          </div>

          <div
            style={{
              display: "flex",
              padding: "14px 18px",
              borderRadius: 18,
              background: "#111111",
              color: "#f3efe7",
              fontSize: 14,
              opacity: 0.98,
            }}
          >
            Selected work / Temporary alignments
          </div>
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "56px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 26,
              maxWidth: 880,
              marginTop: 46,
            }}
          >
            <div
              style={{
                width: 96,
                height: 1,
                background: "rgba(17,17,17,0.18)",
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 88,
                lineHeight: 0.9,
                letterSpacing: "-0.07em",
                fontWeight: 600,
              }}
            >
              <div>Kommunikasjon</div>
              <div>for virksomheter</div>
              <div>med høye ambisjoner</div>
              <div>og varierende premisser.</div>
            </div>

            <div
              style={{
                maxWidth: 760,
                fontSize: 28,
                lineHeight: 1.34,
                opacity: 0.68,
              }}
            >
              Strategisk kommunikasjon på tvers av intensjon.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 14,
              }}
            >
              <div
                style={{
                  display: "flex",
                  padding: "15px 18px",
                  borderRadius: 20,
                  border: "1px solid rgba(17,17,17,0.08)",
                  background: "rgba(255,255,255,0.38)",
                  fontSize: 16,
                  opacity: 0.74,
                }}
              >
                +400% økning i noe
              </div>

              <div
                style={{
                  display: "flex",
                  padding: "15px 18px",
                  borderRadius: 20,
                  border: "1px solid rgba(17,17,17,0.08)",
                  background: "rgba(255,255,255,0.38)",
                  fontSize: 16,
                  opacity: 0.74,
                }}
              >
                Midlertidig enighet
              </div>
            </div>

            <div
              style={{
                fontSize: 15,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                opacity: 0.42,
              }}
            >
              primus-gallopp.no
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: 56,
            top: 56,
            width: 1,
            height: 518,
            background: "rgba(17,17,17,0.06)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}