import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "@/components/brand/Logo";

const LINKS = [
  { to: "/", label: "Home", id: "home" },
  { to: "/solutions", label: "Solutions", id: "solutions" },
  { to: "/network", label: "Network", id: "network" },
  { to: "/industries", label: "Industries", id: "industries" },
  { to: "/about", label: "About Us", id: "about" },
  { to: "/contact", label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      data-testid="main-navbar"
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 lg:px-12">
        <Link to="/" data-testid="nav-logo" className="flex shrink-0 items-center py-2">
          <Logo className="h-10 md:h-14" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" data-testid="nav-desktop-menu">
          {LINKS.map((l) => (
            <NavLink
              key={l.id}
              to={l.to}
              data-testid={`nav-link-${l.id}`}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-[#F97316]" : "text-slate-600 hover:text-[#0B132B]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            data-testid="nav-cta-talk"
            className="group flex items-center gap-1.5 bg-[#0B132B] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#F97316]"
          >
            Talk to Our Team
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </nav>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-[#0B132B] lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="nav-mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 z-40 flex flex-col bg-[#0B132B] px-6 pb-10 pt-8 lg:hidden"
          >
            <nav className="flex flex-col">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink
                    to={l.to}
                    data-testid={`nav-mobile-link-${l.id}`}
                    className={({ isActive }) =>
                      `flex items-center justify-between border-b border-white/10 py-5 font-display text-3xl font-bold tracking-tight ${
                        isActive ? "text-[#F97316]" : "text-white"
                      }`
                    }
                  >
                    {l.label}
                    <span className="font-mono text-xs text-slate-500">0{i + 1}</span>
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36, duration: 0.45 }}
              className="mt-auto"
            >
              <Link
                to="/contact"
                data-testid="nav-mobile-cta-talk"
                className="flex w-full items-center justify-center gap-2 bg-[#F97316] py-4 font-semibold text-white"
              >
                Talk to Our Team <ArrowUpRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
