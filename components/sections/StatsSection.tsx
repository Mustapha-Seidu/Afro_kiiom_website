const stats = [
  { value: "1", label: "Product Launched", sub: "Booking System" },
  { value: "3", label: "Team Members", sub: "And growing" },
  { value: "1st", label: "African CPU", sub: "In development" },
  { value: "2+", label: "Domains", sub: "Software & Hardware" },
];

export default function StatsSection() {
  return (
    <section style={{ backgroundColor: "#03045e", padding: "0 24px 80px" }}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1px",
          backgroundColor: "rgba(255,255,255,0.1)",
          borderRadius: "12px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#03045e",
              padding: "32px 24px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "48px",
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: 1,
                marginBottom: "8px",
              }}
            >
              {stat.value}
            </div>
            <div style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600, fontSize: "14px" }}>{stat.label}</div>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", marginTop: "4px" }}>{stat.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
