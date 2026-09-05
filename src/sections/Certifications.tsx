import { FaCertificate, FaAward } from "react-icons/fa";
import { certifications } from "../data/certifications";
import SectionTitle from "../components/SectionTitle";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <SectionTitle
        tag="Credentials"
        title="Certifications & Training"
        description="Specialized training, coursework, and credentials in Software Quality Assurance and Web Technologies."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-lg transition duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 text-xl">
                    <FaAward />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-medium text-blue-600 mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600 whitespace-nowrap">
                  {cert.issueDate}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-slate-50 border border-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5 text-emerald-600">
                <FaCertificate /> Verified Knowledge
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
