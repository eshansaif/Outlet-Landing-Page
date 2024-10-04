"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  // Helper function to animate counting
  const countUp = (endValue) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (startCount) {
        let start = 0;
        const duration = 2000; // Animation duration in ms
        const increment = endValue / (duration / 16.67); // Assuming ~60fps
        const animateCount = setInterval(() => {
          start += increment;
          if (start >= endValue) {
            clearInterval(animateCount);
            setCount(endValue);
          } else {
            setCount(Math.ceil(start));
          }
        }, 16.67);
      }
    }, [startCount, endValue]);

    return count;
  };

  return (
    <div className="flex items-center pt-20" ref={ref}>
      <div className="flex flex-col items-center flex-1 p-10 hover:bg-gray-200 h-full transition-all duration-300 border-r border-gray-300">
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-purple-900 text-5xl font-bold">
          {countUp(100)}+
        </span>
        <span className="mt-4 text-xl font-semibold">Customers</span>
        <span className="mt-2 text-xl text-gray-600">
          Trusted by businesses worldwide
        </span>
      </div>

      <div className="flex flex-col items-center flex-1 p-10 hover:bg-gray-200 h-full transition-all duration-300">
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-900 text-5xl font-bold">
          {countUp(200)}
        </span>
        <span className="mt-4 text-xl font-semibold">Users</span>
        <span className="mt-2 text-xl text-gray-600">
          Streamlining operations with ease
        </span>
      </div>

      <div className="flex flex-col items-center flex-1 p-10 hover:bg-gray-200 h-full transition-all duration-300 border-l border-gray-300">
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-900 text-5xl font-bold">
          {countUp(250)}
        </span>
        <span className="mt-4 text-xl font-semibold">Reviews</span>
        <span className="mt-2 text-xl text-gray-600">
          Recognized for excellent service
        </span>
      </div>
    </div>
  );
};

export default StatsSection;
