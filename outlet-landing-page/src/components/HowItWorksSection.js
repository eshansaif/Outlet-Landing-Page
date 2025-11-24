import Image from "next/image";
import BuyNowButton from "./BuyNowButton";
import FirstSlider from "./FirstSlider";

const steps = [
  {
    title: "01. Unified intake",
    description:
      "Sync every SKU and channel into Outlet Expense within minutes using native Shopify, WooCommerce, and ERP connectors.",
  },
  {
    title: "02. Smart orchestration",
    description:
      "Rules engine balances inventory between retail, warehouse, and eCom nodes using data-driven forecasts and buffer thresholds.",
  },
  {
    title: "03. Instant fulfillment",
    description:
      "Pick-lists, courier labels, and invoices are generated automatically while managers monitor live profitability dashboards.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 text-slate-900 transition-colors duration-300 dark:bg-gradient-to-b dark:from-[#030712] dark:via-[#070F25] dark:to-[#030712] dark:text-white">
      <Image
        className="pointer-events-none absolute right-0 top-16 opacity-15 dark:opacity-20"
        src="/work_images.png"
        alt="Background decoration"
        height={500}
        width={260}
      />
      <div className="relative w-full px-6 sm:px-8 mx-auto flex max-w-6xl flex-col lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-500 dark:text-sky-300/70">
            Fulfillment Engine
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-slate-900 dark:text-white md:text-4xl">
            How{" "}
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
              Outlet Expense
            </span>{" "}
            keeps every point-of-sale synchronized
          </h2>
          <p className="text-slate-600 dark:text-white/70">
            Automate replenishment, fulfillment, and reconciliation across every
            POS and online channel with predictable precision.
          </p>

          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-md transition hover:border-slate-400 dark:border-white/5 dark:bg-white/5 dark:hover:border-white/20"
              >
                <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-sky-200">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <BuyNowButton
              message="Launch a workflow"
              link="/pricing#pricing-plans"
            />
            <span className="text-sm text-slate-500 dark:text-white/60">
              Onboard your team in under 48 hours.
            </span>
          </div>
        </div>

        {/* <div className="mt-10 w-full flex-1 lg:mt-0">
          <div className="rounded-[32px] border border-slate-200 bg-white p-3 shadow-[0_25px_90px_rgba(15,23,42,0.15)] transition dark:border-white/10 dark:bg-[#060D1F] dark:shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <FirstSlider />
          </div>
        </div> */}
      </div>
    </section>
  );
}
