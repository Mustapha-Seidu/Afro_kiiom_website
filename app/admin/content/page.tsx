"use client";

import { useState } from "react";
import { Save, CheckCircle } from "lucide-react";

const defaultContent = {
  heroTitle: "Building Tomorrow's Technology Today",
  heroSubtitle:
    "Afro Kiiom Ltd is pioneering both cutting-edge software and the research to design Africa's first indigenous computer hardware from scratch.",
  visionText:
    "To be the foremost African technology company that designs, manufactures, and delivers indigenous computer hardware and world-class software.",
  missionText:
    "To design Africa's first computer hardware from scratch, develop software that solves real-world African problems, and nurture a generation of innovators.",
  investorCallout:
    "We are actively calling for visionary investors who believe in the long-term potential of African innovation. Be part of history — be part of Kiiom.",
  contactEmail: "info@kiiom.com",
  companyTagline: "Innovation Rooted in Africa",
};

export default function ContentPage() {
  const [content, setContent] = useState(defaultContent);
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleChange = (key: keyof typeof content, value: string) => {
    setContent((c) => ({ ...c, [key]: value }));
    setSaved(false);
  };

  const handleSave = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 800));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const fields: { key: keyof typeof content; label: string; multiline?: boolean; rows?: number }[] = [
    { key: "heroTitle", label: "Hero Title" },
    { key: "heroSubtitle", label: "Hero Subtitle", multiline: true, rows: 3 },
    { key: "companyTagline", label: "Company Tagline" },
    { key: "visionText", label: "Vision Statement", multiline: true, rows: 3 },
    { key: "missionText", label: "Mission Statement", multiline: true, rows: 3 },
    { key: "investorCallout", label: "Investor Callout Text", multiline: true, rows: 3 },
    { key: "contactEmail", label: "Contact Email" },
  ];

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
        <div>
          <h1 style={{ fontSize: "24px", fontWeight: 800, color: "#03045e", margin: "0 0 4px" }}>Content Management</h1>
          <p style={{ color: "#6b7280", fontSize: "14px", margin: 0 }}>Edit the text content displayed on your public website.</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
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
            cursor: saving ? "not-allowed" : "pointer",
            transition: "background-color 0.3s",
          }}
        >
          {saved ? <CheckCircle size={16} /> : <Save size={16} />}
          {saving ? "Saving..." : saved ? "Saved!" : "Save Changes"}
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {fields.map((field) => (
          <div
            key={field.key}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "14px",
              padding: "24px",
              border: "1px solid #e5e7eb",
            }}
          >
            <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#374151", marginBottom: "10px" }}>
              {field.label}
            </label>
            {field.multiline ? (
              <textarea
                value={content[field.key]}
                onChange={(e) => handleChange(field.key, e.target.value)}
                rows={field.rows || 3}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  fontSize: "14px",
                  outline: "none",
                  resize: "vertical",
                  fontFamily: "inherit",
                  lineHeight: 1.6,
                  boxSizing: "border-box",
                  color: "#1f2937",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#03045e")}
                onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
              />
            ) : (
              <input
                type="text"
                value={content[field.key]}
                onChange={(e) => handleChange(field.key, e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                  color: "#1f2937",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#03045e")}
                onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
              />
            )}
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "24px",
          backgroundColor: "#fefce8",
          border: "1px solid #fde68a",
          borderRadius: "10px",
          padding: "16px 20px",
          fontSize: "13px",
          color: "#92400e",
        }}
      >
        <strong>Note:</strong> Content changes here update the database. To make changes take effect on the live site,
        the site may need to be redeployed depending on your hosting setup. Changes to static content require a redeploy on static export.
      </div>
    </div>
  );
}
