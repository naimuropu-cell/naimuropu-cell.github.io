import profile from "../data/profile";
import SectionTitle from "../components/SectionTitle";
import {
  FaUserCheck,
  FaBug,
  FaCode,
  FaChartLine,
} from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20">
      <SectionTitle
        tag="About Me"
        title="Building Quality Software Through Testing"
      />

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed">
          <p>{profile.objective}</p>

          <p>
            I enjoy identifying software defects, writing comprehensive test cases,
            executing structured test plans, reporting detailed bugs, and ensuring
            applications meet business requirements before release.
          </p>

          <p>
            Alongside Software Quality Assurance, I have frontend development
            experience using React, TypeScript, and modern web technologies,
            enabling me to bridge the gap between QA and engineering teams.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-500 text-2xl mb-4">
              <FaBug />
            </div>
            <h3 className="font-bold text-lg text-slate-900">
              Bug & Defect Reporting
            </h3>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              Clear, reproducible defect documentation with severity and expected vs actual results.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 text-2xl mb-4">
              <FaUserCheck />
            </div>
            <h3 className="font-bold text-lg text-slate-900">
              Manual & Automation
            </h3>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              Functional, exploratory, Selenium and Playwright web test automation.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 text-2xl mb-4">
              <FaChartLine />
            </div>
            <h3 className="font-bold text-lg text-slate-900">
              Performance Testing
            </h3>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              Load, Stress, and Spike testing with response metrics and pulse diagnostics.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 text-2xl mb-4">
              <FaCode />
            </div>
            <h3 className="font-bold text-lg text-slate-900">
              Frontend Development
            </h3>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              React, TypeScript, and modern UI development with attention to user flow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}