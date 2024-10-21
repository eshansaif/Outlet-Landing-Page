"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/20/solid";
import BuyNowButton from "./BuyNowButton";
import Image from "next/image";

const FirstSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 because of cloned slides
  const [startPos, setStartPos] = useState(0); // Track initial drag position
  const [isDragging, setIsDragging] = useState(false); // To determine if it's dragging
  const [offset, setOffset] = useState(0); // To track the offset during drag
  const sliderRef = useRef(null);
  const totalSlides = 4; // Number of original slides

  const slides = [
    <div className="flex flex-col items-center md:justify-center justify-start w-[95%] h-auto md:h-[80%] p-10 md:p-20 shadow-xl rounded-3xl bg-gradient-to-r from-white via-[#ECFAFD] to-white relative custom-before">
      <div className="bg-transparent w-full md:h-full h-[80%] flex flex-col md:flex-row">
        <div className="w-full md:w-[60%] h-[50%] flex-col md:pb-10">
          <div className="flex flex-col w-full">
            <span className="font-semibold text-2xl md:text-3xl">
              Inventory Management
            </span>
            <p className="pt-4 text-sm md:text-base">
              Grow your business online effortlessly with our multi-channel
              inventory management system. Outlet Expense makes it simpler than
              you think!
            </p>
          </div>
          <ul className="mt-6 flex flex-col justify-around">
            <li className="flex pt-4">
              <Image
                src="/check-circle.svg"
                alt="Logo"
                height={20}
                width={20}
              />
              <span className="pl-4 text-sm md:text-base">
                Create new warehouses.
              </span>
            </li>
            <li className="flex pt-4">
              <Image
                src="/check-circle.svg"
                alt="Logo"
                height={20}
                width={20}
              />
              <span className="pl-4 text-sm md:text-base">
                Store your products.
              </span>
            </li>
            <li className="flex pt-4">
              <Image
                src="/check-circle.svg"
                alt="Logo"
                height={20}
                width={20}
              />
              <span className="pl-4 text-sm md:text-base">
                Start selling your products with ZERO hassle.
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-[40%] h-[50%] md:mt-0 flex justify-center">
          <div className="ml-0 md:ml-10 z-10 global-element relative">
            <Image
              className="w-[80%] md:w-[90%] h-auto rounded-2xl"
              src="/salechart.png"
              alt="Logo"
              height={250}
              width={290}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-start pt-5">
        <BuyNowButton message="Learn More" />
      </div>
    </div>,
    <div className="flex flex-col items-center md:justify-center justify-start w-[95%] h-auto md:h-[80%] p-10 md:p-20 shadow-xl rounded-3xl bg-gradient-to-r from-white via-[#ECFAFD] to-white relative custom-before">
      <div className="bg-transparent w-full md:h-full h-[80%] flex flex-col md:flex-row">
        <div className="w-full md:w-[60%] h-[50%] flex-col md:pb-10">
          <div className="flex flex-col w-full">
            <span className="font-semibold text-2xl md:text-3xl">
              Inventory Management
            </span>
            <p className="pt-4 text-sm md:text-base">
              Grow your business online effortlessly with our multi-channel
              inventory management system. Outlet Expense makes it simpler than
              you think!
            </p>
          </div>
          <ul className="mt-6 flex flex-col justify-around">
            <li className="flex pt-4">
              <Image
                src="/check-circle.svg"
                alt="Logo"
                height={20}
                width={20}
              />
              <span className="pl-4 text-sm md:text-base">
                Create new warehouses.
              </span>
            </li>
            <li className="flex pt-4">
              <Image
                src="/check-circle.svg"
                alt="Logo"
                height={20}
                width={20}
              />
              <span className="pl-4 text-sm md:text-base">
                Store your products.
              </span>
            </li>
            <li className="flex pt-4">
              <Image
                src="/check-circle.svg"
                alt="Logo"
                height={20}
                width={20}
              />
              <span className="pl-4 text-sm md:text-base">
                Start selling your products with ZERO hassle.
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-[40%] h-[50%] md:mt-0 flex justify-center">
          <div className="ml-0 md:ml-10 z-10 global-element relative">
            <Image
              className="w-[80%] md:w-[90%] h-auto rounded-2xl"
              src="/salechart.png"
              alt="Logo"
              height={250}
              width={290}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-start">
        <BuyNowButton message="Learn More" />
      </div>
    </div>,
    <div className="flex flex-col items-center md:justify-center justify-start w-[95%] h-auto md:h-[80%] p-10 md:p-20 shadow-xl rounded-3xl bg-gradient-to-r from-white via-[#ECFAFD] to-white relative custom-before">
      <div className="bg-transparent w-full md:h-full h-[80%] flex flex-col md:flex-row">
        <div className="w-full md:w-[60%] h-[50%] flex-col md:pb-10">
          <div className="flex flex-col w-full">
            <span className="font-semibold text-2xl md:text-3xl">
              Inventory Management
            </span>
            <p className="pt-4 text-sm md:text-base">
              Grow your business online effortlessly with our multi-channel
              inventory management system. Outlet Expense makes it simpler than
              you think!
            </p>
          </div>
          <ul className="mt-6 flex flex-col justify-around">
            <li className="flex pt-4">
              <Image
                src="/check-circle.svg"
                alt="Logo"
                height={20}
                width={20}
              />
              <span className="pl-4 text-sm md:text-base">
                Create new warehouses.
              </span>
            </li>
            <li className="flex pt-4">
              <Image
                src="/check-circle.svg"
                alt="Logo"
                height={20}
                width={20}
              />
              <span className="pl-4 text-sm md:text-base">
                Store your products.
              </span>
            </li>
            <li className="flex pt-4">
              <Image
                src="/check-circle.svg"
                alt="Logo"
                height={20}
                width={20}
              />
              <span className="pl-4 text-sm md:text-base">
                Start selling your products with ZERO hassle.
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-[40%] h-[50%] md:mt-0 flex justify-center">
          <div className="ml-0 md:ml-10 z-10 global-element relative">
            <Image
              className="w-[80%] md:w-[90%] h-auto rounded-2xl"
              src="/salechart.png"
              alt="Logo"
              height={250}
              width={290}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-start">
        <BuyNowButton message="Learn More" />
      </div>
    </div>,
    <div className="flex flex-col items-center md:justify-center justify-start w-[95%] h-auto md:h-[80%] p-10 md:p-20 shadow-xl rounded-3xl bg-gradient-to-r from-white via-[#ECFAFD] to-white relative custom-before">
      <div className="bg-transparent w-full md:h-full h-[80%] flex flex-col md:flex-row">
        <div className="w-full md:w-[60%] h-[50%] flex-col md:pb-10">
          <div className="flex flex-col w-full">
            <span className="font-semibold text-2xl md:text-3xl">
              Inventory Management
            </span>
            <p className="pt-4 text-sm md:text-base">
              Grow your business online effortlessly with our multi-channel
              inventory management system. Outlet Expense makes it simpler than
              you think!
            </p>
          </div>
          <ul className="mt-6 flex flex-col justify-around">
            <li className="flex pt-4">
              <Image
                src="/check-circle.svg"
                alt="Logo"
                height={20}
                width={20}
              />
              <span className="pl-4 text-sm md:text-base">
                Create new warehouses.
              </span>
            </li>
            <li className="flex pt-4">
              <Image
                src="/check-circle.svg"
                alt="Logo"
                height={20}
                width={20}
              />
              <span className="pl-4 text-sm md:text-base">
                Store your products.
              </span>
            </li>
            <li className="flex pt-4">
              <Image
                src="/check-circle.svg"
                alt="Logo"
                height={20}
                width={20}
              />
              <span className="pl-4 text-sm md:text-base">
                Start selling your products with ZERO hassle.
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-[40%] h-[50%] md:mt-0 flex justify-center">
          <div className="ml-0 md:ml-10 z-10 global-element relative">
            <Image
              className="w-[80%] md:w-[90%] h-auto rounded-2xl"
              src="/salechart.png"
              alt="Logo"
              height={250}
              width={290}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-start">
        <BuyNowButton message="Learn More" />
      </div>
    </div>,
  ];

  const allSlides = [slides[totalSlides - 1], ...slides, slides[0]]; // Clone first and last for infinite effect

  // Function to update slide position
  const updateSlidePosition = (offset) => {
    const slidesElement = sliderRef.current;
    if (slidesElement) {
      slidesElement.style.transform = `translateX(${offset}%)`;
    }
  };

  // Move slides based on the currentIndex and offset
  useEffect(() => {
    updateSlidePosition(-currentIndex * 100 + offset); // Position based on currentIndex and offset
  }, [currentIndex, offset]);

  // Function to reset transition when sliding
  const resetSliderTransition = () => {
    const slidesElement = sliderRef.current;
    if (slidesElement) {
      slidesElement.style.transition = "transform 0.5s ease-in-out"; // Smooth sliding transition
    }
  };

  // Handle the start of dragging (mouse down)
  const handleDragStart = (e) => {
    setIsDragging(true); // Start dragging
    setStartPos(e.pageX); // Store initial position

    // Disable transition during drag
    sliderRef.current.style.transition = "none";

    // Add global listeners
    window.addEventListener("mousemove", handleDragging);
    window.addEventListener("mouseup", handleDragEnd);
  };

  // Handle the dragging event
  const handleDragging = (e) => {
    if (!isDragging) return; // Only handle if dragging
    const movement = e.pageX - startPos;

    // Update the offset
    setOffset(
      (prevOffset) =>
        prevOffset + (movement / sliderRef.current.offsetWidth) * 100
    );
    setStartPos(e.pageX); // Update start position for continuous dragging
  };

  // Handle the end of dragging (mouse up)
  const handleDragEnd = (e) => {
    setIsDragging(false); // End dragging state
    const movement = e.pageX - startPos;
    const threshold = sliderRef.current.offsetWidth * 0.2; // 20% of drag distance

    // Remove global listeners
    window.removeEventListener("mousemove", handleDragging);
    window.removeEventListener("mouseup", handleDragEnd);

    // Snap to next or previous slide based on drag threshold
    if (Math.abs(movement) > threshold) {
      if (movement > 0) {
        setCurrentIndex((prevIndex) =>
          prevIndex === 1 ? totalSlides : prevIndex - 1
        ); // Move to previous slide
      } else {
        setCurrentIndex((prevIndex) =>
          prevIndex === totalSlides ? 1 : prevIndex + 1
        ); // Move to next slide
      }
    }

    // Reset offset for the next drag
    setOffset(0);
    // Enable transition for snapping back
    sliderRef.current.style.transition = "transform 0.3s ease-in-out"; // Re-enable transition
    updateSlidePosition(-currentIndex * 100); // Update position to snap back
  };

  return (
    <div className="relative w-full h-[90%] overflow-hidden">
      {console.log(allSlides)}
      {/* Slides */}
      <div
        ref={sliderRef}
        className="slides absolute inset-0 flex no-select"
        onMouseDown={handleDragStart} // Start dragging on mouse down
      >
        {allSlides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 flex justify-center">
            {slide}
          </div>
        ))}
      </div>

      {/* Arrow Buttons */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button
          className="prevSlide mr-4 md:w-14 md:h-14 w-10 h-10 rounded-full bg-white flex items-center justify-center text-white hover:bg-transparent hover:border-transparent transition-all hover:bg-gradient-to-r from-blue-600 to-teal-500"
          onClick={() => {
            if (isDragging) return; // Prevent action if dragging
            setCurrentIndex((prevIndex) =>
              prevIndex === 1 ? totalSlides : prevIndex - 1
            ); // Navigate to previous slide
            resetSliderTransition(); // Enable smooth transition
          }}
        >
          <ArrowLeftIcon className="md:w-7 md:h-7 h-5 w-5 text-black" />
        </button>

        <button
          className="nextSlide ml-4 md:w-14 md:h-14 w-10 h-10 rounded-full bg-white flex items-center justify-center text-white hover:bg-transparent hover:border-transparent transition-all hover:bg-gradient-to-r from-blue-600 to-teal-500"
          onClick={() => {
            if (isDragging) return; // Prevent action if dragging
            setCurrentIndex((prevIndex) =>
              prevIndex === totalSlides ? 1 : prevIndex + 1
            ); // Navigate to next slide
            resetSliderTransition(); // Enable smooth transition
          }}
        >
          <ArrowRightIcon className="md:w-7 md:h-7 h-5 w-5 text-black " />
        </button>
      </div>
    </div>
  );
};

export default FirstSlider;
