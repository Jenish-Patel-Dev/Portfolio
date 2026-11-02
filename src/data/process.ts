export interface ProcessStage {
  step: string;
  name: string;
  tagline: string;
  description: string;
  keyActivities: string[];
  icon: string;
}

export const processStages: ProcessStage[] = [
  {
    step: '01',
    name: 'DISCOVER',
    tagline: 'Deep dive into objectives, existing workflows, and core constraints.',
    description:
      'Understand business needs, challenges, and objectives. I conduct structured requirement analysis to establish clear functional boundaries, data flow criteria, and user personas.',
    keyActivities: [
      'Stakeholder consultation & requirements mapping',
      'Pain-point identification in current legacy processes',
      'Entity-Relationship & data volume analysis',
      'Feasibility evaluation for APEX vs custom solutions',
    ],
    icon: 'Search',
  },
  {
    step: '02',
    name: 'STRATEGIZE',
    tagline: 'Architecting scalable schemas, page hierarchies, and system security.',
    description:
      'Plan architecture, database structure, and user experience. Creating normalized relational tables, indexing strategies, API contracts, and intuitive UI wireframes before writing code.',
    keyActivities: [
      'Relational database schema modeling & constraints',
      'Page navigation tree & Universal Theme layout design',
      'Security architecture: RBAC, SSO, and session isolation',
      'Third-party integration & API specification contracts',
    ],
    icon: 'Cpu',
  },
  {
    step: '03',
    name: 'BUILD',
    tagline: 'Agile development with clean, modular, and maintainable logic.',
    description:
      'Develop applications and implement functionality. Writing performant PL/SQL packages, configuring APEX pages, creating interactive grids, dynamic actions, and connecting external integrations.',
    keyActivities: [
      'Modular PL/SQL stored packages, procedures, and triggers',
      'Interactive Reports, Grids, and master-detail screens',
      'Custom JavaScript dynamic actions and responsive CSS',
      'REST Data Source integrations and webhooks',
    ],
    icon: 'Code2',
  },
  {
    step: '04',
    name: 'TEST & OPTIMIZE',
    tagline: 'Rigorous validation, stress testing, and query plan profiling.',
    description:
      'Validate functionality, improve performance, and resolve issues. Ensuring SQL execution plans are optimized, edge cases handled gracefully, and access control policies strictly enforced.',
    keyActivities: [
      'SQL query execution plan profiling & indexing tuning',
      'Cross-role authorization testing & data leakage audits',
      'Cross-browser and mobile responsive validation',
      'Stress testing with realistic enterprise data volumes',
    ],
    icon: 'CheckCircle2',
  },
  {
    step: '05',
    name: 'DELIVER',
    tagline: 'Seamless deployment, production handover, and continuous support.',
    description:
      'Deploy the application and support future improvements. Facilitating seamless deployment into production workspaces, providing clear technical documentation, and supporting post-launch enhancements.',
    keyActivities: [
      'Production deployment scripts & workspace configuration',
      'Administrator & end-user training documentation',
      'Automated database backups & monitoring setup',
      'Ongoing technical consultation and feature iterations',
    ],
    icon: 'Rocket',
  },
];
