// FirstSlider.client.jsx
"use client"; // Indicate that this is a client component

import { useEffect, useState } from 'react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/20/solid';

const FirstSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = [
    <div className="flex items-center justify-center h-full bg-blue-200">
      <h2 className="text-2xl font-bold">Slide 1 Content</h2>
    </div>,
    <div className="flex items-center justify-center h-full bg-green-200">
      <h2 className="text-2xl font-bold">Slide 2 Content</h2>
    </div>,
    <div className="flex items-center justify-center h-full bg-red-200">
      <h2 className="text-2xl font-bold">Slide 3 Content</h2>
    </div>,
    <div className="flex items-center justify-center h-full bg-yellow-200">
      <h2 className="text-2xl font-bold">Slide 4 Content</h2>
    </div>,
  ];

  const totalSlides = slides.length;

  const updateSlidePosition = () => {
    const slidesElement = document.querySelector('.slides');
    slidesElement.style.transform = 'translateX(-' + currentIndex * 100 + '%)';
  };

  const navigateSlide = (direction) => {
    setCurrentIndex((prevIndex) => (prevIndex + direction + totalSlides) % totalSlides);
  };

  useEffect(() => {
    updateSlidePosition();
  }, [currentIndex]);

  return (
    <div className="relative w-full h-64 bg-white overflow-hidden">
      {/* Slides */}
      <div className="slides absolute inset-0 flex transition-transform duration-700">
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>

      {/* Circular Arrow Buttons */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button 
          className="prevSlide w-14 h-14 rounded-full bg-white flex items-center justify-center text-white hover:bg-transparent hover:border-2 hover:border-transparent transition-all hover:bg-gradient-to-r from-blue-600 to-teal-500"
          onClick={() => navigateSlide(-1)} // Navigate left
        >
          <ArrowLeftIcon className="w-7 h-7 text-black" />
        </button>
                  
        <button 
          className="nextSlide w-14 h-14 rounded-full bg-white flex items-center justify-center text-white hover:bg-transparent hover:border-2 hover:border-transparent transition-all hover:bg-gradient-to-r from-blue-600 to-teal-500"
          onClick={() => navigateSlide(1)} // Navigate right
        >
          <ArrowRightIcon className="w-7 h-7 text-black " />
        </button>
      </div>
    </div>
  );
};

export default FirstSlider;