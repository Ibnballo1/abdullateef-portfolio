"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/project-card";
import ProjectModal from "@/components/project-modal";

const projects = [
  {
    id: 1,
    title: "School Portal",
    company: "Side Project",
    type: "Full Stack",
    year: "2025",
    description:
      "A comprehensive web application designed to help schools manage students, teachers, classes, and grades efficiently with secure authentication and role-based access.",
    longDescription:
      "This school management system helps administrators streamline daily operations including student enrollment, teacher management, class scheduling, and grade tracking. Built with a focus on usability and performance.",
    image: "/snapshot6.png",
    technologies: [
      "Next.js",
      "PostgreSQL",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Drizzle ORM",
    ],
    liveUrl: "https://school-management-app-orcin.vercel.app/admin",
    githubUrl: "https://github.com/Ibnballo1/school_app",
  },
  {
    id: 2,
    title: "Fiscal Fusion",
    company: "Side Project",
    type: "Full Stack",
    year: "2025",
    description:
      "Full-stack platform for reseller and retailer operations with secure authentication, intuitive dashboards, and seamless API integration for managing users, products, and transactions.",
    longDescription:
      "Fiscal Fusion streamlines business operations for resellers and retailers with comprehensive inventory management, sales tracking, and financial reporting. Features real-time analytics and secure payment processing.",
    image: "/snapshot5.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "PostgreSQL",
    ],
    liveUrl: "https://fiscal-fusion.vercel.app/",
    githubUrl: "https://github.com/Ibnballo1/fiscal-fusion",
  },
  {
    id: 3,
    title: "Admin Dashboard",
    company: "Side Project",
    type: "Front End",
    year: "2025",
    description:
      "Responsive web application for efficient data management and visualization with secure authentication, dynamic tables, and interactive charts for real-time monitoring.",
    longDescription:
      "A modern admin dashboard featuring interactive data visualization, user management, and comprehensive reporting tools. Built with performance and accessibility as core principles.",
    image: "/snapshot3.png",
    technologies: [
      "Next.js",
      "Shadcn/ui",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
    ],
    liveUrl: "https://dashboard-three-nu-84.vercel.app/",
    githubUrl: "https://github.com/Ibnballo1/dashboard-app",
  },
  {
    id: 4,
    title: "Talksy",
    company: "Side Project",
    type: "Front End",
    year: "2024",
    description:
      "Modern social media platform designed to connect people through seamless conversations and engaging interfaces with a clean, responsive design.",
    longDescription:
      "Talksy is a social networking platform focused on real-time communication and community building. Features include messaging, user profiles, and social discovery.",
    image: "/snapshot1.png",
    technologies: ["React", "CSS", "JavaScript"],
    liveUrl: "https://talksy-nu.vercel.app/",
    githubUrl: "https://github.com/Ibnballo1/talksy",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="projects"
      className="section-spacing px-4 bg-slate-900/30 pt-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg">
            A selection of projects I&apos;ve built showcasing my expertise in
            full-stack development.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onClick={() => setSelectedProject(project)}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
