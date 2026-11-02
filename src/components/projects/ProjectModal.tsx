import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Layers,
  CheckCircle2,
  Cpu,
  Database,
  ArrowRight,
  Shield,
  Server,
} from 'lucide-react';
import { ProjectItem, projects } from '@/data/projects';
import { ProjectPreviewMockup } from './ProjectPreviewMockup';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onSelectProject }) => {
  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  const relatedProjects = projects.filter((p) =>
    project.relatedProjectIds.includes(p.id)
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 30 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-theme-card border border-theme-border rounded-3xl p-6 sm:p-10 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-theme-border mb-8">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase bg-[#9B6DFF]/15 text-[#9B6DFF] border border-[#9B6DFF]/30">
                {project.category}
              </span>
              <span className="text-xs font-mono text-theme-muted">
                PROJECT #{project.number}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl border border-theme-border text-theme-muted hover:text-theme-primary hover:bg-theme-secondary transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Title & Application Screenshot Mockup */}
          <div className="space-y-6 mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-theme-primary tracking-tight">
              {project.title}
            </h2>

            {/* Application Visual Preview Mockup */}
            <div className="w-full">
              <ProjectPreviewMockup project={project} className="h-56 sm:h-64" />
            </div>

            {/* Deployment & Demo Bar */}
            <div className="p-4 rounded-xl bg-theme-secondary/70 border border-theme-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-theme-muted">
                <Server className="w-4 h-4 text-[#00D4FF]" />
                <span>
                  Deployment Environment:{' '}
                  <strong className="text-theme-primary font-mono">{project.deploymentType}</strong>
                </span>
              </div>

              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#9B6DFF] to-[#00D4FF] text-white font-semibold"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <div className="flex items-center gap-1.5 text-theme-muted font-mono">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Enterprise Client Protected Repository</span>
                </div>
              )}
            </div>
          </div>

          {/* Project Details Narrative Breakdown */}
          <div className="space-y-8 text-sm leading-relaxed text-theme-muted">
            {/* 1. Project Overview */}
            <div>
              <h3 className="font-heading text-base font-bold text-theme-primary mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#9B6DFF]" /> 1. Project Overview
              </h3>
              <p>{project.fullOverview}</p>
            </div>

            {/* 2. Business Problem & 3. Solution Developed */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-theme-secondary/40 border border-theme-border">
                <h4 className="font-heading font-semibold text-theme-primary mb-2 text-red-400">
                  2. The Business Problem
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed">{project.businessProblem}</p>
              </div>

              <div className="p-5 rounded-2xl bg-theme-secondary/40 border border-theme-border">
                <h4 className="font-heading font-semibold text-theme-primary mb-2 text-[#00D4FF]">
                  3. The Solution Developed
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed">{project.solutionDeveloped}</p>
              </div>
            </div>

            {/* 4. Key Features */}
            <div>
              <h3 className="font-heading text-base font-bold text-theme-primary mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 4. Key Engineered Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-theme-secondary/30 border border-theme-border/50 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Technologies */}
            <div>
              <h3 className="font-heading text-base font-bold text-theme-primary mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#FF8A3D]" /> 5. Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-theme-secondary border border-theme-border text-xs font-mono text-theme-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* 6. My Contribution */}
            <div>
              <h3 className="font-heading text-base font-bold text-theme-primary mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#9B6DFF]" /> 6. My Contribution &amp; Responsibilities
              </h3>
              <div className="space-y-2">
                {project.myContribution.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <span className="text-[#9B6DFF] font-bold">›</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. Architecture Overview */}
            {project.architectureOverview && (
              <div className="p-5 rounded-2xl bg-[#08090D] border border-white/10">
                <h3 className="font-heading text-base font-bold text-white mb-2 flex items-center gap-2">
                  <Database className="w-4 h-4 text-[#00D4FF]" /> 7. Architecture Overview
                </h3>
                <p className="text-xs font-mono text-gray-300 leading-relaxed">
                  {project.architectureOverview}
                </p>
              </div>
            )}

            {/* 8. Related Projects */}
            {relatedProjects.length > 0 && (
              <div className="pt-6 border-t border-theme-border">
                <h4 className="font-heading font-bold text-sm text-theme-primary mb-4">
                  Related Case Studies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {relatedProjects.map((rp) => (
                    <div
                      key={rp.id}
                      onClick={() => onSelectProject(rp)}
                      className="p-3 rounded-xl bg-theme-secondary/50 border border-theme-border hover:border-[#9B6DFF]/60 cursor-pointer transition-colors group"
                    >
                      <span className="text-[10px] font-mono text-[#00D4FF] uppercase">
                        {rp.category}
                      </span>
                      <h5 className="font-heading font-semibold text-xs text-theme-primary group-hover:text-[#9B6DFF] transition-colors mt-0.5 truncate">
                        {rp.title}
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Actions */}
          <div className="mt-8 pt-6 border-t border-theme-border flex justify-between items-center">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-theme-border text-xs font-medium text-theme-muted hover:text-theme-primary transition-colors"
            >
              Close Case Study
            </button>

            <a
              href="#contact"
              onClick={() => {
                onClose();
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#9B6DFF] to-[#00D4FF] text-white shadow-md hover:shadow-lg transition-all"
            >
              <span>Build A Similar Solution</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
