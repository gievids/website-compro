import { motion } from "framer-motion";

const NODES = {
  internet: { x: 360, y: 52, r: 26, label: "INTERNET", main: true },
  up1: { x: 140, y: 152, r: 10, label: "UPSTREAM 01" },
  up2: { x: 360, y: 152, r: 10, label: "UPSTREAM 02" },
  up3: { x: 580, y: 152, r: 10, label: "UPSTREAM 03" },
  core: { x: 360, y: 282, r: 30, label: "CERGIS CORE", main: true },
  fiber: { x: 360, y: 402, r: 14, label: "FIBER BACKBONE", main: true },
  ent: { x: 360, y: 502, r: 16, label: "ENTERPRISE", main: true },
  branch: { x: 90, y: 596, r: 9, label: "BRANCH" },
  office: { x: 272, y: 596, r: 9, label: "OFFICE" },
  dc: { x: 450, y: 596, r: 9, label: "DATA CENTER" },
  cloud: { x: 630, y: 596, r: 9, label: "CLOUD" },
};

const LINKS = [
  ["internet", "up1"], ["internet", "up2"], ["internet", "up3"],
  ["up1", "core"], ["up2", "core"], ["up3", "core"],
  ["core", "fiber"], ["fiber", "ent"],
  ["ent", "branch"], ["ent", "office"], ["ent", "dc"], ["ent", "cloud"],
];

const PULSE_LINKS = [0, 2, 4, 6, 7, 8, 10, 11];

const path = (a, b) => `M ${a.x} ${a.y} L ${b.x} ${b.y}`;

export default function NetworkViz() {
  return (
    <motion.div
      data-testid="hero-network-viz"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative border border-slate-200 bg-white shadow-[0_30px_80px_-40px_rgba(11,19,43,0.25)]"
    >
      <span className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-[#F97316]" />
      <span className="absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-[#F97316]" />
      <span className="absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-[#F97316]" />
      <span className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-[#F97316]" />

      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
          Cergis Core Topology
        </span>
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
          <span className="node-breathe h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Conceptual — Illustrative
        </span>
      </div>

      <svg viewBox="0 0 720 640" className="block w-full" role="img" aria-label="Conceptual network topology diagram">
        {LINKS.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={NODES[a].x} y1={NODES[a].y} x2={NODES[b].x} y2={NODES[b].y}
            stroke="#CBD5E1" strokeWidth="1.5" className="flow-line"
          />
        ))}
        {PULSE_LINKS.map((li, i) => {
          const [a, b] = LINKS[li];
          return (
            <circle key={`pulse-${li}`} r="4" fill="#F97316">
              <animateMotion
                dur={`${2.2 + (i % 4) * 0.6}s`}
                begin={`${i * 0.35}s`}
                repeatCount="indefinite"
                path={path(NODES[a], NODES[b])}
              />
            </circle>
          );
        })}
        {Object.entries(NODES).map(([key, n]) => (
          <g key={key}>
            {n.main && (
              <circle cx={n.x} cy={n.y} r={n.r + 10} fill="none" stroke="#F97316" strokeWidth="1" opacity="0.35" className="node-breathe" />
            )}
            <circle
              cx={n.x} cy={n.y} r={n.r}
              fill={n.main ? "#0B132B" : "#FFFFFF"}
              stroke={n.main ? "#F97316" : "#94A3B8"}
              strokeWidth={n.main ? 2 : 1.5}
            />
            {n.main && <circle cx={n.x} cy={n.y} r={n.r * 0.35} fill="#F97316" className="node-breathe" />}
            <text
              x={n.x}
              y={n.y + n.r + 18}
              textAnchor="middle"
              className="fill-slate-500 font-mono"
              fontSize="10"
              letterSpacing="1.5"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>

      <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
        <span>Upstream → Core → Fiber → Edge</span>
        <span className="text-orange-600">Data flow simulated</span>
      </div>
    </motion.div>
  );
}
