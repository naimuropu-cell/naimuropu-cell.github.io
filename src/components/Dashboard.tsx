import { FaGithub, FaDownload, FaLinkedin } from "react-icons/fa";
import profile from "../data/profile";

export default function Dashboard() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-28 pb-16">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          Available for QA Engineering Roles
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
          {profile.name}
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mt-3">
          {profile.title}
        </h2>

        <p className="text-slate-600 mt-5 max-w-3xl text-base sm:text-lg leading-relaxed">
          {profile.objective}
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-8">
          <a
            href={profile.resume}
            download
            target="_blank"
            rel="noreferrer"
            aria-label="Download Resume"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-xl font-medium flex items-center gap-2.5 transition shadow-sm hover:shadow"
          >
            <FaDownload className="text-sm" />
            Download Resume
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="border border-slate-300 hover:border-slate-800 hover:text-slate-900 text-slate-700 px-6 py-3.5 rounded-xl font-medium flex items-center gap-2.5 transition"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="border border-slate-300 hover:border-blue-600 hover:text-blue-600 text-slate-700 px-6 py-3.5 rounded-xl font-medium flex items-center gap-2.5 transition"
          >
            <FaLinkedin className="text-lg text-blue-600" />
            LinkedIn
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 pt-8 border-t border-slate-100">
          <div className="rounded-2xl bg-slate-50 border border-slate-100 p-5 sm:p-6 transition hover:border-blue-200">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-600">
              {profile.stats.qaProjects}
            </h3>
            <p className="mt-1 text-sm sm:text-base font-medium text-slate-600">
              QA Projects
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 border border-slate-100 p-5 sm:p-6 transition hover:border-blue-200">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-600">
              {profile.stats.testCases}
            </h3>
            <p className="mt-1 text-sm sm:text-base font-medium text-slate-600">
              Test Cases Executed
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 border border-slate-100 p-5 sm:p-6 transition hover:border-blue-200">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-600">
              {profile.stats.bugReports}
            </h3>
            <p className="mt-1 text-sm sm:text-base font-medium text-slate-600">
              Bug Reports Logged
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 border border-slate-100 p-5 sm:p-6 transition hover:border-blue-200">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-600">
              {profile.stats.developmentProjects}
            </h3>
            <p className="mt-1 text-sm sm:text-base font-medium text-slate-600">
              Web Applications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}