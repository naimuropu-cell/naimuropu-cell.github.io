import { FaGithub, FaArrowRight } from "react-icons/fa";
import { featuredQAProject } from "../data/projects";

export default function FeaturedProject() {
  return (
    <section className="py-24">
      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-10 lg:p-14 shadow-xl">

        <span className="inline-flex rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold">
          ⭐ Featured QA Project
        </span>

        <h2 className="mt-6 text-5xl font-bold">
          {featuredQAProject.title}
        </h2>

        <p className="mt-2 text-xl text-slate-300">
          {featuredQAProject.subtitle}
        </p>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
          {featuredQAProject.description}
        </p>

        <div className="mt-10">
          <h3 className="mb-5 text-xl font-semibold">
            Key Features
          </h3>

          <div className="flex flex-wrap gap-3">
            {featuredQAProject.highlights.map((item) => (
              <span
                key={item}
                className="rounded-full bg-white/10 px-4 py-2 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="mb-5 text-xl font-semibold">
            Tech Stack
          </h3>

          <div className="flex flex-wrap gap-3">
            {featuredQAProject.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/20 px-4 py-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-5">
          <a
            href={featuredQAProject.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700 transition"
          >
            <FaGithub />
            GitHub
          </a>

          <button className="flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 font-semibold hover:bg-white hover:text-slate-900 transition">
            View Details
            <FaArrowRight />
          </button>
        </div>

      </div>
    </section>
  );
}