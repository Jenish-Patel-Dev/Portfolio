import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

// Lazy load the 3D scene for peak initial load performance
const Hero3DCanvas = lazy(() =>
  import('./Hero3DCanvas').then((mod) => ({ default: mod.Hero3DCanvas }))
);

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % siteConfig.hero.rotatingRoles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-radial-gradient">
      {/* Background Cyber Tech Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Floating Glowing Ambient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9B6DFF]/15 rounded-full blur-[120px] pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00D4FF]/15 rounded-full blur-[120px] pointer-events-none animate-glow-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Typography & CTAs (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Top Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-[#9B6DFF]/30 shadow-[0_0_20px_rgba(155,109,255,0.15)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono font-semibold tracking-wider text-theme-primary uppercase">
                {siteConfig.hero.statusBadge}
              </span>
            </motion.div>

            {/* Main Editorial Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-theme-primary leading-[1.1] max-w-2xl"
            >
              Building Digital{' '}
              <span className="bg-gradient-to-r from-[#9B6DFF] via-[#00D4FF] to-[#9B6DFF] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
                Experiences
              </span>{' '}
              That Drive Business Forward.
            </motion.h1>

            {/* Dynamic Rotating Role Headline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-10 flex items-center gap-2 text-lg sm:text-xl font-heading font-semibold text-theme-muted"
            >
              <span className="text-theme-muted">Expertise:</span>
              <div className="relative overflow-hidden h-8 w-64 sm:w-80">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={roleIndex}
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -25, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="absolute inset-0 flex items-center font-mono text-[#00D4FF] font-bold"
                  >
                    <span>&lt;{siteConfig.hero.rotatingRoles[roleIndex]} /&gt;</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Subheading Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg text-theme-muted leading-relaxed max-w-xl"
            >
              {siteConfig.hero.subheading}
            </motion.p>

            {/* Floating Quick Tech Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-2 pt-1"
            >
              {siteConfig.hero.orbitingTechs.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-theme-secondary/70 border border-theme-border text-theme-primary/90 hover:border-[#9B6DFF]/50 hover:text-[#00D4FF] transition-colors"
                >
                  #{tech}
                </span>
              ))}
            </motion.div>

            {/* Interactive CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto"
            >
              {/* Primary CTA */}
              <button
                onClick={() => scrollTo('projects')}
                className="relative group px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-white overflow-hidden shadow-lg shadow-[#9B6DFF]/25 hover:shadow-[0_0_30px_rgba(155,109,255,0.5)] transition-all duration-300 w-full sm:w-auto text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#9B6DFF] via-[#7546DB] to-[#00D4FF] transition-all duration-300 group-hover:scale-105" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>{siteConfig.hero.primaryCta}</span>
                  <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                </span>
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => scrollTo('contact')}
                className="px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-theme-primary border border-theme-border bg-theme-card/60 backdrop-blur-md hover:border-[#00D4FF]/60 hover:bg-theme-secondary/80 transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2 group"
              >
                <span>{siteConfig.hero.secondaryCta}</span>
                <ArrowUpRight className="w-4 h-4 text-[#00D4FF] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {/* Terminal Quick Jump */}
              <button
                onClick={() => scrollTo('terminal')}
                className="hidden xl:inline-flex items-center gap-2 text-xs font-mono text-theme-muted hover:text-[#00D4FF] transition-colors px-3 py-2 rounded-lg border border-transparent hover:border-theme-border"
              >
                <Terminal className="w-3.5 h-3.5 text-[#9B6DFF]" />
                <span>Launch CLI</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: 3D Interactive Futuristic Orb Scene (5 Cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[420px] sm:min-h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="w-full h-full flex items-center justify-center relative"
            >
              <Suspense
                fallback={
                  <div className="w-72 h-72 rounded-full border border-dashed border-[#9B6DFF]/30 animate-spin-slow flex items-center justify-center">
                    <div className="w-36 h-36 rounded-full bg-gradient-to-r from-[#9B6DFF]/20 to-[#00D4FF]/20 blur-xl animate-pulse" />
                  </div>
                }
              >
                <Hero3DCanvas />
              </Suspense>

              {/* Small overlay floating tags */}
              <div className="absolute top-4 right-2 sm:right-6 glass-panel px-3 py-1.5 rounded-xl border border-white/10 text-[11px] font-mono text-[#00D4FF] flex items-center gap-1.5 shadow-lg pointer-events-none">
                <Sparkles className="w-3 h-3 text-[#9B6DFF]" />
                <span>Oracle APEX 24.x Ready</span>
              </div>

              <div className="absolute bottom-6 left-2 sm:left-4 glass-panel px-3 py-1.5 rounded-xl border border-white/10 text-[11px] font-mono text-theme-primary flex items-center gap-1.5 shadow-lg pointer-events-none">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Enterprise Architecture</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => scrollTo('about')}
        >
          <span className="text-[10px] uppercase font-mono tracking-widest text-theme-muted group-hover:text-[#00D4FF] transition-colors">
            Scroll To Discover
          </span>
          <div className="w-5 h-9 rounded-full border border-theme-border flex items-start justify-center p-1 group-hover:border-[#00D4FF] transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-2.5 rounded-full bg-gradient-to-b from-[#9B6DFF] to-[#00D4FF]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
