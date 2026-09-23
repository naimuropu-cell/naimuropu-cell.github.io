import { motion } from "framer-motion";
import { FaGithub, FaCheckCircle, FaLayerGroup } from "react-icons/fa";

type Props = {
  title: string;
  category?: string;
  description: string;
  highlights?: string[];
  stack: string[];
  status: string;
  github: string;
};

export default function DevProjectCard({
  title,
  category,
  description,
  highlights = [],
  stack,
  status,
  github,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:border-slate-300"
    >
      {/* Top Accent Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity" />

      {/* Main Content Area */}
      <div>
        {/* Category & Status Bar */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100/80 px-3 py-1 text-xs font-semibold text-blue-700">
            <FaLayerGroup className="text-[10px]" />
            {category || "Software Engineering"}
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
          {description}
        </p>

        {/* Highlights (if provided) */}
        {highlights.length > 0 && (
          <div className="mt-5 pt-4 border-t border-slate-100">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Key Capabilities
            </p>
            <div className="grid grid-cols-1 gap-1.5">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-medium text-slate-700"
                >
                  <FaCheckCircle className="text-[11px] text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mt-5">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
            Technologies & Tools
          </p>
          <div className="flex flex-wrap gap-1.5">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-lg bg-slate-100/90 border border-slate-200/60 px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-200/70 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / GitHub Link */}
      <div className="mt-7 pt-5 border-t border-slate-100 flex items-center justify-between">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${title} on GitHub`}
          className="inline-flex items-center gap-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white px-5 py-2.5 text-sm font-semibold transition-all duration-200 shadow-2xs hover:shadow"
        >
          <FaGithub className="text-base" />
          View Repository
        </a>

        <span className="text-xs font-medium text-slate-400 hidden sm:inline-block">
          Open Source
        </span>
      </div>
    </motion.div>
  );
}