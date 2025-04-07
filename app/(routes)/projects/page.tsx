"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

import projects from "@/data/project";
import ProjectCard from "./components/ProjectCard";
import TransitionPage from "@/components/transition-page";

// Pagination settings
const PROJECTS_PER_PAGE = 4;

export default function ProjectShowcase() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const indexOfLastProject = currentPage * PROJECTS_PER_PAGE;
  const indexOfFirstProject = indexOfLastProject - PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Pagination handlers
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <TransitionPage />
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b  text-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-3 py-1 bg-sky-900 text-purple-100">
              Nuestro trabajo
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-sky-700">
              Proyectos destacados
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Explora mis últimos trabajos que muestran diseño moderno y
              experiencias interactivas.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="wait">
              {currentProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Pagination Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex justify-center items-center gap-2"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="h-10 w-10 rounded-full border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-50"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous page</span>
            </Button>

            <div className="flex gap-1">
              {pageNumbers.map((number) => (
                <Button
                  key={number}
                  variant={currentPage === number ? "default" : "outline"}
                  onClick={() => goToPage(number)}
                  className={`h-10 w-10 rounded-full ${
                    currentPage === number
                      ? "bg-sky-700 hover:bg-sky-600 text-white"
                      : "border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {number}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="h-10 w-10 rounded-full border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-50"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next page</span>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
