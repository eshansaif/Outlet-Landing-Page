"use client";
import Image from "next/image";
import Link from "next/link";

const clients = [
  {
    id: 1,
    name: "Gadget Bodda",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757832351.jpg",
    website: "https://www.gadgetboddaa.com/",
  },
  {
    id: 2,
    name: "Mobile Club",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757832398.jpg",
    website: "https://www.mobileclub.co/",
  },
  {
    id: 3,
    name: "Satsuna Corporation",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834457.png",
    website: "https://www.satsuna.co.jp",
  },
  {
    id: 4,
    name: "CeL TeL",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834023.png",
    website: "https://www.celtelbd.com/",
  },
  {
    id: 5,
    name: "Morshed Mart",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757833877.png",
    website: "https://www.morshedmart.com/",
  },
  {
    id: 6,
    name: "Elite",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757833939.png",
    website: "https://www.eliteebd.com/",
  },
  {
    id: 7,
    name: "Apple Newton Bd",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834132.jpg",
    website: "https://applenewtonbd.com/",
  },
  {
    id: 8,
    name: "Shahensha Gadget",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834292.png",
    website: "https://shahenshahgadgets.com",
  },
  {
    id: 9,
    name: "Apple Mart BD",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834693.png",
    website: "https://www.applemartbd.com",
  },
  {
    id: 10,
    name: "EmusFashion",
    logo: "https://www.outletexpense.xyz/uploads/238-MD.-Sarawer-Jahan-Evan/1758168402.png",
    website: "https://emusfashion.com/",
  },
  {
    id: 11,
    name: "Brothers Mobile & Accessories",
    logo: "https://www.brothersmobilebd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload__4_-removebg-preview-removebg-preview%20(1).4b6af063.png&w=256&q=75&dpl=dpl_cxXAviRRxxRvewfH55T3iWYJzGet",
    website: "https://www.brothersmobilebd.com/",
  },
  {
    id: 12,
    name: "Squad Innovators",
    logo: "https://squadinnovators.com/_next/static/media/Final-logo.9b8b0c50.png",
    website: "https://squadinnovators.com/",
  },
  {
    id: 13,
    name: "Outlet Expense",
    logo: "https://outletexpense.com/favicon.ico",
    website: "https://outletexpense.com/",
  },
  {
    id: 14,
    name: "Apple Daddy",
    logo: "https://www.appledaddybd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffavicon.a0e81e1a.png&w=384&q=75&dpl=dpl_imvdJGmx7Rx6G9viBLLycAbU1M3f",
    website: "https://www.appledaddybd.com/",
  },
  {
    id: 15,
    name: "Perfect Gadget BD",
    logo: "https://www.perfectgadgetbd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPerfectGadgetBD-logo%20(1)%201.953d5536.png&w=128&q=75&dpl=dpl_Gnozm5sN5kDuE9hYgX68JMzafQty",
    website: "https://perfectgadgetbd.com/",
  },
  {
    id: 16,
    name: "Taiba Mart",
    logo: "https://taibamart.com/_next/image?url=https%3A%2F%2Fwww.outletexpense.xyz%2Fuploads%2F243-Akhter-Hossain%2F1759820422.png&w=256&q=75",
    website: "https://taibamart.com/",
  },
  {
    id: 17,
    name: "PixelBD",
    logo: "https://www.gpixelbd.com/_next/image?url=https%3A%2F%2Fwww.outletexpense.xyz%2Fuploads%2F259-Shydul-Amir-Jihad%2F1761213710.png&w=96&q=75&dpl=dpl_DPrkuwpkUuyT8fShzus8ps3JWz1D",
    website: "https://www.gpixelbd.com/",
  },
  {
    id: 18,
    name: "MKS Outfit",
    logo: "https://www.outletexpense.xyz/uploads/215-Rifat-Hasan/1762859683.png",
    website: "https://www.mksoutfit.com/",
  },
  {
    id: 19,
    name: "EmusCreation",
    logo: "https://www.emuscreation.com/favicon.ico",
    website: "https://www.emuscreation.com/",
  },
  {
    id: 20,
    name: "Apple Dream BD",
    logo: "https://appledreambd.com/logo.png",
    website: "https://appledreambd.com/",
  },
];

const accentBorder =
  "border border-slate-200/70 dark:border-white/10 shadow-[0_25px_70px_rgba(15,23,42,0.08)] dark:shadow-[0_25px_70px_rgba(2,6,23,0.8)]";

const Clients = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-slate-50 to-white dark:from-[#030615] dark:via-[#050b1d] dark:to-[#030615] text-slate-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 blur-3xl">
          <div className="absolute inset-y-0 left-1/3 w-[800px] rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.35),_transparent_70%)]" />
          <div className="absolute top-10 right-0 w-[500px] rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.35),_transparent_70%)]" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 pb-24 pt-10 text-center">
          <span className="text-xs uppercase tracking-[0.5em] text-slate-500 dark:text-slate-300">
            Our Portfolio
          </span>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Trusted by Leading{" "}
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
              Businesses Worldwide
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-white/70 md:w-3/4">
            From startups to established enterprises, we've helped businesses transform their operations
            with cutting-edge inventory management and POS solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-white/80">
              20+ Active Clients
            </span>
            <span className="rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-white/80">
              Multiple Industries
            </span>
            <span className="rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-white/80">
              Global Reach
            </span>
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="relative w-full pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {clients.map((client) => (
              <Link
                key={client.id}
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center justify-center gap-4 rounded-3xl bg-white/80 p-8 transition-all duration-300 hover:scale-105 dark:bg-white/5 ${accentBorder} hover:shadow-2xl`}
              >
                <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-white p-2 dark:bg-white/10">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                    unoptimized
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                    {client.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 dark:text-white/60">
                    View Website →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative w-full py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className={`rounded-3xl bg-white/80 p-10 dark:bg-white/5 ${accentBorder}`}>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Why businesses{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                choose us
              </span>
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-12">
              <div className="text-center">
                <p className="text-5xl font-bold text-blue-600 dark:text-blue-400">20+</p>
                <p className="mt-2 text-sm uppercase tracking-wider text-slate-500 dark:text-white/60">
                  Active Clients
                </p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-blue-600 dark:text-blue-400">99.9%</p>
                <p className="mt-2 text-sm uppercase tracking-wider text-slate-500 dark:text-white/60">
                  Uptime
                </p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-blue-600 dark:text-blue-400">24/7</p>
                <p className="mt-2 text-sm uppercase tracking-wider text-slate-500 dark:text-white/60">
                  Support
                </p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-blue-600 dark:text-blue-400">5+</p>
                <p className="mt-2 text-sm uppercase tracking-wider text-slate-500 dark:text-white/60">
                  Countries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-20">
        <div className="absolute inset-0 opacity-30 blur-3xl">
          <div className="absolute bottom-0 right-1/4 w-[600px] rounded-full bg-[radial-gradient(circle,_rgba(52,211,153,0.2),_transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <div className={`rounded-3xl bg-white/80 p-10 dark:bg-white/5 ${accentBorder}`}>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Ready to join our{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                success stories?
              </span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-white/70 mx-auto md:w-3/4">
              Transform your business operations with our cutting-edge inventory management and POS solutions.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Get Started Today
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition-all duration-300 hover:border-slate-400 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-white/40"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;

