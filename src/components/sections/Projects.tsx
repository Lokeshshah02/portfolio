"use client";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/ui/Icons";
import type { ProjectFrontmatter } from "@/lib/mdx";

type ProjectData = { slug: string; frontmatter: ProjectFrontmatter };

export default function ProjectsClient({ projects }: { projects: ProjectData[] }) {
  return (
    <section id="projects" style={{
      padding: "96px 24px",
      backgroundColor: "rgba(18,18,26,0.4)",
      borderTop: "1px solid var(--border)",
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
            Featured Projects<span style={{ color: "var(--primary)" }}>.</span>
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--muted)", maxWidth: "520px", margin: "0 auto" }}>
            Some of the notable applications I've built.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "24px",
          marginBottom: "48px",
        }}>
          {projects.map(({ slug, frontmatter }) => (
            <div key={slug} style={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "20px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              transition: "border-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(108,99,255,0.5)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--primary)", fontFamily: "monospace", fontWeight: 600 }}>
                  {frontmatter.date}
                </span>
                <div style={{ display: "flex", gap: "12px" }}>
                  {frontmatter.githubUrl && frontmatter.githubUrl !== "#" && (
                    <a href={frontmatter.githubUrl} target="_blank" rel="noopener noreferrer"
                      style={{ color: "var(--muted)", transition: "color 0.2s" }}
                      onMouseEnter={e => e.currentTarget.style.color = "var(--primary)"}
                      onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
                      aria-label="GitHub">
                      <Github width={20} height={20} />
                    </a>
                  )}
                  {frontmatter.liveUrl && frontmatter.liveUrl !== "#" && (
                    <a href={frontmatter.liveUrl} target="_blank" rel="noopener noreferrer"
                      style={{ color: "var(--muted)", transition: "color 0.2s" }}
                      onMouseEnter={e => e.currentTarget.style.color = "var(--primary)"}
                      onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
                      aria-label="Live demo">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <Link href={`/projects/${slug}`} style={{ textDecoration: "none" }}>
                <h3 style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: "12px",
                  transition: "color 0.2s",
                }}>
                  {frontmatter.title}
                </h3>
              </Link>

              <p style={{
                color: "var(--muted)",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                flexGrow: 1,
                marginBottom: "24px",
              }}>
                {frontmatter.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
                {frontmatter.techStack.map((tech, i) => (
                  <span key={i} style={{
                    fontSize: "0.75rem",
                    fontFamily: "monospace",
                    fontWeight: 600,
                    color: "var(--accent)",
                    backgroundColor: "rgba(0,212,170,0.08)",
                    border: "1px solid rgba(0,212,170,0.2)",
                    padding: "3px 10px",
                    borderRadius: "6px",
                  }}>
                    {tech}
                  </span>
                ))}
              </div>

              <Link href={`/projects/${slug}`} style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "var(--primary)",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
              }}>
                Read Case Study →
              </Link>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/projects" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "14px 32px",
            backgroundColor: "var(--surface)",
            color: "var(--text)",
            border: "1px solid var(--border)",
            borderRadius: "10px",
            fontWeight: 600,
            textDecoration: "none",
            fontSize: "0.95rem",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = "var(--primary)"}
          onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
