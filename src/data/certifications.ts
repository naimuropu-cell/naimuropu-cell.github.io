export interface Certification {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  skills: string[];
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Software Quality Assurance & Testing Engineering",
    issuer: "Professional QA Training Program",
    issueDate: "2026",
    skills: [
      "Manual Testing",
      "Test Case Design",
      "Bug Reporting",
      "Jira",
      "STLC",
    ],
  },
  {
    id: 2,
    title: "API Testing & Automation with Postman",
    issuer: "Postman Academy / Certification",
    issueDate: "2026",
    skills: ["REST API", "Postman", "API Automation", "JSON Validation"],
  },
  {
    id: 3,
    title: "Selenium WebDriver Web Automation",
    issuer: "Software Automation Institute",
    issueDate: "2026",
    skills: ["Selenium", "Locators", "Test Automation", "Regression Testing"],
  },
  {
    id: 4,
    title: "Frontend Development with React & TypeScript",
    issuer: "Web Engineering Program",
    issueDate: "2025",
    skills: ["React", "TypeScript", "Tailwind CSS", "UI Verification"],
  },
];
