import StatsSection from "./StatsSection";
import {
  BoltIcon,
  ChartBarIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const growthHighlights = [
  {
    title: "Realtime visibility",
    body: "Unified ledger streams transactions from POS, eCom, and wholesale in milliseconds.",
    icon: ChartBarIcon,
  },
  {
    title: "Predictive automation",
    body: "Intelligent forecasting allocates inventory to the right location before demand spikes.",
    icon: BoltIcon,
  },
  {
    title: "Enterprise-grade security",
    body: "Bank-level encryption and fine-grained permissions keep sensitive operations safe.",
    icon: ShieldCheckIcon,
  },
];

export default function BusinessGrowthSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-20 text-slate-900 transition-colors duration-300 dark:bg-[#020617] dark:text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,255,0.2),_rgba(241,245,249,0))] transition dark:bg-[radial-gradient(circle_at_top,_rgba(2,132,199,0.25),_rgba(2,6,23,0))]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500 dark:text-sky-200">
            Growth Engine
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-900 dark:text-white md:text-5xl">
            Ready to scale every storefront with{" "}
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
              Outlet Expense
            </span>
          </h2>
          <p className="mt-5 text-lg text-slate-600 dark:text-white/70">
            From boutique teams to international retailers, orchestrate every
            POS, warehouse, and billing operation from a single futuristic
            console.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {growthHighlights.map((highlight) => (
            <div
              key={highlight.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition hover:border-slate-400 dark:border-white/5 dark:bg-white/5 dark:hover:border-white/20"
            >
              <div className="h-12 w-12 rounded-2xl bg-slate-100 p-2 text-slate-600 dark:bg-white/10 dark:text-white">
                {highlight.icon && (
                  <highlight.icon
                    className="h-full w-full"
                    aria-hidden="true"
                  />
                )}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">
                {highlight.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-white/70">
                {highlight.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition dark:border-white/10 dark:bg-white/5">
          <StatsSection />
        </div>
      </div>
    </section>
  );
}
