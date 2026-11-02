export interface SiteConfig {
  name: string;
  role: string;
  title: string;
  avatarUrl: string;
  availability: string;
  email: string;
  phonePlaceholder: string;
  location: string;
  company: string;
  experienceStart: string;
  education: string;
  college: string;
  educationDuration: string;
  hero: {
    statusBadge: string;
    heading: string;
    subheading: string;
    rotatingRoles: string[];
    primaryCta: string;
    secondaryCta: string;
    orbitingTechs: string[];
  };
  about: {
    sectionTitle: string;
    paragraphs: string[];
    corePillars: {
      title: string;
      description: string;
    }[];
  };
  resumeUrl: string;
}

export const siteConfig: SiteConfig = {
  name: "Jenish Patel",
  role: "Oracle APEX Developer",
  title: "Oracle APEX Developer, Application Developer & Freelancer",
  avatarUrl: "/images/jenish-patel.jpg",
  availability: "AVAILABLE FOR FREELANCE PROJECTS",
  email: "contact@jenishpatel.dev", // Configurable
  phonePlaceholder: "+91 98765 43210",
  location: "Ahmedabad, Gujarat, India",
  company: "Tavish Infotech Pvt. Ltd.",
  experienceStart: "January 2025 – Present",
  education: "Bachelor of Engineering – Information Technology",
  college: "SAL College of Engineering",
  educationDuration: "2021 – 2025",
  hero: {
    statusBadge: "AVAILABLE FOR FREELANCE PROJECTS",
    heading: "Building Digital Experiences That Drive Business Forward.",
    subheading:
      "I'm Jenish Patel, an Oracle APEX Developer specializing in enterprise applications, workflow automation, intelligent integrations, and scalable business solutions.",
    rotatingRoles: [
      "Oracle APEX Developer",
      "PL/SQL Developer",
      "Application Architect",
      "Freelance Developer",
    ],
    primaryCta: "Explore My Work",
    secondaryCta: "Let's Collaborate",
    orbitingTechs: [
      "Oracle APEX",
      "PL-SQL",
      "ORDS",
      "SQL",
      "AI",
      "REST API",
    ],
  },
  about: {
    sectionTitle: "More Than Just Writing Code.",
    paragraphs: [
      "I'm Jenish Patel, an Oracle APEX Developer passionate about building powerful digital solutions that simplify complex business operations.",
      "My focus is on transforming business requirements into scalable, user-friendly applications using Oracle APEX, PL/SQL, Oracle Database, and modern web technologies.",
      "I enjoy developing enterprise applications, automating business workflows, creating analytical dashboards, and integrating intelligent capabilities into business systems.",
    ],
    corePillars: [
      {
        title: "Enterprise Application Development",
        description: "Designing end-to-end mission-critical software with role-based security and resilient database transactions.",
      },
      {
        title: "Workflow Automation",
        description: "Eliminating manual bottlenecks with multi-stage approval processes, scheduled tasks, and automated triggers.",
      },
      {
        title: "Database Architecture",
        description: "Optimizing relational models, indexing strategies, stored packages, and low-latency query performance.",
      },
      {
        title: "API Integrations",
        description: "Bridging Oracle APEX with third-party payment gateways, cloud storage, authentication, and external services.",
      },
      {
        title: "AI-Powered Solutions",
        description: "Supercharging enterprise business workflows with LLM assistants, smart document processing, and predictive tooling.",
      },
      {
        title: "Modern UI/UX Development",
        description: "Crafting fluid, responsive, glassmorphic interfaces that elevate standard APEX apps to consumer-grade experiences.",
      },
    ],
  },
  resumeUrl: "#contact", // Connectable to downloadable PDF or contact section
};
