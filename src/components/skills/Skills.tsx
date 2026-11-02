import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { skills, skillCategories } from '@/data/skills';
import { TechIcon } from '@/components/common/TechIcon';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'oracle' | 'frontend' | 'backend' | 'tools'>('all');

  const filteredSkills = skills.filter((item) =>
    activeCategory === 'all' ? true : item.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-theme-secondary/20">
      {/* Background Decorative Tech Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#9B6DFF]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#00D4FF]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#9B6DFF] to-[#00D4FF]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00D4FF]">
              Technical Arsenal
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-theme-primary tracking-tight">
            Technologies Behind My Work.
          </h2>
          <p className="text-sm sm:text-base text-theme-muted mt-3">
            A curated stack of enterprise database technologies, modern frontend frameworks, and integration protocols honed for high performance.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-heading font-medium transition-all duration-200 border ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-[#9B6DFF] to-[#00D4FF] text-white border-transparent shadow-md shadow-[#9B6DFF]/20'
                : 'bg-theme-card border-theme-border text-theme-muted hover:text-theme-primary hover:border-theme-border/80'
            }`}
          >
            All Technologies ({skills.length})
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-medium transition-all duration-200 border ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#9B6DFF] to-[#00D4FF] text-white border-transparent shadow-md shadow-[#9B6DFF]/20'
                  : 'bg-theme-card border-theme-border text-theme-muted hover:text-theme-primary hover:border-theme-border/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Active Category Description Tagline */}
        {activeCategory !== 'all' && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-3.5 rounded-xl bg-theme-card/60 border border-theme-border text-xs text-theme-muted flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#00D4FF] shrink-0" />
            <span>
              {skillCategories.find((c) => c.id === activeCategory)?.tagline}
            </span>
          </motion.div>
        )}

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative glass-card p-5 rounded-2xl border border-theme-border flex flex-col justify-between hover:border-[#9B6DFF]/50 transition-all duration-300"
              >
                {/* Hover Glow Gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#9B6DFF]/10 via-transparent to-[#00D4FF]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-theme-secondary/80 border border-theme-border flex items-center justify-center text-[#9B6DFF] group-hover:text-[#00D4FF] group-hover:border-[#00D4FF]/40 transition-all duration-300 shadow-sm">
                      <TechIcon name={skill.icon} className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>

                    {skill.featured && (
                      <span className="px-2 py-0.5 rounded-full bg-[#9B6DFF]/15 border border-[#9B6DFF]/30 text-[10px] font-mono text-[#9B6DFF]">
                        Core
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading font-bold text-base text-theme-primary mb-2 group-hover:text-[#00D4FF] transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-theme-muted leading-relaxed font-normal">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-theme-border/40 flex items-center justify-between text-[11px] font-mono text-theme-muted uppercase">
                  <span>Category</span>
                  <span className="text-[#00D4FF] lowercase font-semibold">
                    {skill.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
