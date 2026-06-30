import DevProjectCard from "../components/DevProjectCard";
import { devProjects } from "../data/devProjects";

export default function DevelopmentProjects() {
  return (
    <section id="development-projects" className="py-24">
      <div className="mb-12">
        <p className="text-blue-600 font-semibold uppercase tracking-widest">
          Development Projects
        </p>

        <h2 className="mt-3 text-4xl font-bold text-slate-900">
          Web Applications
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Projects demonstrating my frontend and backend development experience
          alongside Software Quality Assurance.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {devProjects.map((project) => (
          <DevProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            stack={project.stack}
            status={project.status}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
}