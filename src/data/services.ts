export interface ServiceItem {
  number: string;
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  technologies: string[];
  deliverables: string[];
  icon: string;
}

export const services: ServiceItem[] = [
  {
    number: '01',
    id: 'oracle-apex-development',
    title: 'Oracle APEX Development',
    shortDescription:
      'Build responsive, scalable, business-focused applications using Oracle APEX tailored to your enterprise workflows.',
    detailedDescription:
      'End-to-end full-lifecycle Oracle APEX development. From conceptual architecture and custom Universal Theme modifications to robust database integration, delivering enterprise-grade web applications with low overhead and exceptional maintainability.',
    technologies: ['Oracle APEX', 'Universal Theme', 'JavaScript', 'CSS3', 'Dynamic Actions', 'ORDS'],
    deliverables: [
      'Custom Enterprise Web Applications',
      'Universal Theme Customization & UI Enhancement',
      'Role-Based Access Control (RBAC) & Single Sign-On',
      'Interactive Reports & Editable Grids',
      'Mobile-Optimized Responsive Views',
    ],
    icon: 'Layers',
  },
  {
    number: '02',
    id: 'sql-plsql-development',
    title: 'SQL & PL/SQL Development',
    shortDescription:
      'Develop complex SQL queries, packages, procedures, functions, triggers, and optimized database logic.',
    detailedDescription:
      'High-performance database engineering. Crafting optimized relational schemas, sophisticated PL/SQL packages, scheduled database jobs, and analytical queries tuned with execution plans to handle millions of records effortlessly.',
    technologies: ['PL/SQL', 'Oracle Database', 'SQL Optimizer', 'DBMS_SCHEDULER', 'Triggers', 'Indexes'],
    deliverables: [
      'Modular PL/SQL Packages & Procedures',
      'Complex Query Optimization & Index Strategy',
      'Database Triggers & Business Validation Rules',
      'Data Migration Scripts & ETL Automation',
      'Transaction Rollback & Concurrency Controls',
    ],
    icon: 'Terminal',
  },
  {
    number: '03',
    id: 'workflow-automation',
    title: 'Workflow Automation',
    shortDescription:
      'Create multi-level approval systems, automated notifications, process tracking, and business workflows.',
    detailedDescription:
      'Eliminate manual operational bottlenecks with intelligent business process automation. Designing multi-tiered approval chains, state machines, automated email/SMS dispatch, and audit logs that ensure compliance and transparency.',
    technologies: ['Oracle APEX Approvals', 'APEX_MAIL', 'REST Automation', 'PL/SQL Jobs', 'Audit Vault'],
    deliverables: [
      'Multi-Tier Dynamic Approval Hierarchies',
      'Automated Email & System Notifications',
      'Event-Driven Process State Tracking',
      'Comprehensive Audit Trail & SLA Logging',
      'Escalation & Delegation Engines',
    ],
    icon: 'GitBranch',
  },
  {
    number: '04',
    id: 'ai-integration',
    title: 'AI Integration',
    shortDescription:
      'Integrate AI APIs and intelligent assistants into Oracle APEX applications for next-generation intelligence.',
    detailedDescription:
      'Empower enterprise systems with cutting-edge artificial intelligence. Embedding conversational assistants, automated unstructured document comprehension, natural language query interfaces, and predictive intelligence into Oracle APEX portals.',
    technologies: ['LLM APIs', 'OpenAI', 'Gemini API', 'REST Connectors', 'JSON Handling', 'Vector Search'],
    deliverables: [
      'Interactive In-App AI Chatbot Assistants',
      'Intelligent Leave & Policy Inquiry Systems',
      'Automated Document Data Extraction',
      'Smart Form Auto-Filling & Suggestions',
      'Context-Aware Business Summarization',
    ],
    icon: 'Sparkles',
  },
  {
    number: '05',
    id: 'reporting-dashboards',
    title: 'Reporting & Dashboards',
    shortDescription:
      'Build interactive dashboards, BI Publisher reports, analytical reports, and business intelligence solutions.',
    detailedDescription:
      'Transform complex operational datasets into executive-level clarity. Crafting real-time analytical dashboards with custom KPI widgets, drill-down interactive charts, and pixel-perfect BI Publisher PDF/Excel exports.',
    technologies: ['BI Publisher', 'Interactive Reports', 'ECharts', 'APEX Jet Charts', 'Faceted Search'],
    deliverables: [
      'Executive KPI Dashboards & Real-Time Metrics',
      'Pixel-Perfect BI Publisher PDF Documents',
      'Custom Multi-Dimensional Visualizations',
      'Exportable Excel & CSV Data Feeds',
      'Automated Scheduled Report Delivery',
    ],
    icon: 'BarChart3',
  },
  {
    number: '06',
    id: 'api-third-party-integration',
    title: 'API & Third-Party Integration',
    shortDescription:
      'Integrate REST APIs, payment systems, cloud storage, and external services seamlessly with your database.',
    detailedDescription:
      'Connecting your Oracle database to the wider digital world. Seamlessly integrating international and domestic payment gateways, OCI Cloud Object Storage, third-party authentication services, and custom RESTful endpoints via ORDS.',
    technologies: ['ORDS', 'APEX_WEB_SERVICE', 'Razorpay', 'Stripe', 'OCI Object Storage', 'OAuth 2.0'],
    deliverables: [
      'Secure Razorpay & Stripe Payment Pipelines',
      'OCI Object Storage File Synchronization',
      'Third-Party REST & SOAP Web Service Invocations',
      'Secure Token & Webhook Processing',
      'Enterprise Identity & OAuth Handshakes',
    ],
    icon: 'Network',
  },
];
