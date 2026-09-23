import {
  FaGithub,
  FaExternalLinkAlt,
  FaBolt,
  FaUsers,
  FaClock,
  FaCheckCircle,
  FaChartArea,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { featuredQAProject } from "../data/projects";

export default function FeaturedProject() {
  const telemetryStats = [
    {
      label: "Virtual Users (VU)",
      value: "5,000+",
      sub: "Concurrent Load",
      icon: <FaUsers className="text-cyan-400 text-sm" />,
      border: "border-cyan-500/30",
      bg: "bg-cyan-950/30",
    },
    {
      label: "Response Latency",
      value: "118ms",
      sub: "p95: 182ms Avg",
      icon: <FaClock className="text-emerald-400 text-sm" />,
      border: "border-emerald-500/30",
      bg: "bg-emerald-950/30",
    },
    {
      label: "Test Pass Rate",
      value: "99.94%",
      sub: "0 Fatal Errors",
      icon: <FaCheckCircle className="text-blue-400 text-sm" />,
      border: "border-blue-500/30",
      bg: "bg-blue-950/30",
    },
    {
      label: "Peak Throughput",
      value: "2,450",
      sub: "Requests / Sec",
      icon: <FaBolt className="text-amber-400 text-sm" />,
      border: "border-amber-500/30",
      bg: "bg-amber-950/30",
    },
  ];

  const testPhases = [
    { name: "Ramp-Up (0 → 2.5k VU)", status: "100%", width: "w-full", color: "bg-emerald-500" },
    { name: "Sustained Peak Load", status: "Active 88%", width: "w-[88%]", color: "bg-cyan-500" },
    { name: "Spike Tolerance Burst", status: "100%", width: "w-full", color: "bg-blue-500" },
  ];

  return (
    <section id="featured-project" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-8 sm:p-10 lg:p-12 shadow-2xl border border-slate-800"
      >
        {/* Ambient background glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-blue-600/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-cyan-600/10 blur-3xl"
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Project Info */}
          <div className="lg:col-span-7">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3.5 py-1 text-xs font-semibold tracking-wide shadow-sm">
                ⭐ Featured QA Platform
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 px-3 py-1 text-xs font-medium text-cyan-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Performance Testing Telemetry
              </span>
            </div>

            {/* Title & Subtitle */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              {featuredQAProject.title}
            </h2>

            <p className="mt-2 text-lg sm:text-xl font-medium text-cyan-400">
              {featuredQAProject.subtitle}
            </p>

            <p className="mt-5 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              {featuredQAProject.description}
            </p>

            {/* Key Capabilities */}
            <div className="mt-6">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                Key QA & Performance Capabilities
              </h3>
              <div className="flex flex-wrap gap-2">
                {featuredQAProject.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-white/10 hover:bg-white/15 transition-colors px-3 py-1 text-xs text-slate-200 font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-6">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                Architecture & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {featuredQAProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/15 px-3 py-1 text-xs font-medium text-slate-300 bg-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={featuredQAProject.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${featuredQAProject.title} on GitHub`}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 text-sm font-semibold transition shadow-md shadow-blue-600/30"
              >
                <FaGithub className="text-base" />
                View on GitHub
              </a>

              <a
                href={featuredQAProject.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`View documentation for ${featuredQAProject.title}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/10 text-white px-5 py-3 text-sm font-semibold transition"
              >
                Architecture & SQA Docs
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          </div>

          {/* Right Column: Simulated Live Telemetry HUD */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/90 p-5 sm:p-6 backdrop-blur-md shadow-xl">
              {/* HUD Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <FaChartArea className="text-cyan-400 text-base" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Performance Telemetry (Preview)
                  </span>
                </div>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  WebSocket Powered
                </span>
              </div>

              {/* 2x2 Telemetry Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {telemetryStats.map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-xl border ${item.border} ${item.bg} p-3.5 transition-transform hover:scale-102`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-medium text-slate-400">
                        {item.label}
                      </span>
                      {item.icon}
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      {item.value}
                    </div>
                    <div className="text-[10px] font-medium text-slate-400 mt-0.5">
                      {item.sub}
                    </div>
                  </div>
                ))}
              </div>

              {/* Stress Test Load Stages */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span>Stress Test Execution Stages</span>
                  <span className="text-cyan-400">Automated Pipeline</span>
                </div>

                {testPhases.map((phase) => (
                  <div key={phase.name} className="space-y-1">
                    <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                      <span>{phase.name}</span>
                      <span className="text-slate-300 font-mono">{phase.status}</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${phase.color} ${phase.width} transition-all duration-500`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Console Footnote */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Real-time Metric Stream
                </span>
                <span className="font-mono text-cyan-400">CSV Export Ready</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}