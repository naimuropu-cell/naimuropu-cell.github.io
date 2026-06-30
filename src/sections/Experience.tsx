import { FaBriefcase } from "react-icons/fa";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24">

      <div className="mb-14">

        <p className="font-semibold uppercase tracking-widest text-blue-600">
          Experience
        </p>

        <h2 className="mt-3 text-4xl font-bold text-slate-900">
          Professional Experience
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          My professional journey in Software Development, Software Quality
          Assurance, and Data Management.
        </p>

      </div>

      <div className="space-y-8">

        {experiences.map((job) => (

          <div
            key={job.id}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition"
          >

            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">

              <div>

                <div className="flex items-center gap-3">

                  <FaBriefcase className="text-blue-600 text-xl" />

                  <h3 className="text-2xl font-bold text-slate-900">
                    {job.position}
                  </h3>

                </div>

                <h4 className="mt-2 text-lg font-semibold text-blue-600">
                  {job.company}
                </h4>

                <p className="mt-5 leading-8 text-slate-600">
                  {job.description}
                </p>

              </div>

              <div className="md:text-right">

                <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                  {job.type}
                </span>

                <p className="mt-4 font-medium text-slate-500">
                  {job.duration}
                </p>

              </div>

            </div>

            <div className="mt-8 flex flex-wrap gap-3">

              {job.skills.map((skill) => (

                <span
                  key={skill}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
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