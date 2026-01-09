"use client";

import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    company: string;
    type: string;
    year: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="card-glass rounded-xl overflow-hidden cursor-pointer group h-full hover:border-slate-700/50 transition-all"
      whileHover={{ y: -4 }}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-slate-800">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-bold">{project.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2 text-sm text-slate-400">
            <span>{project.company}</span>
            <span>•</span>
            <span>{project.type}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-slate-800/50 text-cyan-400 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 bg-slate-800/50 text-slate-400 text-xs rounded-full">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-slate-800">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors"
          >
            <ExternalLink size={16} />
            <span>Live</span>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-slate-100 rounded-lg text-sm font-medium transition-colors"
          >
            <Github size={16} />
            <span>Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
