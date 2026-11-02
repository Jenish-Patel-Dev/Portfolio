export type ProjectCategory = 'ORACLE APEX' | 'ENTERPRISE' | 'AI' | 'INTEGRATIONS';

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  fullOverview: string;
  businessProblem: string;
  solutionDeveloped: string;
  keyFeatures: string[];
  technologies: string[];
  myContribution: string[];
  architectureOverview: string;
  demoUrl?: string; // Only set if actual link, otherwise undefined
  deploymentType: string;
  featured: boolean;
  accentColor: string;
  stats?: { label: string; value: string }[];
  relatedProjectIds: string[];
}

export const projectCategories: { id: 'ALL' | ProjectCategory; label: string }[] = [
  { id: 'ALL', label: 'All Projects' },
  { id: 'ORACLE APEX', label: 'Oracle APEX' },
  { id: 'ENTERPRISE', label: 'Enterprise' },
  { id: 'AI', label: 'AI Powered' },
  { id: 'INTEGRATIONS', label: 'Integrations' },
];

export const projects: ProjectItem[] = [
  {
    id: 'garage-sale-management-system',
    number: '01',
    title: 'Garage Sale Management System',
    category: 'ORACLE APEX',
    shortDescription:
      'A marketplace application with product listings, category filters, location-based discovery, QR codes, favorite functionality, image galleries, notifications, and administrative dashboards.',
    fullOverview:
      'The Garage Sale Management System is a full-featured digital marketplace built on Oracle APEX. It provides local communities and vendors an intuitive portal to list pre-owned items, organize yard sales, manage multi-photo inventory, generate dynamic QR codes for physical signage, and handle buyer-seller inquiries in real time.',
    businessProblem:
      'Traditional physical garage sales suffer from limited reach, lack of inventory cataloging, manual cash tallying, and the inability of potential buyers to discover nearby sales with active stock before traveling.',
    solutionDeveloped:
      'Engineered a centralized Oracle APEX platform backed by Oracle Cloud Infrastructure (OCI) Object Storage for scalable image storage. Integrated location-based discovery filters, interactive product carousels, instant QR-code generation for direct yard sale navigation, and a reactive administrative dashboard for content moderation.',
    keyFeatures: [
      'Interactive Product Catalog with Multi-Category Search & Faceted Filtering',
      'Dynamic QR Code Generator for physical yard signage and quick mobile access',
      'Location-based radius search and interactive neighborhood map views',
      'Direct OCI Object Storage integration for multi-image uploads and instant thumbnails',
      'Buyer wishlist & favorite bookmarking with instant notification alerts',
      'Admin moderation dashboard with report flagging and listing lifecycle control',
    ],
    technologies: ['Oracle APEX', 'PL/SQL', 'SQL', 'JavaScript', 'OCI Object Storage'],
    myContribution: [
      'Architected relational database schema with spatial attributes and normalized catalog tables.',
      'Developed PL/SQL packages communicating with OCI Object Storage REST APIs using APEX_WEB_SERVICE.',
      'Designed responsive Universal Theme layouts with custom card views and CSS glassmorphism.',
      'Implemented real-time client-side search and dynamic QR code generation hooks in JavaScript.',
    ],
    architectureOverview:
      'Browser client communicates with Oracle APEX Universal Theme pages. APEX processes transactions via PL/SQL packages connected to an Oracle Database. High-resolution photos are uploaded directly to OCI Object Storage via pre-authenticated request URLs, minimizing database footprint.',
    deploymentType: 'Cloud Hosted (OCI APEX Service)',
    featured: true,
    accentColor: '#9B6DFF',
    relatedProjectIds: ['visitor-management-system', 'document-preview-download', 'payment-integration-application'],
  },
  {
    id: 'visitor-management-system',
    number: '02',
    title: 'Visitor Management System',
    category: 'ENTERPRISE',
    shortDescription:
      'An enterprise visitor registration and security management system with QR badges, parking management, visitor tracking, host authentication, and approval workflows.',
    fullOverview:
      'An enterprise-grade physical security and visitor registration platform built on Oracle APEX. It replaces manual paper logbooks with touchless QR check-ins, automated host authorization workflows, vehicle parking pass allocation, and real-time security desk dashboards.',
    businessProblem:
      'Paper visitor logs present serious data privacy risks, slow check-in queues during peak hours, prevent emergency roll-call verification, and fail to track unexpected vehicle entries in corporate facilities.',
    solutionDeveloped:
      'Constructed a comprehensive security workflow in Oracle APEX. Pre-registers guests, dispatches time-restricted digital QR access passes to visitor emails, triggers instant Slack/email notifications to host employees upon arrival, logs vehicle registration for parking stalls, and tracks on-site headcount.',
    keyFeatures: [
      'Self-Service Pre-Registration Portal with automated email pass dispatch',
      'Rapid QR Code scanning for contactless check-in and checkout at security gates',
      'Host Employee Approval workflow with instant automated arrival pings',
      'Designated Parking Allocation engine with live parking bay occupancy status',
      'Emergency Roll-Call Dashboard displaying real-time on-premises visitor count',
      'Audit compliance logs with timestamped check-in/out records and NDA acceptance',
    ],
    technologies: ['Oracle APEX', 'PL/SQL', 'JavaScript', 'Oracle Database'],
    myContribution: [
      'Developed multi-tier approval state machine using Oracle APEX workflow and PL/SQL triggers.',
      'Integrated camera QR scanner utilizing HTML5 Canvas and JavaScript decoding libraries.',
      'Created automated email templating using APEX_MAIL with attached pass graphics.',
      'Tuned high-concurrency database queries for rapid security badge verification.',
    ],
    architectureOverview:
      'Multi-role Oracle APEX portal with three primary user access levels: Visitor (Public/Restricted), Host Employee, and Security Guard. Relational tables track visit sessions, vehicle allocations, and host approvals with strict foreign-key integrity.',
    deploymentType: 'Corporate On-Premises & Private Cloud',
    featured: true,
    accentColor: '#00D4FF',
    relatedProjectIds: ['garage-sale-management-system', 'ai-leave-management-system', 'procurement-marketing-management'],
  },
  {
    id: 'ai-leave-management-system',
    number: '03',
    title: 'AI Leave Management System',
    category: 'AI',
    shortDescription:
      'An employee leave management application with role-based authentication, leave requests, approval workflows, employee management, and AI assistant capabilities.',
    fullOverview:
      'A forward-looking enterprise HR application designed to streamline employee time-off management. Built on Oracle APEX and enhanced with conversational AI API integration, employees can check leave balances, understand complex company policy, and submit leave requests through conversational prompts.',
    businessProblem:
      'HR departments spend hundreds of hours answering repetitive leave policy inquiries, while employees struggle to navigate static policy PDFs or submit multi-tier approval requests smoothly.',
    solutionDeveloped:
      'Engineered an intelligent APEX portal featuring automated balance accrual calculations, manager approval queues, calendar collision warnings, and an embedded AI copilot capable of answering policy questions and proposing leave applications from natural language.',
    keyFeatures: [
      'Conversational AI Copilot answering leave entitlement and policy inquiries in real time',
      'Multi-Level Manager Approval Chain with one-click email and portal approvals',
      'Automated Leave Accrual & Balance Deduction engine calculated in PL/SQL',
      'Team Leave Collision Radar warning managers of concurrent departmental absences',
      'Role-Based Dashboards for Employees, Department Managers, and HR Directors',
      'Historical Leave Ledger with exportable monthly audit reports',
    ],
    technologies: ['Oracle APEX', 'PL/SQL', 'SQL', 'AI API Integration'],
    myContribution: [
      'Integrated LLM API endpoint via Oracle APEX REST Data Source with secure token management.',
      'Designed conversational chat widget embedded directly inside the APEX Universal Theme.',
      'Engineered complex PL/SQL business rules preventing overlapping requests and enforcing notice periods.',
      'Created manager authorization schemes using APEX Access Control and session states.',
    ],
    architectureOverview:
      'APEX client front-end communicates with Oracle Database schema. When user invokes the AI assistant, PL/SQL packages invoke external AI REST endpoints, passing sanitized policy guidelines and user balance context to generate accurate responses.',
    deploymentType: 'Enterprise Hybrid Cloud',
    featured: true,
    accentColor: '#FF8A3D',
    relatedProjectIds: ['visitor-management-system', 'face-recognition-login', 'calendar-management-application'],
  },
  {
    id: 'procurement-marketing-management',
    number: '04',
    title: 'Procurement & Marketing Management',
    category: 'ENTERPRISE',
    shortDescription:
      'Enterprise application modules supporting procurement and marketing operations, reporting, data processing, and business workflows.',
    fullOverview:
      'A multi-department enterprise suite combining procurement requisition workflows with marketing campaign resource tracking. Features vendor quotation comparisons, purchase order lifecycles, campaign budget allocation, and BI Publisher reports.',
    businessProblem:
      'Marketing and procurement departments operated in siloed spreadsheets, creating discrepancies between approved marketing collateral budgets and actual vendor purchase orders.',
    solutionDeveloped:
      'Built a unified Oracle APEX business system with shared approval hierarchies, supplier catalog integration, invoice matching, and automated BI Publisher PDF purchase order generation.',
    keyFeatures: [
      'Vendor Quotation Matrix comparing bids side-by-side with lowest-cost highlights',
      'Purchase Requisition to PO lifecycle with automated departmental budget deductions',
      'Pixel-perfect BI Publisher PDF generation for formal vendor purchase orders',
      'Campaign expense tracker linked directly to procurement PO line items',
      'Interactive Grids for bulk requisition line-item entry and inline tax calculations',
      'Audit log tracking every budget revision, approval, and order status change',
    ],
    technologies: ['Oracle APEX', 'PL/SQL', 'SQL', 'BI Publisher'],
    myContribution: [
      'Authored BI Publisher RTF/XML data templates for automated PO and invoice generation.',
      'Developed transactional PL/SQL packages managing inventory commitments and budget validations.',
      'Implemented Interactive Grids with custom JavaScript dynamic action calculations.',
      'Created executive summary dashboard with budget vs. actual variance charts.',
    ],
    architectureOverview:
      'Oracle APEX application accessing unified ERP tables in Oracle Database. Integrated with Oracle BI Publisher server for server-side report compilation and automated document archival.',
    deploymentType: 'Enterprise Oracle ERP Environment',
    featured: false,
    accentColor: '#9B6DFF',
    relatedProjectIds: ['visitor-management-system', 'data-loading-application', 'payment-integration-application'],
  },
  {
    id: 'payment-integration-application',
    number: '05',
    title: 'Payment Integration Application',
    category: 'INTEGRATIONS',
    shortDescription:
      'An application demonstrating payment gateway integration and transaction processing.',
    fullOverview:
      'A secure payment processing gateway module in Oracle APEX, supporting dual-provider payment routing (Razorpay and Stripe). Handles checkout session initiation, client-side modal tokenization, server-side cryptographic signature verification, and asynchronous webhook reconciliation.',
    businessProblem:
      'Enterprise APEX applications needed a resilient, PCI-DSS compliant method to accept both domestic Indian UPI/card payments and international credit cards without storing sensitive card data.',
    solutionDeveloped:
      'Constructed a robust payments architecture using client-side checkout SDKs paired with secure PL/SQL REST callbacks. Implemented idempotent webhook listeners that prevent double-crediting on network retries.',
    keyFeatures: [
      'Dual-Gateway Support: Razorpay for domestic/UPI transactions and Stripe for international currencies',
      'Cryptographic HMAC SHA256 signature verification in PL/SQL preventing payload tampering',
      'Asynchronous webhook receiver handling payment success, refund, and dispute events',
      'Idempotent transaction ledger ensuring zero duplicate invoice generation',
      'Real-time transaction status modal with instant failure diagnosis and retry hints',
      'Automated payment receipt generation and email dispatch upon confirmation',
    ],
    technologies: ['Oracle APEX', 'JavaScript', 'REST APIs', 'Razorpay', 'Stripe'],
    myContribution: [
      'Implemented HMAC-SHA256 signature calculation using DBMS_CRYPTO in PL/SQL.',
      'Built ORDS REST endpoints acting as secure webhook listeners for Razorpay and Stripe.',
      'Wrote client-side JavaScript bridges opening payment checkout overlays from APEX buttons.',
      'Designed transaction reconciliation dashboard with dispute resolution controls.',
    ],
    architectureOverview:
      'APEX page triggers PL/SQL package to create order on payment gateway via REST API. Gateway returns order ID; client opens SDK popup. On completion, gateway posts webhook to ORDS REST endpoint while browser receives signature for dual-verification.',
    deploymentType: 'Cloud & Sandbox Ready',
    featured: true,
    accentColor: '#00D4FF',
    relatedProjectIds: ['garage-sale-management-system', 'document-preview-download', 'procurement-marketing-management'],
  },
  {
    id: 'document-preview-download',
    number: '06',
    title: 'Document Preview & Download',
    category: 'ORACLE APEX',
    shortDescription:
      'A document management application with document previews, file access, and download functionality.',
    fullOverview:
      'An enterprise document repository and viewer application built with Oracle APEX. Provides in-browser previewing of PDFs, office documents, and images without forcing file downloads, accompanied by secure token-based download links and permission gating.',
    businessProblem:
      'Users frequently had to download large files to their local disk simply to check invoice numbers or verify contract clauses, wasting bandwidth and exposing confidential documents to unmonitored local storage.',
    solutionDeveloped:
      'Engineered an embedded browser previewer utilizing PDF.js and image viewports inside APEX modal dialogs. Files are streamed directly from Oracle BLOB tables or OCI buckets via secure PL/SQL procedures.',
    keyFeatures: [
      'In-Browser Document Previewer for PDFs, high-res images, and text files',
      'Direct BLOB streaming using WPG_DOCLOAD and custom ORDS file endpoints',
      'Time-limited, single-use download tokens preventing unauthorized link sharing',
      'Document versioning with history diff logs and previous version restoration',
      'Metadata tagging and full-text keyword indexing for fast search retrieval',
      'Watermarked preview mode for confidential internal records',
    ],
    technologies: ['Oracle APEX', 'PL/SQL', 'JavaScript'],
    myContribution: [
      'Created custom PL/SQL streaming procedure utilizing WPG_DOCLOAD.DOWNLOAD_FILE.',
      'Embedded PDF.js viewer iframe inside APEX dynamic modal region.',
      'Designed responsive document grid with file-type thumbnail badges and size statistics.',
      'Implemented download tracking audit log capturing user IP, timestamp, and document ID.',
    ],
    architectureOverview:
      'Database holds document metadata and BLOB contents. APEX application serves files through secure application-level authorization gates, rendering previews inside an optimized client-side container.',
    deploymentType: 'Enterprise Internal Portal',
    featured: false,
    accentColor: '#FF8A3D',
    relatedProjectIds: ['pdf-watermark-application', 'data-loading-application', 'garage-sale-management-system'],
  },
  {
    id: 'pdf-watermark-application',
    number: '07',
    title: 'PDF Watermark Application',
    category: 'ORACLE APEX',
    shortDescription:
      'A document utility application for applying custom watermarks to PDF documents.',
    fullOverview:
      'A high-utility document protection tool built for Oracle APEX. Allows legal and administrative teams to upload PDF files, configure dynamic text or image watermarks (such as "CONFIDENTIAL", date-stamps, or reviewer usernames), and generate protected PDFs on the fly.',
    businessProblem:
      'Organizations needed a standardized, tamper-evident way to stamp confidential disclosures, client proposals, and audit records before external transmission without requiring expensive commercial desktop software.',
    solutionDeveloped:
      'Constructed a streamlined APEX utility integrating client-side and server-side PDF manipulation routines to stamp diagonal semi-transparent watermarks, custom opacity, user timestamps, and access restrictions.',
    keyFeatures: [
      'Dynamic Watermark Configurator: customize text, opacity, angle, and font size',
      'Automated Dynamic Metadata insertion (current user, timestamp, IP address)',
      'Side-by-side visual comparison before finalizing stamped document',
      'Batch processing mode applying watermarks across multi-file zip archives',
      'Zero local storage requirement: processes and downloads securely in-flight',
      'Configurable protection settings restricting text copying and printing',
    ],
    technologies: ['Oracle APEX', 'PL/SQL', 'PDF Generation', 'JavaScript'],
    myContribution: [
      'Integrated PDF-Lib JavaScript processing engine within Oracle APEX page items.',
      'Designed dynamic preview canvas rendering live watermark position updates.',
      'Developed PL/SQL procedures storing watermarked audit records and file checksums.',
      'Created user-friendly batch upload queue with progress indicator feedback.',
    ],
    architectureOverview:
      'APEX UI provides configuration parameters. Files uploaded to the browser memory are processed through the embedded PDF pipeline, then streamed back or saved to the Oracle repository as designated.',
    deploymentType: 'Web Utility / APEX Plugin',
    featured: false,
    accentColor: '#9B6DFF',
    relatedProjectIds: ['document-preview-download', 'data-loading-application', 'visitor-management-system'],
  },
  {
    id: 'data-loading-application',
    number: '08',
    title: 'Data Loading Application',
    category: 'ENTERPRISE',
    shortDescription:
      'An application for importing, validating, and processing structured business data.',
    fullOverview:
      'An enterprise ETL data onboarding utility built on Oracle APEX. Allows corporate users to upload CSV, Excel, and JSON data files with automatic column mapping, strict schema validation, exception quarantine queues, and atomic database insertion.',
    businessProblem:
      'Manual data imports by business analysts caused corrupt records, primary key collisions, unformatted date failures, and database lockouts during regular batch updates.',
    solutionDeveloped:
      'Built a guided multi-step wizard in Oracle APEX that parses raw files into temporary collection staging tables (APEX_COLLECTION), validates each row against business rules, and offers an interactive correction grid before permanent commit.',
    keyFeatures: [
      'Smart Header Detection with fuzzy column-to-table field auto-mapping',
      'APEX_COLLECTION staging layer preventing unvalidated writes to core tables',
      'Interactive Validation Error Grid highlighting cell-by-cell validation failures',
      'In-place error correction allowing users to fix records without re-uploading file',
      'Duplicate Detection engine matching records against composite business keys',
      'Batch Execution logs reporting success ratios, execution time, and error digests',
    ],
    technologies: ['Oracle APEX', 'PL/SQL', 'SQL', 'Data Workshop'],
    myContribution: [
      'Engineered automated validation routines using PL/SQL packages and regular expressions.',
      'Utilized APEX_DATA_PARSER to handle dynamic CSV and XLSX files regardless of delimiter.',
      'Built interactive correction screen leveraging APEX Interactive Grid capabilities.',
      'Optimized bulk INSERT statements using FORALL and SAVE EXCEPTIONS for high performance.',
    ],
    architectureOverview:
      'File uploaded to APEX -> parsed via APEX_DATA_PARSER into APEX_COLLECTION staging memory -> PL/SQL validator flags errors -> User reviews interactive grid -> Bulk transaction commits to target relational tables.',
    deploymentType: 'Enterprise Operational Tool',
    featured: false,
    accentColor: '#00D4FF',
    relatedProjectIds: ['procurement-marketing-management', 'document-preview-download', 'visitor-management-system'],
  },
  {
    id: 'face-recognition-login',
    number: '09',
    title: 'Face Recognition Login',
    category: 'AI',
    shortDescription:
      'A face-based authentication demonstration for application login.',
    fullOverview:
      'An innovative biometric security demonstration combining client-side computer vision models with Oracle APEX custom authentication schemes. Users can register their facial landmarks and authenticate securely without manual password entry.',
    businessProblem:
      'Traditional password credentials can be shared, forgotten, or phished, posing vulnerabilities in high-security terminal environments such as factory floors and bank server rooms.',
    solutionDeveloped:
      'Integrated lightweight browser-based facial recognition neural network (Face-API) with Oracle APEX. Detects face presence, computes 128-dimensional facial embeddings, encrypts vectors, and matches against stored credentials via secure PL/SQL authentication packages.',
    keyFeatures: [
      'Real-time webcam video feed with face detection bounding box and confidence score',
      '128-dimensional facial descriptor generation computed purely on the client side',
      'Anti-spoofing liveness detection requiring user blink/smile before capture',
      'Custom Oracle APEX Authentication Scheme verifying Euclidean vector distance',
      'Zero raw video/photo storage: only mathematical biometric vectors are persisted',
      'Graceful fallback to standard two-factor authentication if biometric fails',
    ],
    technologies: ['Oracle APEX', 'JavaScript', 'Face API', 'REST APIs'],
    myContribution: [
      'Built custom APEX Login Page integration loading client-side TensorFlow/Face-API models.',
      'Created custom APEX Authentication function validating biometric vector distance in PL/SQL.',
      'Engineered encrypted vector storage in Oracle Database utilizing JSON types.',
      'Designed futuristic cyber-aesthetic UI with scanning targeting reticle and visual status feedback.',
    ],
    architectureOverview:
      'Webcam captures frame -> JavaScript models compute vector -> Vector transmitted over TLS to APEX custom authentication function -> PL/SQL compares vector distance against user record -> Session authenticated.',
    deploymentType: 'Innovation Lab / Security Demo',
    featured: true,
    accentColor: '#FF8A3D',
    relatedProjectIds: ['ai-leave-management-system', 'visitor-management-system', 'calendar-management-application'],
  },
  {
    id: 'calendar-management-application',
    number: '10',
    title: 'Calendar Management Application',
    category: 'ORACLE APEX',
    shortDescription:
      'An interactive scheduling and calendar management application.',
    fullOverview:
      'A dynamic scheduling and resource reservation application built inside Oracle APEX. Provides multi-calendar views (month, week, day, agenda, timeline), drag-and-drop event rescheduling, room booking conflict detection, and recurring event series.',
    businessProblem:
      'Teams lacked an integrated way to visualize departmental milestones, shared conference room bookings, and client deadlines within their central Oracle ERP portal.',
    solutionDeveloped:
      'Constructed a rich calendar dashboard leveraging APEX Calendar component and FullCalendar JavaScript library. Features color-coded event categories, drag-and-drop appointment adjustment with automated database updates, and collision-free booking verification.',
    keyFeatures: [
      'Multi-View Timeline: Day, Week, Month, Year, and Resource Schedule views',
      'Drag-and-Drop Event Rescheduling with instant AJAX database synchronization',
      'Resource Collision Engine preventing double-booking of rooms or equipment',
      'Recurring Event support: daily, weekly, monthly frequencies with exception handling',
      'Category color-coding for priority status, project tags, and departments',
      'iCal/Google Calendar export feed allowing cross-platform calendar synchronization',
    ],
    technologies: ['Oracle APEX', 'JavaScript', 'FullCalendar', 'PL/SQL'],
    myContribution: [
      'Customized APEX Calendar component and integrated FullCalendar extensions.',
      'Developed AJAX dynamic actions responding to event drop, resize, and click events.',
      'Wrote PL/SQL conflict detection algorithms running prior to booking confirmation.',
      'Created recurring event expansion package computing dates dynamically for queries.',
    ],
    architectureOverview:
      'APEX Calendar region queries SQL view with start/end timestamps. Client-side interactions emit AJAX calls updating underlying Oracle tables in real time without full page refreshes.',
    deploymentType: 'Enterprise Internal Portal',
    featured: false,
    accentColor: '#9B6DFF',
    relatedProjectIds: ['ai-leave-management-system', 'visitor-management-system', 'garage-sale-management-system'],
  },
];
