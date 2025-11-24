import Image from "next/image";

const heroHighlights = [
  {
    label: "Realtime inventory sync",
    detail: "2.4M monthly transactions harmonized",
  },
  {
    label: "Go live fast",
    detail: "Pre-built playbooks for 12+ workflows",
  },
  {
    label: "Global-ready",
    detail: "Multi-currency, multi-warehouse out of the box",
  },
];

const coreFeatures = [
  {
    icon: "/management_2.svg",
    title: "Inventory Intelligence",
    body: "Track every SKU movement with smart reorder signals, cycle counts, and channel allocation.",
    accent: "from-sky-500 to-blue-500",
  },
  {
    icon: "/management_1.svg",
    title: "Access Orchestration",
    body: "Role-based controls, biometric approvals, and audit logs ensure zero blind spots.",
    accent: "from-emerald-400 to-teal-500",
  },
  {
    icon: "/management_3.svg",
    title: "Payment & POS Bridges",
    body: "Connect eCom, marketplaces, and gateways with certified integrations.",
    accent: "from-indigo-400 to-fuchsia-500",
  },
  {
    icon: "/management_12.svg",
    title: "Return Automation",
    body: "Proactive workflows for receiving, refurb, and restock queues keep inventory accurate.",
    accent: "from-pink-400 to-rose-500",
  },
  {
    icon: "/management_5.svg",
    title: "Supplier Collaboration",
    body: "Unified vendor portal with purchase plans, lead times, and compliance checkpoints.",
    accent: "from-amber-400 to-orange-500",
  },
  {
    icon: "/management_6.svg",
    title: "Realtime Analytics",
    body: "Command center dashboards surface velocity, margin, and fulfillment KPIs second by second.",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    icon: "/management_7.svg",
    title: "Warehouse Control",
    body: "Directed put-away, wave picking, and zone alerts for multi-site fulfillment.",
    accent: "from-purple-500 to-violet-600",
  },
  {
    icon: "/management_8.svg",
    title: "Labels & Compliance",
    body: "Auto-generate barcodes, HS codes, and documentation aligned with market rules.",
    accent: "from-lime-400 to-emerald-500",
  },
  {
    icon: "/management_9.svg",
    title: "Sales & Invoicing",
    body: "Unified ledger keeps POS, subscriptions, and wholesale billing reconciled.",
    accent: "from-slate-500 to-slate-800",
  },
  {
    icon: "/management_10.svg",
    title: "Product Graph",
    body: "Unlimited attributes, bundles, and region-specific catalogs with instant propagation.",
    accent: "from-blue-500 to-emerald-400",
  },
  {
    icon: "/management_11.svg",
    title: "Order Lifecycle",
    body: "Promise dates, split shipments, and exception routing managed automatically.",
    accent: "from-fuchsia-500 to-purple-500",
  },
  {
    icon: "/management_9-1.svg",
    title: "Procure & Receive",
    body: "Smart ASN validation, dock scheduling, and variance flags keep counts precise.",
    accent: "from-red-400 to-orange-500",
  },
];

const workflowPillars = [
  {
    title: "Plan",
    caption: "Forecast, allocate, and budget across every channel.",
    bullets: [
      "Assortment & safety stock planning",
      "Warehouse capacity modeling",
      "Budget approvals with guardrails",
    ],
  },
  {
    title: "Execute",
    caption: "Digitize every operational motion end-to-end.",
    bullets: [
      "Multi-location fulfillment routing",
      "Guided picking & packing",
      "Carrier, exporter, HRM, finance modules",
    ],
  },
  {
    title: "Optimize",
    caption: "Surface signals, act instantly, measure impact.",
    bullets: [
      "Exception queues & automations",
      "Embedded insights by role",
      "Closed-loop feedback into planning",
    ],
  },
];

const spotlightCards = [
  {
    heading: "Executive Command Center",
    copy: "Live revenue, inventory valuation, and fulfillment SLA heatmaps. Drill down by region, channel, or store in seconds.",
    image: "/outletdash.png",
  },
  {
    heading: "Automation Canvas",
    copy: "Drag-and-drop triggers for transfers, approvals, and alerts. Launch new automations in minutes without code.",
    image: "/outlet-dashboard-mockup.png",
  },
];

const statHighlights = [
  {
    label: "Faster deployments",
    metric: "3 weeks",
    detail: "Average time to rollout a new market",
  },
  {
    label: "Shrink reduction",
    metric: "27%",
    detail: "Captured within 90 days of automation",
  },
  {
    label: "Process coverage",
    metric: "40+",
    detail: "Operational playbooks ready on day one",
  },
];

const accentBorder =
  "border border-slate-200/70 dark:border-white/10 shadow-[0_25px_70px_rgba(15,23,42,0.08)] dark:shadow-[0_25px_70px_rgba(2,6,23,0.8)]";

