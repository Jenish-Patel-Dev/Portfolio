import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Wrench,
  FileCode2,
  Server,
  Smartphone,
  Zap,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';
import { valuePropositions } from '@/data/whyMe';

const valueIcons: Record<string, React.FC<{ className?: string }>> = {
  Briefcase,
  Wrench,
  FileCode2,
  Server,
  Smartphone,
  Zap,
  MessageSquare,
  ShieldCheck,
};

export const WhyMe: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-theme-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#9B6DFF] to-[#00D4FF]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00D4FF]">
              Value Proposition
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#00D4FF] to-[#9B6DFF]" />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-theme-primary tracking-tight">
            Built With Purpose. Developed With Precision.
          </h2>
          <p className="text-sm sm:text-base text-theme-muted mt-3">
            Principles that guide every software deliverable, ensuring high business value, maintainable foundations, and reliable long-term operations.
          </p>
        </div>

        {/* 8 Value Proposition Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuePropositions.map((item, index) => {
            const IconComp = valueIcons[item.icon] || ShieldCheck;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass-card p-6 rounded-2xl border border-theme-border flex flex-col justify-between group hover:border-[#9B6DFF]/50 transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-theme-secondary/80 border border-theme-border flex items-center justify-center text-[#9B6DFF] group-hover:text-[#00D4FF] group-hover:border-[#00D4FF]/40 transition-all duration-300 mb-5">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-bold text-base text-theme-primary mb-2 group-hover:text-[#00D4FF] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-theme-muted leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
