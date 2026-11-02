import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { experiences } from '@/data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-theme-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#9B6DFF] to-[#00D4FF]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00D4FF]">
              Career &amp; Education
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#00D4FF] to-[#9B6DFF]" />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-theme-primary tracking-tight">
            My Journey in Technology.
          </h2>
          <p className="text-sm sm:text-base text-theme-muted mt-3">
            A chronological timeline of hands-on professional application engineering and academic foundations.
          </p>
        </div>

        {/* Vertical Animated Timeline */}
        <div className="relative">
          {/* Glowing Animated Central Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#9B6DFF] via-[#00D4FF] to-[#FF8A3D] opacity-40 shadow-[0_0_12px_rgba(155,109,255,0.4)]" />

          <div className="space-y-14">
            {experiences.map((item, index) => {
              const isEven = index % 2 === 0;
              const isWork = item.type === 'work';

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } group`}
                >
                  {/* Timeline Glowing Milestone Node */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 }}
                      className="w-10 h-10 rounded-full bg-theme-bg border-2 border-[#9B6DFF] flex items-center justify-center shadow-[0_0_20px_rgba(155,109,255,0.6)] group-hover:border-[#00D4FF] transition-colors"
                    >
                      {isWork ? (
                        <Briefcase className="w-4 h-4 text-[#00D4FF]" />
                      ) : (
                        <GraduationCap className="w-4 h-4 text-[#FF8A3D]" />
                      )}
                    </motion.div>
                  </div>

                  {/* Spacer for 2-column Desktop Alignment */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Experience Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      isEven ? 'md:pr-12' : 'md:pl-12'
                    } w-full`}
                  >
                    <div className="glass-card p-6 sm:p-7 rounded-2xl border border-theme-border hover:border-[#9B6DFF]/50 transition-all duration-300">
                      {/* Badge & Period */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold uppercase bg-[#9B6DFF]/15 text-[#9B6DFF] border border-[#9B6DFF]/30">
                          {item.badge}
                        </span>

                        <div className="flex items-center gap-1.5 text-xs font-mono text-theme-muted">
                          <Calendar className="w-3.5 h-3.5 text-[#00D4FF]" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Title & Organization */}
                      <h3 className="font-heading font-bold text-lg text-theme-primary mb-1">
                        {item.title}
                      </h3>

                      <div className="flex items-center gap-2 text-xs font-medium text-[#00D4FF] mb-4">
                        <span>{item.organization}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-theme-muted">
                          <MapPin className="w-3 h-3" /> {item.location}
                        </span>
                      </div>

                      {/* Responsibilities */}
                      <div className="space-y-2 mb-5">
                        {item.responsibilities.map((resp, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-theme-muted">
                            <CheckCircle className="w-3.5 h-3.5 text-[#9B6DFF] shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skill Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-theme-border/50">
                        {item.skills.map((s) => (
                          <span
                            key={s}
                            className="px-2 py-0.5 text-[10px] font-mono rounded bg-theme-secondary text-theme-muted border border-theme-border"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
