"use client";

import { X, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface ProjectModalProps {
  project: {
    id: number;
    title: string;
    company: string;
    type: string;
    year: string;
    description: string;
    longDescription: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
  };
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur flex items-center justify-center p-4 z-50">
      <div className="bg-slate-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/95">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Image */}
          <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Metadata */}
          <div className="flex flex-wrap gap-4 mb-6 text-slate-400">
            <div>
              <p className="text-sm text-slate-500">Company</p>
              <p className="font-medium">{project.company}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Type</p>
              <p className="font-medium">{project.type}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Year</p>
              <p className="font-medium">{project.year}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <p className="text-slate-400 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-slate-800 text-cyan-400 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-6 border-t border-slate-800">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
            >
              <ExternalLink size={18} />
              <span>View Live</span>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-slate-100 rounded-lg font-medium transition-colors"
            >
              <Github size={18} />
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
