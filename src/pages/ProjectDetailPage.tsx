import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Server,
  Shield,
  ExternalLink,
  Layers,
  CheckCircle2,
  Cpu,
  Database,
  ArrowRight,
} from 'lucide-react';
import { projects } from '@/data/projects';
import { ProjectPreviewMockup } from '@/components/projects/ProjectPreviewMockup';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-theme-bg flex flex-col justify-between">
        <Navbar />
        <div className="max-w-xl mx-auto px-4 py-32 text-center">
          <h2 className="font-heading text-2xl font-bold text-theme-primary mb-3">
            Project Not Found
          </h2>
          <p className="text-sm text-theme-muted mb-6">
            The requested project specification could not be located in the archives.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#9B6DFF] to-[#00D4FF] text-white text-xs font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProjects = projects.filter((p) =>
    project.relatedProjectIds.includes(p.id)
  );

  return (
    <div className="min-h-screen bg-theme-bg flex flex-col justify-between">
      <Navbar />

      <main className="pt-28 pb-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button Navigation */}
          <div className="mb-8">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-xs font-semibold text-theme-muted hover:text-[#00D4FF] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Projects</span>
            </Link>
          </div>

          {/* Header Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase bg-[#9B6DFF]/15 text-[#9B6DFF] border border-[#9B6DFF]/30">
                {project.category}
              </span>
              <span className="text-xs font-mono text-theme-muted">
                PROJECT #{project.number}
              </span>
            </div>

            <span className="text-xs font-mono text-theme-muted/70">
              {project.deploymentType}
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-theme-primary tracking-tight mb-8">
            {project.title}
          </h1>

          {/* Large Visual Preview Mockup */}
          <div className="w-full mb-10">
            <ProjectPreviewMockup project={project} className="h-64 sm:h-80 md:h-96" />
          </div>

          {/* Deployment Environment & Live Demo Bar */}
          <div className="p-5 rounded-2xl bg-theme-secondary/70 border border-theme-border flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 text-xs">
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

          {/* Narrative Detailed Breakdown */}
          <div className="space-y-10 text-sm leading-relaxed text-theme-muted">
            {/* 1. Project Overview */}
            <div>
              <h2 className="font-heading text-xl font-bold text-theme-primary mb-3 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#9B6DFF]" /> 1. Project Overview
              </h2>
              <p className="text-base leading-relaxed">{project.fullOverview}</p>
            </div>

            {/* 2. Business Problem & 3. Solution Developed */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-theme-secondary/40 border border-theme-border">
                <h3 className="font-heading font-semibold text-base text-red-400 mb-2">
                  2. Business Problem &amp; Pain Points
                </h3>
                <p className="leading-relaxed">{project.businessProblem}</p>
              </div>

              <div className="p-6 rounded-2xl bg-theme-secondary/40 border border-theme-border">
                <h3 className="font-heading font-semibold text-base text-[#00D4FF] mb-2">
                  3. Solution Developed
                </h3>
                <p className="leading-relaxed">{project.solutionDeveloped}</p>
              </div>
            </div>

            {/* 4. Key Features */}
            <div>
              <h2 className="font-heading text-xl font-bold text-theme-primary mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> 4. Key Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-theme-secondary/30 border border-theme-border/60 text-xs sm:text-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#00D4FF] mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Technologies */}
            <div>
              <h2 className="font-heading text-xl font-bold text-theme-primary mb-3 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#FF8A3D]" /> 5. Technologies Applied
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3.5 py-1.5 rounded-lg bg-theme-secondary border border-theme-border text-xs font-mono text-theme-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* 7. My Contribution */}
            <div>
              <h2 className="font-heading text-xl font-bold text-theme-primary mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#9B6DFF]" /> 7. My Contribution &amp; Responsibilities
              </h2>
              <div className="space-y-2.5">
                {project.myContribution.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-[#9B6DFF] font-bold text-base">›</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 8. Architecture Overview */}
            {project.architectureOverview && (
              <div className="p-6 rounded-2xl bg-[#08090D] border border-white/10">
                <h2 className="font-heading text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Database className="w-5 h-5 text-[#00D4FF]" /> 8. Architecture Overview
                </h2>
                <p className="text-xs sm:text-sm font-mono text-gray-300 leading-relaxed">
                  {project.architectureOverview}
                </p>
              </div>
            )}

            {/* 10. Related Projects */}
            {relatedProjects.length > 0 && (
              <div className="pt-8 border-t border-theme-border">
                <h3 className="font-heading font-bold text-lg text-theme-primary mb-5">
                  10. Related Case Studies
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedProjects.map((rp) => (
                    <div
                      key={rp.id}
                      onClick={() => navigate(`/projects/${rp.id}`)}
                      className="p-4 rounded-xl bg-theme-secondary/50 border border-theme-border hover:border-[#9B6DFF]/60 cursor-pointer transition-colors group"
                    >
                      <span className="text-[10px] font-mono text-[#00D4FF] uppercase">
                        {rp.category}
                      </span>
                      <h4 className="font-heading font-semibold text-sm text-theme-primary group-hover:text-[#9B6DFF] transition-colors mt-1 truncate">
                        {rp.title}
                      </h4>
                      <p className="text-xs text-theme-muted line-clamp-2 mt-1">
                        {rp.shortDescription}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Back & Inquiry Action Bar */}
          <div className="mt-12 pt-8 border-t border-theme-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-xs font-semibold text-theme-muted hover:text-theme-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects Gallery</span>
            </Link>

            <Link
              to="/#contact"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#9B6DFF] to-[#00D4FF] text-white shadow-md hover:shadow-lg transition-all"
            >
              <span>Discuss Similar Application</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
