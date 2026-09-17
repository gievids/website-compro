import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SLIDES = [
  {
    src: "https://customer-assets-4nw71qhi.emergentagent.net/job_site-launch-411/artifacts/rp9bsoay_urban-traffic-with-cityscape.webp",
    alt: "City traffic and skyline at night, connectivity in motion",
  },
  {
    src: "https://customer-assets-4nw71qhi.emergentagent.net/job_site-launch-411/artifacts/yd3c3wwv_asia-businessmen-businesswomen-meeting-brainstorming-ideas-conducting-business-presentation-project-colleagues-working-together-plan-success-strategy-enjoy-teamwork-small-modern-night-office.webp",
    alt: "Business team reviewing network performance together",
  },
  {
    src: "https://customer-assets-4nw71qhi.emergentagent.net/job_site-launch-411/artifacts/qmjff830_vertical-shot-asian-girl-student-attend-online-meeting-talking-laptop-video-chat-sitting.webp",
    alt: "Professional on a video call, connected from anywhere",
  },
  {
    src: "https://customer-assets-4nw71qhi.emergentagent.net/job_site-launch-411/artifacts/jgmab9cp_portrait-creative-young-woman-drawing-digital-tablet-with-pen-drinking-coffee-working-from.webp",
    alt: "Working flexibly on a digital tablet over reliable connectivity",
  },
];

const DURATION = 6000;

export default function HeroCarousel({ slides = SLIDES, testId = "hero-carousel" }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), DURATION);
    return () => clearInterval(t);
  }, [slides.length]);

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
