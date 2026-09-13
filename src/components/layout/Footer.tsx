"use client";
import { profile } from "@/data/profile";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      backgroundColor: "var(--bg)",
      padding: "48px 24px",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "24px",
        }}>
          <div>
            <p style={{ fontWeight: 800, fontSize: "1.25rem", color: "var(--text)", marginBottom: "6px" }}>
              {profile.name}
            </p>
            <p style={{ fontSize: "0.875rem", color: "var(--muted)" }}>
              {profile.role} · {profile.location}
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer"
              style={{ color: "var(--muted)", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--primary)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
              aria-label="GitHub">
              <Github width={22} height={22} />
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer"
              style={{ color: "var(--muted)", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--primary)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
              aria-label="LinkedIn">
              <Linkedin width={22} height={22} />
            </a>
            <a href={`mailto:${profile.email}`}
              style={{ color: "var(--muted)", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--primary)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
              aria-label="Email">
              <Mail size={22} />
            </a>
          </div>
        </div>

        <p style={{ fontSize: "0.8rem", color: "var(--muted)", opacity: 0.5 }}>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
