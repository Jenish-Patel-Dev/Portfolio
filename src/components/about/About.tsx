import React from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Cpu,
  Database,
  Network,
  Sparkles,
  Layout,
  Briefcase,
  GraduationCap,
  MapPin,
  CheckCircle,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

const pillarIcons = [
  Layers,
  Cpu,
  Database,
  Network,
  Sparkles,
  Layout,
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-theme-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#9B6DFF] to-[#00D4FF]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00D4FF]">
              About Me
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-theme-primary tracking-tight">
            {siteConfig.about.sectionTitle}
          </h2>
        </div>

        {/* Narrative & Visual Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            {siteConfig.about.paragraphs.map((p, index) => (
              <p
                key={index}
                className="text-base sm:text-lg text-theme-muted leading-relaxed font-normal"
              >
                {p}
              </p>
            ))}

            {/* Quick Overview Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="glass-card p-4 rounded-xl border border-theme-border flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#9B6DFF]/10 text-[#9B6DFF]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-semibold text-theme-primary">
                    Professional Role
                  </h4>
                  <p className="text-xs text-theme-muted mt-0.5">
                    {siteConfig.role} at {siteConfig.company}
                  </p>
                </div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-theme-border flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#00D4FF]/10 text-[#00D4FF]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-semibold text-theme-primary">
                    Academic Background
                  </h4>
                  <p className="text-xs text-theme-muted mt-0.5">
                    B.E. in IT, {siteConfig.college}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Profile / Visual Card Column */}
          <div className="lg:col-span-5">
            <div className="relative glass-card p-6 sm:p-8 rounded-2xl border border-theme-border bg-gradient-to-b from-theme-card to-theme-secondary/80 shadow-2xl">
              {/* Decorative Glow */}
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#9B6DFF]/20 rounded-full blur-3xl pointer-events-none" />

              {/* Developer Monogram Header */}
              <div className="flex items-center justify-between pb-6 border-b border-theme-border">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#9B6DFF] to-[#00D4FF] p-[2px] shadow-lg shadow-[#9B6DFF]/20">
                    <div className="w-full h-full bg-theme-bg rounded-[14px] flex items-center justify-center font-heading font-extrabold text-xl bg-gradient-to-r from-[#9B6DFF] to-[#00D4FF] bg-clip-text text-transparent">
                      JP
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-theme-primary">
                      {siteConfig.name}
                    </h3>
                    <p className="text-xs text-[#00D4FF] font-mono">
                      {siteConfig.title}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available</span>
                </div>
              </div>

              {/* Verified Technical Foundations */}
              <div className="py-6 space-y-3.5 border-b border-theme-border">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-theme-muted flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-[#9B6DFF]" /> Primary Engine
                  </span>
                  <span className="font-mono text-theme-primary font-semibold">
                    Oracle APEX &amp; PL/SQL
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-theme-muted flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#00D4FF]" /> Location
                  </span>
                  <span className="font-mono text-theme-primary font-semibold">
                    {siteConfig.location}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-theme-muted flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-[#FF8A3D]" /> Specialization
                  </span>
                  <span className="font-mono text-theme-primary font-semibold">
                    Enterprise Workflow Automation
                  </span>
                </div>
              </div>

              {/* Status Note */}
              <div className="pt-6">
                <div className="p-3.5 rounded-xl bg-theme-secondary/80 border border-theme-border/60 text-xs text-theme-muted leading-relaxed">
                  <span className="font-semibold text-theme-primary">Philosophy:</span> Clean schemas, responsive UI, zero technical debt, and robust security by default.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Core Pillars Grid */}
        <div>
          <div className="mb-8">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-theme-primary">
              Core Technical Pillars
            </h3>
            <p className="text-sm text-theme-muted mt-1">
              Key domains where I bring deep technical execution to every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.about.corePillars.map((pillar, idx) => {
              const IconComp = pillarIcons[idx % pillarIcons.length];
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card p-6 rounded-2xl border border-theme-border flex flex-col justify-between group hover:border-[#9B6DFF]/50 transition-all duration-300"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#9B6DFF]/15 to-[#00D4FF]/15 border border-white/5 flex items-center justify-center text-[#9B6DFF] group-hover:text-[#00D4FF] group-hover:scale-105 transition-all mb-4">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h4 className="font-heading font-semibold text-base text-theme-primary mb-2 group-hover:text-[#00D4FF] transition-colors">
                      {pillar.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center gap-1.5 text-[11px] font-mono text-[#9B6DFF] opacity-0 group-hover:opacity-100 transition-opacity">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Production Grade</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
