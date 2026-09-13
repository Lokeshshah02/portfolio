"use client";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "80px 24px 40px",
      background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(108,99,255,0.12) 0%, transparent 70%)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background grid decoration */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "linear-gradient(rgba(108,99,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.04) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "900px", textAlign: "center", position: "relative" }}>
        {/* Availability badge */}
        {profile.availableForWork ? (
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 16px",
            backgroundColor: "rgba(0,212,170,0.1)",
            border: "1px solid rgba(0,212,170,0.3)",
            borderRadius: "999px",
            marginBottom: "32px",
            fontSize: "0.8rem",
            color: "var(--accent)",
            fontWeight: 600,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "var(--accent)", display: "inline-block", boxShadow: "0 0 6px var(--accent)" }} />
            Open to opportunities
          </div>
        ) : null}

        <h1 style={{
          fontSize: "clamp(2.5rem, 7vw, 5rem)",
          fontWeight: 900,
          lineHeight: 1.1,
          color: "var(--text)",
          marginBottom: "12px",
          letterSpacing: "-0.03em",
        }}>
          Hi, I'm{" "}
          <span style={{
            background: "linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            {profile.name.split(" ")[0]}
          </span>
        </h1>

        <h2 style={{
          fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
          fontWeight: 500,
          color: "var(--muted)",
          marginBottom: "28px",
        }}>
          {profile.role}
        </h2>

        <p style={{
          fontSize: "clamp(1rem, 2vw, 1.15rem)",
          color: "var(--muted)",
          lineHeight: 1.75,
          maxWidth: "620px",
          margin: "0 auto 48px",
        }}>
          {profile.tagline}
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#projects" style={{
            padding: "14px 32px",
            backgroundColor: "var(--primary)",
            color: "#fff",
            borderRadius: "10px",
            fontWeight: 700,
            textDecoration: "none",
            fontSize: "1rem",
            transition: "background-color 0.2s, transform 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = "var(--primary-hover)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = "var(--primary)"; e.currentTarget.style.transform = "translateY(0)"; }}>
            View My Work →
          </a>
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" style={{
            padding: "14px 32px",
            backgroundColor: "var(--surface)",
            color: "var(--text)",
            border: "1px solid var(--border)",
            borderRadius: "10px",
            fontWeight: 700,
            textDecoration: "none",
            fontSize: "1rem",
            transition: "border-color 0.2s, transform 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}>
            ↓ Download Resume
          </a>
        </div>

        {/* Scroll indicator */}
        <div style={{ marginTop: "72px", display: "flex", justifyContent: "center", opacity: 0.4, animation: "bounce 2s infinite" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
        <style>{`@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(6px); } }`}</style>
      </div>
    </section>
  );
}
