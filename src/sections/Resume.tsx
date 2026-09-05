import { FaDownload, FaFilePdf, FaEye } from "react-icons/fa";
import profile from "../data/profile";
import SectionTitle from "../components/SectionTitle";

export default function Resume() {
  return (
    <section id="resume" className="py-20">
      <SectionTitle
        center
        tag="Curriculum Vitae"
        title="Download My Resume"
        description="Review my detailed qualifications, QA testing achievements, technical skills, and educational background in PDF format."
      />

      <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
        <a
          href={profile.resume}
          download
          target="_blank"
          rel="noreferrer"
          aria-label="Download Resume PDF"
          className="inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 text-base sm:text-lg font-semibold text-white transition hover:bg-blue-700 shadow-sm hover:shadow"
        >
          <FaFilePdf className="text-xl" />
          Download Resume (PDF)
          <FaDownload className="text-sm ml-1" />
        </a>

        <a
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
          aria-label="Preview Resume in browser"
          className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-7 py-4 text-base sm:text-lg font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
        >
          <FaEye />
          Preview in Browser
        </a>
      </div>
    </section>
  );
}