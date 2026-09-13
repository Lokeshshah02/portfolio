import { getProjectBySlug, getProjectSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { notFound } from "next/navigation";
import BackButton from "@/components/ui/BackButton";

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug: slug.replace(/\.mdx$/, "") }));
}

// Inline-styled MDX components so they match the dark theme
const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--text)", margin: "48px 0 20px", lineHeight: 1.2 }} {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text)", margin: "40px 0 16px", paddingBottom: "12px", borderBottom: "1px solid var(--border)" }} {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text)", margin: "32px 0 12px" }} {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: "20px" }} {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul style={{ paddingLeft: "20px", marginBottom: "24px", display: "flex", flexDirection: "column", gap: "10px" }} {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.75, listStyleType: "disc" }} {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong style={{ color: "var(--text)", fontWeight: 700 }} {...props} />
  ),
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  try {
    const { frontmatter, content } = getProjectBySlug(params.slug);

    return (
      <main style={{
        minHeight: "100vh",
        paddingTop: "96px",
        paddingBottom: "96px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>

          {/* Back button — client component that uses router.back() */}
          <BackButton />

          {/* Header */}
          <header style={{ marginBottom: "64px" }}>
            <span style={{
              display: "block",
              fontSize: "0.8rem",
              fontFamily: "monospace",
              fontWeight: 600,
              color: "var(--primary)",
              marginBottom: "16px",
              letterSpacing: "0.05em",
            }}>
              {frontmatter.date}
            </span>

            <h1 style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              color: "var(--text)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "24px",
            }}>
              {frontmatter.title}
            </h1>

            <p style={{
              fontSize: "1.2rem",
              color: "var(--muted)",
              lineHeight: 1.7,
              marginBottom: "36px",
            }}>
              {frontmatter.description}
            </p>

            {/* Action buttons */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "36px" }}>
              {frontmatter.githubUrl && frontmatter.githubUrl !== "#" && (
                <a href={frontmatter.githubUrl} target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 24px",
                  backgroundColor: "var(--surface)",
                  color: "var(--text)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}>
                  <Github width={18} height={18} /> View Source
                </a>
              )}
              {frontmatter.liveUrl && frontmatter.liveUrl !== "#" && (
                <a href={frontmatter.liveUrl} target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 24px",
                  backgroundColor: "var(--primary)",
                  color: "#fff",
                  borderRadius: "10px",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}>
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>

            {/* Tech stack badges */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              paddingTop: "24px",
              borderTop: "1px solid var(--border)",
            }}>
              {frontmatter.techStack.map((tech) => (
                <span key={tech} style={{
                  padding: "6px 14px",
                  backgroundColor: "rgba(108,99,255,0.08)",
                  border: "1px solid rgba(108,99,255,0.2)",
                  borderRadius: "8px",
                  fontSize: "0.8rem",
                  fontFamily: "monospace",
                  fontWeight: 600,
                  color: "var(--primary)",
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </header>

          {/* MDX Content */}
          <article>
            <MDXRemote source={content} components={components} />
          </article>

        </div>
      </main>
    );
  } catch {
    notFound();
  }
}
