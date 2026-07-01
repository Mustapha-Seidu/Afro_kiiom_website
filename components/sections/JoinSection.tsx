import Link from "next/link";
import { Code, Brain, Cpu, Paintbrush, BarChart, ArrowRight, Users } from "lucide-react";

const roles = [
  { icon: <Code size={20} />, title: "Software Engineers", desc: "Full-stack, backend, mobile, and systems developers." },
  { icon: <Cpu size={20} />, title: "Hardware Engineers", desc: "Electronics, embedded systems, and chip design experts." },
  { icon: <Brain size={20} />, title: "Researchers", desc: "Computer science, electrical engineering, and AI researchers." },
  { icon: <Paintbrush size={20} />, title: "Designers", desc: "UI/UX designers who craft beautiful, accessible experiences." },
  { icon: <BarChart size={20} />, title: "Business & Strategy", desc: "Growth, partnerships, marketing, and operations roles." },
  { icon: <Users size={20} />, title: "Community & Outreach", desc: "People who build relationships, organise events, and grow awareness of our work." },
];

export default function JoinSection() {
  return (
    <section id="join" className="section-pad" style={{ backgroundColor: "#f9fafb" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span
            style={{
              display: "inline-block",
              backgroundColor: "#eff6ff",
              color: "#03045e",
              padding: "6px 16px",
              borderRadius: "100px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Join the Team
          </span>
          <h2
            className="section-heading"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#03045e", margin: "0 auto" }}
          >
            Talented? Let&apos;s Build Together
          </h2>
          <p style={{ color: "#6b7280", fontSize: "17px", maxWidth: "580px", margin: "20px auto 0", lineHeight: 1.7 }}>
            We are open to talented, motivated people who want to work on hard problems in software and hardware.
            We care more about what you can do and how you think than about credentials alone.
          </p>
        </div>

        {/* Roles */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginBottom: "64px",
          }}
        >
          {roles.map((role, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  backgroundColor: "#eff6ff",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#03045e",
                  marginBottom: "16px",
                }}
              >
                {role.icon}
              </div>
              <h4 style={{ fontSize: "16px", fontWeight: 700, color: "#1f2937", marginBottom: "8px" }}>{role.title}</h4>
              <p style={{ color: "#6b7280", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>{role.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          style={{
            background: "linear-gradient(135deg, #03045e 0%, #0a0f8a 100%)",
            borderRadius: "20px",
            padding: "56px 40px",
            textAlign: "center",
            color: "#ffffff",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-80px",
              right: "-80px",
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.05)",
              pointerEvents: "none",
            }}
          />
          <h3 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, marginBottom: "16px", position: "relative" }}>
            Interested? Let&apos;s Have a Conversation.
          </h3>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "16px",
              maxWidth: "500px",
              margin: "0 auto 32px",
              lineHeight: 1.7,
              position: "relative",
            }}
          >
            Send us a message telling us who you are, what you work on, and what draws you to Kiiom.
            We don&apos;t have formal job postings — we evaluate people directly.
          </p>
          <Link
            href="/contact?subject=Join+the+Team"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#ffffff",
              color: "#03045e",
              padding: "14px 36px",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "15px",
              textDecoration: "none",
              position: "relative",
            }}
          >
            Send Us Your Pitch <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
