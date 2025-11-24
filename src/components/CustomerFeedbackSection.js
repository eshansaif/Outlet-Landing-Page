import Image from "next/image";

const testimonials = [
  {
    id: 1,
    text: "Performance dashboards push real-time signals to every retail lead — our forecasting accuracy shot up overnight.",
    name: "Anwar Khan",
    company: "I Luxury BD",
    image: "/user3.jpg",
  },
  {
    id: 2,
    text: "Outlet Expense feels like the neural network for our POS ecosystem. Automation replaced five disjointed tools.",
    name: "H M Abdul Kader",
    company: "Muslim Pharma",
    image: "/user2.jpg",
  },
  {
    id: 3,
    text: "We rolled out global inventory harmonization in under two weeks. The UI feels futuristic yet practical.",
    name: "Robert Johnson",
    company: "BizSolutions",
    image: "/user1.jpg",
  },
];

export default function CustomerFeedbackSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-slate-50 py-24 text-slate-900 transition-colors duration-300 dark:bg-[#020617] dark:text-white"
      id="client-feedback"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(148,163,255,0.2),_rgba(241,245,249,0))] transition dark:bg-[radial-gradient(circle,_rgba(59,130,246,0.25),_rgba(2,6,23,0))]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500 dark:text-sky-300/70">
            Client Signal
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white md:text-5xl">
            Teams building futuristic storefronts with Outlet Expense
          </h2>
          <p className="mt-4 text-slate-600 dark:text-white/70">
            Rated 4.9/5 across major retail and SaaS marketplaces. The platform
            that serious POS teams rely on.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className="group rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-[0_20px_60px_rgba(15,23,42,0.15)] transition hover:border-slate-400 dark:border-white/10 dark:bg-gradient-to-b dark:from-[#0b1224] dark:via-[#081022] dark:to-[#050b1d] dark:text-white dark:shadow-[0_25px_90px_rgba(0,0,0,0.65)]"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`rounded-full p-1 ring-2 ring-transparent dark:ring-white/10 ${
                    idx === 0
                      ? "bg-gradient-to-br from-sky-400 to-blue-500"
                      : idx === 1
                      ? "bg-gradient-to-br from-emerald-400 to-cyan-500"
                      : "bg-gradient-to-br from-fuchsia-500 to-purple-500"
                  }`}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    height={54}
                    width={54}
                    className="rounded-full border-2 border-white/70 dark:border-white/20"
                  />
                </div>
                <div>
                  <p className="text-base font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-white/60">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-white/80">
                “{testimonial.text}”
              </p>
              <div className="mt-6 flex items-center gap-1 text-amber-400 dark:text-amber-300">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.558 4.768a1 1 0 00.95.69h5.02c.969 0 1.372 1.24.588 1.81l-4.066 2.95a1 1 0 00-.364 1.118l1.558 4.768c.3.922-.755 1.688-1.54 1.118l-4.066-2.95a1 1 0 00-1.176 0l-4.066 2.95c-.784.57-1.838-.196-1.54-1.118l1.558-4.768a1 1 0 00-.364-1.118L2.43 9.195c-.783-.57-.38-1.81.588-1.81h5.02a1 1 0 00.95-.69L9.049 2.927z" />
                  </svg>
                ))}
                <span className="ml-2 text-xs text-slate-500 dark:text-white/60">
                  4.9/5 rating
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
