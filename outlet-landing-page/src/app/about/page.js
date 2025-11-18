"use client";
import Image from "next/image";

const principles = [
  {
    title: "Invent fast",
    body: "We prototype relentlessly, co-building with retailers to shave months off deployment timelines.",
  },
  {
    title: "Operate globally",
    body: "Compliance, currencies, and languages are included by default so expansion isn't an afterthought.",
  },
  {
    title: "Partner deeply",
    body: "Every account gets a dedicated success pod for strategy, implementation, and optimization.",
  },
];

const stats = [
  {
    label: "Markets launched",
    value: "18",
    detail: "Across Asia, EU, and North America",
  },
  {
    label: "Fulfillment tasks automated",
    value: "48M+",
    detail: "Per year across our customer base",
  },
  {
    label: "Client satisfaction",
    value: "100%",
    detail: "Backed by 24/7 support & SLAs",
  },
];

const leadership = [
  { name: "Nishad Parvez", role: "Founder & CEO" },
  { name: "Squad Innovators", role: "BASIS Member Company" },
  { name: "Global Partner Team", role: "Engineering, Product, Success" },
];

const timeline = [
  {
    year: "2019",
    title: "Founding",
    detail: "Built the first Outlet Expense prototype to unite POS, finance, HRM, and exporter workflows.",
  },
  {
    year: "2021",
    title: "Scale",
    detail: "Expanded to enterprise retailers, introduced automation canvas and predictive inventory graph.",
  },
  {
    year: "2024",
    title: "Globalization",
    detail: "Launched multi-region data residency, biometric approvals, and white-glove rollout programs.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 dark:from-[#020617] dark:via-[#050b1d] dark:to-[#020617] dark:text-white">
      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-10">
        <div className="absolute inset-0 opacity-40 blur-3xl">
          <div className="absolute inset-y-0 left-1/3 w-[700px] rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.35),_transparent_70%)] dark:bg-[radial-gradient(circle,_rgba(56,189,248,0.4),_transparent_70%)]" />
          <div className="absolute top-0 right-0 w-[400px] rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.3),_transparent_70%)]" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-center">
          <div className="space-y-6 md:w-1/2">
            <p className="text-xs uppercase tracking-[0.5em] text-slate-500 dark:text-slate-300">
              Squad Innovators
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Building the{" "}
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
                control tower
              </span>{" "}
              for next-generation POS and inventory teams
            </h1>
            <p className="text-lg text-slate-600 dark:text-white/70">
              We are a BASIS member company from Bangladesh, scaling globally with a singular mission:
              give ambitious retailers a futuristic operating system that blends inventory orchestration,
              finance, HRM, and exporter workflows into one command center.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-slate-200/80 px-4 py-2 text-slate-600 dark:border-white/20 dark:text-white/70">
                BASIS Accredited
              </span>
              <span className="rounded-full border border-slate-200/80 px-4 py-2 text-slate-600 dark:border-white/20 dark:text-white/70">
                Global rollouts
              </span>
              <span className="rounded-full border border-slate-200/80 px-4 py-2 text-slate-600 dark:border-white/20 dark:text-white/70">
                Dedicated success pods
              </span>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-[32px] border border-slate-200/70 bg-white/80 p-10 text-center shadow-2xl dark:border-white/10 dark:bg-white/5">
              <Image
                src="/Final-logo.png"
                alt="Outlet Expense Logo"
                width={320}
                height={160}
                className="mx-auto h-24 w-auto object-contain"
              />
              <p className="mt-6 text-sm uppercase tracking-[0.4em] text-slate-500 dark:text-white/60">
                Members of
              </p>
              <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">BASIS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.45em] text-slate-500 dark:text-slate-300">
              Our principles
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">What guides our product and teams</h2>
            <p className="mt-4 text-slate-600 dark:text-white/70">
              We obsess over reducing operational noise so inventory leaders can focus on growth, not spreadsheets.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-lg backdrop-blur transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-white/60">
                  {item.title}
                </p>
                <p className="mt-4 text-slate-700 dark:text-white/80">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl rounded-[40px] border border-slate-200/70 bg-white/80 p-10 text-center shadow-2xl dark:border-white/10 dark:bg-white/5">
          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-sm uppercase tracking-[0.4em] text-slate-500 dark:text-white/60">
                  {stat.label}
                </p>
                <p className="mt-4 text-4xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-white/70">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.45em] text-slate-500 dark:text-slate-300">
              Leadership
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Teams behind Outlet Expense</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {leadership.map((lead) => (
              <div
                key={lead.name}
                className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 text-center shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-xl font-semibold text-slate-900 dark:text-white">{lead.name}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-white/60">
                  {lead.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[36px] border border-slate-200/70 bg-white/80 p-8 shadow-2xl dark:border-white/10 dark:bg-white/5">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500 dark:text-slate-300">Milestones</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">
              From boutique studio to international rollout partner
            </h2>
            <div className="mt-10 space-y-6">
              {timeline.map((entry) => (
                <div
                  key={entry.year}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-200/60 bg-white/70 p-6 dark:border-white/10 dark:bg-white/5 md:flex-row md:items-center"
                >
                  <div className="md:w-32">
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">{entry.year}</p>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-slate-900 dark:text-white">{entry.title}</p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-white/70">{entry.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;