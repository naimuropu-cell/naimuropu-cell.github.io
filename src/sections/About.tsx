import profile from "../data/profile";
import {
  FaUserCheck,
  FaBug,
  FaCode,
  FaChartLine,
} from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-24">

      <div className="mb-12">

        <p className="text-blue-600 font-semibold uppercase tracking-wider">
          About Me
        </p>

        <h2 className="mt-3 text-4xl font-bold text-slate-900">
          Building Quality Software Through Testing
        </h2>

      </div>

      <div className="grid lg:grid-cols-2 gap-12">

        <div>

          <p className="text-lg leading-8 text-slate-600">
            {profile.objective}
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            I enjoy identifying software defects, writing clear test cases,
            executing structured test plans, reporting bugs, and ensuring
            applications meet business requirements before release.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Alongside Software Quality Assurance, I have frontend development
            experience using React, TypeScript, and modern web technologies,
            enabling me to collaborate effectively with development teams.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-6">

          <div className="rounded-2xl bg-white p-6 shadow-sm border">
            <FaBug className="text-3xl text-red-500 mb-4" />
            <h3 className="font-bold text-xl">
              Bug Reporting
            </h3>
            <p className="mt-3 text-slate-500">
              Clear and structured defect documentation.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm border">
            <FaUserCheck className="text-3xl text-green-600 mb-4" />
            <h3 className="font-bold text-xl">
              Manual Testing
            </h3>
            <p className="mt-3 text-slate-500">
              Functional and exploratory software testing.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm border">
            <FaChartLine className="text-3xl text-blue-600 mb-4" />
            <h3 className="font-bold text-xl">
              Performance Testing
            </h3>
            <p className="mt-3 text-slate-500">
              Load, Stress and Spike testing using PulseLoad.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm border">
            <FaCode className="text-3xl text-purple-600 mb-4" />
            <h3 className="font-bold text-xl">
              Frontend Development
            </h3>
            <p className="mt-3 text-slate-500">
              React, TypeScript and modern UI development.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}