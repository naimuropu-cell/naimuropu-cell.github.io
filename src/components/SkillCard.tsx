type SkillCardProps = {
    title: string;
  };
  
  export default function SkillCard({ title }: SkillCardProps) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        <h3 className="text-base font-semibold text-slate-800">{title}</h3>
      </div>
    );
  }