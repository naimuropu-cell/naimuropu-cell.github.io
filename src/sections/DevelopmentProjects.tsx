import DevProjectCard from "../components/DevProjectCard";
import SectionTitle from "../components/SectionTitle";
import { devProjects } from "../data/devProjects";

export default function DevelopmentProjects() {
  return (
    <section id="development-projects" className="py-20">
      <SectionTitle
        tag="Engineering Portfolio"
        title="Web Applications & Systems"
        description="Software development projects showcasing frontend and full-stack capabilities, system design, and clean code principles."
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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