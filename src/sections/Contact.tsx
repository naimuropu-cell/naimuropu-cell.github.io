import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import profile from "../data/profile";
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <SectionTitle
        center
        tag="Get In Touch"
        title="Let's Connect & Collaborate"
        description="I'm actively seeking opportunities as a Software QA Engineer, Test Automation Engineer, or Frontend QA. Let's discuss how I can contribute to your software quality."
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="mb-6 text-xl font-bold text-slate-900">
              Direct Contact
            </h3>

            <div className="space-y-5 text-slate-700">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 hover:text-blue-600 transition group"
              >
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    Email
                  </p>
                  <p className="font-semibold text-slate-800">{profile.email}</p>
                </div>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 hover:text-blue-600 transition group"
              >
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                  <FaLinkedin className="text-lg" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    LinkedIn
                  </p>
                  <p className="font-semibold text-slate-800">
                    linkedin.com/in/naimur-rahman-apu
                  </p>
                </div>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 hover:text-slate-900 transition group"
              >
                <div className="p-3 rounded-2xl bg-slate-100 text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition">
                  <FaGithub className="text-lg" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    GitHub
                  </p>
                  <p className="font-semibold text-slate-800">
                    github.com/naimuropu-cell
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-red-50 text-red-500">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    Location
                  </p>
                  <p className="font-semibold text-slate-800">
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100">
            <a
              href={`mailto:${profile.email}?subject=Job Opportunity / QA Inquiry`}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white hover:bg-blue-700 transition shadow-sm"
            >
              <FaPaperPlane className="text-sm" />
              Send Direct Message
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="mb-6 text-xl font-bold text-slate-900">
            Roles & Opportunities Interested In
          </h3>

          <ul className="space-y-3.5 text-slate-700 text-sm font-medium">
            <li className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              Junior Software QA Engineer / QA Analyst
            </li>
            <li className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              Test Automation Engineer (Selenium / Playwright)
            </li>
            <li className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              API & Integration Testing (Postman / REST)
            </li>
            <li className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              Performance & Load Testing (PulseLoad)
            </li>
            <li className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              Frontend & Web Development Collaborations
            </li>
          </ul>

          <div className="mt-8 p-5 rounded-2xl bg-blue-50 border border-blue-100 text-xs text-blue-900 leading-relaxed">
            💡 <strong>Open to:</strong> Remote, On-site, or Hybrid roles, contract testing projects, and full-time QA opportunities.
          </div>
        </div>
      </div>
    </section>
  );
}