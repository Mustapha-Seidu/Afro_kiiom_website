"use client";

import { useState } from "react";
import { Save, CheckCircle, Eye, EyeOff } from "lucide-react";

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);
  const [showCurrentPass, setShowCurrentPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [form, setForm] = useState({
    smtpHost: "",
    smtpPort: "587",
    smtpUser: "",
    smtpPass: "",
    fromEmail: "info@kiiom.com",
    toEmail: "benjaminazuuri@gmail.com",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSave = async () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const inputStyle = {
    width: "100%",
    padding: "11px 14px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box" as const,
    color: "#1f2937",
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
        <div>
          <h1 style={{ fontSize: "24px", fontWeight: 800, color: "#03045e", margin: "0 0 4px" }}>Settings</h1>
          <p style={{ color: "#6b7280", fontSize: "14px", margin: 0 }}>Configure email, admin access, and other site settings.</p>
        </div>
        <button
          onClick={handleSave}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: saved ? "#16a34a" : "#03045e",
            color: "#ffffff",
            border: "none",
            padding: "11px 24px",
            borderRadius: "8px",
            fontWeight: 700,
            fontSize: "14px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
        >
          {saved ? <CheckCircle size={16} /> : <Save size={16} />}
          {saved ? "Saved!" : "Save Settings"}
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {/* Email (SMTP) Settings */}
        <div style={{ backgroundColor: "#ffffff", borderRadius: "16px", border: "1px solid #e5e7eb", overflow: "hidden" }}>
          <div style={{ padding: "20px 24px", borderBottom: "1px solid #f3f4f6", backgroundColor: "#fafafa" }}>
            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1f2937", margin: 0 }}>Email / SMTP Settings</h3>
            <p style={{ fontSize: "13px", color: "#6b7280", margin: "4px 0 0" }}>
              Configure outgoing email for the contact form. Use Gmail, SendGrid, or any SMTP provider.
            </p>
          </div>
          <div style={{ padding: "24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px" }}>SMTP Host</label>
              <input
                style={inputStyle}
                placeholder="smtp.gmail.com"
                value={form.smtpHost}
                onChange={(e) => setForm((f) => ({ ...f, smtpHost: e.target.value }))}
                onFocus={(e) => (e.target.style.borderColor = "#03045e")}
                onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px" }}>SMTP Port</label>
              <input
                style={inputStyle}
                placeholder="587"
                value={form.smtpPort}
                onChange={(e) => setForm((f) => ({ ...f, smtpPort: e.target.value }))}
                onFocus={(e) => (e.target.style.borderColor = "#03045e")}
                onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px" }}>SMTP Username</label>
              <input
                style={inputStyle}
                placeholder="your@gmail.com"
                value={form.smtpUser}
                onChange={(e) => setForm((f) => ({ ...f, smtpUser: e.target.value }))}
                onFocus={(e) => (e.target.style.borderColor = "#03045e")}
                onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px" }}>SMTP Password / App Key</label>
              <input
                type="password"
                style={inputStyle}
                placeholder="••••••••••••"
                value={form.smtpPass}
                onChange={(e) => setForm((f) => ({ ...f, smtpPass: e.target.value }))}
                onFocus={(e) => (e.target.style.borderColor = "#03045e")}
                onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px" }}>From Email Address</label>
              <input
                style={inputStyle}
                value={form.fromEmail}
                onChange={(e) => setForm((f) => ({ ...f, fromEmail: e.target.value }))}
                onFocus={(e) => (e.target.style.borderColor = "#03045e")}
                onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px" }}>Receive Emails At</label>
              <input
                style={inputStyle}
                value={form.toEmail}
                onChange={(e) => setForm((f) => ({ ...f, toEmail: e.target.value }))}
                onFocus={(e) => (e.target.style.borderColor = "#03045e")}
                onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
              />
            </div>
          </div>
        </div>

        {/* Change Admin Password */}
        <div style={{ backgroundColor: "#ffffff", borderRadius: "16px", border: "1px solid #e5e7eb", overflow: "hidden" }}>
          <div style={{ padding: "20px 24px", borderBottom: "1px solid #f3f4f6", backgroundColor: "#fafafa" }}>
            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1f2937", margin: 0 }}>Change Admin Password</h3>
          </div>
          <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "18px", maxWidth: "440px" }}>
            {[
              { key: "currentPassword", label: "Current Password", show: showCurrentPass, toggle: () => setShowCurrentPass(!showCurrentPass) },
              { key: "newPassword", label: "New Password", show: showNewPass, toggle: () => setShowNewPass(!showNewPass) },
              { key: "confirmPassword", label: "Confirm New Password", show: showNewPass, toggle: () => setShowNewPass(!showNewPass) },
            ].map((field) => (
              <div key={field.key}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px" }}>{field.label}</label>
                <div style={{ position: "relative" }}>
                  <input
                    type={field.show ? "text" : "password"}
                    style={{ ...inputStyle, paddingRight: "44px" }}
                    placeholder="••••••••"
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm((f) => ({ ...f, [field.key]: e.target.value }))}
                    onFocus={(e) => (e.target.style.borderColor = "#03045e")}
                    onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                  />
                  <button
                    type="button"
                    onClick={field.toggle}
                    style={{
                      position: "absolute",
                      right: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "#9ca3af",
                    }}
                  >
                    {field.show ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
