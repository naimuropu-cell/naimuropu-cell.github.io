import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaBug,
  FaFileAlt,
  FaSearch,
  FaTasks,
  FaProjectDiagram,
  FaUserCheck,
  FaDatabase,
  FaCodeBranch,
} from "react-icons/fa";
import {
  SeleniumIcon,
  PostmanIcon,
  JMeterIcon,
  JiraIcon,
  ReactIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  TailwindIcon,
  NodeIcon,
  PythonIcon,
  GitIcon,
} from "./TechIcons";

type SkillCardProps = {
  title?: string;
  category?: "qa" | "dev" | string;
  name?: string;
  categoryLabel?: string;
  proficiency?: string;
  iconType?: string;
  accentBg?: string;
  accentText?: string;
};

export default function SkillCard({
  title,
  category = "qa",
  name,
  categoryLabel,
  proficiency,
  iconType,
  accentBg,
}: SkillCardProps) {
  const displayName = name || title || "";

  const renderIcon = () => {
    switch (iconType) {
      case "selenium":
        return <SeleniumIcon className="text-lg text-emerald-600" />;
      case "postman":
        return <PostmanIcon className="text-lg text-amber-600" />;
      case "jmeter":
        return <JMeterIcon className="text-lg text-rose-600" />;
      case "jira":
        return <JiraIcon className="text-lg text-blue-600" />;
      case "react":
        return <ReactIcon className="text-lg text-cyan-600" />;
      case "typescript":
        return <TypeScriptIcon className="text-lg text-blue-600" />;
      case "javascript":
        return <JavaScriptIcon className="text-lg text-amber-500" />;
      case "tailwind":
        return <TailwindIcon className="text-lg text-cyan-500" />;
      case "nodejs":
        return <NodeIcon className="text-lg text-emerald-600" />;
      case "python":
        return <PythonIcon className="text-lg text-blue-500" />;
      case "database":
        return <FaDatabase className="text-lg text-indigo-600" />;
      case "git":
        return <GitIcon className="text-lg text-orange-600" />;
      case "cicd":
        return <FaCodeBranch className="text-lg text-purple-600" />;
      case "bug":
        return <FaBug className="text-lg text-rose-600" />;
      case "regression":
        return <FaSearch className="text-lg text-indigo-600" />;
      case "testcase":
        return <FaFileAlt className="text-lg text-blue-600" />;
      case "stlc":
        return <FaProjectDiagram className="text-lg text-blue-600" />;
      case "agile":
        return <FaTasks className="text-lg text-cyan-600" />;
      case "uat":
        return <FaUserCheck className="text-lg text-emerald-600" />;
      default:
        return (
          <FaCheckCircle
            className={`text-lg ${
              category === "qa" ? "text-blue-600" : "text-emerald-600"
            }`}
          />
        );
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.22 }}
      whileHover={{ y: -3, scale: 1.015, transition: { duration: 0.15 } }}
      className="group relative flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs hover:shadow-md hover:border-blue-300 transition-colors"
    >
      <div className="flex items-center gap-3 min-w-0">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
            accentBg || "bg-blue-50"
          } transition-transform group-hover:scale-110`}
        >
          {renderIcon()}
        </div>

        <div className="min-w-0">
          <h4 className="text-sm font-bold text-slate-800 tracking-tight truncate group-hover:text-blue-600 transition-colors">
            {displayName}
          </h4>
          {categoryLabel && (
            <p className="text-[11px] font-medium text-slate-500">
              {categoryLabel}
            </p>
          )}
        </div>
      </div>

      {proficiency && (
        <span className="shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
          {proficiency}
        </span>
      )}
    </motion.div>
  );
}