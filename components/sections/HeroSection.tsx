import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-pad"
      style={{
        backgroundColor: "#03045e",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background geometric pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(165,180,252,0.07) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(165,180,252,0.05) 0%, transparent 40%)",
          pointerEvents: "none",
        }}
      />

      {/* Floating circles */}
      <div
        className="animate-float"
        style={{
          position: "absolute",
          top: "15%",
          right: "8%",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      />

      <div style={{ maxWidth: "860px", textAlign: "center", position: "relative", zIndex: 1 }}>
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "100px",
            padding: "6px 16px",
            marginBottom: "32px",
          }}
        >
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#86efac", display: "inline-block" }} />
          <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "13px", fontWeight: 500 }}>
            Technology Company · Ghana, West Africa
          </span>
        </div>

        {/* Headline */}
        <h1
          className="gradient-text"
          style={{
            fontSize: "clamp(40px, 7vw, 76px)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: "24px",
            letterSpacing: "-1px",
          }}
        >
          Building Tomorrow&apos;s<br />Technology Today
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.7,
            maxWidth: "620px",
            margin: "0 auto 48px",
          }}
        >
          Afro Kiiom Ltd builds <strong style={{ color: "rgba(255,255,255,0.95)" }}>practical software products</strong> and
          conducts research toward designing <strong style={{ color: "rgba(255,255,255,0.95)" }}>its own computer hardware</strong> from the ground up —
          with the ambition to compete on the global stage.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/#vision"
            style={{
              backgroundColor: "#ffffff",
              color: "#03045e",
              padding: "14px 32px",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "15px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "opacity 0.2s",
            }}
          >
            Explore Our Vision <ArrowRight size={16} />
          </Link>
          <Link
            href="/#investors"
            style={{
              backgroundColor: "transparent",
              color: "#ffffff",
              padding: "14px 32px",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "15px",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.3)",
              transition: "border-color 0.2s",
            }}
          >
            Invest in Kiiom
          </Link>
        </div>

        {/* Scroll indicator */}
        <div style={{ marginTop: "80px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" }}>Scroll</span>
          <ChevronDown style={{ color: "rgba(255,255,255,0.3)", animation: "float 2s ease-in-out infinite" }} size={20} />
        </div>
      </div>
    </section>
  );
}
