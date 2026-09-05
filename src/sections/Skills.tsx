import SkillCard from "../components/SkillCard";
import SectionTitle from "../components/SectionTitle";
import { devSkills, qaSkills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          tag="Core Competencies"
          title="Skills & Technical Toolset"
          description="Specialized QA methodologies, automation frameworks, testing tools, and web development stacks."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
              <h3 className="text-xl font-bold text-slate-900">
                Quality Assurance & Testing
              </h3>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                Primary Focus
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {qaSkills.map((skill) => (
                <SkillCard key={skill} title={skill} category="qa" />
              ))}
            </div>
          </div>

          <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
              <h3 className="text-xl font-bold text-slate-900">
                Software & Web Development
              </h3>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
                Technical Foundation
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {devSkills.map((skill) => (
                <SkillCard key={skill} title={skill} category="dev" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}