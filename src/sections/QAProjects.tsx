import ProjectCard from "../components/ProjectCard";
import { qaProjects } from "../data/projects";

export default function QAProjects() {
  return (
    <section id="projects" className="py-24">

      <div className="mb-12">

        <h2 className="text-4xl font-bold">
          QA Projects
        </h2>

        <p className="text-slate-500 mt-3">
          Manual testing projects demonstrating structured QA documentation,
          test execution, and defect reporting.
        </p>

      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        {qaProjects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
          />
        ))}

      </div>

    </section>
  );
}