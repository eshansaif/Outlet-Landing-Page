import Image from "next/image";
import BuyNowButton from "./BuyNowButton";

const accolades = [
  { label: "Global POS installs", value: "420+" },
  { label: "Avg. ROI in 12 months", value: "218%" },
  { label: "Countries supported", value: "27" },
];

export default function TrustedBySection() {
  const clientLogos = [
    "/brothers.jpg",
    "/iluxurybd.jpg",
    "/muslim.jpg",
    "/rafi.jpg",
    "/ap.jpg",
    "/barcode.jpg",
    "/lx.jpg",
    "/inaya.jpg",
  ];

  return (
    <section className="relative w-full bg-slate-50 py-16 text-slate-900 transition-colors duration-300 dark:bg-[#010818] dark:text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-white/20" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-center md:px-0">
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-500 dark:text-white/60">
            Powered Merchants and me
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 dark:text-white">
            POS experiences trusted by{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              100+ design-forward brands
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-white/70">
            Meet the retailers shaping futuristic storefronts, marketplaces, and
            omnichannel experiences with Outlet Expense.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            {accolades.map((badge) => (
              <div
                key={badge.label}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-left shadow-sm transition hover:border-slate-400 dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-white/60">
                  {badge.label}
                </p>
                <p className="text-xl font-semibold text-slate-900 dark:text-white">
                  {badge.value}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <BuyNowButton
              message="See Client Feedback"
              link="#client-feedback"
            />
            <span className="text-sm text-slate-500 dark:text-white/60">
              SOC 2 | ISO 27001 | PCI-DSS certified
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-wrap items-center justify-center gap-4">
          {clientLogos.map((src, idx) => (
            <figure
              key={idx}
              className="flex h-24 w-40 items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-slate-400 dark:border-white/5 dark:bg-white/5"
            >
              <Image
                src={src}
                alt={`Client logo ${idx + 1}`}
                height={50}
                width={120}
                className="object-contain"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
