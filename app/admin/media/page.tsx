"use client";

import { useState, useRef, useCallback } from "react";
import { Upload, X, Image, Film, FileText, Trash2, Download, Eye } from "lucide-react";

type MediaFile = {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string;
  uploadedAt: string;
};

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getFileIcon(type: string) {
  if (type.startsWith("image/")) return <Image size={20} style={{ color: "#6366f1" }} />;
  if (type.startsWith("video/")) return <Film size={20} style={{ color: "#f59e0b" }} />;
  return <FileText size={20} style={{ color: "#10b981" }} />;
}

export default function MediaPage() {
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const uploadFiles = useCallback(async (selectedFiles: File[]) => {
    setUploading(true);
    setProgress(0);

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const formData = new FormData();
      formData.append("file", file);

      try {
        const res = await fetch("/api/upload", { method: "POST", body: formData });
        const data = await res.json();
        if (res.ok) {
          setFiles((prev) => [
            {
              id: data.id,
              name: file.name,
              size: file.size,
              type: file.type,
              url: data.url,
              uploadedAt: new Date().toLocaleString(),
            },
            ...prev,
          ]);
        }
      } catch {
        console.error("Upload failed for", file.name);
      }
      setProgress(Math.round(((i + 1) / selectedFiles.length) * 100));
    }

    setUploading(false);
    setProgress(0);
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) uploadFiles(Array.from(e.target.files));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files) uploadFiles(Array.from(e.dataTransfer.files));
  };

  const deleteFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <div>
      <div style={{ marginBottom: "32px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: 800, color: "#03045e", margin: "0 0 4px" }}>Media Library</h1>
        <p style={{ color: "#6b7280", fontSize: "14px", margin: 0 }}>Upload and manage images, videos, and documents for your website.</p>
      </div>

      {/* Upload Zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        style={{
          border: `2px dashed ${dragOver ? "#03045e" : "#d1d5db"}`,
          borderRadius: "16px",
          padding: "56px 24px",
          textAlign: "center",
          cursor: "pointer",
          backgroundColor: dragOver ? "#eff6ff" : "#ffffff",
          transition: "all 0.2s",
          marginBottom: "32px",
        }}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*,video/*,.pdf,.doc,.docx"
          onChange={handleFileSelect}
          style={{ display: "none" }}
        />
        <Upload
          size={36}
          style={{ color: dragOver ? "#03045e" : "#d1d5db", margin: "0 auto 16px", display: "block" }}
        />
        <p style={{ color: "#374151", fontWeight: 600, fontSize: "16px", margin: "0 0 6px" }}>
          {dragOver ? "Drop to upload" : "Click or drag files here"}
        </p>
        <p style={{ color: "#9ca3af", fontSize: "13px", margin: 0 }}>
          Supports images, videos, PDFs — up to 50MB each
        </p>

        {uploading && (
          <div style={{ marginTop: "24px" }}>
            <div style={{ height: "6px", backgroundColor: "#e5e7eb", borderRadius: "3px", overflow: "hidden", maxWidth: "300px", margin: "0 auto" }}>
              <div
                style={{
                  height: "100%",
                  width: `${progress}%`,
                  backgroundColor: "#03045e",
                  borderRadius: "3px",
                  transition: "width 0.3s",
                }}
              />
            </div>
            <p style={{ color: "#6b7280", fontSize: "12px", marginTop: "8px" }}>Uploading... {progress}%</p>
          </div>
        )}
      </div>

      {/* File Grid */}
      {files.length === 0 ? (
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "14px",
            padding: "48px 24px",
            textAlign: "center",
            border: "1px solid #e5e7eb",
          }}
        >
          <Image size={32} style={{ color: "#d1d5db", margin: "0 auto 12px", display: "block" }} />
          <p style={{ color: "#9ca3af", fontSize: "14px", margin: 0 }}>No files uploaded yet. Drag and drop to get started.</p>
        </div>
      ) : (
        <div>
          <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1f2937", marginBottom: "16px" }}>
            Uploaded Files ({files.length})
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px" }}>
            {files.map((file) => (
              <div
                key={file.id}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  border: "1px solid #e5e7eb",
                  overflow: "hidden",
                }}
              >
                {/* Preview */}
                <div
                  style={{
                    height: "140px",
                    backgroundColor: "#f9fafb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: "1px solid #e5e7eb",
                    position: "relative",
                  }}
                >
                  {file.type.startsWith("image/") ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={file.url} alt={file.name} style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} />
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                      {getFileIcon(file.type)}
                      <span style={{ fontSize: "11px", color: "#9ca3af" }}>{file.type.split("/")[1]?.toUpperCase()}</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div style={{ padding: "12px 14px" }}>
                  <p style={{ fontSize: "13px", fontWeight: 600, color: "#1f2937", margin: "0 0 2px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {file.name}
                  </p>
                  <p style={{ fontSize: "11px", color: "#9ca3af", margin: "0 0 12px" }}>
                    {formatBytes(file.size)} · {file.uploadedAt}
                  </p>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <a
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Preview"
                      style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "6px",
                        borderRadius: "6px",
                        backgroundColor: "#eff6ff",
                        color: "#03045e",
                        textDecoration: "none",
                        fontSize: "12px",
                        gap: "4px",
                        fontWeight: 500,
                      }}
                    >
                      <Eye size={12} /> View
                    </a>
                    <a
                      href={file.url}
                      download={file.name}
                      title="Download"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "6px 10px",
                        borderRadius: "6px",
                        backgroundColor: "#f3f4f6",
                        color: "#374151",
                        textDecoration: "none",
                      }}
                    >
                      <Download size={12} />
                    </a>
                    <button
                      onClick={() => deleteFile(file.id)}
                      title="Delete"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "6px 10px",
                        borderRadius: "6px",
                        backgroundColor: "#fef2f2",
                        color: "#dc2626",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
