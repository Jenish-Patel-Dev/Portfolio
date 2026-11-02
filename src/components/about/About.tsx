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
  ArrowUpRight,
  ShieldCheck,
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Narrative Column (7 cols) */}
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

            {/* Quick CTA */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#00D4FF] hover:text-[#9B6DFF] transition-colors group"
              >
                <span>Initiate technical discussion</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Profile / Visual Card Column with Real Portrait (5 cols) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              {/* Futuristic Cybernetic Ambient Glow Background */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#9B6DFF] via-[#00D4FF] to-[#FF8A3D] opacity-30 blur-2xl group-hover:opacity-60 transition duration-700 pointer-events-none" />

              {/* Main Card Frame */}
              <div className="relative rounded-3xl glass-card overflow-hidden border border-white/15 bg-theme-card/90 shadow-2xl p-4 sm:p-5">
                {/* Image Showcase Container */}
                <div className="relative w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden border border-white/10 bg-[#08090D]">
                  {/* Real Portrait of Jenish Patel */}
                  <img
                    src={siteConfig.avatarUrl}
                    alt="Jenish Patel - Oracle APEX Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-[1.03] brightness-[1.02]"
                    loading="lazy"
                  />

                  {/* Gradient Vignette Overlay for Theme Integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-[#08090D]/40 to-transparent pointer-events-none" />

                  {/* Futuristic Neon Cyber Corner Brackets */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#00D4FF] pointer-events-none" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#9B6DFF] pointer-events-none" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#9B6DFF] pointer-events-none" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#00D4FF] pointer-events-none" />

                  {/* Top Floating Status Pill */}
                  <div className="absolute top-4 left-4 z-10 glass-panel px-3 py-1.5 rounded-full border border-white/15 shadow-lg flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-white">
                      Available for Projects
                    </span>
                  </div>

                  {/* Bottom Identity Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight drop-shadow-md">
                        {siteConfig.name}
                      </h3>
                      <ShieldCheck className="w-5 h-5 text-[#00D4FF]" />
                    </div>

                    <p className="text-xs font-mono font-medium text-[#00D4FF] drop-shadow">
                      Oracle APEX Developer &amp; Application Architect
                    </p>

                    <div className="text-[11px] font-mono text-gray-300 flex items-center gap-1.5 pt-0.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#9B6DFF]" />
                      <span>{siteConfig.company}</span>
                    </div>
                  </div>
                </div>

                {/* Technical Credentials Footer */}
                <div className="pt-4 space-y-2.5">
                  <div className="flex items-center justify-between text-xs px-1">
                    <span className="text-theme-muted flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5 text-[#9B6DFF]" /> Core Stack
                    </span>
                    <span className="font-mono text-theme-primary font-semibold">
                      Oracle APEX 24.x • PL/SQL
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs px-1">
                    <span className="text-theme-muted flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#00D4FF]" /> Location
                    </span>
                    <span className="font-mono text-theme-primary font-semibold">
                      {siteConfig.location}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-theme-secondary/80 border border-theme-border/60 text-[11px] text-theme-muted leading-relaxed">
                    <span className="font-semibold text-theme-primary">Engineering Motto:</span> Scalable relational schemas, zero performance regressions, and intuitive enterprise UX.
                  </div>
                </div>
              </div>
            </motion.div>
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
