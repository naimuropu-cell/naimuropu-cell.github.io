export interface QAFeaturedProject {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  techStack: string[];
  github: string;
}

export interface QADocuments {
  testCase: boolean;
  bugReport: boolean;
  testExecution: boolean;
  rtm: boolean;
  screenshots: boolean;
  mindMap: boolean;
}

export interface QAProject {
  id: number;
  featured: boolean;
  title: string;
  category: string;
  company: string;
  website: string;
  completedDate: string;
  description: string;
  testCases: string | number;
  bugReports: string | number;
  status: "Completed" | "In Progress" | "Pending";
  tools: string[];
  documents: QADocuments;
  github: string;
}

export const featuredQAProject: QAFeaturedProject = {
  title: "PulseLoad",
  subtitle: "Web Performance Testing Platform",
  description:
    "A modern web-based Software Quality Assurance platform built to perform Load Testing, Stress Testing, Spike Testing and API Testing with real-time monitoring and reporting.",
  highlights: [
    "Load Testing",
    "Stress Testing",
    "Spike Testing",
    "API Testing",
    "Real-time Metrics",
    "JWT Authentication",
    "CSV Export",
    "Session History",
    "Analytics Dashboard",
    "Report Generation",
  ],
  techStack: [
    "React",
    "TypeScript",
    "FastAPI",
    "Python",
    "MongoDB",
    "JWT",
    "WebSocket",
  ],
  github: "https://github.com/naimuropu-cell/PulseLoad",
};

export const qaProjects: QAProject[] = [
  {
    id: 1,
    featured: false,
    title: "School Management System Testing",
    category: "Manual, Automation & API Testing",
    company: "YesEdu",
    website: "edu.yesbangladesh.net",
    completedDate: "September 2026",
    description:
      "Comprehensive end-to-end testing of a School Management System covering manual testing, Selenium and Playwright automation testing, API testing, and SQL database validation across core modules and user workflows.",
    testCases: "2000+",
    bugReports: "100+",
    status: "Completed",
    tools: [
      "Manual Testing",
      "Selenium WebDriver",
      "Playwright",
      "Automation Testing",
      "API Testing",
      "Postman",
      "SQL",
      "Database Testing",
      "Test Case Design",
      "Bug Reporting",
      "Regression Testing",
      "Test Execution",
      "GitHub",
    ],
    documents: {
      testCase: true,
      bugReport: true,
      testExecution: true,
      rtm: true,
      screenshots: true,
      mindMap: false,
    },
    github: "https://github.com/naimuropu-cell/School-Management-System-QA",
  },
  {
    id: 2,
    featured: false,
    title: "SauceDemo Manual Testing",
    category: "Manual Testing",
    company: "SauceDemo",
    website: "https://www.saucedemo.com",
    completedDate: "June 2026",
    description:
      "End-to-end manual testing covering Login, Products, Cart, Checkout and Order Flow.",
    testCases: 25,
    bugReports: 3,
    status: "Completed",
    tools: [
      "Manual Testing",
      "Excel",
      "Markdown",
      "GitHub",
      "Test Case",
      "Bug Report",
      "RTM",
    ],
    documents: {
      testCase: true,
      bugReport: true,
      testExecution: true,
      rtm: true,
      screenshots: true,
      mindMap: false,
    },
    github: "https://github.com/naimuropu-cell/saucedemo-manual-testing",
  },
  {
    id: 3,
    featured: false,
    title: "DemoQA Manual Testing",
    category: "Manual Testing",
    company: "DemoQA",
    website: "https://demoqa.com",
    completedDate: "June 2026",
    description:
      "Functional testing of DemoQA Elements module including Text Box, Check Box, Radio Button, Web Tables and Buttons.",
    testCases: 24,
    bugReports: 2,
    status: "Completed",
    tools: [
      "Manual Testing",
      "Excel",
      "Markdown",
      "GitHub",
      "Test Execution",
      "RTM",
    ],
    documents: {
      testCase: true,
      bugReport: true,
      testExecution: true,
      rtm: true,
      screenshots: true,
      mindMap: false,
    },
    github: "https://github.com/naimuropu-cell/demoqa-manual-testing",
  },
  {
    id: 4,
    featured: true,
    title: "E-commerce Website Manual Testing",
    category: "Manual Testing",
    company: "E-commerce Demo Application",
    website: "https://automationexercise.com/",
    completedDate: "June 2026",
    description:
      "Comprehensive manual testing of an e-commerce website including functional testing, UI testing, user flow validation, product management, cart operations, checkout process, and bug reporting.",
    testCases: 35,
    bugReports: 5,
    status: "Completed",
    tools: [
      "Manual Testing",
      "Excel",
      "Markdown",
      "GitHub",
      "Test Case Design",
      "Bug Reporting",
      "RTM",
      "Test Execution",
    ],
    documents: {
      testCase: true,
      bugReport: true,
      testExecution: true,
      rtm: true,
      screenshots: true,
      mindMap: false,
    },
    github: "https://github.com/naimuropu-cell/ecommerce-manual-testing-project",
  },
];