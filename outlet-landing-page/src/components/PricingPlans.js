"use client";

import { useEffect, useState } from "react";
import BuyNowButton from "./BuyNowButton";

const PricingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}subscriptions-list`
      );
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, []);

  const handleToggle = (plan) => {
    setSelectedPlan(plan);
  };

  const accentBorder =
    "border border-slate-200/70 dark:border-white/10 shadow-[0_25px_70px_rgba(15,23,42,0.08)] dark:shadow-[0_25px_70px_rgba(2,6,23,0.8)]";

  const planColors = [
    {
      gradient: "from-blue-500 to-sky-500",
      hover: "hover:border-blue-500 dark:hover:border-blue-400",
      iconBg: "bg-blue-500/10 dark:bg-blue-300/10",
      iconText: "text-blue-500 dark:text-blue-300",
    },
    {
      gradient: "from-emerald-500 to-teal-500",
      hover: "hover:border-emerald-500 dark:hover:border-emerald-400",
      iconBg: "bg-emerald-500/10 dark:bg-emerald-300/10",
      iconText: "text-emerald-500 dark:text-emerald-300",
    },
    {
      gradient: "from-purple-500 to-fuchsia-500",
      hover: "hover:border-purple-500 dark:hover:border-purple-400",
      iconBg: "bg-purple-500/10 dark:bg-purple-300/10",
      iconText: "text-purple-500 dark:text-purple-300",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {/* Plan Toggle */}
      <div className="flex justify-center items-center">
        <div className={`rounded-full bg-white/80 p-1.5 dark:bg-white/5 ${accentBorder}`}>
          <ul className="flex items-center gap-1">
            <li
              className={`cursor-pointer rounded-full px-6 py-3 text-base font-medium transition-all duration-300 ${
                selectedPlan === "monthly"
                  ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg"
                  : "text-slate-600 hover:text-slate-900 dark:text-white/70 dark:hover:text-white"
              }`}
              onClick={() => handleToggle("monthly")}
            >
              Monthly Plan
            </li>
            <li
              className={`cursor-pointer rounded-full px-6 py-3 text-base font-medium transition-all duration-300 ${
                selectedPlan === "annual"
                  ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg"
                  : "text-slate-600 hover:text-slate-900 dark:text-white/70 dark:hover:text-white"
              }`}
              onClick={() => handleToggle("annual")}
            >
              Annual Plan
            </li>
          </ul>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="mt-16 grid w-full gap-8 md:grid-cols-3 px-6 md:px-0">
        {/* Starter Plan */}
        {data[0]?.status == 1 && (
          <div className="flex flex-col">
            <div
              className={`group flex h-full flex-col rounded-3xl bg-white/80 p-8 transition-all duration-300 dark:bg-white/5 ${accentBorder} ${planColors[0].hover}`}
            >
              {/* Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${planColors[0].iconBg}`}
                >
                  <svg
                    className={`h-7 w-7 ${planColors[0].iconText}`}
                    fill="currentColor"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.918 10.0005H7.082C6.66587 9.99708 6.26541 10.1591 5.96873 10.4509C5.67204 10.7427 5.50343 11.1404 5.5 11.5565V17.4455C5.5077 18.3117 6.21584 19.0078 7.082 19.0005H9.918C10.3341 19.004 10.7346 18.842 11.0313 18.5502C11.328 18.2584 11.4966 17.8607 11.5 17.4445V11.5565C11.4966 11.1404 11.328 10.7427 11.0313 10.4509C10.7346 10.1591 10.3341 9.99708 9.918 10.0005Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.918 4.0006H7.082C6.23326 3.97706 5.52559 4.64492 5.5 5.4936V6.5076C5.52559 7.35629 6.23326 8.02415 7.082 8.0006H9.918C10.7667 8.02415 11.4744 7.35629 11.5 6.5076V5.4936C11.4744 4.64492 10.7667 3.97706 9.918 4.0006Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.082 13.0007H17.917C18.3333 13.0044 18.734 12.8425 19.0309 12.5507C19.3278 12.2588 19.4966 11.861 19.5 11.4447V5.55666C19.4966 5.14054 19.328 4.74282 19.0313 4.45101C18.7346 4.1592 18.3341 3.9972 17.918 4.00066H15.082C14.6659 3.9972 14.2654 4.1592 13.9687 4.45101C13.672 4.74282 13.5034 5.14054 13.5 5.55666V11.4447C13.5034 11.8608 13.672 12.2585 13.9687 12.5503C14.2654 12.8421 14.6659 13.0041 15.082 13.0007Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.082 19.0006H17.917C18.7661 19.0247 19.4744 18.3567 19.5 17.5076V16.4936C19.4744 15.6449 18.7667 14.9771 17.918 15.0006H15.082C14.2333 14.9771 13.5256 15.6449 13.5 16.4936V17.5066C13.525 18.3557 14.2329 19.0241 15.082 19.0006Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                    {data[0]?.plan_name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-white/60">
                    For {data[0]?.description}
                  </p>
                </div>
              </div>

              {/* Badge */}
              <div className="mt-6 flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  1 Month Free
                </span>
              </div>

              {/* Features */}
              <ul className="mt-8 space-y-4 flex-1">
                <li className="flex items-center gap-3 text-slate-700 dark:text-white/80">
                  <span className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${planColors[0].iconBg}`}>
                    <svg className={`h-3 w-3 ${planColors[0].iconText}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-sm">Unlimited Invoices</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700 dark:text-white/80">
                  <span className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${planColors[0].iconBg}`}>
                    <svg className={`h-3 w-3 ${planColors[0].iconText}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-sm">API Access for 1 Domain</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700 dark:text-white/80">
                  <span className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${planColors[0].iconBg}`}>
                    <svg className={`h-3 w-3 ${planColors[0].iconText}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-sm">2 Warehouses</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700 dark:text-white/80">
                  <span className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${planColors[0].iconBg}`}>
                    <svg className={`h-3 w-3 ${planColors[0].iconText}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-sm">2 Addon Integrations</span>
                </li>
              </ul>

              {/* Price */}
              <div className="mt-8 text-center">
                <div className="text-4xl font-bold text-slate-900 dark:text-white">
                  {data[0]?.price_bd}
                  <span className="text-lg text-slate-500 dark:text-white/60"> BDT /</span> <span className="text-sm text-slate-500 dark:text-white/60">Month</span>
                </div>
              </div>
              {/* CTA */}
              <div className="mt-6">
                <BuyNowButton message="Get Started" />
              </div>
            </div>
          </div>
        )}

        {/* Premium Plan */}
        {data[1]?.status == 1 && (
          <div className="flex flex-col">
            <div
              className={`group flex h-full flex-col rounded-3xl bg-white/80 p-8 transition-all duration-300 dark:bg-white/5 ${accentBorder} ${planColors[1].hover}`}
            >
              {/* Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${planColors[1].iconBg}`}
                >
                  <svg
                    className={`h-7 w-7 ${planColors[1].iconText}`}
                    fill="currentColor"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.918 10.0005H7.082C6.66587 9.99708 6.26541 10.1591 5.96873 10.4509C5.67204 10.7427 5.50343 11.1404 5.5 11.5565V17.4455C5.5077 18.3117 6.21584 19.0078 7.082 19.0005H9.918C10.3341 19.004 10.7346 18.842 11.0313 18.5502C11.328 18.2584 11.4966 17.8607 11.5 17.4445V11.5565C11.4966 11.1404 11.328 10.7427 11.0313 10.4509C10.7346 10.1591 10.3341 9.99708 9.918 10.0005Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.918 4.0006H7.082C6.23326 3.97706 5.52559 4.64492 5.5 5.4936V6.5076C5.52559 7.35629 6.23326 8.02415 7.082 8.0006H9.918C10.7667 8.02415 11.4744 7.35629 11.5 6.5076V5.4936C11.4744 4.64492 10.7667 3.97706 9.918 4.0006Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.082 13.0007H17.917C18.3333 13.0044 18.734 12.8425 19.0309 12.5507C19.3278 12.2588 19.4966 11.861 19.5 11.4447V5.55666C19.4966 5.14054 19.328 4.74282 19.0313 4.45101C18.7346 4.1592 18.3341 3.9972 17.918 4.00066H15.082C14.6659 3.9972 14.2654 4.1592 13.9687 4.45101C13.672 4.74282 13.5034 5.14054 13.5 5.55666V11.4447C13.5034 11.8608 13.672 12.2585 13.9687 12.5503C14.2654 12.8421 14.6659 13.0041 15.082 13.0007Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.082 19.0006H17.917C18.7661 19.0247 19.4744 18.3567 19.5 17.5076V16.4936C19.4744 15.6449 18.7667 14.9771 17.918 15.0006H15.082C14.2333 14.9771 13.5256 15.6449 13.5 16.4936V17.5066C13.525 18.3557 14.2329 19.0241 15.082 19.0006Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                    {data[1]?.plan_name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-white/60">
                    For {data[1]?.description}
                  </p>
                </div>
              </div>

              {/* Badge */}
              <div className="mt-6 flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  1 Month Free
                </span>
              </div>

              {/* Features */}
              <ul className="mt-8 space-y-4 flex-1">
                <li className="flex items-center gap-3 text-slate-700 dark:text-white/80">
                  <span className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${planColors[1].iconBg}`}>
                    <svg className={`h-3 w-3 ${planColors[1].iconText}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-sm">Unlimited Invoices</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700 dark:text-white/80">
                  <span className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${planColors[1].iconBg}`}>
                    <svg className={`h-3 w-3 ${planColors[1].iconText}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-sm">API Access for 1 Domain</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700 dark:text-white/80">
                  <span className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${planColors[1].iconBg}`}>
                    <svg className={`h-3 w-3 ${planColors[1].iconText}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-sm">2 Warehouses</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700 dark:text-white/80">
                  <span className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${planColors[1].iconBg}`}>
                    <svg className={`h-3 w-3 ${planColors[1].iconText}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-sm">2 Addon Integrations</span>
                </li>
              </ul>

              {/* Price */}
              <div className="mt-8 text-center">
                <div className="text-4xl font-bold text-slate-900 dark:text-white">
                  {data[1]?.price_bd}
                  <span className="text-lg text-slate-500 dark:text-white/60"> BDT /</span> <span className="text-sm text-slate-500 dark:text-white/60">Month</span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6">
                <BuyNowButton message="Get Started" />
              </div>
            </div>
          </div>
        )}

        {/* Enterprise Plan */}
        {data[2]?.status == 1 && (
          <div className="flex flex-col">
            <div
              className={`group flex h-full flex-col rounded-3xl bg-white/80 p-8 transition-all duration-300 dark:bg-white/5 ${accentBorder} ${planColors[2].hover}`}
            >
              {/* Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${planColors[2].iconBg}`}
                >
                  <svg
                    className={`h-7 w-7 ${planColors[2].iconText}`}
                    fill="currentColor"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.918 10.0005H7.082C6.66587 9.99708 6.26541 10.1591 5.96873 10.4509C5.67204 10.7427 5.50343 11.1404 5.5 11.5565V17.4455C5.5077 18.3117 6.21584 19.0078 7.082 19.0005H9.918C10.3341 19.004 10.7346 18.842 11.0313 18.5502C11.328 18.2584 11.4966 17.8607 11.5 17.4445V11.5565C11.4966 11.1404 11.328 10.7427 11.0313 10.4509C10.7346 10.1591 10.3341 9.99708 9.918 10.0005Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.918 4.0006H7.082C6.23326 3.97706 5.52559 4.64492 5.5 5.4936V6.5076C5.52559 7.35629 6.23326 8.02415 7.082 8.0006H9.918C10.7667 8.02415 11.4744 7.35629 11.5 6.5076V5.4936C11.4744 4.64492 10.7667 3.97706 9.918 4.0006Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.082 13.0007H17.917C18.3333 13.0044 18.734 12.8425 19.0309 12.5507C19.3278 12.2588 19.4966 11.861 19.5 11.4447V5.55666C19.4966 5.14054 19.328 4.74282 19.0313 4.45101C18.7346 4.1592 18.3341 3.9972 17.918 4.00066H15.082C14.6659 3.9972 14.2654 4.1592 13.9687 4.45101C13.672 4.74282 13.5034 5.14054 13.5 5.55666V11.4447C13.5034 11.8608 13.672 12.2585 13.9687 12.5503C14.2654 12.8421 14.6659 13.0041 15.082 13.0007Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.082 19.0006H17.917C18.7661 19.0247 19.4744 18.3567 19.5 17.5076V16.4936C19.4744 15.6449 18.7667 14.9771 17.918 15.0006H15.082C14.2333 14.9771 13.5256 15.6449 13.5 16.4936V17.5066C13.525 18.3557 14.2329 19.0241 15.082 19.0006Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                    {data[2]?.plan_name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-white/60">
                    For {data[2]?.description}
                  </p>
                </div>
              </div>

              {/* Badge */}
              <div className="mt-6 flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  1 Month Free
                </span>
              </div>

              {/* Features */}
              <ul className="mt-8 space-y-4 flex-1">
                <li className="flex items-center gap-3 text-slate-700 dark:text-white/80">
                  <span className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${planColors[2].iconBg}`}>
                    <svg className={`h-3 w-3 ${planColors[2].iconText}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-sm">Unlimited Invoices</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700 dark:text-white/80">
                  <span className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${planColors[2].iconBg}`}>
                    <svg className={`h-3 w-3 ${planColors[2].iconText}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-sm">API Access for 1 Domain</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700 dark:text-white/80">
                  <span className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${planColors[2].iconBg}`}>
                    <svg className={`h-3 w-3 ${planColors[2].iconText}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-sm">2 Warehouses</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700 dark:text-white/80">
                  <span className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${planColors[2].iconBg}`}>
                    <svg className={`h-3 w-3 ${planColors[2].iconText}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-sm">2 Addon Integrations</span>
                </li>
              </ul>

              {/* Price */}
              <div className="mt-6 text-center">
                <div className="text-4xl font-bold text-slate-900 dark:text-white">
                  {data[2]?.price_bd}
                  <span className="text-lg text-slate-500 dark:text-white/60"> BDT /</span> <span className="text-sm text-slate-500 dark:text-white/60">Month</span>
                </div>
                
              </div>

              {/* CTA */}
              <div className="mt-6">
                <BuyNowButton message="Get Started" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingPlans;
