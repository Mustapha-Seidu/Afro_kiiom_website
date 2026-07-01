"use client";

import Link from "next/link";
import { Mail, Globe, Share2, Link2, ExternalLink } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#111827", color: "#ffffff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 24px 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "48px",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#03045e",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: "18px",
                  color: "#ffffff",
                }}
              >
                K
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: "18px", color: "#ffffff" }}>Afro Kiiom Ltd</div>
                <div style={{ fontSize: "11px", color: "#9ca3af", marginTop: "2px" }}>Innovation Rooted in Africa</div>
              </div>
            </div>
            <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.7", maxWidth: "260px" }}>
              Building Africa&apos;s first computer hardware from scratch — pioneering the future of technology on the continent.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
              {[
                { icon: <Share2 size={16} />, href: "#" },
                { icon: <Link2 size={16} />, href: "#" },
                { icon: <ExternalLink size={16} />, href: "#" },
                { icon: <Globe size={16} />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  style={{
                    width: "34px",
                    height: "34px",
                    backgroundColor: "#1f2937",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#9ca3af",
                    transition: "all 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#03045e";
                    (e.currentTarget as HTMLElement).style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#1f2937";
                    (e.currentTarget as HTMLElement).style.color = "#9ca3af";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Quick Links
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { href: "/#vision", label: "Our Vision" },
                { href: "/#projects", label: "Projects" },
                { href: "/#hardware", label: "Hardware Research" },
                { href: "/#investors", label: "Invest in Us" },
                { href: "/#join", label: "Join the Team" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ color: "#9ca3af", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9ca3af")}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Products
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div>
                <div style={{ color: "#ffffff", fontSize: "14px", fontWeight: 600 }}>Booking System</div>
                <div style={{ color: "#6b7280", fontSize: "12px", marginTop: "2px" }}>Smart scheduling platform</div>
              </div>
              <div>
                <div style={{ color: "#6b7280", fontSize: "14px", fontStyle: "italic" }}>More coming soon...</div>
              </div>
              <div style={{ marginTop: "8px", padding: "12px", backgroundColor: "#1f2937", borderRadius: "8px", border: "1px solid #374151" }}>
                <div style={{ fontSize: "12px", color: "#a5b4fc", fontWeight: 600 }}>Hardware Research</div>
                <div style={{ fontSize: "11px", color: "#6b7280", marginTop: "4px" }}>Africa&apos;s first indigenous CPU — In development</div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Get In Touch
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <a
                href="mailto:info@kiiom.com"
                style={{ display: "flex", alignItems: "center", gap: "10px", color: "#9ca3af", textDecoration: "none", fontSize: "14px" }}
              >
                <Mail size={15} style={{ color: "#a5b4fc", flexShrink: 0 }} />
                info@kiiom.com
              </a>
              <Link
                href="/contact"
                style={{
                  display: "inline-block",
                  marginTop: "8px",
                  backgroundColor: "#03045e",
                  color: "#ffffff",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontWeight: 600,
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                Send Us a Message
              </Link>
              <Link
                href="/admin"
                style={{ color: "#4b5563", fontSize: "12px", textDecoration: "none", marginTop: "8px" }}
              >
                Admin Dashboard →
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #1f2937", paddingTop: "32px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
          <p style={{ color: "#6b7280", fontSize: "13px", margin: 0 }}>
            &copy; {year} Afro Kiiom Ltd. All rights reserved.
          </p>
          <p style={{ color: "#4b5563", fontSize: "12px", margin: 0 }}>
            Building tomorrow&apos;s technology, today — from Africa to the world.
          </p>
        </div>
      </div>
    </footer>
  );
}
