export interface ValueProposition {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const valuePropositions: ValueProposition[] = [
  {
    id: 'business-oriented',
    title: 'Business-Oriented Development',
    description:
      'Every line of SQL and APEX configuration is aligned with tangible business efficiency, operational cost reduction, and user adoption.',
    icon: 'Briefcase',
  },
  {
    id: 'custom-solutions',
    title: 'Custom Application Solutions',
    description:
      'Tailored application architecture that fits your unique organizational workflows instead of forcing your team into generic SaaS limitations.',
    icon: 'Wrench',
  },
  {
    id: 'maintainable-code',
    title: 'Maintainable Code',
    description:
      'Clean, thoroughly documented PL/SQL packages and modular APEX components designed for effortless future updates and team collaboration.',
    icon: 'FileCode2',
  },
  {
    id: 'scalable-architecture',
    title: 'Scalable Architecture',
    description:
      'Enterprise database schemas, partitioning strategies, and session management engineered to handle expanding user bases and transaction volumes.',
    icon: 'Server',
  },
  {
    id: 'responsive-interfaces',
    title: 'Responsive Interfaces',
    description:
      'Modern, glassmorphic Universal Theme adaptations that render smoothly across high-resolution desktop monitors, tablets, and mobile devices.',
    icon: 'Smartphone',
  },
  {
    id: 'database-optimization',
    title: 'Database Optimization',
    description:
      'Deep query tuning, optimal indexing, and analytical SQL that guarantees rapid sub-second query responses across extensive enterprise datasets.',
    icon: 'Zap',
  },
  {
    id: 'clear-communication',
    title: 'Clear Communication',
    description:
      'Transparent milestone tracking, prompt status updates, and clear technical explanations without confusing jargon.',
    icon: 'MessageSquare',
  },
  {
    id: 'end-to-end-support',
    title: 'End-to-End Development Support',
    description:
      'From early requirement discovery and relational database design through to deployment, training, and ongoing technical maintenance.',
    icon: 'ShieldCheck',
  },
];
