import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories, ProjectCategory, ProjectItem } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'ALL' | ProjectCategory>('ALL');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projects.filter((project) =>
    activeCategory === 'ALL' ? true : project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-theme-secondary/20">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#9B6DFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#9B6DFF] to-[#00D4FF]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00D4FF]">
              Portfolio Gallery
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-theme-primary tracking-tight">
            Selected Projects. Real Solutions.
          </h2>
          <p className="text-sm sm:text-base text-theme-muted mt-3">
            A comprehensive record of real-world Oracle APEX applications, database architectures, automated workflows, and modern cloud integrations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12 pb-2 overflow-x-auto">
          {projectCategories.map((cat) => {
            const count =
              cat.id === 'ALL'
                ? projects.length
                : projects.filter((p) => p.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-heading font-medium transition-all duration-200 border flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#9B6DFF] to-[#00D4FF] text-white border-transparent shadow-md shadow-[#9B6DFF]/25'
                    : 'bg-theme-card border-theme-border text-theme-muted hover:text-theme-primary hover:border-theme-border/80'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                    isActive ? 'bg-black/25 text-white' : 'bg-theme-secondary text-theme-muted'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
              >
                <ProjectCard
                  project={project}
                  onSelect={(p) => setSelectedProject(p)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
      />
    </section>
  );
};
