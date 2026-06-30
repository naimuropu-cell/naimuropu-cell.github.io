import SkillCard from "../components/SkillCard";
import { devSkills, qaSkills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900">
            Skills
          </h2>

          <p className="text-slate-500 mt-3">
            My technical expertise in Software Quality Assurance and Frontend Development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-600">
              QA Skills
            </h3>

            <div className="grid gap-4">
              {qaSkills.map((skill) => (
                <SkillCard key={skill} title={skill} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-600">
              Development Skills
            </h3>

            <div className="grid gap-4">
              {devSkills.map((skill) => (
                <SkillCard key={skill} title={skill} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}