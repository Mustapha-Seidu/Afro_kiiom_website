import { Calendar, Cpu, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Smart Booking System",
    category: "Software",
    status: "Live",
    statusColor: "#22c55e",
    statusBg: "#f0fdf4",
    year: "2024",
    icon: <Calendar size={32} />,
    description:
      "A full-featured booking and scheduling platform for businesses. The system handles appointment booking, real-time availability, automated reminders, and comprehensive admin management.",
    longDesc:
      "The Kiiom Booking System is our first commercial software product. It is designed to help service-based businesses manage bookings efficiently, reduce no-shows, and deliver a seamless experience to their customers. The platform includes both a client-facing booking interface and a full admin dashboard for businesses to manage schedules, services, staff, and analytics.",
    features: [
      "Real-time availability calendar",
      "Multi-service and multi-staff support",
      "Automated email & SMS reminders",
      "Admin dashboard with analytics",
      "Mobile-responsive design",
      "Secure payment integration",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Node.js", "Express.js", "Mongodb", "Redis"],
    link: "https://kb.kiiom.com",
  },
];

const research = [
  {
    id: "hw-01",
    name: "Kiiom CPU — Gen 1",
    category: "Hardware Research",
    status: "Research Phase",
    statusColor: "#f59e0b",
    statusBg: "#fefce8",
    icon: <Cpu size={32} />,
    description:
      "The flagship long-term project: designing Africa's first indigenous computer processor from the instruction set architecture down to the physical chip layout.",
  },
];

const future = [
  { name: "Fleet Management System", desc: "Track and manage vehicle fleets in real time.", eta: "2025" },
  { name: "Kiiom ERP Suite", desc: "Enterprise resource planning for African SMEs.", eta: "2026" },
  { name: "Kiiom AI Assistant", desc: "Context-aware AI assistant for African languages.", eta: "2026" },
  { name: "Kiiom OS", desc: "A lightweight operating system optimised for the Kiiom CPU.", eta: "TBD" },
];

export default function ProjectsPage() {
  return (
    <div style={{ backgroundColor: "#f9fafb", minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{ backgroundColor: "#03045e", padding: "80px 24px 60px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, color: "#ffffff", marginBottom: "16px" }}>
          Our Projects
        </h1>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "18px", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
          From our first commercial software product to our long-term hardware research — this is what we are building.
        </p>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px" }}>
        {/* Software Products */}
        <div style={{ marginBottom: "80px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: "#03045e", marginBottom: "32px", borderBottom: "2px solid #e5e7eb", paddingBottom: "16px" }}>
            Software Products
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {projects.map((project) => (
              <div
                key={project.id}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                  border: "1px solid #e5e7eb",
                  overflow: "hidden",
                }}
              >
                <div className="fluid-card-pad">
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", marginBottom: "24px", flexWrap: "wrap" }}>
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: "#eff6ff",
                        borderRadius: "14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#03045e",
                        flexShrink: 0,
                      }}
                    >
                      {project.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: "4px" }}>
                        <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#03045e", margin: 0 }}>{project.name}</h3>
                        <span
                          style={{
                            backgroundColor: project.statusBg,
                            color: project.statusColor,
                            padding: "3px 10px",
                            borderRadius: "100px",
                            fontSize: "12px",
                            fontWeight: 700,
                          }}
                        >
                          ● {project.status}
                        </span>
                        <span style={{ color: "#9ca3af", fontSize: "13px" }}>{project.year}</span>
                      </div>
                      <p style={{ color: "#6b7280", fontSize: "14px", margin: 0 }}>{project.category}</p>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          color: "#03045e",
                          textDecoration: "none",
                          fontSize: "14px",
                          fontWeight: 600,
                        }}
                      >
                        View <ExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  <p style={{ color: "#4b5563", fontSize: "15px", lineHeight: 1.8, marginBottom: "28px" }}>
                    {project.longDesc}
                  </p>

                  <div className="detail-grid">
                    <div>
                      <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#374151", marginBottom: "12px" }}>Key Features</h4>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                        {project.features.map((f, i) => (
                          <li key={i} style={{ display: "flex", alignItems: "center", gap: "8px", color: "#4b5563", fontSize: "14px" }}>
                            <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#03045e", flexShrink: 0 }} />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#374151", marginBottom: "12px" }}>Tech Stack</h4>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {project.tech.map((t, i) => (
                          <span
                            key={i}
                            style={{
                              backgroundColor: "#f3f4f6",
                              color: "#374151",
                              padding: "5px 12px",
                              borderRadius: "6px",
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hardware Research */}
        <div style={{ marginBottom: "80px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: "#03045e", marginBottom: "32px", borderBottom: "2px solid #e5e7eb", paddingBottom: "16px" }}>
            Hardware Research
          </h2>
          {research.map((item) => (
            <div
              key={item.id}
              className="fluid-card-pad"
              style={{
                backgroundColor: "#03045e",
                borderRadius: "20px",
                color: "#ffffff",
                display: "flex",
                gap: "24px",
                alignItems: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#a5b4fc",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px", flexWrap: "wrap" }}>
                  <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#ffffff", margin: 0 }}>{item.name}</h3>
                  <span
                    style={{
                      backgroundColor: item.statusBg,
                      color: item.statusColor,
                      padding: "3px 10px",
                      borderRadius: "100px",
                      fontSize: "12px",
                      fontWeight: 700,
                    }}
                  >
                    {item.status}
                  </span>
                </div>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", lineHeight: 1.8, margin: 0 }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Future Products */}
        <div>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: "#03045e", marginBottom: "32px", borderBottom: "2px solid #e5e7eb", paddingBottom: "16px" }}>
            On the Horizon
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
            {future.map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px dashed #d1d5db",
                  borderRadius: "14px",
                  padding: "28px",
                }}
              >
                <div style={{ fontSize: "16px", fontWeight: 700, color: "#1f2937", marginBottom: "8px" }}>{item.name}</div>
                <p style={{ color: "#6b7280", fontSize: "13px", lineHeight: 1.6, marginBottom: "16px" }}>{item.desc}</p>
                <span
                  style={{
                    backgroundColor: "#eff6ff",
                    color: "#03045e",
                    padding: "3px 10px",
                    borderRadius: "4px",
                    fontSize: "11px",
                    fontWeight: 700,
                  }}
                >
                  ETA: {item.eta}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
