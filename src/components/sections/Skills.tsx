"use client";
import { skills } from "@/data/skills";

const levelColor: Record<string, string> = {
  expert: "var(--primary)",
  proficient: "var(--accent)",
  familiar: "var(--muted)",
};

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: "96px 24px",
      backgroundColor: "rgba(18,18,26,0.5)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            color: "var(--text)",
            marginBottom: "16px",
          }}>
            Technical Arsenal<span style={{ color: "var(--primary)" }}>.</span>
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--muted)", maxWidth: "520px", margin: "0 auto" }}>
            Tools and technologies I use to build scalable, high-performance web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
        }}>
          {skills.map((category) => (
            <div key={category.category} style={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "28px",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(108,99,255,0.5)"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
            >
              <h3 style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "var(--primary)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "20px",
                paddingBottom: "16px",
                borderBottom: "1px solid var(--border)",
              }}>
                {category.category}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {category.items.map((item) => (
                  <div key={item.name} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                    <span style={{ color: "var(--text)", fontSize: "0.95rem", fontWeight: 500 }}>
                      {item.name}
                    </span>
                    <span style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: levelColor[item.level] || "var(--muted)",
                      padding: "2px 8px",
                      backgroundColor: `color-mix(in srgb, ${levelColor[item.level] || "var(--muted)"} 15%, transparent)`,
                      borderRadius: "4px",
                    }}>
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div style={{
          marginTop: "48px",
          padding: "28px",
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "16px",
        }}>
          <h3 style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>
            Certifications
          </h3>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {["JavaScript with Certification – Scaler Academy", "AWS Academy Graduate – AWS Academy Cloud Foundation"].map(cert => (
              <span key={cert} style={{
                padding: "8px 16px",
                backgroundColor: "rgba(108,99,255,0.08)",
                border: "1px solid rgba(108,99,255,0.2)",
                borderRadius: "8px",
                fontSize: "0.875rem",
                color: "var(--text)",
                fontWeight: 500,
              }}>
                🏆 {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
