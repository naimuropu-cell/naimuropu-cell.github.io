import { FaGithub } from "react-icons/fa";

type Props = {
  title: string;
  description: string;
  stack: string[];
  status: string;
  github: string;
};

export default function DevProjectCard({
  title,
  description,
  stack,
  status,
  github,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-2xl font-bold text-slate-900">{title}</h3>

      <p className="mt-4 leading-7 text-slate-600">{description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-100 px-3 py-2 text-sm"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          {status}
        </span>

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white hover:bg-black"
        >
          <FaGithub />
          GitHub
        </a>
      </div>
    </div>
  );
}