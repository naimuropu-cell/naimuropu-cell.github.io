import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { featuredQAProject } from "../data/projects";

export default function FeaturedProject() {
  return (
    <section id="featured-project" className="py-16">
      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-8 sm:p-12 lg:p-14 shadow-xl">
        <span className="inline-flex rounded-full bg-blue-600 px-4 py-1.5 text-sm font-semibold tracking-wide">
          ⭐ Featured QA Project
        </span>

        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          {featuredQAProject.title}
        </h2>

        <p className="mt-2 text-lg sm:text-xl font-medium text-blue-400">
          {featuredQAProject.subtitle}
        </p>

        <p className="mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-slate-300">
          {featuredQAProject.description}
        </p>

        <div className="mt-8">
          <h3 className="mb-4 text-lg font-semibold text-slate-200">
            Key QA & Technical Capabilities
          </h3>

          <div className="flex flex-wrap gap-2.5">
            {featuredQAProject.highlights.map((item) => (
              <span
                key={item}
                className="rounded-full bg-white/10 px-3.5 py-1.5 text-sm text-slate-200 font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-lg font-semibold text-slate-200">
            Tech Stack
          </h3>

          <div className="flex flex-wrap gap-2.5">
            {featuredQAProject.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/20 px-3.5 py-1.5 text-sm font-medium text-slate-200 bg-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={featuredQAProject.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${featuredQAProject.title} on GitHub`}
            className="flex items-center gap-2.5 rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700 transition shadow-sm"
          >
            <FaGithub className="text-lg" />
            View on GitHub
          </a>

          <a
            href={featuredQAProject.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`View documentation for ${featuredQAProject.title}`}
            className="flex items-center gap-2.5 rounded-xl border border-white/30 px-6 py-3 font-semibold hover:bg-white hover:text-slate-900 transition"
          >
            Project Documentation
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>
      </div>
    </section>
  );
}