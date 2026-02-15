export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  type: "Freelance" | "Personal" | "Academic";
}

export const projects: Project[] = [
  {
    title: "Stock Management",
    description:
      "Custom inventory management system for Karaki S.A.R.L., enabling real-time tracking of metal sheets across multiple locations with support for fractional quantities. Features a robust audit trail to streamline stock updates and improve accuracy.",
    technologies: ["TypeScript", "React", "Supabase", "Ant Design", "Bun", "Vite"],
    github: "https://github.com/HassanKourani/stock-manger",
    type: "Freelance",
  },
  {
    title: "TeleHealth Application",
    description:
      "Comprehensive web application (Care Comfort) to manage home medical care services by connecting patients with healthcare providers. Enables efficient management of care requests and streamlined healthcare service delivery.",
    technologies: ["TypeScript", "React", "Supabase", "PostgreSQL", "Ant Design", "React Query"],
    github: "https://github.com/HassanKourani/HomeNurse",
    live: "https://home-nurse.vercel.app",
    type: "Personal",
  },
  {
    title: "Collaborative Learning",
    description:
      "Feature-rich social networking platform (Stack Overflow & Discord clone) with secure authentication, real-time discussions, live chat, friend-following, and notifications. Built with Firebase for real-time updates and Firestore for data management.",
    technologies: ["JavaScript", "React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/HassanKourani/senior-project",
    live: "https://collaborative-learning-omega.vercel.app/",
    type: "Personal",
  },
  {
    title: "ChitChat (Twitter Clone)",
    description:
      "Social media application with user authentication, post creation/deletion, comments, likes, follow system, real-time messaging, and image uploads. Fully responsive with a home feed showing followed users' posts.",
    technologies: ["JavaScript", "React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/HassanKourani/ChitChat.git",
    live: "https://chitchat-three.vercel.app/",
    type: "Personal",
  },
  {
    title: "Spotify Clone",
    description:
      "Music streaming application with user authentication, playlist management, liked songs, and song search/playback powered by Spotify's API. Features a fully responsive design.",
    technologies: ["JavaScript", "React", "Firebase", "Tailwind CSS", "Spotify API"],
    github: "https://github.com/HassanKourani/Spotify-Clone",
    live: "https://spotify-clone-bice-gamma.vercel.app/",
    type: "Personal",
  },
  {
    title: "Portfolio Website",
    description:
      "This interactive portfolio website featuring particle effects, 3D card animations, scroll-triggered transitions, and a modern dark theme. Built with React, TypeScript, and Bun.",
    technologies: ["React", "TypeScript", "Bun", "Tailwind CSS"],
    github: "https://github.com/HassanKourani/Portfolio",
    type: "Personal",
  },
];
