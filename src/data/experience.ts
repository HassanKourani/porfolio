export interface Experience {
  company: string;
  role: string;
  type: "Full-time" | "Contract" | "Freelance";
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
  technologies: string[];
  accentColor: string;
}

export const experiences: Experience[] = [
  {
    company: "Quiqup",
    role: "Full-Stack Software Engineer & QA Engineer",
    type: "Full-time",
    startDate: "Sep 2023",
    endDate: "Present",
    location: "Remote",
    description: [
      "Utilized React with TypeScript to create dynamic and interactive websites",
      "Implemented React Query for efficient data management and retrieval",
      "Applied Styled Components and Ant Design for improved UI design, user experience, and scalability",
      "Worked with cross-functional teams to ensure successful project delivery using Shortcut",
      "Used Jest and RTL to test applications to ensure safe scaling",
    ],
    technologies: ["TypeScript", "React", "NestJS", "Ant Design", "Jest", "RTL", "Golang", "Cypress", "CI/CD"],
    accentColor: "#00d4ff",
  },
  {
    company: "SoftMachine",
    role: "Team Lead / Senior Frontend Engineer",
    type: "Contract",
    startDate: "Oct 2024",
    endDate: "Dec 2024",
    location: "Remote",
    description: [
      "Utilized React with TypeScript to create dynamic and interactive websites",
      "Implemented React Query for efficient data management and retrieval",
      "Applied MUI for improved UI design, user experience, and scalability",
      "Worked with cross-functional teams to ensure successful project delivery using Jira",
      "Used Jest, RTL, and Cypress to test applications to ensure safe scaling",
    ],
    technologies: ["TypeScript", "React", "MUI", "Jest", "RTL", "Cypress", "CI/CD"],
    accentColor: "#7b2ff7",
  },
  {
    company: "HiTitan",
    role: "Project Manager / Mid-Senior Frontend Engineer",
    type: "Contract",
    startDate: "Jun 2024",
    endDate: "Aug 2024",
    location: "Remote",
    description: [
      "Utilized React with TypeScript to create dynamic and interactive websites",
      "Implemented CI/CD integrations with GitHub Actions",
      "Applied Ant Design for improved UI design, user experience, and scalability",
      "Worked with cross-functional teams to ensure successful project delivery using Jira",
    ],
    technologies: ["TypeScript", "React", "Ant Design", "CI/CD", "GitHub Actions"],
    accentColor: "#f72fff",
  },
  {
    company: "Data Solutions & Digital Services",
    role: "Frontend Software Engineer",
    type: "Full-time",
    startDate: "Jan 2023",
    endDate: "Sep 2023",
    location: "Beirut, Lebanon",
    description: [
      "Utilized React with TypeScript to create dynamic and interactive websites",
      "Implemented React Query for efficient data management and retrieval",
      "Applied Ant Design for improved UI design and user experience",
      "Worked with cross-functional teams to ensure successful project delivery using Jira",
      "Continuously sought opportunities to enhance technical skills and knowledge in web development",
    ],
    technologies: ["TypeScript", "React", "React Query", "Ant Design", "Jira"],
    accentColor: "#00d4ff",
  },
];
