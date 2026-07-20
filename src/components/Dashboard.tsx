import { FaGithub, FaDownload } from "react-icons/fa";

export default function Dashboard() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-10">

        <p className="text-blue-600 font-semibold mb-3">
          Welcome 👋
        </p>

        <h1 className="text-5xl font-bold text-slate-900">
          Md. Naimur Rahman Apu
        </h1>

        <h2 className="text-2xl text-slate-600 mt-3">
          Junior Software QA Engineer
        </h2>

        <p className="text-slate-500 mt-6 max-w-2xl leading-8">
          Passionate about delivering high-quality software through
          Manual testing, Automation Testing, API testing, bug reporting and structured
          QA documentation. I also have frontend development experience
          using React and TypeScript.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">

        <a
  href="/resume.pdf"
  download
  target="_blank"
  rel="noreferrer"
  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition"
>
  <FaDownload />
  Download Resume
</a>

          <a
            href="https://github.com/naimuropu-cell"
            target="_blank"
            className="border border-slate-300 hover:border-blue-600 hover:text-blue-600 px-6 py-3 rounded-xl flex items-center gap-2 transition"
          >
            <FaGithub />
            GitHub
          </a>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">

          <div className="rounded-2xl bg-slate-50 p-6">
            <h3 className="text-3xl font-bold text-blue-600">10</h3>
            <p className="mt-2 text-slate-500">QA Projects</p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6">
            <h3 className="text-3xl font-bold text-blue-600">20+</h3>
            <p className="mt-2 text-slate-500">Development Projects</p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6">
            <h3 className="text-3xl font-bold text-blue-600">15+</h3>
            <p className="mt-2 text-slate-500">Skills</p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6">
            <h3 className="text-3xl font-bold text-blue-600">3</h3>
            <p className="mt-2 text-slate-500">Experience</p>
          </div>

        </div>

      </div>

    </section>
  );
}