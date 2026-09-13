export const skills = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript (ES6+)", icon: "javascript", level: "expert" },
      { name: "TypeScript", icon: "typescript", level: "expert" },
      { name: "HTML5", icon: "html", level: "expert" },
      { name: "CSS3 / SASS / SCSS", icon: "css", level: "expert" },
      { name: "Java", icon: "java", level: "proficient" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React.js", icon: "react", level: "expert" },
      { name: "Next.js", icon: "nextjs", level: "expert" },
      { name: "Angular (v12, v14)", icon: "angular", level: "expert" },
      { name: "React Native", icon: "react", level: "proficient" },
      { name: "Node.js", icon: "nodejs", level: "proficient" },
    ],
  },
  {
    category: "State & Data",
    items: [
      { name: "Redux Toolkit", icon: "redux", level: "expert" },
      { name: "RxJS", icon: "rxjs", level: "expert" },
      { name: "Context API", icon: "react", level: "expert" },
      { name: "GraphQL", icon: "graphql", level: "proficient" },
    ],
  },
  {
    category: "Cloud, DevOps & Tools",
    items: [
      { name: "AWS (EC2, S3, Lambda)", icon: "aws", level: "proficient" },
      { name: "Docker", icon: "docker", level: "proficient" },
      { name: "CI/CD & Git", icon: "git", level: "expert" },
      { name: "Jest", icon: "jest", level: "proficient" },
    ],
  },
] as const;
