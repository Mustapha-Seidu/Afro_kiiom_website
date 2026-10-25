import { Mail, Image, FileText, Users, TrendingUp, Activity } from "lucide-react";

const stats = [
  { label: "Total Messages", value: "—", icon: <Mail size={20} />, color: "#03045e" },
  { label: "Media Files", value: "—", icon: <Image size={20} />, color: "#6366f1" },
  { label: "Content Blocks", value: "6", icon: <FileText size={20} />, color: "#0ea5e9" },
  { label: "Page Visitors", value: "—", icon: <Users size={20} />, color: "#10b981" },
];

const quickActions = [
  { href: "/admin/content", label: "Edit Homepage Content", desc: "Update text, descriptions, and section content" },
  { href: "/admin/media", label: "Upload Media", desc: "Add images, videos, and documents" },
  { href: "/admin/settings", label: "Site Settings", desc: "Configure email, admin password, and more" },
];

export default function AdminDashboardPage() {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "32px" }}>
        <h1 style={{ fontSize: "26px", fontWeight: 800, color: "#03045e", margin: "0 0 4px" }}>Dashboard</h1>
        <p style={{ color: "#6b7280", fontSize: "14px", margin: 0 }}>Welcome back. Here&apos;s an overview of your Kiiom website.</p>
      </div>

      {/* Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "16px",
          marginBottom: "32px",
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "14px",
              padding: "24px",
              border: "1px solid #e5e7eb",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                backgroundColor: `${stat.color}15`,
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: stat.color,
                flexShrink: 0,
              }}
            >
              {stat.icon}
            </div>
            <div>
              <div style={{ fontSize: "24px", fontWeight: 800, color: "#1f2937" }}>{stat.value}</div>
              <div style={{ fontSize: "12px", color: "#9ca3af", fontWeight: 500 }}>{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions + Activity */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "24px" }}>
        {/* Quick Actions */}
        <div style={{ backgroundColor: "#ffffff", borderRadius: "16px", border: "1px solid #e5e7eb", overflow: "hidden" }}>
          <div style={{ padding: "20px 24px", borderBottom: "1px solid #f3f4f6" }}>
            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1f2937", margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
              <TrendingUp size={16} style={{ color: "#03045e" }} /> Quick Actions
            </h3>
          </div>
          <div style={{ padding: "8px" }}>
            {quickActions.map((action, i) => (
              <a
                key={i}
                href={action.href}
                className="hover:bg-[#f9fafb]"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  padding: "16px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  transition: "background-color 0.2s",
                  marginBottom: "4px",
                }}
              >
                <span style={{ fontSize: "14px", fontWeight: 600, color: "#03045e" }}>{action.label}</span>
                <span style={{ fontSize: "12px", color: "#6b7280" }}>{action.desc}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Activity */}
        <div style={{ backgroundColor: "#ffffff", borderRadius: "16px", border: "1px solid #e5e7eb", overflow: "hidden" }}>
          <div style={{ padding: "20px 24px", borderBottom: "1px solid #f3f4f6" }}>
            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1f2937", margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
              <Activity size={16} style={{ color: "#03045e" }} /> Site Status
            </h3>
          </div>
          <div style={{ padding: "20px 24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { label: "Website", status: "Online", color: "#22c55e" },
                { label: "Contact Form", status: "Active", color: "#22c55e" },
                { label: "Admin Auth", status: "Secured", color: "#22c55e" },
                { label: "Media Upload", status: "Active", color: "#22c55e" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "13px", color: "#374151", fontWeight: 500 }}>{item.label}</span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "12px",
                      color: item.color,
                      fontWeight: 600,
                    }}
                  >
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: item.color }} />
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
