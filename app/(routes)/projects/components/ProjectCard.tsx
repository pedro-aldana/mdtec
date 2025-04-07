import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/data/project";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  return (
    <motion.div
      key={project.id}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -10 }}
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
      className="group relative rounded-xl overflow-hidden bg-black/20 border border-gray-700 shadow-lg hover:shadow-xl hover:shadow-sky-900/20 transition-all duration-300"
    >
      <div className="relative aspect-[1.502] w-full overflow-hidden bg-black">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 relative z-10">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <Link
            href={project.demoUrl}
            className="flex items-center text-sky-400 hover:text-purple-300 font-medium"
          >
            Ver Proyecto
            <motion.span
              animate={{ x: hoveredProject === project.id ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="ml-1 h-4 w-4" />
            </motion.span>
          </Link>

          <div className="flex gap-2">
            <Link
              href={project.demoUrl}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              <ExternalLink className="h-4 w-4 text-gray-300" />
            </Link>
            <Link
              href={project.githubUrl}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              <Github className="h-4 w-4 text-gray-300" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
