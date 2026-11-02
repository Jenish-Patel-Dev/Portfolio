import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Cpu, Code2, CheckCircle2, Rocket, ArrowRight } from 'lucide-react';
import { processStages } from '@/data/process';

const processIcons: Record<string, React.FC<{ className?: string }>> = {
  Search,
  Cpu,
  Code2,
  CheckCircle2,
  Rocket,
};

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-theme-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#9B6DFF] to-[#00D4FF]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00D4FF]">
              Methodology
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-theme-primary tracking-tight">
            How I Bring Ideas to Life.
          </h2>
          <p className="text-sm sm:text-base text-theme-muted mt-3">
            A structured, engineering-first delivery framework designed for predictability, transparent milestones, and zero database surprises.
          </p>
        </div>

        {/* Connected Step Navigation Tabs */}
        <div className="relative mb-12">
          {/* Connecting line behind step buttons */}
          <div className="hidden lg:block absolute top-1/2 left-6 right-6 h-[2px] bg-theme-border -translate-y-1/2 z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 relative z-10">
            {processStages.map((stage, idx) => {
              const isActive = activeStep === idx;
              const IconComp = processIcons[stage.icon] || Search;

              return (
                <button
                  key={stage.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                    isActive
                      ? 'bg-gradient-to-b from-[#9B6DFF]/20 to-theme-card border-[#00D4FF] shadow-lg shadow-[#00D4FF]/15'
                      : 'bg-theme-card border-theme-border hover:border-theme-border/80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                        isActive ? 'bg-[#00D4FF] text-black' : 'bg-theme-secondary text-theme-muted'
                      }`}
                    >
                      {stage.step}
                    </span>
                    <IconComp
                      className={`w-4 h-4 ${
                        isActive ? 'text-[#00D4FF]' : 'text-theme-muted'
                      }`}
                    />
                  </div>

                  <div>
                    <h4
                      className={`font-heading font-bold text-sm tracking-wide ${
                        isActive ? 'text-white' : 'text-theme-primary'
                      }`}
                    >
                      {stage.name}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-8 sm:p-10 rounded-3xl border border-theme-border bg-gradient-to-br from-theme-card via-theme-card to-theme-secondary/80 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#9B6DFF]/10 rounded-full blur-[90px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Column: Stage Info */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-3xl font-bold text-[#00D4FF]">
                    STAGE {processStages[activeStep].step}
                  </span>
                  <span className="h-6 w-[1px] bg-theme-border" />
                  <span className="font-heading text-xl font-bold text-theme-primary">
                    {processStages[activeStep].name}
                  </span>
                </div>

                <p className="text-base font-medium text-[#9B6DFF]">
                  {processStages[activeStep].tagline}
                </p>

                <p className="text-sm text-theme-muted leading-relaxed">
                  {processStages[activeStep].description}
                </p>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#00D4FF] hover:underline"
                  >
                    <span>Discuss your project requirements</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Key Deliverable Checklist */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-theme-secondary/70 border border-theme-border space-y-3">
                <h5 className="font-heading font-semibold text-xs uppercase tracking-wider text-theme-primary">
                  Stage Key Activities
                </h5>
                <div className="space-y-2.5">
                  {processStages[activeStep].keyActivities.map((act, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-theme-muted">
                      <CheckCircle2 className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
