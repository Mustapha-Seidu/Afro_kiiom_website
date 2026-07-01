import { Cpu, Layers, FlaskConical, Microscope, Zap } from "lucide-react";

const phases = [
  {
    num: "01",
    title: "Research & Architecture",
    desc: "Deep academic and engineering research into CPU architecture, instruction set design (ISA), and transistor-level logic.",
    status: "Active",
  },
  {
    num: "02",
    title: "Prototype Design",
    desc: "Designing the first prototype using FPGA boards and open-source hardware toolchains before moving to silicon.",
    status: "Upcoming",
  },
  {
    num: "03",
    title: "Fabrication Partnership",
    desc: "Partnering with fabrication labs to move from FPGA prototype to a real silicon chip — the first African-designed CPU.",
    status: "Future",
  },
  {
    num: "04",
    title: "Mass Production & Ecosystem",
    desc: "Manufacturing at scale, building the software ecosystem around the hardware, and making it available to African institutions first.",
    status: "Future",
  },
];

const highlights = [
  { icon: <Cpu size={20} />, text: "Indigenous ISA Design" },
  { icon: <Layers size={20} />, text: "FPGA Prototyping" },
  { icon: <FlaskConical size={20} />, text: "Silicon Research" },
  { icon: <Microscope size={20} />, text: "Academic Partnerships" },
  { icon: <Zap size={20} />, text: "Low-power Architecture" },
];

export default function HardwareSection() {
  return (
    <section id="hardware" className="section-pad" style={{ backgroundColor: "#ffffff" }}>
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
            Hardware Division
          </span>
          <h2
            className="section-heading"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#03045e", margin: "0 auto" }}
          >
            Africa&apos;s First Indigenous CPU
          </h2>
          <p style={{ color: "#6b7280", fontSize: "17px", maxWidth: "600px", margin: "20px auto 0", lineHeight: 1.7 }}>
            We are undertaking the ambitious research and engineering challenge of building a computer processor designed entirely in Africa,
            from the ground up — instruction set, logic gates, and all.
          </p>
        </div>

        {/* Two column layout */}
        <div className="two-col-grid">
          {/* Left: Roadmap */}
          <div>
            <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#03045e", marginBottom: "32px" }}>Development Roadmap</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {phases.map((phase, i) => (
                <div
                  key={i}
                  style={{ display: "flex", gap: "20px", position: "relative", paddingBottom: i < phases.length - 1 ? "32px" : "0" }}
                >
                  {/* Line */}
                  {i < phases.length - 1 && (
                    <div
                      style={{
                        position: "absolute",
                        left: "20px",
                        top: "44px",
                        bottom: 0,
                        width: "1px",
                        backgroundColor: "#e5e7eb",
                      }}
                    />
                  )}
                  {/* Number bubble */}
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: phase.status === "Active" ? "#03045e" : "#f3f4f6",
                      color: phase.status === "Active" ? "#ffffff" : "#9ca3af",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "13px",
                      flexShrink: 0,
                      zIndex: 1,
                    }}
                  >
                    {phase.num}
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                      <h4 style={{ fontSize: "16px", fontWeight: 700, color: "#1f2937", margin: 0 }}>{phase.title}</h4>
                      <span
                        style={{
                          backgroundColor: phase.status === "Active" ? "#f0fdf4" : phase.status === "Upcoming" ? "#fefce8" : "#f9fafb",
                          color: phase.status === "Active" ? "#16a34a" : phase.status === "Upcoming" ? "#ca8a04" : "#9ca3af",
                          padding: "2px 8px",
                          borderRadius: "100px",
                          fontSize: "10px",
                          fontWeight: 700,
                        }}
                      >
                        {phase.status}
                      </span>
                    </div>
                    <p style={{ color: "#6b7280", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Highlights Card */}
          <div>
            <div
              style={{
                backgroundColor: "#03045e",
                borderRadius: "20px",
                padding: "40px",
                color: "#ffffff",
                marginBottom: "24px",
              }}
            >
              <Cpu size={36} style={{ color: "rgba(165,180,252,0.8)", marginBottom: "20px" }} />
              <h3 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "12px" }}>
                Why This Matters
              </h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: 1.8, marginBottom: "28px" }}>
                Today, every computer chip used in Africa is designed and manufactured elsewhere.
                We aim to change that — building Africa&apos;s domestic hardware capabilities, reducing reliance on
                imported silicon, and laying the groundwork for a hardware engineering ecosystem on the continent.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {highlights.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      backgroundColor: "rgba(255,255,255,0.07)",
                      padding: "12px 16px",
                      borderRadius: "8px",
                    }}
                  >
                    <span style={{ color: "#a5b4fc" }}>{h.icon}</span>
                    <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "14px", fontWeight: 500 }}>{h.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#fefce8",
                border: "1px solid #fde68a",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <p style={{ color: "#92400e", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
                <strong>⚡ This is a long-term mission.</strong> We are calling on investors, engineers, and institutions who believe in this
                vision to partner with us and help fund this groundbreaking research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
