export interface ExperienceItem {
  id: string;
  type: 'work' | 'education';
  title: string;
  organization: string;
  period: string;
  location: string;
  responsibilities: string[];
  skills: string[];
  badge: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: 'tavish-infotech-apex-developer',
    type: 'work',
    title: 'Oracle APEX Developer',
    organization: 'Tavish Infotech Pvt. Ltd.',
    period: 'January 2025 – Present',
    location: 'Ahmedabad, India',
    responsibilities: [
      'Oracle APEX application development and architecture.',
      'Enterprise business applications tailored to client workflows.',
      'Complex SQL and PL/SQL development, packages, procedures, and triggers.',
      'Database architecture, relational modeling, and query execution plan optimization.',
      'Interactive reports and interactive grids with custom formatting and validations.',
      'Workflow and multi-level approval systems with audit tracking.',
      'Application integrations with external REST APIs and third-party services.',
    ],
    skills: ['Oracle APEX', 'PL/SQL', 'Oracle Database', 'ORDS', 'Interactive Reports', 'REST APIs'],
    badge: 'Current Role',
  },
  {
    id: 'sal-engineering-degree',
    type: 'education',
    title: 'Bachelor of Engineering – Information Technology',
    organization: 'SAL College of Engineering',
    period: '2021 – 2025',
    location: 'Ahmedabad, India',
    responsibilities: [
      'Core specialization in Database Management Systems (DBMS), Relational Models, and Distributed Systems.',
      'Rigorous coursework in Data Structures, Object-Oriented Software Engineering, and Computer Networks.',
      'Applied capstone projects focused on enterprise business applications and database architecture.',
      'Active participant in software engineering hackathons and technical symposiums.',
    ],
    skills: ['Database Management', 'Data Structures', 'Software Engineering', 'System Architecture'],
    badge: 'Education',
  },
];
