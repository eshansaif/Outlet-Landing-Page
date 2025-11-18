import Image from "next/image";
import Link from "next/link";
import BuyNowButton from "./BuyNowButton";
import TypedWithGradient from "./TypedWithGradient";

const quickStats = [
  { label: "Active Stores", value: "500+" },
  { label: "Transactions / mo", value: "2.4M" },
  { label: "Avg. uptime", value: "99.99%" },
];

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 pb-20 pt-8 text-slate-900 transition-colors duration-300 dark:bg-gradient-to-br dark:from-[#020617] dark:via-[#081735] dark:to-[#020617] dark:text-white">
      <div className="pointer-events-none absolute inset-0 opacity-20 transition dark:opacity-30">
        <div className="absolute inset-y-0 left-1/4 w-[45rem] rounded-full bg-[radial-gradient(circle,_rgba(99,102,241,0.25)_0%,_rgba(248,250,252,0)_70%)] blur-3xl dark:bg-[radial-gradient(circle,_rgba(59,130,246,0.35)_0%,_rgba(8,23,53,0)_70%)]" />
        <div className="absolute inset-y-0 right-0 w-[35rem] rounded-full bg-[radial-gradient(circle,_rgba(52,211,153,0.2)_0%,_rgba(248,250,252,0)_70%)] blur-3xl dark:bg-[radial-gradient(circle,_rgba(20,184,166,0.35)_0%,_rgba(8,23,53,0)_70%)]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] bg-cover opacity-5 mix-blend-multiply transition dark:opacity-15 dark:mix-blend-screen" />

      <div className="relative mx-auto flex w-full flex-col items-center gap-12 px-6 md:max-w-6xl md:flex-row md:px-0">
        <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-900 transition dark:text-white sm:text-5xl lg:text-6xl">
            Reimagine point-of-sale with{" "}
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
              Outlet Expense
            </span>
          </h1>

          <div className="mt-5 text-lg text-slate-600 dark:text-white/70">
            Intelligent inventory orchestration, unified payments, and immersive
            analytics—built for global franchises and fast-growing retail
            brands.
          </div>

          <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-4 md:justify-start">
            <BuyNowButton
              message="Explore Pricing"
              link="/pricing#pricing-plans"
            />
            <Link
              href="/features"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 dark:border-white/20 dark:text-white dark:hover:border-white/40"
            >
              See Live Demo
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.25 6.75L5.25 18.75M17.25 6.75H6.75M17.25 6.75V17.25"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="relative w-full md:w-1/2">
          <div className="absolute -top-8 right-6 z-20 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm.font-medium text-slate-700 shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-white/80">
            Real-time inventory sync ⚡
          </div>
          <div className="relative rounded-[32px] border border-slate-200 bg-white p-1 shadow-[0_35px_120px_rgba(15,23,42,0.2)] transition dark:border-white/20 dark:bg-white/10">
            <div className="rounded-[28px] bg-white p-4 dark:bg-[#0B1221]">
              <Image
                className="rounded-3xl shadow-[0_35px_120px_rgba(15,23,42,0.15)] dark:shadow-[0_35px_120px_rgba(15,23,42,0.75)]"
                src="/outletdash.png"
                alt="Outlet Dashboard"
                height={480}
                width={720}
                priority
              />
            </div>
          </div>
          <div className="absolute -bottom-6 left-10 z-10 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm text-slate-700 shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-white/80">
            Automated insights enabled ✨
          </div>
        </div>
      </div>

      <div className="mt-10 px-6 md:max-w-6xl flex mx-auto flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg transition dark:border-white/10 dark:bg-white/5 md:flex-row md:items-center">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-sm uppercase tracking-widest text-slate-500 dark:text-white/60">
            Experience the flow
          </span>
          <div className="mt-2 w-full min-h-[100px] overflow-hidden text-center md:min-w-[320px] md:text-left">
            <TypedWithGradient message="  Goodbye To Spreadsheets!" />
          </div>
        </div>
        <div className="h-px w-full bg-slate-200 md:h-12 md:w-px dark:bg-white/10" />
        <div className="grid w-full grid-cols-3 gap-3 text-center text-sm text-slate-600 dark:text-white/70 md:text-left">
          {quickStats.map((stat) => (
            <div key={stat.label}>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                {stat.value}
              </p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
