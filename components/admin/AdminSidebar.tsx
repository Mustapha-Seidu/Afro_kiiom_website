"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FileText, Image, LogOut, Settings } from "lucide-react";

const navItems = [
  { href: "/admin", icon: <LayoutDashboard size={18} />, label: "Dashboard" },
  { href: "/admin/content", icon: <FileText size={18} />, label: "Content" },
  { href: "/admin/media", icon: <Image size={18} />, label: "Media" },
  { href: "/admin/settings", icon: <Settings size={18} />, label: "Settings" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  const handleLogout = async () => {
    await fetch("/api/auth/admin-logout", { method: "POST" });
    window.location.href = "/admin/login";
  };

  return (
    <aside
      style={{
        width: "240px",
        backgroundColor: "#03045e",
        display: "flex",
        flexDirection: "column",
        padding: "24px 0",
        flexShrink: 0,
      }}
    >
      {/* Brand */}
      <div style={{ padding: "0 20px 24px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "34px",
              height: "34px",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              color: "#03045e",
              fontSize: "15px",
            }}
          >
            K
          </div>
          <div>
            <div style={{ color: "#ffffff", fontWeight: 700, fontSize: "14px" }}>Kiiom Admin</div>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>Dashboard</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: "16px 12px", display: "flex", flexDirection: "column", gap: "4px" }}>
        {navItems.map((item) => {
          const active = item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 12px",
                borderRadius: "8px",
                textDecoration: "none",
                color: active ? "#ffffff" : "rgba(255,255,255,0.6)",
                backgroundColor: active ? "rgba(255,255,255,0.12)" : "transparent",
                fontWeight: active ? 600 : 400,
                fontSize: "14px",
                transition: "all 0.2s",
              }}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div style={{ padding: "12px" }}>
        <button
          onClick={handleLogout}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 12px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "rgba(255,255,255,0.06)",
            color: "rgba(255,255,255,0.6)",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 500,
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(239,68,68,0.15)";
            (e.currentTarget as HTMLElement).style.color = "#fca5a5";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.06)";
            (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
          }}
        >
          <LogOut size={16} />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
