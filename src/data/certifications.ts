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
    title: "Software Quality Assurance - Manual and Automation",
    issuer: "OSTAD",
    issueDate: "2026",
    skills: [
      "Manual Testing",
      "Automation Testing",
      "Selenium WebDriver",
      "Playwright",
      "API Testing",
      "Performance Testing",
      "CI/CD Pipeline",
      "Test Case Design",
      "Bug Reporting",
      "Jira",
      "STLC",
    ],
  },
  {
    id: 2,
    title: "Software Introduction & Testing Fundamentals",
    issuer: "EDGE Programming Bangladesh",
    issueDate: "2025",
    skills: [
      "Software Testing Fundamentals",
      "Manual Testing",
      "SDLC & STLC",
      "Test Case Design",
      "Defect Lifecycle",
    ],
  },
  {
    id: 3,
    title: "Postman API Testing",
    issuer: "Postman",
    issueDate: "2026",
    skills: ["Postman", "API Testing", "REST API", "HTTP Methods"],
  },
  {
    id: 4,
    title: "JMeter Performance Testing",
    issuer: "Apache JMeter",
    issueDate: "2025",
    skills: ["JMeter", "Performance Testing", "Load Testing", "Stress Testing"],
  },
];
