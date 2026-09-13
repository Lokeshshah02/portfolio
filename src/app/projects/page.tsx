import { getAllProjects } from "@/lib/mdx";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Github } from "@/components/ui/Icons";

export default function ProjectsIndex() {
  const projects = getAllProjects();

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto w-full">
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-text-primary mb-6">
          All Projects
          <span className="text-primary">.</span>
        </h1>
        <p className="text-xl text-text-secondary">
          A complete archive of things I've built.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(({ slug, frontmatter }) => (
          <div key={slug} className="bg-surface border border-border p-8 rounded-2xl hover:border-primary/50 transition-all shadow-lg group flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-sm text-primary font-mono mb-2 block">{frontmatter.date}</span>
                <Link href={`/projects/${slug}`}>
                  <h3 className="text-2xl font-bold text-text-primary group-hover:text-primary transition-colors cursor-pointer">
                    {frontmatter.title}
                  </h3>
                </Link>
              </div>
              <div className="flex gap-4">
                {frontmatter.githubUrl && (
                  <a href={frontmatter.githubUrl} className="text-text-secondary hover:text-primary transition-colors" aria-label="GitHub">
                    <Github width={20} height={20} />
                  </a>
                )}
                {frontmatter.liveUrl && (
                  <a href={frontmatter.liveUrl} className="text-text-secondary hover:text-primary transition-colors" aria-label="External Link">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
            
            <p className="text-text-secondary leading-relaxed mb-6 flex-grow">
              {frontmatter.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {frontmatter.techStack.map((tech, i) => (
                <span key={i} className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            <Link href={`/projects/${slug}`} className="flex items-center gap-2 text-primary hover:text-primary-hover font-semibold mt-auto">
              Read Case Study <ArrowRight size={16} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
