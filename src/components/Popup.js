"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import BuyNowButton from "./BuyNowButton";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the popup on initial load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Background overlay with blur */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity dark:bg-black/70"
        onClick={closePopup}
      />

      {/* Popup content with responsive design */}
      <div className="relative bg-white dark:bg-[#0f1629] p-6 md:p-10 rounded-[32px] shadow-2xl z-10 w-full max-w-md mx-auto border border-slate-200 dark:border-white/10 animate-in zoom-in-95 duration-300">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:text-white/60 dark:hover:text-white transition-colors p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10"
          onClick={closePopup}
          aria-label="Close popup"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Badge */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white"></span>
            LIMITED TIME OFFER
          </span>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center pt-4 pb-6">
          <div className="rounded-2xl bg-white dark:bg-white p-3 shadow-lg">
            <Image
              src="/outletlogo.png"
              alt="Outlet Expense Logo"
              width={180}
              height={90}
              className="h-auto w-40 md:w-48"
              priority
            />
          </div>
        </div>

        {/* Popup content */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
            Get <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">30% Discount</span> on all subscription plans!
          </h2>

          <div className="flex items-center justify-center">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white text-xl md:text-2xl font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              1 Month Free
            </span>
          </div>

          <p className="text-sm text-slate-600 dark:text-white/70">
            Start your journey with Outlet Expense and unlock powerful inventory management tools
          </p>

          <div className="flex items-center justify-center pt-2">
            <BuyNowButton message="View Plans" link="/pricing#pricing-plans" />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Popup;
