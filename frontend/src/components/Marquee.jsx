const ITEMS = [
  "Service is a Promise",
  "Enterprise Connectivity",
  "SD-WAN",
  "Managed Services",
  "Fiber Backbone",
  "24/7 Network Monitoring",
  "VoIP",
  "VPS Infrastructure",
  "Connectivity That Moves Business",
];

export default function Marquee() {
  return (
    <div data-testid="editorial-marquee" className="overflow-hidden border-y border-slate-200 bg-white py-5">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
            {ITEMS.map((t, i) => (
              <span key={i} className="flex items-center gap-8 pr-8">
                <span className="whitespace-nowrap font-display text-lg font-semibold uppercase tracking-wide text-slate-800">
                  {t}
                </span>
                <span className="h-2 w-2 rotate-45 bg-[#F97316]" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
