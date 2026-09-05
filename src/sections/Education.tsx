import { FaGraduationCap } from "react-icons/fa";
import { education } from "../data/education";
import SectionTitle from "../components/SectionTitle";

export default function Education() {
  return (
    <section id="education" className="py-20">
      <SectionTitle
        tag="Academics"
        title="Educational Background"
        description="My academic foundation in Computer Science & Engineering, software design, and analytical problem-solving."
      />

      <div className="space-y-6">
        {education.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition"
          >
            <div className="flex flex-col md:flex-row md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 text-xl">
                    <FaGraduationCap />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {item.degree}
                  </h3>
                </div>

                <h4 className="mt-2 text-base font-semibold text-blue-600">
                  {item.institution}
                </h4>

                <p className="mt-4 leading-relaxed text-slate-600 text-sm sm:text-base">
                  {item.description}
                </p>
              </div>

              <div className="md:text-right shrink-0">
                <p className="font-semibold text-sm text-slate-700">
                  {item.duration}
                </p>

                <span className="mt-2 inline-block rounded-full bg-emerald-50 border border-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
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