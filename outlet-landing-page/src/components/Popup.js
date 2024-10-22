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

      {/* Popup content with increased height */}
      <div className="relative bg-white md:p-8 rounded-3xl shadow-lg z-10 max-w-xs md:max-w-lg lg:max-w-xl w-full mx-4 min-h-[350px] md:min-h-[550px] lg:min-h-[600px] flex flex-col justify-start p-24">
        {/* Close button */}
        <button
          className="absolute top-5 right-5 text-gray-500 hover:text-gray-700"
          onClick={closePopup}
        >
          ✖
        </button>

        {/* Gradient span in the top-left corner */}
        <span className="absolute top-10 left-10 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 button-gradient text-white text-xs md:text-sm font-bold px-2 py-1 rounded-full"> {/* bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 */}
          DON'T MISS OUT
        </span>

        <div className="flex items-center justify-center h-10 w-full pb-12 pt-10 border-b-2">
          <Image
            src="/outletlogo.png" // Replace with your image path
            alt="Logo"
            width={300} // Adjust the width as per your needs
            height={350} // Adjust the height as per your needs
          />
        </div>

        {/* Popup content */}
        <h2 className="text-lg md:text-5xl lg:text-5xl font-semibold text-center mt-10 gradient-text border-b-2 pb-10 ">
          Get 30% Discount on all subscription plans!
        </h2>

        {/* <p className="mt-4 text-sm md:text-base lg:text-lg">This is your custom responsive popup message with increased height.</p> */}

        <div className="mt-10 mb-10 flex items-center justify-center">
          <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white text-3xl font-bold px-3 py-1 rounded-full shadow-lg animate-pulse hover:scale-105 transition-transform duration-300 text-center">
            1 Month Free
          </span>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-[200px] md:w-[180px] mt-10 ">
            <BuyNowButton message="View Plan" link="/pricing#pricing-plans" />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Popup;
