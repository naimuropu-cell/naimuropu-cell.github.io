import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import { qaProjects } from "../data/projects";

export default function QAProjects() {
  return (
    <section id="projects" className="py-20">
      <SectionTitle
        tag="QA Portfolio"
        title="Quality Assurance Projects"
        description="Structured manual and automated testing projects demonstrating end-to-end test execution, test matrices, defect logging, and RTM documentation."
      />

      <div className="grid lg:grid-cols-2 gap-8">
        {qaProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}