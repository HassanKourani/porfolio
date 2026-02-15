export interface Skill {
  name: string;
  level: "expert" | "advanced" | "intermediate";
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "code",
    skills: [
      { name: "React", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "JavaScript", level: "expert" },
      { name: "HTML5/CSS3", level: "expert" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "Redux", level: "advanced" },
      { name: "Ant Design", level: "expert" },
      { name: "Shadcn/UI", level: "advanced" },
    ],
  },
  {
    name: "Testing",
    icon: "wrench",
    skills: [
      { name: "Cypress", level: "advanced" },
      { name: "Jest", level: "advanced" },
      { name: "RTL", level: "advanced" },
    ],
  },
  {
    name: "Backend",
    icon: "server",
    skills: [
      { name: "NestJS", level: "advanced" },
      { name: "Node.js", level: "advanced" },
      { name: "Express", level: "advanced" },
      { name: "Firebase", level: "advanced" },
      { name: "Supabase", level: "advanced" },
      { name: "Golang", level: "intermediate" },
    ],
  },
  {
    name: "Database",
    icon: "database",
    skills: [
      { name: "PostgreSQL", level: "advanced" },
      { name: "MySQL", level: "intermediate" },
      { name: "NoSQL", level: "advanced" },
    ],
  },
  {
    name: "Tools & Workflow",
    icon: "wrench",
    skills: [
      { name: "Git", level: "expert" },
      { name: "GitHub", level: "expert" },
      { name: "Jira", level: "advanced" },
      { name: "Shortcut", level: "advanced" },
      { name: "CI/CD", level: "advanced" },
      { name: "Salesforce", level: "intermediate" },
    ],
  },
];
