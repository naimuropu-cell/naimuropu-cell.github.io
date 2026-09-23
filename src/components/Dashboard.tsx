import {
  FaGithub,
  FaDownload,
  FaLinkedin,
  FaClipboardList,
  FaBug,
  FaVial,
  FaLaptopCode,
  FaArrowRight,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-scroll";
import profile from "../data/profile";

export default function Dashboard() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 pt-28 pb-16 overflow-hidden">
      {/* Ambient background glow accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 left-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-400/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 right-10 h-72 w-72 rounded-full bg-indigo-400/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-10 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl"
      />

      <div className="relative rounded-3xl border border-slate-200/90 bg-white/95 p-8 sm:p-10 lg:p-14 shadow-xl shadow-slate-200/50 backdrop-blur-md">
        {/* Top Gradient Stripe */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 rounded-t-3xl" />

        {/* Top Badges Row */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200/70 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-emerald-800 shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for QA & Testing Roles
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100/90 border border-slate-200 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-600">
            <FaMapMarkerAlt className="text-rose-500 text-xs" />
            {profile.location}
          </div>
        </div>

        {/* Main Heading & Identity */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {profile.name}
        </h1>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent mt-3">
          {profile.title}
        </h2>

        {/* Tagline / Subtitle */}
        <p className="mt-3 text-sm sm:text-base font-semibold text-slate-700 max-w-3xl">
          {profile.tagline}
        </p>

        {/* Objective Paragraph */}
        <p className="text-slate-600 mt-4 max-w-3xl text-base sm:text-lg leading-relaxed">
          {profile.objective}
        </p>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center gap-3.5 mt-8">
          <a
            href={profile.resume}
            download
            target="_blank"
            rel="noreferrer"
            aria-label="Download Resume"
            className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3.5 text-sm sm:text-base font-semibold shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 transition-all transform hover:-translate-y-0.5"
          >
            <FaDownload className="text-sm transition-transform group-hover:translate-y-0.5" />
            Download Resume
          </a>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white px-5 py-3.5 text-sm sm:text-base font-semibold shadow-xs hover:shadow transition-all cursor-pointer transform hover:-translate-y-0.5"
          >
            View QA Projects
            <FaArrowRight className="text-xs" />
          </Link>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 hover:border-slate-800 hover:text-slate-900 text-slate-700 px-5 py-3.5 text-sm sm:text-base font-semibold bg-white hover:bg-slate-50 transition shadow-2xs hover:shadow-xs"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 hover:border-blue-600 hover:text-blue-600 text-slate-700 px-5 py-3.5 text-sm sm:text-base font-semibold bg-white hover:bg-blue-50/50 transition shadow-2xs hover:shadow-xs"
          >
            <FaLinkedin className="text-lg text-blue-600" />
            LinkedIn
          </a>
        </div>

        {/* 4 Interactive Stat Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 pt-8 border-t border-slate-200/80">
          {/* Card 1: QA Projects */}
          <div className="group rounded-2xl bg-gradient-to-br from-blue-50/60 to-white border border-blue-100/80 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-300">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-2.5 py-1 rounded-md">
                Verified
              </span>
              <div className="p-2.5 rounded-xl bg-blue-100/80 text-blue-600 text-base group-hover:scale-110 transition-transform">
                <FaVial />
              </div>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {profile.stats.qaProjects}
            </h3>
            <p className="mt-1 text-sm font-semibold text-slate-600">
              QA Projects
            </p>
          </div>

          {/* Card 2: Test Cases */}
          <div className="group rounded-2xl bg-gradient-to-br from-indigo-50/60 to-white border border-indigo-100/80 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-indigo-300">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100/70 px-2.5 py-1 rounded-md">
                Manual & Auto
              </span>
              <div className="p-2.5 rounded-xl bg-indigo-100/80 text-indigo-600 text-base group-hover:scale-110 transition-transform">
                <FaClipboardList />
              </div>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {profile.stats.testCases}
            </h3>
            <p className="mt-1 text-sm font-semibold text-slate-600">
              Test Cases Executed
            </p>
          </div>

          {/* Card 3: Bug Reports */}
          <div className="group rounded-2xl bg-gradient-to-br from-rose-50/60 to-white border border-rose-100/80 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-rose-300">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-100/70 px-2.5 py-1 rounded-md">
                Logged & Tracked
              </span>
              <div className="p-2.5 rounded-xl bg-rose-100/80 text-rose-600 text-base group-hover:scale-110 transition-transform">
                <FaBug />
              </div>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {profile.stats.bugReports}
            </h3>
            <p className="mt-1 text-sm font-semibold text-slate-600">
              Defects Reported
            </p>
          </div>

          {/* Card 4: Web Applications */}
          <div className="group rounded-2xl bg-gradient-to-br from-cyan-50/60 to-white border border-cyan-100/80 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-cyan-300">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100/70 px-2.5 py-1 rounded-md">
                Full-Stack
              </span>
              <div className="p-2.5 rounded-xl bg-cyan-100/80 text-cyan-700 text-base group-hover:scale-110 transition-transform">
                <FaLaptopCode />
              </div>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {profile.stats.developmentProjects}
            </h3>
            <p className="mt-1 text-sm font-semibold text-slate-600">
              Web Applications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}