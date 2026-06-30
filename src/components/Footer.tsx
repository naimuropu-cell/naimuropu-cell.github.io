import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">

        <div>

          <h3 className="text-xl font-bold text-slate-900">
            Md. Naimur Rahman Apu
          </h3>

          <p className="mt-2 text-slate-600">
            Junior Software QA Engineer
          </p>

        </div>

        <div className="flex gap-5 text-2xl">

          <a
            href="https://github.com/naimuropu-cell"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
  href="https://www.linkedin.com/in/md-naimur-rahman-apu-8b5384263/"
  target="_blank"
  rel="noreferrer"
  className="hover:text-blue-600 transition"
  aria-label="LinkedIn"
>
  <FaLinkedin />
</a>

          <a href="mailto:naimuropu@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </div>

      <div className="border-t py-6 text-center text-sm text-slate-500">
      © 2026 Md. Naimur Rahman Apu. Built with React, TypeScript & Tailwind CSS.
      </div>

    </footer>
  );
}