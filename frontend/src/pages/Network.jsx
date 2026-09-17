import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Activity, BellRing, Wrench, LifeBuoy, Gauge } from "lucide-react";
import { Reveal, MaskedLine, Eyebrow, SectionHeader } from "@/components/Reveal";
import CTASection from "@/components/CTASection";

const LAYERS = [
  {
    id: "upstream",
    title: "Multiple Upstream Providers",
    desc: "Connectivity is sourced from multiple upstream providers, so the health of any single provider never defines the quality of your service.",
    tags: ["Diverse transit paths", "Provider redundancy"],
  },
  {
    id: "core",
    title: "Cergis Core Network",
    desc: "Our core network is engineered for enterprise traffic — high availability by design, operated by the engineers who built it.",
    tags: ["High-availability design", "Enterprise-grade engineering"],
  },
  {
    id: "routing",
    title: "Redundant Routing",
    desc: "Traffic follows diverse paths through the network. When a path degrades, routing fails over so connectivity keeps moving.",
    tags: ["Automatic failover", "Path diversity"],
  },
  {
    id: "fiber",
    title: "Fiber Backbone",
    desc: "Fiber infrastructure forms the backbone of the network — the physical foundation for consistent, scalable capacity.",
    tags: ["Fiber infrastructure", "Scalable capacity"],
  },
  {
    id: "enterprise",
    title: "Enterprise Customers",
    desc: "Businesses connect to the backbone through last-mile connectivity engineered for business-critical workloads.",
    tags: ["Business-critical connectivity", "Dedicated access"],
  },
  {
    id: "edge",
    title: "Branch / Office",
    desc: "From a single headquarters to distributed branches and offices — one network, every site.",
    tags: ["Multi-site reach", "Consistent service at every location"],
  },
];

const NOC = [
  { icon: Activity, title: "Monitoring", desc: "Continuous visibility across network infrastructure, around the clock." },
  { icon: BellRing, title: "Alerting", desc: "Anomalies trigger alerts before they become service disruptions." },
  { icon: LifeBuoy, title: "Incident Response", desc: "Clear escalation paths and hands-on response when incidents occur." },
  { icon: Wrench, title: "Maintenance", desc: "Planned, communicated maintenance that respects your business hours." },
  { icon: Gauge, title: "Performance Optimization", desc: "Ongoing tuning so the network keeps pace with your growth." },
];

export default function Network() {
  const [active, setActive] = useState("core");
  const current = LAYERS.find((l) => l.id === active);

  return (
    <div data-testid="network-page">
      <section className="relative overflow-hidden bg-grid-light">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-12 lg:pb-24 lg:pt-44">
          <Reveal>
            <Eyebrow>Our Network</Eyebrow>
          </Reveal>
          <h1 className="mt-8 max-w-4xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            <MaskedLine delay={0.1}>Built for</MaskedLine>
            <MaskedLine delay={0.22}>
              <span className="text-[#F97316]">Reliability.</span>
            </MaskedLine>
          </h1>
          <Reveal delay={0.35}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              A network is not a product sheet. It is an architecture — layered,
              redundant, and operated by people who answer for it. Explore how
              Cergis connectivity is structured, end to end.
            </p>
          </Reveal>
        </div>
      </section>

      {/* INTERACTIVE ARCHITECTURE */}
      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            {LAYERS.map((l, i) => (
              <div key={l.id}>
                <Reveal delay={i * 0.05}>
                  <button
                    onClick={() => setActive(l.id)}
                    data-testid={`network-layer-${l.id}`}
                    className={`w-full border p-5 text-left transition-all duration-300 ${
                      active === l.id
                        ? "border-[#F97316] bg-white shadow-[0_16px_50px_-20px_rgba(249,115,22,0.4)]"
                        : "border-slate-200 bg-white/60 hover:border-slate-400"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className={`font-mono text-xs font-semibold ${active === l.id ? "text-orange-600" : "text-slate-400"}`}>
                          0{i + 1}
                        </span>
                        <span className="font-display text-base font-semibold text-slate-900 sm:text-lg">
                          {l.title}
                        </span>
                      </div>
                      <ArrowUpRight
                        className={`h-5 w-5 shrink-0 transition-all duration-300 ${
                          active === l.id ? "text-[#F97316]" : "text-slate-300"
                        }`}
                      />
                    </div>
                  </button>
                </Reveal>
                {i < LAYERS.length - 1 && (
                  <div className="flex justify-start py-1 pl-12">
                    <ArrowDown className="h-4 w-4 text-orange-500" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                data-testid="network-layer-detail"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="border border-slate-200 bg-white p-9"
              >
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-orange-600">
                  Architecture Layer
                </p>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-slate-900">
                  {current.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600">{current.desc}</p>
                <div className="mt-7 flex flex-wrap gap-2.5">
                  {current.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-slate-200 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-8 h-1 w-full overflow-hidden bg-slate-100">
                  <motion.div
                    className="h-full bg-[#F97316]"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    style={{ width: "40%" }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
              Conceptual architecture — illustrative, not to scale. Specific network
              figures available on request.
            </p>
          </div>
        </div>
      </section>

      {/* NOC */}
      <section className="relative overflow-hidden bg-[#0B132B] py-28 text-white lg:py-32">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-end gap-12 lg:grid-cols-2">
            <SectionHeader
              dark
              eyebrow="Network Operations"
              title="Always Connected. Always Monitored."
              description="Our network infrastructure is continuously monitored to identify performance issues and potential service disruptions — before your business feels them."
            />
            <Reveal delay={0.2}>
              <div className="relative overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwyfHxlbnRlcnByaXNlJTIwbmV0d29yayUyMHNlcnZlciUyMGRhdGFjZW50ZXIlMjBmaWJlciUyMG9wdGljc3xlbnwwfHx8fDE3ODk1NDk4MDR8MA&ixlib=rb-4.1.0&q=85"
                  alt="Data center infrastructure"
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 bg-[#0B132B]/85 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-orange-500 backdrop-blur">
                  Network Operations
                </span>
              </div>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {NOC.map((n, i) => (
              <Reveal key={n.title} delay={i * 0.06} className="h-full">
                <div
                  data-testid={`noc-card-${i}`}
                  className="group h-full bg-[#0B132B] p-7 transition-colors duration-300 hover:bg-[#111B38]"
                >
                  <n.icon className="h-6 w-6 text-[#F97316]" />
                  <h3 className="mt-5 font-display text-base font-semibold">{n.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{n.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
