import {
    FaGithub,
    FaBug,
    FaCheckCircle,
    FaClipboardList,
    FaArrowRight,
  } from "react-icons/fa";
  
  type ProjectProps = {
    title: string;
    description: string;
    testCases: number;
    bugReports: number;
    status: string;
    tools?: string[];
    github: string;
  };
  
  export default function ProjectCard({
    title,
    description,
    testCases,
    bugReports,
    status,
    tools = [],
    github,
  }: ProjectProps) {
    return (
      <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
  
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-6 text-white">
  
          <h3 className="text-2xl font-bold">
            {title}
          </h3>
  
          <p className="mt-3 text-blue-100 leading-7">
            {description}
          </p>
  
        </div>
  
        {/* Stats */}
        <div className="grid grid-cols-3 border-b">
  
          <div className="p-5 text-center">
  
            <FaClipboardList className="mx-auto text-blue-600 text-xl mb-2" />
  
            <h4 className="text-3xl font-bold">
              {testCases}
            </h4>
  
            <p className="text-sm text-slate-500">
              Test Cases
            </p>
  
          </div>
  
          <div className="p-5 text-center">
  
            <FaBug className="mx-auto text-red-500 text-xl mb-2" />
  
            <h4 className="text-3xl font-bold">
              {bugReports}
            </h4>
  
            <p className="text-sm text-slate-500">
              Bug Reports
            </p>
  
          </div>
  
          <div className="p-5 text-center">
  
            <FaCheckCircle className="mx-auto text-green-600 text-xl mb-2" />
  
            <h4 className="text-lg font-bold">
              {status}
            </h4>
  
            <p className="text-sm text-slate-500">
              Status
            </p>
  
          </div>
  
        </div>
  
        {/* Skills */}
        <div className="p-6">
  
          <h4 className="font-semibold mb-4 text-slate-800">
            Documentation
          </h4>
  
          <div className="flex flex-wrap gap-2">
  
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
              >
                {tool}
              </span>
            ))}
  
          </div>
  
          {/* Buttons */}
  
          <div className="mt-8 flex gap-4">
  
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white transition hover:bg-black"
            >
              <FaGithub />
  
              GitHub
            </a>
  
            <button
              className="flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 hover:border-blue-600 hover:text-blue-600 transition"
            >
              Details
  
              <FaArrowRight />
            </button>
  
          </div>
  
        </div>
  
      </div>
    );
  }