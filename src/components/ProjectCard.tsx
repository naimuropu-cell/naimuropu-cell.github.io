import { useState } from "react";
import {
  FaGithub,
  FaBug,
  FaCheckCircle,
  FaClipboardList,
  FaChevronDown,
  FaChevronUp,
  FaExternalLinkAlt,
  FaFileAlt,
} from "react-icons/fa";
import type { QADocuments } from "../data/projects";

type ProjectProps = {
  title: string;
  description: string;
  testCases: string | number;
  bugReports: string | number;
  status: string;
  tools?: string[];
  documents?: QADocuments;
  github: string;
  category?: string;
  company?: string;
};

export default function ProjectCard({
  title,
  description,
  testCases,
  bugReports,
  status,
  tools = [],
  documents,
  github,
  category,
  company,
}: ProjectProps) {
  const [expanded, setExpanded] = useState(false);

  const documentLabels: { key: keyof QADocuments; label: string }[] = [
    { key: "testCase", label: "Test Cases Designed" },
    { key: "bugReport", label: "Defect / Bug Reports" },
    { key: "testExecution", label: "Test Execution Logs" },
    { key: "rtm", label: "Requirements Traceability Matrix (RTM)" },
    { key: "screenshots", label: "Evidence & Screenshots" },
    { key: "mindMap", label: "Test Mind Map" },
  ];

  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between">
      {/* Top Section */}
      <div>
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-6 text-white">
          <div className="flex items-center justify-between gap-2 text-xs font-medium text-blue-200 mb-2">
            <span>{category || "Software Testing"}</span>
            {company && (
              <span className="bg-white/20 rounded-full px-2.5 py-0.5 text-white">
                {company}
              </span>
            )}
          </div>
          <h3 className="text-2xl font-bold leading-snug">{title}</h3>
          <p className="mt-3 text-blue-100 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 border-b border-slate-100 bg-slate-50/50">
          <div className="p-4 sm:p-5 text-center border-r border-slate-100">
            <FaClipboardList className="mx-auto text-blue-600 text-lg mb-1.5" />
            <h4 className="text-xl sm:text-2xl font-bold text-slate-800">
              {testCases}
            </h4>
            <p className="text-xs font-medium text-slate-500 mt-0.5">
              Test Cases
            </p>
          </div>

          <div className="p-4 sm:p-5 text-center border-r border-slate-100">
            <FaBug className="mx-auto text-red-500 text-lg mb-1.5" />
            <h4 className="text-xl sm:text-2xl font-bold text-slate-800">
              {bugReports}
            </h4>
            <p className="text-xs font-medium text-slate-500 mt-0.5">
              Bug Reports
            </p>
          </div>

          <div className="p-4 sm:p-5 text-center">
            <FaCheckCircle className="mx-auto text-emerald-600 text-lg mb-1.5" />
            <h4 className="text-base sm:text-lg font-bold text-slate-800 truncate">
              {status}
            </h4>
            <p className="text-xs font-medium text-slate-500 mt-0.5">Status</p>
          </div>
        </div>

        {/* Skills / Tools */}
        <div className="p-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
            Testing Scope & Tools
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Collapsible QA Deliverables Details */}
          {expanded && documents && (
            <div className="mt-5 p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
              <h5 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2.5 flex items-center gap-1.5">
                <FaFileAlt className="text-blue-600" />
                Verified QA Deliverables
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {documentLabels.map(({ key, label }) => {
                  const available = !!documents[key];
                  return (
                    <div
                      key={key}
                      className={`flex items-center gap-1.5 ${
                        available
                          ? "text-slate-700 font-medium"
                          : "text-slate-400 line-through"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          available ? "bg-emerald-500" : "bg-slate-300"
                        }`}
                      />
                      {label}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="px-6 pb-6 pt-2 flex flex-wrap gap-3 items-center">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${title} repository`}
          className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-black"
        >
          <FaGithub />
          Repository
        </a>

        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label="Toggle project details"
          className="flex items-center gap-1.5 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 hover:border-blue-600 hover:text-blue-600 transition"
        >
          {expanded ? "Hide Details" : "QA Artifacts"}
          {expanded ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
        </button>

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open test docs for ${title}`}
          className="ml-auto text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
        >
          Documentation <FaExternalLinkAlt className="text-[10px]" />
        </a>
      </div>
    </div>
  );
}