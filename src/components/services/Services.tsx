import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  Terminal,
  GitBranch,
  Sparkles,
  BarChart3,
  Network,
  ArrowRight,
  CheckCircle2,
  X,
} from 'lucide-react';
import { services, ServiceItem } from '@/data/services';

const serviceIcons: Record<string, React.FC<{ className?: string }>> = {
  Layers,
  Terminal,
  GitBranch,
  Sparkles,
  BarChart3,
  Network,
};

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const scrollToContact = (serviceTitle?: string) => {
    setSelectedService(null);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-theme-bg">
      {/* Decorative Cyber Background Gradients */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#9B6DFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#9B6DFF] to-[#00D4FF]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00D4FF]">
              Services &amp; Solutions
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-theme-primary tracking-tight">
            Turning Ideas Into Powerful Applications.
          </h2>
          <p className="text-sm sm:text-base text-theme-muted mt-3">
            Specialized engineering services focused on high-efficiency enterprise platforms, transactional security, and cloud scalability.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComp = serviceIcons[service.icon] || Layers;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative glass-card p-7 rounded-2xl border border-theme-border flex flex-col justify-between hover:border-[#00D4FF]/50 transition-all duration-300"
              >
                {/* Background Card Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#9B6DFF]/5 via-transparent to-[#00D4FF]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  {/* Top: Service Number + Animated Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-theme-muted/40 group-hover:text-[#9B6DFF] transition-colors">
                      {service.number}
                    </span>

                    <div className="w-12 h-12 rounded-xl bg-theme-secondary/80 border border-theme-border flex items-center justify-center text-[#00D4FF] group-hover:scale-110 group-hover:text-white group-hover:bg-gradient-to-tr group-hover:from-[#9B6DFF] group-hover:to-[#00D4FF] transition-all duration-300 shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-bold text-theme-primary mb-3 group-hover:text-[#00D4FF] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-theme-muted leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-theme-secondary border border-theme-border text-theme-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Explore Service Interaction CTA */}
                <div className="pt-4 border-t border-theme-border/50 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9B6DFF] group-hover:text-[#00D4FF] transition-colors"
                  >
                    <span>Explore Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <span className="text-[11px] font-mono text-theme-muted/60">
                    Enterprise Ready
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal Drawer */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-theme-card border border-theme-border rounded-2xl p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 border-b border-theme-border mb-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#9B6DFF]/15 text-[#9B6DFF]">
                    SERVICE {selectedService.number}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-theme-primary">
                    {selectedService.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-1.5 rounded-lg border border-theme-border text-theme-muted hover:text-theme-primary hover:bg-theme-secondary transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#00D4FF] mb-2">
                    Detailed Scope &amp; Architecture
                  </h4>
                  <p className="text-sm text-theme-muted leading-relaxed">
                    {selectedService.detailedDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-theme-primary mb-3">
                    Key Deliverables
                  </h4>
                  <div className="space-y-2">
                    {selectedService.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-theme-muted">
                        <CheckCircle2 className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-theme-primary mb-2">
                    Associated Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg bg-theme-secondary border border-theme-border text-xs font-mono text-theme-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-theme-border flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-theme-muted text-center sm:text-left">
                    Looking for this service for your organization?
                  </p>
                  <button
                    onClick={() => scrollToContact(selectedService.title)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#9B6DFF] to-[#00D4FF] text-white shadow-md hover:shadow-lg transition-all"
                  >
                    Inquire About This Service
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
