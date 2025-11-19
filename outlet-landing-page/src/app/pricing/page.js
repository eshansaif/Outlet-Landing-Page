import PricingPlans from "@/components/PricingPlans";

const badges = [
  "Unlimited locations",
  "White-glove onboarding",
  "SOC 2 | ISO 27001",
  "24/7 success desk",
];

const comparisonLegend = [
  { label: "Starter", color: "from-blue-500 to-sky-400" },
  { label: "Premium", color: "from-emerald-500 to-teal-400" },
  { label: "Enterprise", color: "from-rose-500 to-amber-400" },
];

const checkIcon = (
  <svg className="h-4 w-4 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M16.704 5.292a1 1 0 010 1.414l-7.01 7.01a1 1 0 01-1.414 0l-3.01-3.01a1 1 0 111.414-1.415l2.303 2.304 6.303-6.303a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const xIcon = (
  <svg className="h-4 w-4 text-rose-400" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0l4.293 4.293 4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const Pricing = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}plan-option-list`, {
    next: { revalidate: 3600 },
  });
  const data = await res.json();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 dark:from-[#030615] dark:via-[#050b1d] dark:to-[#030615] dark:text-white">
      {/* Hero */}
      <section className="relative overflow-hidden pb-24 pt-10">
        <div className="absolute inset-0 opacity-40 blur-3xl">
          <div className="absolute inset-y-0 left-1/3 w-[800px] rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.3),_transparent_70%)] dark:bg-[radial-gradient(circle,_rgba(56,189,248,0.35),_transparent_70%)]" />
          <div className="absolute top-0 right-0 w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(16,185,129,0.25),_transparent_70%)] dark:bg-[radial-gradient(circle,_rgba(34,197,94,0.3),_transparent_70%)]" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-center">
          <div className="space-y-6 md:w-2/3">
            <p className="text-xs uppercase tracking-[0.5em] text-slate-500 dark:text-slate-300">
              Pricing
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Transparent pricing built for{" "}
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
                global retail operations
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-white/70">
              Choose a plan that fits your rollout stage. Every tier includes unlimited users,
              predictive inventory intelligence, and enterprise-grade security.
            </p>
            <div className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-slate-200/70 px-4 py-1 text-xs uppercase tracking-[0.3em] text-slate-500 dark:border-white/15 dark:text-white/60"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="rounded-[32px] border border-slate-200/80 bg-white/80 p-6 text-left shadow-2xl dark:border-white/10 dark:bg-white/5">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500 dark:text-white/60">
                Average ROI
              </p>
              <p className="mt-3 text-4xl font-semibold text-slate-900 dark:text-white">218%</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-white/70">
                Teams typically recover their full subscription cost within the first 3 months thanks
                to automation and shrink reduction.
              </p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-white/10" />
              <p className="mt-6 text-xs uppercase tracking-[0.4em] text-slate-500 dark:text-white/60">
                Average rollout
              </p>
              <p className="mt-3 text-2xl font-semibold">3 weeks</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
                Includes guided onboarding and migration kits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="-mt-10 pb-16" id="pricing-plans">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.45em] text-slate-500 dark:text-slate-300">
              Plans
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Scale from single store to multinational network
            </h2>
            <p className="mt-4 text-slate-600 dark:text-white/70">
              Toggle between monthly and annual billing. Annual plans include two months free.
            </p>
          </div>
          <div className="mt-12">
            <PricingPlans />
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="pb-28">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-xs uppercase tracking-[0.45em] text-slate-500 dark:text-slate-300">
              Feature matrix
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">Compare every capability</h2>
            <p className="max-w-2xl text-slate-600 dark:text-white/70">
              All plans include unlimited users, predictive inventory, and POS integrations.
              Upgrade for automation depth, advanced analytics, and compliance tooling.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {comparisonLegend.map((tier) => (
                <span
                  key={tier.label}
                  className={`inline-flex items-center gap-2 rounded-full border border-slate-200/60 px-4 py-1 text-sm dark:border-white/15`}
                >
                  <span className={`h-2 w-8 rounded-full bg-gradient-to-r ${tier.color}`} />
                  {tier.label}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto rounded-[32px] border border-slate-200/60 bg-white/80 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-white/5">
            <table className="w-full table-fixed divide-y divide-slate-200 text-sm dark:divide-white/10">
              <thead className="bg-gradient-to-r from-sky-500 via-blue-500 to-emerald-400 text-left text-xs uppercase tracking-[0.3em] text-white">
                <tr>
                  <th className="py-4 pl-6 text-left w-[40%]">Feature</th>
                  <th className="py-4 text-center w-[20%]">Starter</th>
                  <th className="py-4 text-center w-[20%]">Premium</th>
                  <th className="py-4 text-center w-[20%] pr-6">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-white/5">
                {data?.map((plan, index) => (
                  <tr key={plan.options} className={`${index % 2 === 0 ? 'bg-white dark:bg-white/5' : 'bg-slate-50/50 dark:bg-white/[0.02]'} hover:bg-blue-50/30 dark:hover:bg-white/10 transition-colors`}>
                    <td className="py-4 pl-6 font-medium text-slate-700 dark:text-white/80">
                      {plan.options}
                    </td>
                    <td className="py-4">
                      <div className="flex justify-center">
                        {plan.subscriptions_ids.includes("1") ? checkIcon : xIcon}
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex justify-center">
                        {plan.subscriptions_ids.includes("2") ? checkIcon : xIcon}
                      </div>
                    </td>
                    <td className="py-4 pr-6">
                      <div className="flex justify-center">
                        {plan.subscriptions_ids.includes("3") ? checkIcon : xIcon}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
