import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
      className={`mb-12 ${center ? "text-center mx-auto" : ""}`}
    >
      {tag && (
        <span className="inline-block text-blue-600 font-semibold uppercase tracking-wider text-sm mb-2">
          {tag}
        </span>
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
    </motion.div>
  );
}
