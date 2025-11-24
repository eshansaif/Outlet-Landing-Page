import Image from "next/image";
import BuyNowButton from "./BuyNowButton";

const accolades = [
  { label: "Global POS installs", value: "420+" },
  { label: "Avg. ROI in 12 months", value: "218%" },
  { label: "Countries supported", value: "27" },
];

const featuredClients = [
  {
    name: "Brothers Mobile",
    industry: "Multi-brand retail",
    logo:
      "https://www.brothersmobilebd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload__4_-removebg-preview-removebg-preview%20(1).4b6af063.png&w=256&q=75&dpl=dpl_cxXAviRRxxRvewfH55T3iWYJzGet",
  },
  {
    name: "Apple Mart BD",
    industry: "Electronics marketplace",
    logo:
      "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834693.png",
  },
  {
    name: "Taiba Mart",
    industry: "Omnichannel retail",
    logo:
      "https://taibamart.com/_next/image?url=https%3A%2F%2Fwww.outletexpense.xyz%2Fuploads%2F243-Akhter-Hossain%2F1759820422.png&w=256&q=75",
  },
  {
    name: "MKS Outfit",
    industry: "Fashion commerce",
    logo:
      "https://www.outletexpense.xyz/uploads/215-Rifat-Hasan/1762859683.png",
  },
  {
    name: "Perfect Gadget BD",
    industry: "Specialty retail",
    logo:
      "https://www.perfectgadgetbd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPerfectGadgetBD-logo%20(1)%201.953d5536.png&w=128&q=75&dpl=dpl_Gnozm5sN5kDuE9hYgX68JMzafQty",
  },
  {
    name: "Satsuna Corporation",
    industry: "Media & content",
    logo:
      "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834457.png",
  },
  {
    name: "Squad Innovators",
    industry: "Digital commerce studio",
    logo:
      "https://squadinnovators.com/_next/static/media/Final-logo.9b8b0c50.png",
  },
  {
    name: "Afrin Pharma",
    industry: "Healthcare retail",
    logo: "/Afrin-Pharma.jpg",
  },
  {
    name: "DLM Properties",
    industry: "Real estate group",
    logo: "/DLM-Properties.jpg",
  },
];

export default function TrustedBySection() {

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-16 text-slate-900 transition-colors duration-300 dark:bg-[#010818] dark:text-white">
      <div className="pointer-events-none absolute inset-y-0 left-[45%] hidden w-1/2 rounded-full bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-emerald-400/10 blur-3xl md:block" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-white/20" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-center md:px-0">
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-500 dark:text-white/60">
            Powered Merchants
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

        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {featuredClients.map((client) => (
              <figure
                key={client.name}
                className="group relative flex h-32 flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 p-4 shadow-[0_15px_40px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:shadow-[0_20px_60px_rgba(2,6,23,0.6)]"
              >
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="h-full w-full bg-gradient-to-br from-sky-500/10 via-blue-500/5 to-emerald-400/10 blur-2xl" />
                </div>
                <div className="relative h-14 w-full">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    sizes="(max-width: 768px) 120px, 160px"
                    className="object-contain"
                  />
                </div>
                <div className="relative">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {client.name}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-white/60">
                    {client.industry}
                  </p>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
