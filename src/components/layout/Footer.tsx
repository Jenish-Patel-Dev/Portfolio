import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { socialLinks } from '@/data/socialLinks';
import { services } from '@/data/services';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (id: string) => {
    switch (id) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'email':
        return <Mail className="w-4 h-4" />;
      case 'whatsapp':
        return <MessageSquare className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <footer className="relative bg-theme-secondary/40 border-t border-theme-border pt-16 pb-12 overflow-hidden">
      {/* Animated Subtle Gradient Line at top */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#9B6DFF] via-[#00D4FF] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-theme-border">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#9B6DFF] to-[#00D4FF] p-[1.5px]">
                <div className="w-full h-full bg-theme-bg rounded-[10px] flex items-center justify-center font-heading font-bold text-sm tracking-tighter bg-gradient-to-r from-[#9B6DFF] to-[#00D4FF] bg-clip-text text-transparent">
                  JP
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-theme-primary">
                  {siteConfig.name}
                </h3>
                <p className="text-xs text-[#00D4FF] font-mono">
                  Oracle APEX Developer
                </p>
              </div>
            </div>

            <p className="text-sm text-theme-muted max-w-sm leading-relaxed">
              Engineering Digital Experiences with Oracle APEX. Specializing in enterprise applications, PL/SQL architecture, workflow automation, and intelligent integrations.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono text-emerald-400">
                {siteConfig.availability}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-theme-primary">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-theme-muted">
              <li>
                <a href="#about" className="hover:text-[#00D4FF] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#00D4FF] transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00D4FF] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#00D4FF] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#00D4FF] transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#terminal" className="hover:text-[#00D4FF] transition-colors">
                  Terminal
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-theme-primary">
              Core Services
            </h4>
            <ul className="space-y-2 text-sm text-theme-muted">
              {services.slice(0, 4).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-[#9B6DFF] transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Socials */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-theme-primary">
              Connect
            </h4>
            <div className="flex flex-col space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-theme-muted hover:text-theme-primary transition-colors group"
                >
                  <span className="p-1.5 rounded-lg bg-theme-card border border-theme-border group-hover:border-[#9B6DFF]/50 transition-colors">
                    {getSocialIcon(link.id)}
                  </span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar with copyright & back-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-theme-muted">
          <div>
            &copy; {currentYear} {siteConfig.name}. All rights reserved. Crafted with precision for enterprise performance.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-theme-border bg-theme-card hover:bg-theme-secondary text-theme-primary transition-all duration-300 group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#00D4FF] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
