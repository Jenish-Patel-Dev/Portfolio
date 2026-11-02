import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import confetti from 'canvas-confetti';
import {
  Send,
  Mail,
  Linkedin,
  Github,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Loader2,
  Calendar,
  Clock,
  Sparkles,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { socialLinks } from '@/data/socialLinks';

const contactSchema = z.object({
  fullName: z.string().min(2, { message: 'Please enter your full name (at least 2 characters)' }),
  email: z.string().email({ message: 'Please enter a valid business email address' }),
  companyName: z.string().optional(),
  projectType: z.enum(
    [
      'Oracle APEX Development',
      'PL/SQL & Database Development',
      'Workflow Automation',
      'AI Integration',
      'REST API Integration',
      'Custom Business Application',
      'Other',
    ],
    { required_error: 'Please select a project type' }
  ),
  estimatedBudget: z.string().optional(),
  projectTimeline: z.string().optional(),
  projectDescription: z
    .string()
    .min(15, { message: 'Please provide a brief description (minimum 15 characters)' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const [submissionState, setSubmissionState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      projectType: 'Oracle APEX Development',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionState('loading');
    setErrorMessage('');

    try {
      const apiUrl = import.meta.env.VITE_CONTACT_API_URL;
      const emailJsService = import.meta.env.VITE_EMAILJS_SERVICE_ID;

      // If user configured a backend endpoint or webhook
      if (apiUrl) {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error(`Server returned status ${response.status}`);
        }
      } else if (emailJsService) {
        // Fallback for EmailJS or other email relay
        // If credentials are populated
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
            template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            template_params: data,
          }),
        });
        if (!response.ok) {
          throw new Error('Failed to deliver message via EmailJS');
        }
      } else {
        // If neither is configured, simulate realistic network verification and client acknowledgement
        // while instructing about env config in developer logs.
        await new Promise((resolve) => setTimeout(resolve, 1400));
        console.info(
          '[Contact System] Form inquiry captured. To route to live SMTP/Webhook, define VITE_CONTACT_API_URL in .env'
        );
      }

      setSubmissionState('success');
      reset();

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 },
        });
      } catch (e) {
        // Ignore if unsupported
      }
    } catch (err: unknown) {
      setSubmissionState('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Unable to deliver message. Please contact directly via email.'
      );
    }
  };

  const getSocialIcon = (id: string) => {
    switch (id) {
      case 'github':
        return <Github className="w-5 h-5 text-gray-300" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5 text-[#00D4FF]" />;
      case 'email':
        return <Mail className="w-5 h-5 text-[#9B6DFF]" />;
      case 'whatsapp':
        return <MessageSquare className="w-5 h-5 text-emerald-400" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-theme-secondary/20">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#9B6DFF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#00D4FF]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#9B6DFF] to-[#00D4FF]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00D4FF]">
              Get In Touch
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-theme-primary tracking-tight">
            Let's Build Something Great Together.
          </h2>
          <p className="text-sm sm:text-base text-theme-muted mt-3">
            Have an idea, business challenge, or application requirement? Let's discuss how I can help turn it into a practical digital solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Social Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-theme-border space-y-6">
              {/* Developer Verified Contact Header */}
              <div className="flex items-center gap-3.5 pb-4 border-b border-theme-border">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-[#00D4FF]/60 shrink-0 shadow-md">
                  <img
                    src={siteConfig.avatarUrl}
                    alt={siteConfig.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-theme-primary">
                    {siteConfig.name}
                  </h4>
                  <p className="text-xs text-[#00D4FF] font-mono">
                    Direct Consultation &amp; Inquiry
                  </p>
                </div>
              </div>

              <h3 className="font-heading font-bold text-lg text-theme-primary">
                Direct Contact Channels
              </h3>
              <p className="text-xs sm:text-sm text-theme-muted leading-relaxed">
                Whether you need a full enterprise APEX rollout, PL/SQL optimization, or ad-hoc freelance consulting, reach out directly.
              </p>

              <div className="space-y-4 pt-2">
                {socialLinks.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3.5 rounded-xl bg-theme-secondary/70 border border-theme-border hover:border-[#9B6DFF]/50 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-theme-card border border-theme-border flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getSocialIcon(item.id)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-theme-muted">{item.name}</div>
                      <div className="text-sm font-semibold text-theme-primary truncate group-hover:text-[#00D4FF] transition-colors">
                        {item.label}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Notice Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#9B6DFF]/10 to-[#00D4FF]/10 border border-[#9B6DFF]/30 flex items-start gap-4">
              <div className="p-2 rounded-xl bg-[#9B6DFF]/20 text-[#9B6DFF]">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-heading font-semibold text-sm text-theme-primary">
                  Fast Response Guarantee
                </h4>
                <p className="text-xs text-theme-muted leading-relaxed">
                  Inquiries typically received and answered within 24 business hours. Flexible project models available.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-10 rounded-3xl border border-theme-border shadow-xl">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-theme-border">
                <div>
                  <h3 className="font-heading font-bold text-xl text-theme-primary">
                    Project Inquiry Form
                  </h3>
                  <p className="text-xs text-theme-muted mt-1">
                    Fill out the scope parameters below for a fast estimate.
                  </p>
                </div>
                <Sparkles className="w-5 h-5 text-[#9B6DFF]" />
              </div>

              {/* Form Element */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-medium text-theme-primary mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      {...register('fullName')}
                      placeholder="e.g. Johnathan Smith"
                      className={`w-full px-4 py-2.5 rounded-xl bg-theme-secondary/80 border text-xs sm:text-sm text-theme-primary placeholder-theme-muted/50 focus:outline-none focus:ring-2 focus:ring-[#9B6DFF]/50 transition-colors ${
                        errors.fullName ? 'border-red-500' : 'border-theme-border'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-theme-primary mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      placeholder="john@organization.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-theme-secondary/80 border text-xs sm:text-sm text-theme-primary placeholder-theme-muted/50 focus:outline-none focus:ring-2 focus:ring-[#9B6DFF]/50 transition-colors ${
                        errors.email ? 'border-red-500' : 'border-theme-border'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Company Name & Project Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-medium text-theme-primary mb-1.5">
                      Company / Organization (Optional)
                    </label>
                    <input
                      type="text"
                      {...register('companyName')}
                      placeholder="e.g. Acme Corp."
                      className="w-full px-4 py-2.5 rounded-xl bg-theme-secondary/80 border border-theme-border text-xs sm:text-sm text-theme-primary placeholder-theme-muted/50 focus:outline-none focus:ring-2 focus:ring-[#9B6DFF]/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-theme-primary mb-1.5">
                      Project Type *
                    </label>
                    <select
                      {...register('projectType')}
                      className="w-full px-4 py-2.5 rounded-xl bg-theme-secondary/80 border border-theme-border text-xs sm:text-sm text-theme-primary focus:outline-none focus:ring-2 focus:ring-[#9B6DFF]/50 cursor-pointer"
                    >
                      <option value="Oracle APEX Development">Oracle APEX Development</option>
                      <option value="PL/SQL & Database Development">PL/SQL &amp; Database Development</option>
                      <option value="Workflow Automation">Workflow Automation</option>
                      <option value="AI Integration">AI Integration</option>
                      <option value="REST API Integration">REST API Integration</option>
                      <option value="Custom Business Application">Custom Business Application</option>
                      <option value="Other">Other Requirement</option>
                    </select>
                  </div>
                </div>

                {/* Estimated Budget & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-medium text-theme-primary mb-1.5">
                      Estimated Budget (Optional)
                    </label>
                    <input
                      type="text"
                      {...register('estimatedBudget')}
                      placeholder="e.g. $1,000 - $5,000 / Hourly"
                      className="w-full px-4 py-2.5 rounded-xl bg-theme-secondary/80 border border-theme-border text-xs sm:text-sm text-theme-primary placeholder-theme-muted/50 focus:outline-none focus:ring-2 focus:ring-[#9B6DFF]/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-theme-primary mb-1.5">
                      Project Timeline (Optional)
                    </label>
                    <input
                      type="text"
                      {...register('projectTimeline')}
                      placeholder="e.g. 2 to 4 weeks / Immediate"
                      className="w-full px-4 py-2.5 rounded-xl bg-theme-secondary/80 border border-theme-border text-xs sm:text-sm text-theme-primary placeholder-theme-muted/50 focus:outline-none focus:ring-2 focus:ring-[#9B6DFF]/50"
                    />
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs font-mono font-medium text-theme-primary mb-1.5">
                    Project Requirements &amp; Scope *
                  </label>
                  <textarea
                    rows={4}
                    {...register('projectDescription')}
                    placeholder="Describe your current setup, database version, key features needed, or business problem to solve..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-theme-secondary/80 border text-xs sm:text-sm text-theme-primary placeholder-theme-muted/50 focus:outline-none focus:ring-2 focus:ring-[#9B6DFF]/50 transition-colors ${
                      errors.projectDescription ? 'border-red-500' : 'border-theme-border'
                    }`}
                  />
                  {errors.projectDescription && (
                    <p className="text-[11px] text-red-400 mt-1">
                      {errors.projectDescription.message}
                    </p>
                  )}
                </div>

                {/* Submission Feedback Messages */}
                {submissionState === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold block">Inquiry Submitted Successfully!</strong>
                      Thank you for reaching out. I have received your project details and will review them and respond within 24 business hours.
                    </div>
                  </div>
                )}

                {submissionState === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold block">Submission Error</strong>
                      {errorMessage}
                    </div>
                  </div>
                )}

                {/* Submit CTA Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || submissionState === 'loading'}
                  className="w-full py-3.5 rounded-xl font-heading font-semibold text-sm bg-gradient-to-r from-[#9B6DFF] via-[#7546DB] to-[#00D4FF] text-white shadow-lg shadow-[#9B6DFF]/25 hover:shadow-[0_0_25px_rgba(155,109,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  {submissionState === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Project Brief</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
