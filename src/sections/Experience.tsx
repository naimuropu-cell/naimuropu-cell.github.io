import { FaBriefcase } from "react-icons/fa";
import { experiences } from "../data/experience";
import SectionTitle from "../components/SectionTitle";

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <SectionTitle
        tag="Career Timeline"
        title="Professional Experience"
        description="My professional background in Software Development, Software Quality Assurance, and Data Management."
      />

      <div className="space-y-6">
        {experiences.map((job) => (
          <div
            key={job.id}
            className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 text-lg">
                    <FaBriefcase />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {job.position}
                  </h3>
                </div>

                <h4 className="mt-2 text-base font-semibold text-blue-600">
                  {job.company}
                </h4>

                <p className="mt-4 leading-relaxed text-slate-600 text-sm sm:text-base">
                  {job.description}
                </p>
              </div>

              <div className="md:text-right shrink-0">
                <span className="inline-block rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1 text-xs font-semibold text-blue-700">
                  {job.type}
                </span>

                <p className="mt-2 text-xs font-medium text-slate-500">
                  {job.duration}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-slate-50 border border-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}