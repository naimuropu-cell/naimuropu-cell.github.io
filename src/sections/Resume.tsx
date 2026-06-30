import { FaDownload, FaFilePdf } from "react-icons/fa";

export default function Resume() {
  return (
    <section id="resume" className="py-24">

      <div className="text-center">

        <p className="font-semibold uppercase tracking-widest text-blue-600">
          Resume
        </p>

        <h2 className="mt-3 text-4xl font-bold text-slate-900">
          Download My Resume
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Download my latest resume to learn more about my education,
          experience, technical skills, QA projects and development projects.
        </p>

        <div className="mt-10">

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            <FaFilePdf />

            Download Resume

            <FaDownload />
          </a>

        </div>

      </div>

    </section>
  );
}