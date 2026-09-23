export interface DevProject {
  id: number;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  stack: string[];
  status: string;
  github: string;
}

export const devProjects: DevProject[] = [
  {
    id: 1,
    title: "GarmentERP BD",
    category: "Enterprise RMG ERP & SQA",
    description:
      "Enterprise-grade RMG manufacturing ERP and Quality Management System engineered for Bangladesh apparel factories, covering commercial orders, multi-bin warehouse inventory, production tracking, ISO AQL 2.5 QA/QC inspections, and customs compliance dispatch.",
    highlights: [
      "End-to-End Production & SCM",
      "ISO AQL 2.5 Normal Sampling",
      "Customs Gate Pass & Export Invoice",
      "96 SQA Automated Integration Tests",
    ],
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    status: "Completed",
    github: "https://github.com/naimuropu-cell/GarmentERP-BD",
  },
  {
    id: 2,
    title: "BAC Accreditation Management System",
    category: "Institutional Quality Platform",
    description:
      "A centralized accreditation evidence management system designed to streamline institutional quality evaluation and document compliance.",
    highlights: [
      "Evidence Management Workflow",
      "Role-Based Access Control",
      "Accreditation Compliance Tracking",
    ],
    stack: ["React", "Node.js", "MongoDB", "Express"],
    status: "Completed",
    github: "https://github.com/naimuropu-cell/BAC-Accreditation-Management-System",
  },
  {
    id: 3,
    title: "HireConnect",
    category: "AI Recruitment & ATS Platform",
    description:
      "An AI-powered recruitment and applicant tracking platform built to streamline hiring pipelines, candidate screening, and talent assessments.",
    highlights: [
      "Applicant Tracking Life Cycle",
      "Automated Candidate Evaluation",
      "Responsive Recruitment Portal",
    ],
    stack: ["Django", "Python", "MySQL", "Bootstrap"],
    status: "Completed",
    github: "https://github.com/naimuropu-cell/HireConnect",
  },
  {
    id: 4,
    title: "Restaurant POS System",
    category: "Hospitality & Retail POS",
    description:
      "Modern point-of-sale and restaurant management system featuring live table ordering, inventory control, and cashier checkout workflows.",
    highlights: [
      "Real-time Table & Order State",
      "Inventory & Menu Catalog",
      "Instant Receipt Generation",
    ],
    stack: ["Vue 3", "Quasar", "Pinia", "JavaScript"],
    status: "Completed",
    github: "https://github.com/naimuropu-cell/Restaurent-POS-System-Vue-app",
  },
  {
    id: 5,
    title: "BugTrack Pro",
    category: "QA Test & Defect Management",
    description:
      "A centralized QA test management platform to manage test cases, track bugs, organize testing activities, and monitor software quality assurance workflows.",
    highlights: [
      "Test Case Design & Execution",
      "Defect Severity Life Cycle",
      "QA Metrics Dashboard",
    ],
    stack: ["React", "FastAPI", "Python", "MongoDB", "Tailwind CSS"],
    status: "Completed",
    github: "https://github.com/naimuropu-cell/BugTrack-Pro-QA-Test-Management-Platform",
  },
];