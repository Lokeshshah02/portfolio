"use client";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" style={{
      padding: "96px 24px",
      backgroundColor: "var(--bg)",
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "64px" }}>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            color: "var(--text)",
            marginBottom: "12px",
          }}>
            Experience<span style={{ color: "var(--primary)" }}>.</span>
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--muted)" }}>
            My professional journey building enterprise software.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {experience.map((job, index) => (
            <div key={index} style={{
              display: "flex",
              gap: "24px",
              position: "relative",
            }}>
              {/* Left: line + dot */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexShrink: 0,
                width: "20px",
              }}>
                <div style={{
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  backgroundColor: "var(--primary)",
                  border: "3px solid var(--bg)",
                  boxShadow: "0 0 0 2px var(--primary)",
                  marginTop: "6px",
                  flexShrink: 0,
                }} />
                {index < experience.length - 1 && (
                  <div style={{
                    width: "2px",
                    flexGrow: 1,
                    backgroundColor: "var(--border)",
                    margin: "6px 0",
                    minHeight: "32px",
                  }} />
                )}
              </div>

              {/* Right: Card */}
              <div style={{
                flex: 1,
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "28px",
                marginBottom: "32px",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(108,99,255,0.5)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
              >
                {/* Role + Date */}
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginBottom: "6px",
                }}>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text)" }}>
                    {job.role}
                  </h3>
                  <span style={{
                    fontSize: "0.8rem",
                    color: "var(--muted)",
                    backgroundColor: "var(--bg)",
                    border: "1px solid var(--border)",
                    borderRadius: "999px",
                    padding: "3px 12px",
                    whiteSpace: "nowrap",
                    fontWeight: 500,
                  }}>
                    {job.startDate} — {job.endDate}
                  </span>
                </div>

                <p style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "var(--primary)",
                  marginBottom: "20px",
                }}>
                  {job.company} · {job.location}
                </p>

                <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {job.highlights.map((h, i) => (
                    <li key={i} style={{
                      display: "flex",
                      gap: "10px",
                      color: "var(--muted)",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                    }}>
                      <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: "2px" }}>▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "16px",
          padding: "28px",
        }}>
          <h3 style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>
            Education
          </h3>
          <p style={{ fontWeight: 700, color: "var(--text)", fontSize: "1rem", marginBottom: "4px" }}>
            Bachelor of Engineering
          </p>
          <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "4px" }}>
            JIT · Bangalore, Karnataka, India
          </p>
          <p style={{ color: "var(--muted)", fontSize: "0.85rem" }}>Dec 2020 – May 2023</p>
        </div>
      </div>
    </section>
  );
}
