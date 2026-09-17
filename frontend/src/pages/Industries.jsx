import { Link } from "react-router-dom";
import {
  ArrowRight,
  Landmark,
  Mountain,
  ShoppingCart,
  Cpu,
  Headphones,
  Code2,
  Clapperboard,
  Package,
  UtensilsCrossed,
  Hotel,
  GraduationCap,
} from "lucide-react";
import { Reveal, MaskedLine, Eyebrow, SectionHeader } from "@/components/Reveal";
import CTASection from "@/components/CTASection";

const INDUSTRIES = [
  { icon: Landmark, title: "Banking & Trading", desc: "Reliable, continuously monitored connectivity for transactions and business-critical financial operations." },
  { icon: Mountain, title: "Mining", desc: "Connectivity and network infrastructure linking remote sites with operational headquarters." },
  { icon: ShoppingCart, title: "E-Commerce", desc: "Stable, scalable connectivity that keeps online storefronts and operations running." },
  { icon: Cpu, title: "IT Solution", desc: "Network infrastructure that underpins service delivery for technology providers." },
  { icon: Headphones, title: "Call Center", desc: "VoIP and data infrastructure designed for high-volume voice environments." },
  { icon: Code2, title: "Software Development", desc: "Reliable connectivity for distributed teams, repositories, and daily development workflows." },
  { icon: Clapperboard, title: "Media & Entertainment", desc: "High-capacity connectivity for content production and distribution." },
  { icon: Package, title: "FMCG", desc: "Multi-site connectivity linking head offices, production facilities, and distribution points." },
  { icon: UtensilsCrossed, title: "F&B", desc: "Connectivity for outlets, central kitchens, and head-office operations." },
  { icon: Hotel, title: "Hospitality", desc: "Network solutions for hotels and hospitality environments, serving staff and guests." },
  { icon: GraduationCap, title: "Education Institution", desc: "Campus and e-learning connectivity for students, educators, and administrative teams." },
];

export default function Industries() {
  return (
    <div data-testid="industries-page">
      <section className="relative overflow-hidden bg-grid-light">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-12 lg:pb-24 lg:pt-44">
          <Reveal>
            <Eyebrow>Industries</Eyebrow>
          </Reveal>
          <h1 className="mt-8 max-w-4xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            <MaskedLine delay={0.1}>Industry Solutions</MaskedLine>
            <MaskedLine delay={0.22}>
              Built Around <span className="text-[#F97316]">Your World.</span>
            </MaskedLine>
          </h1>
          <Reveal delay={0.35}>
            <p className="mt-7 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              We deliver professional and integrated solutions tailored to address
              the unique challenges and operational requirements across various
              industries. Our expertise enables us to understand industry-specific
              demands and provide scalable, efficient, and sustainable systems.
              Through a customer-focused approach, we help organizations enhance
              performance, optimize operations, and achieve long-term business growth.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <SectionHeader
            eyebrow="Who We Serve"
            title="Sectors We Support."
            description="Connectivity and network infrastructure adapted to the way each industry operates."
          />
          <div className="mt-14 grid gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.title} delay={(i % 4) * 0.06} className="h-full">
                <div
                  data-testid={`industry-card-${i}`}
                  className="group h-full bg-white p-8 transition-colors duration-300 hover:bg-[#0B132B]"
                >
                  <div className="flex items-start justify-between">
                    <ind.icon className="h-6 w-6 text-[#F97316]" />
                    <span className="font-mono text-xs font-semibold text-slate-300 transition-colors group-hover:text-orange-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-white">
                    {ind.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600 transition-colors group-hover:text-slate-400">
                    {ind.desc}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.1} className="h-full">
              <Link
                to="/contact"
                data-testid="industries-card-cta"
                className="group flex h-full flex-col justify-between bg-[#F97316] p-8 transition-colors duration-300 hover:bg-[#FF5722]"
              >
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-white/80">
                  Your industry not listed?
                </span>
                <span className="mt-8">
                  <span className="block font-display text-lg font-bold leading-snug text-white">
                    Let's discuss your requirements.
                  </span>
                  <span className="mt-4 inline-flex items-center gap-2 font-display text-sm font-bold text-white">
                    Talk to Our Team
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection dark />
    </div>
  );
}
