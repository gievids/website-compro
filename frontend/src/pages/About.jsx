import { Reveal, MaskedLine, Eyebrow, SectionHeader } from "@/components/Reveal";
import CTASection from "@/components/CTASection";

const MILESTONES = [
  { title: "Company Establishment", note: "Cergis Networks is founded in Indonesia." },
  { title: "ISP Development", note: "Internet service capabilities are built and launched." },
  { title: "Network Expansion", note: "Fiber and core network infrastructure grow to serve more businesses." },
  { title: "Enterprise Service Development", note: "The portfolio expands toward enterprise connectivity and managed services." },
  { title: "Infrastructure Development", note: "Continued investment in redundancy, monitoring, and operations." },
  { title: "Current Business Direction", note: "An enterprise connectivity and technology partner for a digital Indonesia." },
];

const APPROACH = [
  { title: "Reliability", desc: "We design connectivity with service continuity in mind." },
  { title: "Flexibility", desc: "Solutions can be adapted to different business environments." },
  { title: "Technical Excellence", desc: "Supported by network engineering and operations expertise." },
  { title: "Customer Focus", desc: "We build solutions around customer requirements." },
];

export default function About() {
  return (
    <div data-testid="about-page">
      <section className="relative overflow-hidden bg-grid-light">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-12 lg:pb-24 lg:pt-44">
          <Reveal>
            <Eyebrow>About Cergis</Eyebrow>
          </Reveal>
          <h1 className="mt-8 max-w-4xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            <MaskedLine delay={0.1}>Building Reliable Connectivity</MaskedLine>
            <MaskedLine delay={0.22}>
              for a <span className="text-[#F97316]">Digital Indonesia.</span>
            </MaskedLine>
          </h1>
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <Reveal delay={0.3}>
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                Cergis Networks is an Indonesian Internet Service Provider and
                network infrastructure company focused on providing reliable and
                flexible connectivity solutions for businesses and organizations.
              </p>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                We position ourselves as a connectivity and technology partner:
                the team businesses call when the network is not allowed to fail.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="relative overflow-hidden border border-slate-200 bg-white">
                <img
                  src="https://images.pexels.com/photos/14524309/pexels-photo-14524309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Jakarta skyline"
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-72"
                />
                <span className="absolute bottom-3 left-3 bg-white/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-[#0B132B] backdrop-blur">
                  Jakarta — Indonesia
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
          <SectionHeader
            eyebrow="Milestones"
            title="The Road So Far."
            description="Key stages in the development of Cergis Networks. Dates and details are being verified and will be published once confirmed."
          />
          <div className="mt-16 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
            {MILESTONES.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.06}>
                <div
                  data-testid={`timeline-item-${i}`}
                  className="group border-t-2 border-slate-200 py-7 transition-colors duration-300 hover:border-[#F97316]"
                >
                  <span className="font-mono text-xs font-semibold text-orange-600">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-slate-900">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.note}</p>
                  <span className="mt-4 inline-block border border-dashed border-orange-300 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-orange-600">
                    Placeholder — to be confirmed
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-12 lg:py-32">
        <SectionHeader
          eyebrow="Our Approach"
          title="How We Work."
          description="Four principles behind every connection we build and operate."
        />
        <div className="mt-14 grid gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {APPROACH.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06} className="h-full">
              <div
                data-testid={`approach-card-${i}`}
                className="group h-full bg-[#FAFAFC] p-9 transition-colors duration-300 hover:bg-white"
              >
                <span className="font-mono text-xs font-semibold text-slate-300 transition-colors group-hover:text-orange-500">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-slate-900">
                  {a.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        dark
        title="Looking for a Reliable Connectivity Partner?"
        text="Talk with our team about your connectivity and network requirements."
      />
    </div>
  );
}
