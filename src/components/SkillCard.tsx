import { FaCheckCircle } from "react-icons/fa";

type SkillCardProps = {
  title: string;
  category?: "qa" | "dev";
};

export default function SkillCard({ title, category = "qa" }: SkillCardProps) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-blue-300">
      <FaCheckCircle
        className={`text-sm shrink-0 ${
          category === "qa" ? "text-blue-600" : "text-emerald-600"
        }`}
      />
      <h4 className="text-sm font-semibold text-slate-800 tracking-tight">
        {title}
      </h4>
    </div>
  );
}