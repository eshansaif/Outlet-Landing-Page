import Image from "next/image";

const iconGradients = [
  "bg-gradient-to-br from-emerald-400 to-cyan-500",
  "bg-gradient-to-br from-sky-500 to-blue-500",
  "bg-gradient-to-br from-fuchsia-500 to-purple-500",
  "bg-gradient-to-br from-amber-400 to-orange-500",
  "bg-gradient-to-br from-violet-500 to-indigo-500",
  "bg-gradient-to-br from-pink-500 to-rose-500",
];

const features = [
  { icon: "/management_1.svg", title: "Access\nManagement" },
  { icon: "/management_2.svg", title: "Inventory\nControl System" },
  { icon: "/management_3.svg", title: "Payment\nGateway\nIntegration" },
  { icon: "/management_12.svg", title: "Product\nReturn\nManagement" },
  { icon: "/management_5.svg", title: "Vendor\nManagement" },
  { icon: "/management_6.svg", title: "Realtime\nAnalytics" },
  { icon: "/management_7.svg", title: "Warehouse\nController" },
  { icon: "/management_8.svg", title: "Labeling &\nBarcoding" },
  { icon: "/management_9.svg", title: "Sales &\nInvoicing" },
  { icon: "/management_10.svg", title: "Product\nManagement" },
  { icon: "/management_11.svg", title: "Exporter\nManagement" },
  { icon: "/management_9-1.svg", title: "Dynamic\nHRM" },
];

export default function InventoryManagementSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-20 text-slate-900 transition-colors duration-300 dark:bg-[#020617] dark:text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(148,163,255,0.2),_rgba(241,245,249,0))] transition dark:bg-[radial-gradient(circle,_rgba(14,165,233,0.15),_rgba(2,6,23,0))]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-sky-300/70">
            Autopilot Stack
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
            Centralized & multi-channel inventory management
          </h2>
          <p className="mt-4 text-slate-600 dark:text-white/70">
            Every operational primitive you need to orchestrate POS, eCom,
            wholesale, and marketplace demand from a single cockpit.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg transition hover:border-slate-400 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/40"
            >
              <div className="flex items-center justify-between">
                <div
                  className={`rounded-full p-3 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] ring-1 ring-slate-900/10 transition dark:ring-white/10 ${
                    iconGradients[idx % iconGradients.length]
                  }`}
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    height={28}
                    width={28}
                    className="h-7 w-7 object-contain mix-blend-luminosity dark:mix-blend-normal"
                  />
                </div>
              </div>
              <p className="mt-4 whitespace-pre-line text-lg font-semibold leading-tight text-slate-900 dark:text-white">
                {feature.title}
              </p>
              <p className="mt-3 text-sm text-slate-600 dark:text-white/70">
                Microservices-ready APIs with event streaming so every workflow
                stays synced in real time.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
