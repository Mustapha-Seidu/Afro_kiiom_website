import { Target, Eye, Lightbulb, Globe } from "lucide-react";

const pillars = [
  {
    icon: <Eye size={24} />,
    title: "Our Vision",
    body:
      "To be the foremost African technology company that designs, manufactures, and delivers indigenous computer hardware and world-class software — putting Africa at the centre of the global technology map.",
  },
  {
    icon: <Target size={24} />,
    title: "Our Mission",
    body:
      "To design Africa's first computer hardware from scratch, develop software that solves real-world African problems, and nurture a generation of innovators who believe Africa can lead in technology.",
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Our Goals",
    body:
      "Launch impactful software products, complete research into processor and hardware architecture, attract global investment, and create an ecosystem where African talent and ideas thrive.",
  },
  {
    icon: <Globe size={24} />,
    title: "Our Aims",
    body:
      "Build viable indigenous hardware and software alternatives; contribute to a growing ecosystem where African engineers, designers, and scientists can do meaningful, world-class work.",
  },
];

export default function VisionSection() {
  return (
    <section id="vision" className="section-pad" style={{ backgroundColor: "#ffffff" }}>
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
            Who We Are
          </span>
          <h2
            className="section-heading"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#03045e", margin: "0 auto" }}
          >
            Built on a Bold Vision
          </h2>
          <p
            style={{
              color: "#6b7280",
              fontSize: "17px",
              maxWidth: "580px",
              margin: "20px auto 0",
              lineHeight: 1.7,
            }}
          >
            We are a technology company doing the hard work of building software products and
            conducting research into hardware design — because we believe African engineers belong
            at the cutting edge of the industry.
          </p>
        </div>

        {/* Pillars Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {pillars.map((item, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "16px",
                padding: "32px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  backgroundColor: "#03045e",
                }}
              />
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#eff6ff",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#03045e",
                  marginBottom: "20px",
                }}
              >
                {item.icon}
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#03045e", marginBottom: "12px" }}>
                {item.title}
              </h3>
              <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: 1.8 }}>{item.body}</p>
            </div>
          ))}
        </div>

        {/* Divider quote */}
        <div
          style={{
            marginTop: "64px",
            backgroundColor: "#03045e",
            borderRadius: "16px",
            padding: "48px 40px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-40px",
              right: "-40px",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          />
          <p
            style={{
              color: "#ffffff",
              fontSize: "clamp(18px, 3vw, 26px)",
              fontWeight: 700,
              lineHeight: 1.5,
              maxWidth: "700px",
              margin: "0 auto",
              fontStyle: "italic",
            }}
          >
            &ldquo;We believe African engineers can design world-class technology — and we are doing the work to demonstrate it.&rdquo;
          </p>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", marginTop: "16px" }}>— Afro Kiiom Ltd</p>
        </div>
      </div>
    </section>
  );
}
