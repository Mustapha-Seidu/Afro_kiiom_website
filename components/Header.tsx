"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, LogIn } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close when clicking outside the header
  useEffect(() => {
    if (!menuOpen) return;
    const close = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [menuOpen]);

  const navLinks = [
    { href: "/#vision", label: "Vision" },
    { href: "/#projects", label: "Projects" },
    { href: "/#hardware", label: "Hardware" },
    { href: "/#investors", label: "Investors" },
    { href: "/#join", label: "Join Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      ref={headerRef}
      style={{
        backgroundColor: "#03045e",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.3)" : "none",
        transition: "box-shadow 0.3s",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "70px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "42px",
              height: "42px",
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: "18px",
              color: "#03045e",
              letterSpacing: "-1px",
            }}
          >
            K
          </div>
          <span style={{ color: "#ffffff", fontWeight: 800, fontSize: "22px", letterSpacing: "1px" }}>
            Afro Kiiom
          </span>
        </Link>

        {/* Desktop nav — hidden on mobile via CSS class */}
        <nav className="hdr-desktop-nav" style={{ gap: "32px" }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              style={{ color: "#ffffff", textDecoration: "none", fontSize: "14px", fontWeight: 500, opacity: 0.9 }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop right actions — hidden on mobile via CSS class */}
        <div className="hdr-desktop-actions" style={{ alignItems: "center", gap: "16px" }}>
          <Link
            href="/admin/login"
            style={{
              color: "rgba(255,255,255,0.55)",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: "5px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.9)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
          >
            <LogIn size={14} /> Login
          </Link>
          <Link
            href="/#investors"
            style={{
              backgroundColor: "#ffffff",
              color: "#03045e",
              padding: "8px 20px",
              borderRadius: "6px",
              fontWeight: 700,
              fontSize: "13px",
              textDecoration: "none",
            }}
          >
            Invest in Kiiom
          </Link>
        </div>

        {/* Hamburger — hidden on desktop via CSS class */}
        <button
          type="button"
          className="hdr-hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          style={{
            background: "none",
            border: "none",
            color: "#ffffff",
            cursor: "pointer",
            padding: "8px",
            touchAction: "manipulation",
          }}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile slide-down menu — only rendered when open */}
      {menuOpen && (
        <div
          className="mobile-menu-panel"
          style={{ backgroundColor: "#020338", borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div style={{ padding: "12px 24px 24px", display: "flex", flexDirection: "column", gap: "4px" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: 500,
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  padding: "12px 0",
                  display: "block",
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* Login */}
            <Link
              href="/admin/login"
              onClick={() => setMenuOpen(false)}
              style={{
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 500,
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                padding: "12px 0",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <LogIn size={16} /> Login
            </Link>

            {/* CTA */}
            <Link
              href="/#investors"
              onClick={() => setMenuOpen(false)}
              style={{
                backgroundColor: "#ffffff",
                color: "#03045e",
                padding: "12px 20px",
                borderRadius: "6px",
                fontWeight: 700,
                textAlign: "center",
                textDecoration: "none",
                marginTop: "12px",
                display: "block",
              }}
            >
              Invest in Kiiom
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
