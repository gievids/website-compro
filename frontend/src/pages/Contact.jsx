import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowRight, Loader2, MapPin, Mail, Phone, MessageCircle, Clock } from "lucide-react";
import { Reveal, MaskedLine, Eyebrow } from "@/components/Reveal";
import HeroCarousel from "@/components/HeroCarousel";
import FAQ from "@/components/FAQ";

const HEADER_SLIDES = [
  {
    src: "/images/portrait-beautiful-young-asian-business-woman-with-headphone.webp",
    alt: "Cergis customer support specialist ready to help",
    pos: "center 15%",
  },
  {
    src: "/images/paralyzed-asian-employee-working-call-center-reception-disab.webp",
    alt: "Customer service team assisting clients at their desks",
  },
];

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const SERVICE_OPTIONS = [
  "Internet Service",
  "Network Infrastructure",
  "SD-WAN",
  "Managed Service",
  "VoIP",
  "VPS",
  "Other",
];

const LOCATION_OPTIONS = ["1", "2-5", "6-10", "11-25", "25+"];

const EMPTY = {
  name: "",
  company: "",
  email: "",
  phone: "",
  industry: "",
  service: "",
  locations: "",
  message: "",
};

const INFO = [
  { icon: MapPin, label: "Office Address", value: "The Bellezza Shopping Arcade, Permata Hijau, Jakarta" },
  { icon: Mail, label: "Email", value: "info@cergis.net.id", href: "mailto:info@cergis.net.id" },
  { icon: Phone, label: "Phone", value: "021 2567 5858", href: "tel:+622125675858" },
  { icon: MessageCircle, label: "WhatsApp", value: "0822 9960 1565", href: "https://wa.me/6282299601565" },
  { icon: Clock, label: "Business Hours", value: "Monday to Friday, 08.00 - 18.00 WIB" },
];

const inputCls =
  "w-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-[#F97316] focus:outline-none focus:ring-2 focus:ring-orange-100";
const labelCls =
  "mb-2 block font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500";

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [sending, setSending] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(`${API}/inquiries`, form);
      toast.success("Inquiry sent. Our team will reach out shortly.");
      setForm(EMPTY);
    } catch (err) {
      toast.error("Could not send your inquiry. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div data-testid="contact-page">
      <section className="relative overflow-hidden bg-[#0B132B]">
        <HeroCarousel slides={HEADER_SLIDES} testId="contact-carousel" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-12 lg:pb-32 lg:pt-48">
          <Reveal>
            <Eyebrow dark>Contact</Eyebrow>
          </Reveal>
          <h1 className="mt-8 max-w-4xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
            <MaskedLine delay={0.1}>Let's Build a</MaskedLine>
            <MaskedLine delay={0.22}>
              <span className="text-[#F97316]">Better Connection.</span>
            </MaskedLine>
          </h1>
          <Reveal delay={0.35}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Tell us about your connectivity and network requirements. Our team
              will respond with a solution shaped around your business.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-grid-light">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-12">
            {/* INFO */}
            <div className="lg:col-span-4">
              <Reveal delay={0.4}>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Reach Us Directly
                </p>
                <div className="mt-6 space-y-1">
                  {INFO.map((item) => (
                    <div
                      key={item.label}
                      data-testid={`contact-info-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                      className="flex items-center gap-4 border-t border-slate-200 py-5 last:border-b"
                    >
                      <item.icon className="h-5 w-5 shrink-0 text-[#F97316]" />
                      <div>
                        <p className="font-display text-sm font-semibold text-slate-900">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            data-testid={`contact-info-link-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                            className="mt-1 inline-block text-sm text-slate-600 transition-colors hover:text-orange-600"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm text-slate-600">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-relaxed text-slate-500">
                  Based in Jakarta, Indonesia, serving businesses across the
                  archipelago.
                </p>
              </Reveal>
            </div>

            {/* FORM */}
            <div className="lg:col-span-8">
              <Reveal delay={0.5}>
                <form
                  onSubmit={submit}
                  data-testid="contact-form"
                  className="relative border border-slate-200 bg-white p-7 sm:p-10"
                >
                  <span className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-[#F97316]" />
                  <span className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-[#F97316]" />

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelCls}>Name *</label>
                      <input id="name" data-testid="contact-name-input" required value={form.name} onChange={set("name")} className={inputCls} placeholder="Your full name" />
                    </div>
                    <div>
                      <label htmlFor="company" className={labelCls}>Company</label>
                      <input id="company" data-testid="contact-company-input" value={form.company} onChange={set("company")} className={inputCls} placeholder="Company name" />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelCls}>Business Email *</label>
                      <input id="email" type="email" data-testid="contact-email-input" required value={form.email} onChange={set("email")} className={inputCls} placeholder="you@company.co.id" />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelCls}>Phone</label>
                      <input id="phone" data-testid="contact-phone-input" value={form.phone} onChange={set("phone")} className={inputCls} placeholder="+62 ..." />
                    </div>
                    <div>
                      <label htmlFor="industry" className={labelCls}>Industry</label>
                      <input id="industry" data-testid="contact-industry-input" value={form.industry} onChange={set("industry")} className={inputCls} placeholder="e.g. Finance, Retail, Manufacturing" />
                    </div>
                    <div>
                      <label htmlFor="service" className={labelCls}>Required Service *</label>
                      <select id="service" data-testid="contact-service-select" required value={form.service} onChange={set("service")} className={inputCls}>
                        <option value="" disabled>Select a service</option>
                        {SERVICE_OPTIONS.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="locations" className={labelCls}>Number of Locations</label>
                      <select id="locations" data-testid="contact-locations-select" value={form.locations} onChange={set("locations")} className={inputCls}>
                        <option value="" disabled>Select</option>
                        {LOCATION_OPTIONS.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className={labelCls}>Message *</label>
                      <textarea id="message" data-testid="contact-message-input" required rows={5} value={form.message} onChange={set("message")} className={`${inputCls} resize-none`} placeholder="Tell us about your requirements, such as sites, applications, current setup, and timelines." />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    data-testid="contact-submit-button"
                    className="group mt-9 inline-flex w-full items-center justify-center gap-2 bg-[#F97316] px-8 py-4 font-display text-base font-bold text-white transition-colors duration-300 hover:bg-[#FF5722] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                  >
                    {sending ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
}
