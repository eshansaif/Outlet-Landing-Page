"use client";
import { useState } from "react";
import Image from "next/image";

const slides = [
  {
    title: "Inventory Management",
    description:
      "Grow every storefront effortlessly with Outlet Expense’s multi-channel inventory brain. Set automations once, and let the platform balance every channel in real time.",
    bullets: [
      "Create limitless warehouses and zones.",
      "Store, track, and audit every product variation.",
      "Start selling immediately with zero operational drag.",
    ],
    image: "/salechart.png",
  },
  {
    title: "Exporter Feature",
    description:
      "Streamline international operations with automated invoicing, currency-aware tracking, and logistics-ready documentation from a single interface.",
    bullets: [
      "Configure exporter and carrier profiles in minutes.",
      "Complete multi-currency payments without leaving the POS.",
      "Import and reconcile products with guided workflows.",
    ],
    image: "/exporter_billing.png",
  },
  {
    title: "Human Resource Management",
    description:
      "Outlet Expense's HRM effortlessly manages roles, designations, departments, and employees so teams stay coordinated.",
    bullets: [
      "Assign and manage roles and designations for every employee.",
      "Simplify payroll processing with integrated HR and finance.",
      "Organize teams into departments to streamline approvals.",
    ],
    image: "/hrm_slide.png",
  },
  {
    title: "Finance Management",
    description:
      "Track every transaction with detailed ledgers, party lists, and journal entries designed for fast-moving retail brands.",
    bullets: [
      "Organize and track all transactions with a detailed chart of accounts.",
      "Enable secure internal or external fund transfers in a click.",
      "Maintain a comprehensive party list for seamless settlements.",
    ],
    image: "/finance-slide.svg",
  },
];

export default function FeatureHighlightsSection() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 text-slate-900 transition-colors duration-300 dark:bg-[#050b1d] dark:text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(148,163,255,0.18),_rgba(255,255,255,0))] blur-3xl opacity-70 dark:bg-[radial-gradient(circle,_rgba(59,130,246,0.18),_rgba(2,6,23,0))]" />
      <div className="relative mx-auto max-w-5xl px-6 md:px-0">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500 dark:text-slate-300">
              Guided Workflows
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Smarter inventory orchestration{" "}
              <span className="bg-gradient-to-r from-sky-500 to-emerald-300 bg-clip-text text-transparent">
                with interactive playbooks
              </span>
            </h2>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-slate-400 dark:border-white/20 dark:text-white dark:hover:border-white/40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.6}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-slate-400 dark:border-white/20 dark:text-white dark:hover:border-white/40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.6}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-xl dark:border-white/10 dark:from-[#09122b] dark:to-[#050b1d]">
          {slides.map((slide, idx) => (
            <div
              key={slide.title}
              className={`grid gap-10 transition-all duration-500 md:grid-cols-2 ${
                idx === index
                  ? "opacity-100"
                  : "pointer-events-none absolute inset-0 opacity-0 translate-x-8"
              }`}
            >
              <div className="flex flex-col justify-center gap-4">
                <h3 className="text-2xl font-semibold">{slide.title}</h3>
                <p className="text-slate-600 dark:text-white/70">
                  {slide.description}
                </p>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-white/70">
                  {slide.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 to-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md rounded-[32px] bg-white p-4 shadow-2xl dark:bg-[#0a1024]">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={520}
                    height={320}
                    className="h-[320px] w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="mt-6 flex items-center justify-center gap-2 md:hidden">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-slate-400 dark:border-white/20 dark:text-white dark:hover:border-white/40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.6}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-slate-400 dark:border-white/20 dark:text-white dark:hover:border-white/40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.6}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setIndex(idx)}
                className={`h-2.5 rounded-full transition ${
                  idx === index
                    ? "w-8 bg-gradient-to-r from-sky-500 to-emerald-400"
                    : "w-2 bg-slate-300 dark:bg-white/20"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
