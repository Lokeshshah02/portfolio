"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        color: "var(--muted)",
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        fontSize: "0.95rem",
        fontWeight: 500,
        marginBottom: "36px",
        padding: 0,
        transition: "color 0.2s",
      }}
      onMouseEnter={e => e.currentTarget.style.color = "var(--primary)"}
      onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
      aria-label="Go back"
    >
      <ArrowLeft size={18} /> Back
    </button>
  );
}
