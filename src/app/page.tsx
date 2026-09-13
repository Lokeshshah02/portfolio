import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import ProjectsClient from "@/components/sections/Projects";
import { getAllProjects } from "@/lib/mdx";

export default function Home() {
  const projects = getAllProjects().slice(0, 4);

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <ProjectsClient projects={projects} />
    </main>
  );
}
