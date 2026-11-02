export interface SkillItem {
  name: string;
  category: 'oracle' | 'frontend' | 'backend' | 'tools';
  description: string;
  icon: string; // Identifier for icon rendering
  featured?: boolean;
}

export interface SkillCategory {
  id: 'oracle' | 'frontend' | 'backend' | 'tools';
  label: string;
  tagline: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'oracle',
    label: 'Oracle Ecosystem',
    tagline: 'Core enterprise foundation, high-performance database engines, and low-code architecture',
  },
  {
    id: 'frontend',
    label: 'Frontend',
    tagline: 'Modern, reactive, and responsive interface engineering for high-conversion web experiences',
  },
  {
    id: 'backend',
    label: 'Backend & Integrations',
    tagline: 'Robust APIs, serverless cloud storage, payment orchestration, and automated pipelines',
  },
  {
    id: 'tools',
    label: 'Tools & Analytics',
    tagline: 'Version control, collaborative workflows, and interactive data visualization engines',
  },
];

export const skills: SkillItem[] = [
  // Oracle Ecosystem
  {
    name: 'Oracle APEX',
    category: 'oracle',
    description: 'Enterprise low-code platform for building scalable, secure, and modern database-backed web applications.',
    icon: 'Database',
    featured: true,
  },
  {
    name: 'Oracle Database',
    category: 'oracle',
    description: 'Advanced relational database architecture, memory tuning, schema modeling, and transaction management.',
    icon: 'Server',
    featured: true,
  },
  {
    name: 'SQL',
    category: 'oracle',
    description: 'Advanced query construction, analytical functions, CTEs, complex joins, and query execution plan optimization.',
    icon: 'FileCode2',
    featured: true,
  },
  {
    name: 'PL/SQL',
    category: 'oracle',
    description: 'Stored packages, procedures, custom functions, database triggers, collections, and exception handling.',
    icon: 'Terminal',
    featured: true,
  },
  {
    name: 'ORDS',
    category: 'oracle',
    description: 'Oracle REST Data Services for publishing secure JSON REST APIs directly from SQL and PL/SQL.',
    icon: 'Globe',
    featured: true,
  },
  {
    name: 'BI Publisher',
    category: 'oracle',
    description: 'Enterprise reporting, XML publisher templates, pixel-perfect PDF exports, and scheduled report delivery.',
    icon: 'FileSpreadsheet',
  },
  {
    name: 'Interactive Reports',
    category: 'oracle',
    description: 'Dynamic end-user reporting with custom filtering, grouping, aggregation, and saved view presets in APEX.',
    icon: 'BarChart3',
  },
  {
    name: 'Interactive Grid',
    category: 'oracle',
    description: 'Rich editable data tables with master-detail synchronization, batch processing, and conditional formatting.',
    icon: 'LayoutGrid',
  },

  // Frontend
  {
    name: 'HTML',
    category: 'frontend',
    description: 'Semantic markup, accessible structure, SEO compliance, and modern DOM hierarchy standards.',
    icon: 'Code2',
  },
  {
    name: 'CSS',
    category: 'frontend',
    description: 'Custom styling, CSS variables, glassmorphism, flexbox/grid layouts, and responsive media queries.',
    icon: 'Palette',
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    description: 'ES6+ standards, asynchronous operations, DOM manipulation, APEX dynamic actions, and custom client logic.',
    icon: 'FileCode',
    featured: true,
  },
  {
    name: 'React.js',
    category: 'frontend',
    description: 'Component-driven SPA architecture, hooks, state management, and modern interactive web interfaces.',
    icon: 'Atom',
    featured: true,
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    description: 'Utility-first styling system, responsive tokens, dark/light theme systems, and custom design tokens.',
    icon: 'Sparkles',
    featured: true,
  },
  {
    name: 'Bootstrap',
    category: 'frontend',
    description: 'Responsive grid systems, utility classes, and custom component theming for rapid prototyping.',
    icon: 'Box',
  },
  {
    name: 'jQuery',
    category: 'frontend',
    description: 'DOM event handling, APEX plugin integration, AJAX invocations, and legacy web enhancement.',
    icon: 'Layers',
  },

  // Backend & Integrations
  {
    name: 'REST APIs',
    category: 'backend',
    description: 'Designing, exposing, and consuming secure RESTful endpoints with standard authentication and payload validation.',
    icon: 'Network',
    featured: true,
  },
  {
    name: 'JSON',
    category: 'backend',
    description: 'Structured data payloads, Oracle JSON_VALUE, JSON_TABLE, and high-throughput serialization.',
    icon: 'Braces',
  },
  {
    name: 'Python',
    category: 'backend',
    description: 'Scripting, backend automation, data transformations, and custom AI/ML model integration bridges.',
    icon: 'Terminal',
  },
  {
    name: 'PostgreSQL',
    category: 'backend',
    description: 'Relational schema design, ACID transactions, complex indexing, and database administration.',
    icon: 'Database',
  },
  {
    name: 'OCI Object Storage',
    category: 'backend',
    description: 'Oracle Cloud Infrastructure bucket management, pre-authenticated requests, and secure cloud file uploads.',
    icon: 'Cloud',
    featured: true,
  },
  {
    name: 'Razorpay',
    category: 'backend',
    description: 'Complete Indian payment gateway integration, order creation, signature verification, and webhook handling.',
    icon: 'CreditCard',
    featured: true,
  },
  {
    name: 'Stripe',
    category: 'backend',
    description: 'Global checkout session lifecycle, recurring subscriptions, payment intents, and secure webhook validation.',
    icon: 'CreditCard',
    featured: true,
  },

  // Tools
  {
    name: 'Git',
    category: 'tools',
    description: 'Distributed version control, branch management, merge conflict resolution, and atomic commit practices.',
    icon: 'GitBranch',
  },
  {
    name: 'GitHub',
    category: 'tools',
    description: 'Code review workflows, pull requests, repository management, and GitHub Actions CI/CD pipelines.',
    icon: 'GitPullRequest',
    featured: true,
  },
  {
    name: 'ECharts',
    category: 'tools',
    description: 'Apache data visualization library for rendering high-density multi-dimensional interactive charts.',
    icon: 'PieChart',
  },
  {
    name: 'Plotly',
    category: 'tools',
    description: 'Scientific and analytical charting engine for building interactive dashboards and statistical graphs.',
    icon: 'TrendingUp',
  },
];
