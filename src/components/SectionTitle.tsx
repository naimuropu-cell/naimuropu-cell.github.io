type SectionTitleProps = {
  tag?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionTitle({
  tag,
  title,
  description,
  center = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${center ? "text-center mx-auto" : ""}`}>
      {tag && (
        <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-2">
          {tag}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 text-slate-600 text-base sm:text-lg leading-relaxed ${
            center ? "max-w-2xl mx-auto" : "max-w-3xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
