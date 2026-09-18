import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SLIDES = [
  {
    src: "/images/urban-traffic-with-cityscape.webp",
    alt: "City traffic and skyline at night, connectivity in motion",
  },
  {
    src: "/images/asia-businessmen-businesswomen-meeting-brainstorming-ideas-c.webp",
    alt: "Business team reviewing network performance together",
  },
  {
    src: "/images/vertical-shot-asian-girl-student-attend-online-meeting-talki.webp",
    alt: "Professional on a video call, connected from anywhere",
  },
  {
    src: "/images/portrait-creative-young-woman-drawing-digital-tablet-with-pe.webp",
    alt: "Working flexibly on a digital tablet over reliable connectivity",
  },
];

const DURATION = 6000;

export default function HeroCarousel({ slides = SLIDES, testId = "hero-carousel", contained = false }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), DURATION);
    return () => clearInterval(t);
  }, [slides.length]);

  if (contained) {
    return (
      <div
        data-testid={testId}
        className="relative border border-slate-200 bg-white shadow-[0_30px_80px_-40px_rgba(11,19,43,0.25)]"
      >
        <span className="absolute -left-px -top-px z-10 h-3 w-3 border-l-2 border-t-2 border-[#F97316]" />
        <span className="absolute -right-px -top-px z-10 h-3 w-3 border-r-2 border-t-2 border-[#F97316]" />
        <span className="absolute -bottom-px -left-px z-10 h-3 w-3 border-b-2 border-l-2 border-[#F97316]" />
        <span className="absolute -bottom-px -right-px z-10 h-3 w-3 border-b-2 border-r-2 border-[#F97316]" />
        <div className="relative aspect-[3/2] w-full overflow-hidden">
          <AnimatePresence>
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
              transition={{ opacity: { duration: 1.2 } }}
            >
              <img
                src={slides[index].src}
                alt={slides[index].alt}
                className="h-full w-full object-contain"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex items-center justify-between border-t border-slate-100 px-4 py-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
            {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
          <div className="flex gap-2">
            {slides.map((s, i) => (
              <button
                key={s.src}
                data-testid={`${testId}-dot-${i}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="relative h-1 w-8 overflow-hidden bg-slate-200"
              >
                {i === index && (
                  <motion.span
                    key={`fill-${index}`}
                    className="absolute inset-y-0 left-0 bg-[#F97316]"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: DURATION / 1000, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div data-testid={testId} className="absolute inset-0 overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1.12 }}
          exit={{ opacity: 0, transition: { duration: 1.2 } }}
          transition={{ opacity: { duration: 1.4 }, scale: { duration: DURATION / 1000 + 2, ease: "linear" } }}
        >
          <img
            src={slides[index].src}
            alt={slides[index].alt}
            className="h-full w-full object-cover"
            style={{ objectPosition: slides[index].pos || "center" }}
            loading={index === 0 ? "eager" : "lazy"}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B]/90 via-[#0B132B]/60 to-[#0B132B]/30" />
      <div className="absolute inset-0 bg-grid-dark opacity-50" />

      <div className="absolute right-5 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-2.5 lg:right-10">
        {slides.map((s, i) => (
          <button
            key={s.src}
            data-testid={`${testId}-dot-${i}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative h-10 w-1 overflow-hidden bg-white/25"
          >
            {i === index && (
              <motion.span
                key={`fill-${index}`}
                className="absolute inset-x-0 bottom-0 bg-[#F97316]"
                initial={{ height: "0%" }}
                animate={{ height: "100%" }}
                transition={{ duration: DURATION / 1000, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
