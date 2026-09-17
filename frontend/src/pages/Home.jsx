import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  HeartHandshake,
  ShieldCheck,
  GitBranch,
  Radar,
  Users,
} from "lucide-react";
import { Reveal, MaskedLine, Eyebrow, SectionHeader } from "@/components/Reveal";
import HeroCarousel from "@/components/HeroCarousel";
import Marquee from "@/components/Marquee";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import SolutionCard from "@/components/SolutionCard";
import { SOLUTIONS } from "@/data/solutions";

const HERO_POINTS = [
  "Enterprise Connectivity",
  "High-Availability Network",
  "Multiple Upstream Providers",
  "24/7 Network Monitoring",
  "Experienced Engineers",
];

const HIGHLIGHTS = [
  { icon: HeartHandshake, title: "Commitment to Customer Satisfaction", desc: "Focused on long-term partnerships by providing high-quality services." },
  { icon: ShieldCheck, title: "High-Availability Network", desc: "Architecture built with redundancy at every layer." },
  { icon: GitBranch, title: "Multiple Upstream Providers", desc: "Diverse upstream paths so no single provider defines your service." },
  { icon: Radar, title: "24/7 Network Monitoring", desc: "Continuous monitoring with proactive incident handling." },
  { icon: Users, title: "Experienced Technical Team", desc: "Network engineers who design, deploy, and operate what they build." },
];

const WHY = [
  { title: "Reliable Infrastructure", desc: "Designed with redundancy and high availability." },
  { title: "Flexible Solutions", desc: "Solutions adapted to different business requirements." },
  { title: "Experienced Engineers", desc: "Supported by experienced network engineering teams." },
  { title: "24/7 Monitoring", desc: "Continuous monitoring and proactive incident handling." },
  { title: "Enterprise Focus", desc: "Designed for business-critical connectivity." },
  { title: "Customer-Centric Service", desc: "Focused on service quality and continuous improvement." },
];

