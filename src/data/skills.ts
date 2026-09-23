export interface SkillItem {
  id: string;
  name: string;
  category: "automation" | "manual" | "dev" | "tools";
  categoryLabel: string;
  proficiency: "Core Competency" | "Proficient" | "Advanced";
  iconType: string;
  accentBg: string;
  accentText: string;
}

export const skillsData: SkillItem[] = [
  // QA Automation
  {
    id: "selenium",
    name: "Selenium WebDriver",
    category: "automation",
    categoryLabel: "Automation",
    proficiency: "Core Competency",
    iconType: "selenium",
    accentBg: "bg-emerald-50",
    accentText: "text-emerald-600",
  },
  {
    id: "playwright",
    name: "Playwright Automation",
    category: "automation",
    categoryLabel: "Automation",
    proficiency: "Core Competency",
    iconType: "playwright",
    accentBg: "bg-emerald-50",
    accentText: "text-emerald-600",
  },
  {
    id: "api-automation",
    name: "Postman API Automation Scripts",
    category: "automation",
    categoryLabel: "Automation",
    proficiency: "Core Competency",
    iconType: "postman",
    accentBg: "bg-amber-50",
    accentText: "text-amber-600",
  },
  {
    id: "web-automation",
    name: "End-to-End Web Automation",
    category: "automation",
    categoryLabel: "Automation",
    proficiency: "Core Competency",
    iconType: "automation",
    accentBg: "bg-emerald-50",
    accentText: "text-emerald-600",
  },
  {
    id: "load-testing",
    name: "Load & Stress Performance Testing",
    category: "automation",
    categoryLabel: "Performance",
    proficiency: "Core Competency",
    iconType: "jmeter",
    accentBg: "bg-rose-50",
    accentText: "text-rose-600",
  },

  // Manual & SQA Process
  {
    id: "manual-testing",
    name: "Manual Functional Testing",
    category: "manual",
    categoryLabel: "Manual QA",
    proficiency: "Core Competency",
    iconType: "manual",
    accentBg: "bg-blue-50",
    accentText: "text-blue-600",
  },
  {
    id: "test-case-design",
    name: "Test Case Design & RTM",
    category: "manual",
    categoryLabel: "Manual QA",
    proficiency: "Core Competency",
    iconType: "testcase",
    accentBg: "bg-blue-50",
    accentText: "text-blue-600",
  },
  {
    id: "bug-reporting",
    name: "Defect Logging & Bug Reporting",
    category: "manual",
    categoryLabel: "Manual QA",
    proficiency: "Core Competency",
    iconType: "bug",
    accentBg: "bg-rose-50",
    accentText: "text-rose-600",
  },
  {
    id: "regression-testing",
    name: "Regression & Sanity Testing",
    category: "manual",
    categoryLabel: "Manual QA",
    proficiency: "Core Competency",
    iconType: "regression",
    accentBg: "bg-indigo-50",
    accentText: "text-indigo-600",
  },
  {
    id: "test-documentation",
    name: "Test Strategy & Documentation",
    category: "manual",
    categoryLabel: "Process",
    proficiency: "Core Competency",
    iconType: "testcase",
    accentBg: "bg-blue-50",
    accentText: "text-blue-600",
  },
  {
    id: "agile-scrum",
    name: "Agile & Scrum SQA Methodologies",
    category: "manual",
    categoryLabel: "Process",
    proficiency: "Core Competency",
    iconType: "agile",
    accentBg: "bg-cyan-50",
    accentText: "text-cyan-600",
  },
  {
    id: "uat",
    name: "User Acceptance Testing (UAT)",
    category: "manual",
    categoryLabel: "Manual QA",
    proficiency: "Core Competency",
    iconType: "uat",
    accentBg: "bg-emerald-50",
    accentText: "text-emerald-600",
  },

  // Software & Web Development
  {
    id: "react",
    name: "React.js",
    category: "dev",
    categoryLabel: "Frontend",
    proficiency: "Proficient",
    iconType: "react",
    accentBg: "bg-cyan-50",
    accentText: "text-cyan-600",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "dev",
    categoryLabel: "Language",
    proficiency: "Proficient",
    iconType: "typescript",
    accentBg: "bg-blue-50",
    accentText: "text-blue-600",
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "dev",
    categoryLabel: "Language",
    proficiency: "Proficient",
    iconType: "javascript",
    accentBg: "bg-amber-50",
    accentText: "text-amber-600",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS & CSS3",
    category: "dev",
    categoryLabel: "Styling",
    proficiency: "Proficient",
    iconType: "tailwind",
    accentBg: "bg-cyan-50",
    accentText: "text-cyan-600",
  },
  {
    id: "nodejs",
    name: "Node.js & Express",
    category: "dev",
    categoryLabel: "Backend",
    proficiency: "Proficient",
    iconType: "nodejs",
    accentBg: "bg-emerald-50",
    accentText: "text-emerald-600",
  },
  {
    id: "python",
    name: "Python & FastAPI",
    category: "dev",
    categoryLabel: "Backend",
    proficiency: "Proficient",
    iconType: "python",
    accentBg: "bg-blue-50",
    accentText: "text-blue-600",
  },
  {
    id: "database",
    name: "SQL & MongoDB Validation",
    category: "dev",
    categoryLabel: "Database",
    proficiency: "Proficient",
    iconType: "database",
    accentBg: "bg-indigo-50",
    accentText: "text-indigo-600",
  },

  // Testing Tools & Environments
  {
    id: "postman-tool",
    name: "Postman (REST API Client)",
    category: "tools",
    categoryLabel: "API Testing",
    proficiency: "Advanced",
    iconType: "postman",
    accentBg: "bg-amber-50",
    accentText: "text-amber-600",
  },
  {
    id: "jmeter-tool",
    name: "Apache JMeter",
    category: "tools",
    categoryLabel: "Performance",
    proficiency: "Proficient",
    iconType: "jmeter",
    accentBg: "bg-rose-50",
    accentText: "text-rose-600",
  },
  {
    id: "jira-tool",
    name: "Jira / Bug Tracking",
    category: "tools",
    categoryLabel: "Test Mgmt",
    proficiency: "Core Competency",
    iconType: "jira",
    accentBg: "bg-blue-50",
    accentText: "text-blue-600",
  },
  {
    id: "git-tool",
    name: "Git & GitHub Version Control",
    category: "tools",
    categoryLabel: "VCS",
    proficiency: "Proficient",
    iconType: "git",
    accentBg: "bg-slate-100",
    accentText: "text-slate-700",
  },
  {
    id: "cicd",
    name: "CI/CD & GitHub Actions",
    category: "tools",
    categoryLabel: "Automation CI",
    proficiency: "Proficient",
    iconType: "cicd",
    accentBg: "bg-purple-50",
    accentText: "text-purple-600",
  },
];

// Backwards compatibility
export const qaSkills = skillsData
  .filter((s) => s.category === "automation" || s.category === "manual")
  .map((s) => s.name);

export const devSkills = skillsData
  .filter((s) => s.category === "dev")
  .map((s) => s.name);