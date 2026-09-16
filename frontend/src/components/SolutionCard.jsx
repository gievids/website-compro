import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export default function SolutionCard({ solution, index }) {
  const Icon = solution.icon;
  return (
    <Reveal delay={index * 0.07} className="h-full">
      <Link
        to={`/solutions#${solution.slug}`}
        data-testid={`solution-card-${solution.slug}`}
        className="group relative flex h-full flex-col border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#F97316] hover:shadow-[0_20px_50px_-20px_rgba(249,115,22,0.3)]"
      >
        <div className="flex items-start justify-between">
          <span className="flex h-12 w-12 items-center justify-center border border-slate-200 text-[#0B132B] transition-colors duration-300 group-hover:border-[#F97316] group-hover:bg-[#F97316] group-hover:text-white">
            <Icon className="h-5 w-5" />
          </span>
          <span className="font-mono text-xs font-semibold text-slate-300 transition-colors group-hover:text-orange-500">
            0{index + 1}
          </span>
        </div>
        <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-slate-900">
          {solution.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{solution.short}</p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B132B] transition-colors group-hover:text-[#F97316]">
          Learn More
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>
    </Reveal>
  );
}
