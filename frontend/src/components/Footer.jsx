import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Logo from "@/components/brand/Logo";

const PAGES = [
  { to: "/", label: "Home" },
  { to: "/solutions", label: "Solutions" },
  { to: "/network", label: "Network" },
  { to: "/industries", label: "Industries" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

const SOLUTIONS = [
  "Internet Service & IP Core Networks",
  "Network Infrastructure Service",
  "SD-WAN Service",
  "Maintenance & Managed Service",
  "VoIP Infrastructure Service",
  "Virtual Private Server Service",
];

export default function Footer() {
  return (
    <footer data-testid="main-footer" className="bg-[#0B132B] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-12 lg:py-20">
        <div>
          <div className="inline-flex items-center py-1">
            <Logo variant="white" className="h-12" />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
            Enterprise internet connectivity and network infrastructure for
            businesses across Indonesia.
          </p>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-orange-500">
            Service is a Promise.
          </p>
        </div>

        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">Pages</p>
          <ul className="mt-5 space-y-3">
            {PAGES.map((p) => (
              <li key={p.to}>
                <Link
                  to={p.to}
                  data-testid={`footer-link-${p.label.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-sm text-slate-300 transition-colors hover:text-[#F97316]"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">Solutions</p>
          <ul className="mt-5 space-y-3">
            {SOLUTIONS.map((s) => (
              <li key={s}>
                <Link
                  to="/solutions"
                  className="text-sm text-slate-300 transition-colors hover:text-[#F97316]"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li>The Bellezza Shopping Arcade, Permata Hijau — Jakarta</li>
            <li>
              <a href="mailto:info@cergis.net.id" className="transition-colors hover:text-[#F97316]">
                info@cergis.net.id
              </a>
            </li>
            <li>
              <a href="tel:+622125675858" className="transition-colors hover:text-[#F97316]">
                021 2567 5858
              </a>
            </li>
            <li>Mon – Fri, 08.00 – 18.00 WIB</li>
          </ul>
          <Link
            to="/contact"
            data-testid="footer-cta-talk"
            className="group mt-6 inline-flex items-center gap-1.5 border border-white/20 px-5 py-2.5 text-sm font-semibold transition-colors duration-300 hover:border-[#F97316] hover:bg-[#F97316]"
          >
            Talk to Our Team
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-6 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500 sm:flex-row sm:items-center lg:px-12">
          <span>© 2026 Cergis Networks</span>
          <span>Connectivity That Moves Business</span>
        </div>
      </div>
    </footer>
  );
}
