"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/20/solid";

const FirstSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 because of cloned slides
  const [startPos, setStartPos] = useState(0); // Track initial drag position
  const [isDragging, setIsDragging] = useState(false); // To determine if it's dragging
  const sliderRef = useRef(null);
  const totalSlides = 4; // Number of original slides

  const slides = [
    <div className="flex items-center justify-center w-[95%] h-[80%] bg-blue-200 p-20 rounded-3xl">
      <h2 className="text-2xl font-bold">Slide 1 Content</h2>
    </div>,
    <div className="flex items-center justify-center w-[95%] h-[80%] bg-green-200 rounded-3xl">
      <h2 className="text-2xl font-bold">Slide 2 Content</h2>
    </div>,
    <div className="flex items-center justify-center w-[95%] h-[80%] bg-red-200 rounded-3xl">
      <h2 className="text-2xl font-bold">Slide 3 Content</h2>
    </div>,
    <div className="flex items-center justify-center w-[95%] h-[80%] bg-yellow-200 rounded-3xl">
      <h2 className="text-2xl font-bold">Slide 4 Content</h2>
    </div>,
  ];

  const allSlides = [slides[totalSlides - 1], ...slides, slides[0]]; // Clone first and last for infinite effect

  // Function to update slide position
  const updateSlidePosition = (index, instant = false) => {
    const slidesElement = sliderRef.current;
    if (slidesElement) {
      slidesElement.style.transition = instant ? "none" : "transform 0.3s ease-in-out";
      slidesElement.style.transform = `translateX(-${index * 100}%)`;
    }
  };

  // Move slides based on the currentIndex
  useEffect(() => {
    updateSlidePosition(currentIndex);
  }, [currentIndex]);

  // Handle the start of dragging (mouse down)
  const handleDragStart = (e) => {
    setIsDragging(true); // Start dragging
    setStartPos(e.pageX); // Store initial position

    // Add global listeners
    window.addEventListener("mousemove", handleDragging);
    window.addEventListener("mouseup", handleDragEnd);
  };

  // Handle the dragging event
  const handleDragging = (e) => {
    if (!isDragging) return; // Only handle if dragging
    const movement = e.pageX - startPos;

    // Update slider's position visually as it drags
    const currentPosition = -currentIndex * 100 + (movement / sliderRef.current.offsetWidth) * 100;
    sliderRef.current.style.transform = `translateX(${currentPosition}%)`;
  };

  // Handle the end of dragging (mouse up)
  const handleDragEnd = (e) => {
    setIsDragging(false); // End dragging state
    const movement = e.pageX - startPos;
    const threshold = sliderRef.current.offsetWidth / 4; // Adjust sensitivity

    // Remove global listeners
    window.removeEventListener("mousemove", handleDragging);
    window.removeEventListener("mouseup", handleDragEnd);

    // Snap to next or previous slide based on drag threshold
    if (Math.abs(movement) > threshold) {
      if (movement > 0) {
        setCurrentIndex((prevIndex) => prevIndex - 1); // Move to previous slide
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1); // Move to next slide
      }
    } else {
      // Snap back to current slide if not dragged enough
      updateSlidePosition(currentIndex);
    }
  };

  const handleTransitionEnd = () => {
    // Infinite loop logic: jump to first/last real slide after transition
    if (currentIndex === 0) {
      setCurrentIndex(totalSlides);
      updateSlidePosition(totalSlides, true); // Instantly move to last real slide
    } else if (currentIndex === totalSlides + 1) {
      setCurrentIndex(1);
      updateSlidePosition(1, true); // Instantly move to first real slide
    }
  };

  // Handle slide navigation through buttons
  const handleNextSlide = () => {
    if (currentIndex < totalSlides + 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1); // Move to next slide
    }
  };

  const handlePrevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1); // Move to previous slide
    }
  };

  return (
    <div className="relative w-full h-[90%] overflow-hidden">
      {/* Slides */}
      <div
        ref={sliderRef}
        className="slides absolute inset-0 flex transition-transform ease-in-out"
        onMouseDown={handleDragStart} // Start dragging on mouse down
        onTransitionEnd={handleTransitionEnd} // Handle transition end for infinite loop
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
          className="prevSlide w-14 h-14 rounded-full bg-white flex items-center justify-center text-white hover:bg-transparent hover:border-transparent transition-all hover:bg-gradient-to-r from-blue-600 to-teal-500"
          onClick={handlePrevSlide} // Navigate to previous slide
        >
          <ArrowLeftIcon className="w-7 h-7 text-black" />
        </button>

        <button
          className="nextSlide w-14 h-14 rounded-full bg-white flex items-center justify-center text-white hover:bg-transparent hover:border-transparent transition-all hover:bg-gradient-to-r from-blue-600 to-teal-500"
          onClick={handleNextSlide} // Navigate to next slide
        >
          <ArrowRightIcon className="w-7 h-7 text-black " />
        </button>
      </div>
    </div>
  );
};

export default FirstSlider;