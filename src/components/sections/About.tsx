"use client";
import { profile } from "@/data/profile";

const metrics = [
  { value: "2+", label: "Years Experience", color: "var(--primary)" },
  { value: "10+", label: "Projects Built", color: "var(--accent)" },
  { value: "Agile", label: "Cross-functional Teams", color: "var(--primary)" },
];

export default function About() {
  return (
    <section id="about" style={{
      padding: "96px 24px",
      backgroundColor: "var(--bg)",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
        }}
        className="grid-cols-about"
        >
          {/* Left: Text */}
          <div>
            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "var(--text)",
              marginBottom: "24px",
              lineHeight: 1.15,
            }}>
              About Me<span style={{ color: "var(--primary)" }}>.</span>
            </h2>
            <p style={{
              fontSize: "1.1rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              marginBottom: "16px",
            }}>
              {profile.bio}
            </p>
            <p style={{
              fontSize: "0.95rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              marginBottom: "36px",
            }}>
              I thrive in <span style={{ color: "var(--text)", fontWeight: 600 }}>cross-functional Agile teams</span> delivering
              production-grade React, Next.js, and Angular applications across enterprise domains including
              mortgage processing and healthcare.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                backgroundColor: "rgba(108,99,255,0.1)",
                color: "var(--primary)",
                border: "1px solid rgba(108,99,255,0.3)",
                borderRadius: "8px",
                fontWeight: 600,
                textDecoration: "none",
                fontSize: "0.9rem",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = "var(--primary)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "rgba(108,99,255,0.1)"; e.currentTarget.style.color = "var(--primary)"; }}
              >
                ↓ Download Full Resume
              </a>
              <a href={`mailto:${profile.email}`} style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                backgroundColor: "var(--surface)",
                color: "var(--text)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                fontWeight: 600,
                textDecoration: "none",
                fontSize: "0.9rem",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "var(--primary)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
              >
                ✉ Get in Touch
              </a>
            </div>
          </div>

          {/* Right: Metric cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
          }}>
            {metrics.map((m, i) => (
              <div key={i} style={{
                gridColumn: i === 2 ? "span 2" : "span 1",
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "28px",
                textAlign: "center",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <p style={{ fontSize: "2rem", fontWeight: 900, color: m.color, marginBottom: "6px" }}>{m.value}</p>
                <p style={{ fontSize: "0.85rem", color: "var(--muted)", fontWeight: 500 }}>{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .grid-cols-about {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
