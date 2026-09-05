import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profile from "../data/profile";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            {profile.name}
          </h3>
          <p className="mt-1 text-slate-600">
            {profile.title} • {profile.location}
          </p>
        </div>

        <div className="flex items-center gap-5 text-xl text-slate-600">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-full hover:bg-slate-100 hover:text-slate-900 transition"
          >
            <FaGithub />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-full hover:bg-slate-100 hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href={`mailto:${profile.email}`}
            aria-label="Send Email"
            className="p-2 rounded-full hover:bg-slate-100 hover:text-red-500 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="border-t border-slate-100 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}