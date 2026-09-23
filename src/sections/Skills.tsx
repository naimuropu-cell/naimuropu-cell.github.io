import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkillCard from "../components/SkillCard";
import SectionTitle from "../components/SectionTitle";
import { skillsData, type SkillItem } from "../data/skills";

type SkillCategory = "all" | "automation" | "manual" | "dev" | "tools";

interface TabConfig {
  key: SkillCategory;
  label: string;
  count: number;
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillCategory>("all");

  const tabs: TabConfig[] = [
    { key: "all", label: "All Skills", count: skillsData.length },
    {
      key: "automation",
      label: "QA Automation",
      count: skillsData.filter((s) => s.category === "automation").length,
    },
    {
      key: "manual",
      label: "Manual & SQA Process",
      count: skillsData.filter((s) => s.category === "manual").length,
    },
    {
      key: "dev",
      label: "Web & Full-Stack",
      count: skillsData.filter((s) => s.category === "dev").length,
    },
    {
      key: "tools",
      label: "Testing Tools & CI/CD",
      count: skillsData.filter((s) => s.category === "tools").length,
    },
  ];

  const filteredSkills: SkillItem[] =
    activeTab === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          tag="Core Competencies"
          title="Skills & Technical Toolset"
          description="Interactive breakdown of specialized QA methodologies, test automation frameworks, full-stack technologies, and QA tools."
        />

        {/* Tab Filters */}
        <div className="mb-10 flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/80 w-fit">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative cursor-pointer rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 rounded-xl bg-blue-600 shadow-md shadow-blue-500/25"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span>{tab.label}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      isActive
                        ? "bg-white/25 text-white"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {tab.count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <SkillCard
                key={skill.id}
                name={skill.name}
                category={skill.category}
                categoryLabel={skill.categoryLabel}
                proficiency={skill.proficiency}
                iconType={skill.iconType}
                accentBg={skill.accentBg}
                accentText={skill.accentText}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Summary Footer Badges */}
        <div className="mt-10 pt-8 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-600">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 border border-blue-100 px-3 py-1.5 text-blue-700">
              🎯 12+ SQA Methodologies
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 border border-emerald-100 px-3 py-1.5 text-emerald-700">
              🤖 Selenium & Playwright Automation
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-amber-50 border border-amber-100 px-3 py-1.5 text-amber-700">
              ⚡ Postman API & JMeter Performance
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-50 border border-cyan-100 px-3 py-1.5 text-cyan-700">
              💻 Modern React & TypeScript Stack
            </span>
          </div>

          <span className="text-slate-400">
            Showing {filteredSkills.length} of {skillsData.length} competencies
          </span>
        </div>
      </div>
    </section>
  );
}