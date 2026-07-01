import Link from "next/link";
import { Calendar, ArrowRight, Clock, Code2 } from "lucide-react";

const projects = [
  {
    name: "Smart Booking System",
    status: "Live",
    statusColor: "#22c55e",
    statusBg: "#f0fdf4",
    category: "Software",
    description:
      "A comprehensive booking and scheduling platform designed to streamline appointment management for businesses of all sizes. Features real-time availability, automated reminders, and an intuitive admin panel.",
    features: ["Real-time scheduling", "Admin dashboard", "Automated notifications", "Multi-service support"],
    icon: <Calendar size={28} />,
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
  },
];

const upcoming = [
  { name: "Fleet Management System", category: "Software", eta: "2025" },
  { name: "Kiiom ERP Suite", category: "Software", eta: "2026" },
  { name: "Kiiom CPU — Gen 1", category: "Hardware", eta: "TBD" },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-pad" style={{ backgroundColor: "#f9fafb" }}>
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
            Our Products
          </span>
          <h2
            className="section-heading"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#03045e", margin: "0 auto" }}
          >
            What We&apos;ve Built
          </h2>
          <p style={{ color: "#6b7280", fontSize: "17px", maxWidth: "540px", margin: "20px auto 0", lineHeight: 1.7 }}>
            Our booking system is the first of many products to come. This is just the beginning.
          </p>
        </div>

        {/* Main Projects */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginBottom: "64px" }}>
          {projects.map((project, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                border: "1px solid #e5e7eb",
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "0",
              }}
            >
              <div className="fluid-card-pad">
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      backgroundColor: "#eff6ff",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#03045e",
                    }}
                  >
                    {project.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#03045e", margin: 0 }}>{project.name}</h3>
                    <div style={{ display: "flex", gap: "8px", marginTop: "6px", flexWrap: "wrap" }}>
                      <span
                        style={{
                          backgroundColor: project.statusBg,
                          color: project.statusColor,
                          padding: "2px 10px",
                          borderRadius: "100px",
                          fontSize: "12px",
                          fontWeight: 600,
                        }}
                      >
                        ● {project.status}
                      </span>
                      <span
                        style={{
                          backgroundColor: "#f3f4f6",
                          color: "#6b7280",
                          padding: "2px 10px",
                          borderRadius: "100px",
                          fontSize: "12px",
                          fontWeight: 600,
                        }}
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                <p style={{ color: "#4b5563", fontSize: "15px", lineHeight: 1.8, marginBottom: "24px", maxWidth: "580px" }}>
                  {project.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                  {project.features.map((f, fi) => (
                    <span
                      key={fi}
                      style={{
                        backgroundColor: "#eff6ff",
                        color: "#03045e",
                        padding: "4px 12px",
                        borderRadius: "6px",
                        fontSize: "12px",
                        fontWeight: 500,
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {project.tech.map((t, ti) => (
                    <span
                      key={ti}
                      style={{
                        backgroundColor: "#f3f4f6",
                        color: "#374151",
                        padding: "4px 10px",
                        borderRadius: "4px",
                        fontSize: "12px",
                        fontFamily: "monospace",
                        fontWeight: 600,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#03045e",
                  width: "6px",
                  flexShrink: 0,
                }}
              />
            </div>
          ))}
        </div>

        {/* Upcoming Projects */}
        <div>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#03045e",
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Clock size={20} /> Coming Soon
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {upcoming.map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px dashed #d1d5db",
                  borderRadius: "12px",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Code2 size={16} style={{ color: "#03045e" }} />
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "#1f2937" }}>{item.name}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "12px", color: "#9ca3af" }}>{item.category}</span>
                  <span
                    style={{
                      backgroundColor: "#eff6ff",
                      color: "#03045e",
                      padding: "2px 8px",
                      borderRadius: "4px",
                      fontSize: "11px",
                      fontWeight: 600,
                    }}
                  >
                    ETA: {item.eta}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <Link
            href="/projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#03045e",
              color: "#ffffff",
              padding: "14px 32px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "15px",
            }}
          >
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
