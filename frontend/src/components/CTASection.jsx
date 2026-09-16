import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal, Eyebrow, MaskedLine } from "@/components/Reveal";

export default function CTASection({
  title = "Let's Build a Better Connection.",
  text = "Talk with our team about your connectivity and network requirements.",
  dark = false,
}) {
  return (
    <section
      data-testid="cta-section"
      className={dark ? "bg-[#0B132B] text-white" : "border-t border-slate-200 bg-white"}
    >
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-6 py-24 lg:flex-row lg:items-end lg:px-12">
        <div>
          <Reveal>
            <Eyebrow dark={dark}>Next Step</Eyebrow>
          </Reveal>
          <h2 className={`mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-slate-900"}`}>
            <MaskedLine inView delay={0.08}>
              {title}
            </MaskedLine>
          </h2>
          <Reveal delay={0.18}>
            <p className={`mt-5 max-w-xl text-base sm:text-lg ${dark ? "text-slate-400" : "text-slate-600"}`}>
              {text}
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.25}>
          <Link
            to="/contact"
            data-testid="cta-talk-button"
            className="group inline-flex items-center gap-2 bg-[#F97316] px-8 py-4 font-display text-base font-bold text-white transition-colors duration-300 hover:bg-[#FF5722]"
          >
            Talk to Our Team
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
