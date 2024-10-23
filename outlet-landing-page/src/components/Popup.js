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
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black opacity-50"></div>

      {/* Popup content with responsive design */}
      <div className="relative bg-white p-6 md:p-8 rounded-3xl shadow-lg z-10 w-[90%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto h-auto min-h-[300px] md:min-h-[400px] lg:min-h-[500px] flex flex-col justify-start md:justify-center">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={closePopup}
        >
          ✖
        </button>

        {/* Gradient span in the top-left corner */}
        <span className="absolute top-6 left-6 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 button-gradient text-white text-xs md:text-sm font-bold px-2 py-1 rounded-full">
          DON'T MISS OUT
        </span>

        {/* Logo */}
        <div className="flex items-center justify-center pb-6">
          <Image
            src="/outletlogo.png" // Replace with your image path
            alt="Logo"
            width={200} // Adjust the width as per your needs
            height={100} // Adjust the height as per your needs
            className="w-[50%] md:w-[60%] lg:w-[70%] h-auto"
          />
        </div>

        {/* Popup content */}
        <h2 className="text-center text-lg sm:text-3xl md:text-3xl lg:text-4xl font-semibold gradient-text mt-6 border-b-2 pb-4">
          Get 30% Discount on all subscription plans!
        </h2>

        <div className="flex items-center justify-center mt-6 mb-6">
          <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold px-4 py-2 rounded-full shadow-lg animate-pulse hover:scale-105 transition-transform duration-300">
            1 Month Free
          </span>
        </div>

        <div className="flex items-center justify-center mt-4">
          <div className="w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px]">
            <BuyNowButton message="View Plan" link="/pricing#pricing-plans" />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Popup;
