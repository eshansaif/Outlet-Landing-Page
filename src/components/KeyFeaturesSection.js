import Image from "next/image";
import BuyNowButton from "./BuyNowButton";

const features = [
  {
    label: "Adaptive Permission Layers",
    detail: "Granular POS roles, biometric sign-in, and audit-ready logs.",
  },
  {
    label: "Centralized Inventory Graph",
    detail: "Visualize every SKU flow across regions in real time.",
  },
  {
    label: "Predictive Insights",
    detail: "Smart guidance recommends transfers, replenishment, and promos.",
  },
  {
    label: "Composable Product Data",
    detail: "Unlimited attributes, bundles, and collections with APIs.",
  },
];

export default function KeyFeaturesSection() {
  return (
    <section className="w-full bg-white py-24 transition-colors duration-300 dark:bg-[#0f1629]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 md:flex-row md:px-0">
        <div className="relative w-full md:w-1/2">
          <div className="absolute inset-0 rounded-[48px] bg-gradient-to-r from-sky-300/25 to-emerald-300/20 blur-3xl dark:from-[#0f172a] dark:via-[#0b1224] dark:to-transparent" />
          <div className="relative rounded-[40px] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-8 shadow-[0_35px_120px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[radial-gradient(circle_at_top,_rgba(37,71,165,0.55),_rgba(6,11,25,0.95))] dark:shadow-[0_35px_140px_rgba(2,6,23,0.85)]">
            <Image
              className="mx-auto rounded-3xl shadow-[0_35px_120px_rgba(15,23,42,0.15)] dark:shadow-[0_35px_120px_rgba(15,23,42,0.45)]"
              src="/outlet-dashboard-mockup.png"
              alt="Dashboard mockup"
              height={640}
              width={640}
            />
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-white/70">
              <span className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-slate-700 dark:border-transparent dark:bg-white/10 dark:text-white">
                Omnichannel POS
              </span>
              <span className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-slate-700 dark:border-transparent dark:bg-white/10 dark:text-white">
                Predictive transfers
              </span>
              <span className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-slate-700 dark:border-transparent dark:bg-white/10 dark:text-white">
                Ledger sync
              </span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <p className="text-sm uppercase tracking-[0.4em] text-sky-500 dark:text-sky-300">
            Key Capabilities
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
            Our automated solutions for{" "}
            <span className="bg-gradient-to-r from-blue-500 to-emerald-300 bg-clip-text text-transparent">
              inventory management
            </span>{" "}
            & fulfillment
          </h2>
          <p className="mt-4 text-slate-600 dark:text-white/70">
            A modular platform purpose-built for modern POS teams that want
            speed, security, and operational clarity.
          </p>

          <ul className="mt-10 space-y-5">
            {features.map((feature) => (
              <li
                key={feature.label}
                className="group rounded-2xl border border-slate-200/70 p-4 transition hover:border-slate-400 dark:border-white/5 dark:bg-white/5 dark:hover:border-white/30"
              >
                <div className="flex items-center gap-3 text-slate-900 dark:text-white">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/10 text-sky-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.6}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <p className="font-semibold">{feature.label}</p>
                </div>
                <p className="pl-11 text-sm text-slate-600 dark:text-white/70">
                  {feature.detail}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <BuyNowButton message="See All Features" link="/features" />
          </div>
        </div>
      </div>
    </section>
  );
}
