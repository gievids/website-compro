import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Reveal, MaskedLine, Eyebrow } from "@/components/Reveal";
import HeroCarousel from "@/components/HeroCarousel";
import CTASection from "@/components/CTASection";
import { SOLUTIONS } from "@/data/solutions";

const HEADER_SLIDES = [
  {
    src: "/images/global-communication-equipment-futuristic-server-room-genera.webp",
    alt: "Data center server corridor",
  },
  {
    src: "/images/paralyzed-asian-employee-working-call-center-reception-disab.webp",
    alt: "Customer service and technical support operations",
  },
];

export default function Solutions() {
  return (
    <div data-testid="solutions-page">
      <section className="relative overflow-hidden bg-[#0B132B]">
        <HeroCarousel slides={HEADER_SLIDES} testId="solutions-carousel" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-12 lg:pb-32 lg:pt-48">
          <Reveal>
            <Eyebrow dark>Solutions</Eyebrow>
          </Reveal>
          <h1 className="mt-8 max-w-4xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
            <MaskedLine delay={0.1}>Connectivity Solutions</MaskedLine>
            <MaskedLine delay={0.22}>
              for <span className="text-[#F97316]">Modern Business</span>
            </MaskedLine>
          </h1>
          <Reveal delay={0.35}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              From internet access to enterprise network infrastructure, Cergis
              Networks provides solutions designed around your business requirements.
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="mt-10 flex flex-wrap gap-2.5">
              {SOLUTIONS.map((s, i) => (
                <a
                  key={s.slug}
                  href={`#${s.slug}`}
                  data-testid={`solutions-chip-${s.slug}`}
                  className="border border-white/25 bg-white/5 px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-slate-300 backdrop-blur transition-colors duration-200 hover:border-[#F97316] hover:text-orange-500"
                >
                  <span className="mr-2 text-orange-500">0{i + 1}</span>
                  {s.title}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {SOLUTIONS.map((s, i) => {
          const Icon = s.icon;
          return (
            <section
              key={s.slug}
              id={s.slug}
              data-testid={`solution-section-${s.slug}`}
              className="grid scroll-mt-28 gap-12 border-t border-slate-200 py-20 lg:grid-cols-12 lg:py-24"
            >
              <div className="lg:col-span-5">
                <Reveal>
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 items-center justify-center bg-[#0B132B] text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-mono text-sm font-semibold text-orange-600">
                      / 0{i + 1}
                    </span>
                  </div>
                  <h2 className="mt-7 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-slate-600">{s.overview}</p>
                  <Link
                    to="/contact"
                    data-testid={`solution-cta-${s.slug}`}
                    className="group mt-8 inline-flex items-center gap-2 font-display text-base font-bold text-[#F97316]"
                  >
                    Talk to Our Team
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              </div>
              <div className="lg:col-span-7">
                <Reveal delay={0.1}>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                    Key Features
                  </p>
                  <ul className="mt-5 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-slate-700">
                        <Check className="h-4 w-4 shrink-0 text-[#F97316]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={0.2}>
                  <div className="mt-10 border-l-2 border-[#F97316] bg-white p-7">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                      Business Benefits
                    </p>
                    <ul className="mt-4 space-y-3">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#F97316]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      <CTASection dark />
    </div>
  );
}
