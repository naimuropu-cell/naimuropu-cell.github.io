import { FaGraduationCap } from "react-icons/fa";
import { education } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="py-24">

      <div className="mb-14">

        <p className="font-semibold uppercase tracking-widest text-blue-600">
          Education
        </p>

        <h2 className="mt-3 text-4xl font-bold text-slate-900">
          Academic Background
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          My educational journey that built the foundation for software
          development and software quality assurance.
        </p>

      </div>

      <div className="space-y-8">

        {education.map((item) => (

          <div
            key={item.id}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition"
          >

            <div className="flex flex-col md:flex-row md:justify-between gap-6">

              <div>

                <div className="flex items-center gap-3">

                  <FaGraduationCap className="text-blue-600 text-2xl" />

                  <h3 className="text-2xl font-bold text-slate-900">
                    {item.degree}
                  </h3>

                </div>

                <h4 className="mt-3 text-lg font-semibold text-blue-600">
                  {item.institution}
                </h4>

                <p className="mt-5 leading-8 text-slate-600">
                  {item.description}
                </p>

              </div>

              <div className="md:text-right">

                <p className="font-semibold text-slate-700">
                  {item.duration}
                </p>

                <span className="mt-3 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                  {item.result}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}