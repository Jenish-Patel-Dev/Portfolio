import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Eye } from 'lucide-react';
import { ProjectItem } from '@/data/projects';
import { ProjectPreviewMockup } from './ProjectPreviewMockup';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Tilt interactive calculation
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="group relative glass-card rounded-2xl border border-theme-border p-5 flex flex-col justify-between hover:border-[#9B6DFF]/60 transition-colors duration-300 h-full"
    >
      {/* Ambient Gradient Card Glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${project.accentColor}18 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          {/* Visual Mockup Container */}
          <div className="relative mb-5 cursor-pointer" onClick={() => onSelect(project)}>
            <ProjectPreviewMockup project={project} />

            {/* Quick Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl flex items-center justify-center gap-2 text-white text-xs font-heading font-semibold">
              <Eye className="w-4 h-4 text-[#00D4FF]" />
              <span>Inspect Architecture</span>
            </div>
          </div>

          {/* Category Pill & Project Number */}
          <div className="flex items-center justify-between mb-3">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold tracking-wider uppercase bg-[#9B6DFF]/15 text-[#9B6DFF] border border-[#9B6DFF]/30">
              {project.category}
            </span>
            <span className="font-mono text-xs text-theme-muted/50 font-bold">
              #{project.number}
            </span>
          </div>

          {/* Project Title */}
          <h3
            onClick={() => onSelect(project)}
            className="font-heading text-lg font-bold text-theme-primary mb-2.5 group-hover:text-[#00D4FF] transition-colors cursor-pointer"
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-theme-muted leading-relaxed line-clamp-3 mb-5">
            {project.shortDescription}
          </p>

          {/* Technologies Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[11px] font-mono rounded bg-theme-secondary border border-theme-border text-theme-muted"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-theme-secondary/80 text-theme-muted">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-4 border-t border-theme-border/60 flex items-center justify-between">
          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9B6DFF] group-hover:text-[#00D4FF] transition-colors"
          >
            <span>View Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <span className="text-[10px] font-mono text-theme-muted/70">
            {project.deploymentType}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