const CHAPTERS = [
  { n: "01", t: "Reliability", d: "Every connection we build represents a commitment to reliability, engineered for continuity and monitored without pause." },
  { n: "02", t: "Responsiveness", d: "When something needs attention, our teams respond, because a network partner should never be the bottleneck." },
  { n: "03", t: "Continuous Improvement", d: "Service is never finished. We review, refine, and improve the connections we operate, continuously." },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section ref={heroRef} className="relative overflow-hidden bg-[#0B132B]">
        <motion.div style={{ y: bgY }} className="absolute inset-0">
          <HeroCarousel />
        </motion.div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-28 pt-36 lg:px-12 lg:pb-40 lg:pt-56">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Eyebrow dark>Enterprise ISP &amp; Network Infrastructure in Indonesia</Eyebrow>
            </motion.div>
            <h1 className="mt-8 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
              <MaskedLine delay={0.12}>Connectivity That</MaskedLine>
              <MaskedLine delay={0.26}>
                <span className="text-[#F97316]">Moves Business.</span>
              </MaskedLine>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
            >
              Reliable internet connectivity and network infrastructure designed to
              keep your business connected, secure, and moving forward.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact"
                data-testid="hero-cta-talk"
                className="group inline-flex items-center gap-2 bg-[#F97316] px-7 py-3.5 font-display text-base font-bold text-white transition-colors duration-300 hover:bg-[#FF5722]"
              >
                Talk to Our Team
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/solutions"
                data-testid="hero-cta-solutions"
                className="group inline-flex items-center gap-2 border border-white/40 px-7 py-3.5 font-display text-base font-bold text-white transition-colors duration-300 hover:border-white hover:bg-white/5"
              >
                Explore Solutions
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="relative z-10 border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-10 gap-y-3 px-6 py-5 lg:px-12">
            {HERO_POINTS.map((p) => (
              <span
                key={p}
                className="flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500"
              >
                <span className="h-1.5 w-1.5 bg-[#F97316]" />
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Marquee />

      {/* INTRO */}
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-2 lg:px-12 lg:py-36">
        <div>
          <SectionHeader
            eyebrow="Who We Are"
            title="More Than Internet. We Build Connectivity."
            description="Cergis Networks provides reliable and flexible connectivity and network infrastructure solutions for businesses across Indonesia. From internet connectivity and IP networks to managed services and SD-WAN, we help organizations build a stronger digital foundation."
          />
          <Reveal delay={0.25}>
            <Link
              to="/about"
              data-testid="intro-about-link"
              className="group mt-8 inline-flex items-center gap-2 font-display text-base font-bold text-[#0B132B] transition-colors hover:text-[#F97316]"
            >
              More About Cergis
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <div>
          {HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.07}>
              <div className="group flex items-start gap-5 border-t border-slate-200 py-6 transition-colors last:border-b hover:bg-white">
                <span className="font-mono text-xs font-semibold text-orange-600">
                  0{i + 1}
                </span>
                <h3 className="w-48 shrink-0 font-display text-base font-semibold text-slate-900">
                  {h.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">{h.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SOLUTIONS PREVIEW */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-12 lg:py-32">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeader
              eyebrow="What We Do"
              title="Solutions Built Around Your Business."
              description="Six core capabilities delivered by one accountable partner, from internet access to enterprise network infrastructure."
            />
            <Reveal delay={0.2}>
              <Link
                to="/solutions"
                data-testid="solutions-preview-link"
                className="group inline-flex items-center gap-2 whitespace-nowrap font-display text-base font-bold text-[#0B132B] transition-colors hover:text-[#F97316]"
              >
                All Solutions
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((s, i) => (
              <SolutionCard key={s.slug} solution={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CERGIS */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-12 lg:py-36">
        <SectionHeader
          eyebrow="Why Cergis"
          title="Built for Reliability."
          description="The qualities that matter when your business runs on its network."
        />
        <div className="mt-14 grid gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.06} className="h-full">
              <div
                data-testid={`why-card-${i}`}
                className="group h-full bg-[#FAFAFC] p-9 transition-colors duration-300 hover:bg-white"
              >
                <span className="font-mono text-xs font-semibold text-slate-300 transition-colors group-hover:text-orange-500">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-slate-900">
                  {w.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICE PROMISE */}
      <section className="relative overflow-hidden bg-[#0B132B] py-28 text-white lg:py-36">
        <div className="absolute inset-0 bg-grid-dark" />
        <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-30" preserveAspectRatio="none" viewBox="0 0 1440 600">
          <path d="M -50 120 C 300 60, 700 200, 1500 100" fill="none" stroke="#F97316" strokeWidth="1" className="flow-line-slow" />
          <path d="M -50 480 C 400 540, 900 420, 1500 520" fill="none" stroke="#F97316" strokeWidth="1" className="flow-line-slow" />
          <path d="M -50 300 C 350 260, 800 360, 1500 280" fill="none" stroke="#3B4A6B" strokeWidth="1" className="flow-line-slow" />
        </svg>
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-12">
          <div>
            <Reveal>
              <Eyebrow dark>Our Promise</Eyebrow>
            </Reveal>
            <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl">
              <MaskedLine inView delay={0.08}>Service is</MaskedLine>
              <MaskedLine inView delay={0.2}>
                <span className="text-[#F97316]">a Promise.</span>
              </MaskedLine>
            </h2>
            <Reveal delay={0.3}>
              <p className="mt-7 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg">
                Every connection we build represents a commitment to reliability,
                responsiveness, and continuous service improvement.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="relative mt-12 overflow-hidden border border-white/10">
                <img
                  src="https://images.pexels.com/photos/37564550/pexels-photo-37564550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Fiber optic infrastructure"
                  loading="lazy"
                  className="h-52 w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 bg-[#0B132B]/85 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-orange-500 backdrop-blur">
                  Fiber Infrastructure
                </span>
              </div>
            </Reveal>
          </div>
          <div className="flex flex-col justify-center">
            {CHAPTERS.map((c, i) => (
              <Reveal key={c.n} delay={i * 0.1}>
                <div className="flex gap-7 border-t border-white/10 py-8 last:border-b">
                  <span className="font-mono text-sm font-semibold text-orange-500">{c.n}</span>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight">{c.t}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{c.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      <CTASection />
    </div>
  );
}
