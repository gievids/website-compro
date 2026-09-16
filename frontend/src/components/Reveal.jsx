import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, y = 32, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay, ease: EASE }}
    className={className}
  >
    {children}
  </motion.div>
);

export const MaskedLine = ({ children, delay = 0, className = "", inView = false }) => {
  const ref = useRef(null);
  const seen = useInView(ref, { once: true, margin: "-60px" });
  const show = inView ? seen : true;
  return (
    <span ref={ref} className="block overflow-hidden pb-[0.06em]">
      <motion.span
        className={`block ${className}`}
        initial={{ y: "112%" }}
        animate={show ? { y: "0%" } : { y: "112%" }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
};

export const Eyebrow = ({ children, dark = false, className = "" }) => (
  <p
    className={`flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] ${
      dark ? "text-orange-500" : "text-orange-600"
    } ${className}`}
  >
    <span className="h-2 w-2 bg-[#F97316]" />
    {children}
  </p>
);

export const SectionHeader = ({ eyebrow, title, description, dark = false, className = "" }) => (
  <div className={className}>
    <Reveal>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
    </Reveal>
    <h2
      className={`mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl ${
        dark ? "text-white" : "text-slate-900"
      }`}
    >
      <MaskedLine inView delay={0.08}>
        {title}
      </MaskedLine>
    </h2>
    {description && (
      <Reveal delay={0.18}>
        <p className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${dark ? "text-slate-400" : "text-slate-600"}`}>
          {description}
        </p>
      </Reveal>
    )}
  </div>
);
