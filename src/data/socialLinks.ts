export interface SocialLinkItem {
  id: string;
  name: string;
  url: string;
  label: string;
  icon: string;
  description: string;
}

export const socialLinks: SocialLinkItem[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/jenishpatel', // Configurable
    label: 'github.com/jenishpatel',
    icon: 'Github',
    description: 'Explore open-source repositories and development demos',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/jenishpatel', // Configurable
    label: 'linkedin.com/in/jenishpatel',
    icon: 'Linkedin',
    description: 'Connect professionally and view career milestones',
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:contact@jenishpatel.dev', // Configurable
    label: 'contact@jenishpatel.dev',
    icon: 'Mail',
    description: 'Send direct business inquiries and project briefs',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    url: 'https://wa.me/919876543210?text=Hi%20Jenish,%20I%20would%20like%20to%20discuss%20a%20project.', // Configurable
    label: '+91 (WhatsApp)',
    icon: 'MessageSquare',
    description: 'Direct messaging for rapid project discussions',
  },
];
