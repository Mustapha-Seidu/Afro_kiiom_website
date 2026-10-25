"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Suspense } from "react";

const subjects = [
  "General Inquiry",
  "Investment Inquiry",
  "Join the Team",
  "Product / Partnership",
  "Hardware Research Collaboration",
  "Media & Press",
  "Other",
];

function ContactForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const sub = searchParams.get("subject");
    if (sub) setForm((f) => ({ ...f, subject: decodeURIComponent(sub) }));
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message");
      }
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <div
      className="form-card-pad"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "20px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
        border: "1px solid #e5e7eb",
      }}
    >
      <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#03045e", marginBottom: "8px" }}>
        Send Us a Message
      </h2>
      <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "32px", lineHeight: 1.6 }}>
        Whether you&apos;re a potential investor, talented individual, or just curious — we want to hear from you.
      </p>

      {status === "success" ? (
        <div
          style={{
            backgroundColor: "#f0fdf4",
            border: "1px solid #bbf7d0",
            borderRadius: "12px",
            padding: "32px",
            textAlign: "center",
          }}
        >
          <CheckCircle size={40} style={{ color: "#16a34a", margin: "0 auto 16px" }} />
          <h3 style={{ color: "#15803d", fontWeight: 700, fontSize: "18px", marginBottom: "8px" }}>Message Sent!</h3>
          <p style={{ color: "#166534", fontSize: "14px" }}>Thank you for reaching out. We will get back to you soon.</p>
          <button
            onClick={() => setStatus("idle")}
            style={{
              marginTop: "20px",
              backgroundColor: "#03045e",
              color: "#ffffff",
              border: "none",
              padding: "10px 24px",
              borderRadius: "6px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Send Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px" }}>
                Full Name *
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  fontSize: "14px",
                  outline: "none",
                  transition: "border-color 0.2s",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#03045e")}
                onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px" }}>
                Email Address *
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  fontSize: "14px",
                  outline: "none",
                  transition: "border-color 0.2s",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#03045e")}
                onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
              />
            </div>
          </div>

          <div>
            <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px" }}>
              Subject *
            </label>
            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px 14px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "14px",
                outline: "none",
                backgroundColor: "#ffffff",
                boxSizing: "border-box",
              }}
            >
              <option value="">Select a subject...</option>
              {subjects.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px" }}>
              Message *
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Tell us who you are and what you'd like to discuss..."
              style={{
                width: "100%",
                padding: "12px 14px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "14px",
                outline: "none",
                resize: "vertical",
                fontFamily: "inherit",
                transition: "border-color 0.2s",
                boxSizing: "border-box",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#03045e")}
              onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
            />
          </div>

          {status === "error" && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "#fef2f2",
                border: "1px solid #fecaca",
                borderRadius: "8px",
                padding: "12px 16px",
              }}
            >
              <AlertCircle size={16} style={{ color: "#dc2626", flexShrink: 0 }} />
              <span style={{ color: "#dc2626", fontSize: "13px" }}>{errorMsg}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            style={{
              backgroundColor: status === "loading" ? "#6b7280" : "#03045e",
              color: "#ffffff",
              border: "none",
              padding: "14px 32px",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "15px",
              cursor: status === "loading" ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              transition: "background-color 0.2s",
            }}
          >
            {status === "loading" ? "Sending..." : <><Send size={16} /> Send Message</>}
          </button>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "#f9fafb", minHeight: "100vh" }}>
      {/* Hero */}
      <div
        style={{
          backgroundColor: "#03045e",
          padding: "80px 24px 100px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, color: "#ffffff", marginBottom: "16px" }}>
          Let&apos;s Talk
        </h1>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "18px", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
          Investors, collaborators, talent — we want to hear from everyone who believes in our mission.
        </p>
      </div>

      <div style={{ maxWidth: "1100px", margin: "-60px auto 80px", padding: "0 24px" }}>
        <div className="contact-grid">
          {/* Form */}
          <Suspense fallback={<div>Loading...</div>}>
            <ContactForm />
          </Suspense>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              { icon: <Mail size={20} />, label: "Email", value: "info@kiiom.com", href: "mailto:info@kiiom.com" },
              { icon: <Phone size={20} />, label: "Phone", value: "+233 (0)55 078 6360", href: "#" },
              { icon: <MapPin size={20} />, label: "Location", value: "Guinea Bissau Loop, Accra, Greater Accra Region, Ghana", href: "#" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "14px",
                  padding: "24px",
                  border: "1px solid #e5e7eb",
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#eff6ff",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#03045e",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>
                    {item.label}
                  </div>
                  <a href={item.href} style={{ color: "#1f2937", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
                    {item.value}
                  </a>
                </div>
              </div>
            ))}

            {/* Info box */}
            <div
              style={{
                backgroundColor: "#03045e",
                borderRadius: "14px",
                padding: "28px",
                color: "#ffffff",
              }}
            >
              <h4 style={{ fontWeight: 700, fontSize: "16px", marginBottom: "12px" }}>Response Time</h4>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
                We aim to respond to all messages within <strong style={{ color: "#ffffff" }}>2–3 business days</strong>.
                Investment inquiries receive priority attention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