const Features = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-slate-50 to-white dark:from-[#030615] dark:via-[#050b1d] dark:to-[#030615] text-slate-900 dark:text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 blur-3xl">
          <div className="absolute inset-y-0 left-1/3 w-[800px] rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.35),_transparent_70%)]" />
          <div className="absolute top-10 right-0 w-[500px] rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.35),_transparent_70%)]" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 pb-24 pt-10 text-center">
          <span className="text-xs uppercase tracking-[0.5em] text-slate-500 dark:text-slate-300">
            Feature Suite
          </span>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            The operating system for{" "}
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
              future-ready inventory teams
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-white/70 md:w-3/4">
            Outlet Expense compresses months of integration and process work into days.
            Build a unified command center for inventory, finance, HRM, and exporters
            with a single subscription.
          </p>

          <div className="grid w-full gap-4 md:grid-cols-3">
            {heroHighlights.map((item) => (
              <div
                key={item.label}
                className={`rounded-3xl bg-white/80 px-6 py-5 text-left dark:bg-white/5 ${accentBorder}`}
              >
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-white/60">
                  {item.label}
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Feature Grid */}
      <section className="relative w-full overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(148,163,255,0.2),_transparent_65%)] dark:bg-[radial-gradient(circle,_rgba(59,130,246,0.2),_transparent_65%)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.45em] text-slate-500 dark:text-slate-300">
              Composable modules
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Every capability you need, ready to deploy
            </h2>
            <p className="mt-4 text-slate-600 dark:text-white/70">
              Mix and match modules to match your current operations. Scale to new regions,
              channels, or business models without migrating platforms.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((feature) => (
              <div
                key={feature.title}
                className={`group rounded-3xl bg-white/80 p-6 backdrop-blur dark:bg-white/5 ${accentBorder}`}
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.accent} ring-1 ring-white/50 dark:ring-white/20`}
                >
                  <Image src={feature.icon} alt={feature.title} width={32} height={32} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-white/70">{feature.body}</p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-sky-600 dark:text-sky-300">
                  Explore playbooks
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow pillars */}
      <section className="relative pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-16 text-white shadow-[0_35px_120px_rgba(15,23,42,0.8)]">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.45em] text-white/70">Lifecycle</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Plan • Execute • Optimize</h2>
            <p className="mt-4 text-white/70">
              One connected workspace so leaders, operators, and frontline teams stay perfectly in sync.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {workflowPillars.map((pillar) => (
              <div key={pillar.title} className="rounded-3xl bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.4em] text-slate-300">{pillar.title}</p>
                <h3 className="mt-4 text-xl font-semibold">{pillar.caption}</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight */}
      <section className="relative pb-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          {spotlightCards.map((card) => (
            <div
              key={card.heading}
              className={`rounded-[36px] bg-white p-8 dark:bg-[#0b1221] ${accentBorder}`}
            >
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500 dark:text-white/60">
                Spotlight
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">{card.heading}</h3>
              <p className="mt-4 text-slate-600 dark:text-white/70">{card.copy}</p>
              <div className="mt-8 rounded-3xl bg-slate-50 p-4 dark:bg-white/5">
                <Image
                  src={card.image}
                  alt={card.heading}
                  width={520}
                  height={320}
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats + CTA */}
      <section className="pb-32">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-center">
          <div className={`flex-1 rounded-[36px] bg-white/80 p-8 dark:bg-white/5 ${accentBorder}`}>
            <p className="text-xs uppercase tracking-[0.45em] text-slate-500 dark:text-slate-300">
              Proof in motion
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {statHighlights.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-semibold text-slate-900 dark:text-white">{stat.metric}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-white/60">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-white/70">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`flex-1 rounded-[36px] bg-gradient-to-br from-sky-500 to-emerald-400 p-8 text-white shadow-2xl`}>
            <p className="text-xs uppercase tracking-[0.45em]">Next steps</p>
            <h3 className="mt-4 text-3xl font-semibold">
              Launch outlet-grade inventory orchestration in weeks, not quarters.
            </h3>
            <p className="mt-4 text-white/80">
              Book a session with our product team to co-create your deployment roadmap and
              access enterprise onboarding perks.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-white/15 px-4 py-2">White-glove onboarding</span>
              <span className="rounded-full bg-white/15 px-4 py-2">Migration assistance</span>
              <span className="rounded-full bg-white/15 px-4 py-2">24/7 success desk</span>
            </div>

            <a
              href="https://pos.outletexpense.com/signup"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-slate-900 font-semibold transition hover:bg-slate-100"
            >
              Talk to our team
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L5.25 18.75M17.25 6.75H6.75M17.25 6.75V17.25" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
