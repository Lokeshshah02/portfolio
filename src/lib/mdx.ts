import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content/projects");

export type ProjectFrontmatter = {
  title: string;
  slug: string;
  description: string;
  date: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export function getProjectSlugs() {
  if (!fs.existsSync(contentDirectory)) return [];
  return fs.readdirSync(contentDirectory).filter((file) => file.endsWith(".mdx"));
}

export function getProjectBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(contentDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    frontmatter: data as ProjectFrontmatter,
    content,
  };
}

export function getAllProjects() {
  const slugs = getProjectSlugs();
  const projects = slugs.map((slug) => getProjectBySlug(slug));
  return projects.sort((project1, project2) => 
    new Date(project1.frontmatter.date) > new Date(project2.frontmatter.date) ? -1 : 1
  );
}
