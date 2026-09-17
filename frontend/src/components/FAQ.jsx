import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/Reveal";

const FAQS = [
  {
    q: "What is Cergis Networks?",
    a: "Cergis Networks is an Internet Service Provider (ISP) and network infrastructure provider offering reliable connectivity and technology solutions for businesses and organizations.",
  },
  {
    q: "What services does Cergis Networks provide?",
    a: "We provide a range of connectivity and network infrastructure solutions, including Internet Service, Network Infrastructure, SD-WAN, Managed Services, VoIP Infrastructure, and VPS.",
  },
  {
    q: "Does Cergis Networks provide business or corporate internet?",
    a: "Yes. Cergis Networks provides business and enterprise internet connectivity designed to support business-critical applications, offices, branches, and other operational requirements.",
  },
  {
    q: "Can Cergis Networks provide connectivity for multiple locations?",
    a: "Yes. We can provide connectivity solutions for businesses with multiple offices, branches, buildings, or other locations, depending on the required network architecture.",
  },
  {
    q: "Can Cergis Networks provide internet for apartments or property developments?",
    a: "Yes. We provide connectivity and network infrastructure solutions for apartments, residential properties, office buildings, commercial properties, and hospitality environments.",
  },
  {
    q: "Does Cergis Networks provide an SLA?",
    a: "Yes. Service Level Agreements (SLA) can be provided according to the service and customer requirements. The applicable SLA and service parameters will be defined in the service agreement.",
  },
  {
    q: "How is network performance monitored?",
    a: "Our network is continuously monitored to identify connectivity issues, performance degradation, and potential service disruptions. Our technical team can respond to incidents and perform troubleshooting when required.",
  },
  {
    q: "How can I request a service or get a quotation?",
    a: "You can contact our team through the Talk to Our Team or Contact Us form on our website. Our team will review your requirements and recommend a suitable connectivity solution.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section data-testid="faq-section" className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-28 lg:grid-cols-12 lg:px-12 lg:py-32">
        <div className="lg:col-span-4">
          <SectionHeader
            eyebrow="FAQ"
            title="Questions, Answered."
            description="The essentials about who we are, what we provide, and how to get started with Cergis Networks."
          />
        </div>
        <div className="lg:col-span-8">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div data-testid={`faq-item-${i}`} className="border-t border-slate-200 last:border-b">
                  <button
                    data-testid={`faq-trigger-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-xs font-semibold text-orange-600">
                        0{i + 1}
                      </span>
                      <span
                        className={`font-display text-base font-semibold tracking-tight transition-colors duration-200 sm:text-lg ${
                          isOpen ? "text-[#F97316]" : "text-slate-900 group-hover:text-orange-600"
                        }`}
                      >
                        {f.q}
                      </span>
                    </span>
                    <Plus
                      className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-[#F97316]" : "text-slate-400"
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p
                          data-testid={`faq-answer-${i}`}
                          className="pb-7 pl-9 pr-4 text-sm leading-relaxed text-slate-600 sm:text-base"
                        >
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
