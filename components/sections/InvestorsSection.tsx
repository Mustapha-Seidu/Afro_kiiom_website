"use client";

import Link from "next/link";
import { TrendingUp, Shield, Globe, Handshake, ArrowRight, Star } from "lucide-react";

const reasons = [
  {
    icon: <Globe size={22} />,
    title: "Untapped Market",
    desc: "Africa's tech market is one of the fastest growing in the world, with over 1.4 billion people and rising digital adoption.",
  },
  {
    icon: <Star size={22} />,
    title: "First-Mover Advantage",
    desc: "We are among the earliest companies to pursue hardware design in Africa — early-stage research with significant room to grow.",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Long-Term Growth",
    desc: "We are building for decades, not quarters. Our dual focus on software and hardware creates multiple revenue streams.",
  },
  {
    icon: <Shield size={22} />,
    title: "Mission-Driven",
    desc: "Your investment goes toward real engineering research, product development, and talent nurturing — with full transparency.",
  },
  {
    icon: <Handshake size={22} />,
    title: "Strategic Partnership",
    desc: "Investors don't just put in capital — they join our advisory circle and help shape the direction of African tech.",
  },
];

export default function InvestorsSection() {
  return (
    <section id="investors" className="section-pad" style={{ backgroundColor: "#03045e", position: "relative", overflow: "hidden" }}>
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.04)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-60px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.04)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span
            style={{
              display: "inline-block",
              backgroundColor: "rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.85)",
              padding: "6px 16px",
              borderRadius: "100px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Investor Relations
          </span>
          <h2
            className="section-heading section-heading-white"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#ffffff", margin: "0 auto" }}
          >
            Invest in Africa&apos;s Technology Future
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "17px", maxWidth: "600px", margin: "20px auto 0", lineHeight: 1.7 }}>
            We are looking for investors who take a long-term view on African technology.
            If our work resonates with you, we would like to speak with you.
          </p>
        </div>

        {/* Call-out banner */}
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "16px",
            padding: "32px 40px",
            marginBottom: "48px",
            display: "flex",
            alignItems: "center",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              backgroundColor: "#ffffff",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <TrendingUp size={24} style={{ color: "#03045e" }} />
          </div>
          <div style={{ flex: 1, minWidth: "200px" }}>
            <h3 style={{ color: "#ffffff", fontWeight: 800, fontSize: "20px", margin: "0 0 8px" }}>
              We Are Calling for Investors
            </h3>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
              Afro Kiiom Ltd is raising capital to accelerate hardware research, grow our software product suite, and hire Africa&apos;s
              best engineers. If you believe in our vision — let&apos;s talk.
            </p>
          </div>
          <Link
            href="/contact?subject=Investment+Inquiry"
            style={{
              backgroundColor: "#ffffff",
              color: "#03045e",
              padding: "12px 28px",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "14px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          >
            Get in Touch <ArrowRight size={14} />
          </Link>
        </div>

        {/* Why Invest */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {reasons.map((reason, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "14px",
                padding: "28px",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.09)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.05)")}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#a5b4fc",
                  marginBottom: "16px",
                }}
              >
                {reason.icon}
              </div>
              <h4 style={{ color: "#ffffff", fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>{reason.title}</h4>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>{reason.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: "56px" }}>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", marginBottom: "20px" }}>
            All investment inquiries are handled with full confidentiality and professionalism.
          </p>
          <Link
            href="/contact?subject=Investment+Inquiry"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "transparent",
              color: "#ffffff",
              padding: "14px 36px",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.3)",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "15px",
              transition: "border-color 0.2s",
            }}
          >
            Reach Out as an Investor <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
