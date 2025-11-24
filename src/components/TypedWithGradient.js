"use client";

import { useEffect, useState } from "react";

const TypedWithGradient = ({ message }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true); // To track whether we're typing or erasing

  useEffect(() => {
    let index = 0;
    const typingSpeed = 100;
    const delayAfterTyping = 1000; // Delay before erasing the text
    const delayAfterErasing = 500; // Delay before restarting typing

    let interval;

    const typeText = () => {
      setDisplayedText(""); // Clear previous text before starting
      interval = setInterval(() => {
        if (index < message.length) {
          console.log(message.charAt(index) + " " + index); // Console log to track progress
          setDisplayedText((prev) => prev + message.charAt(index));
          index++;
        } else {
          clearInterval(interval); // Stop typing when done
          setTimeout(() => {
            setDisplayedText(""); // Clear text after delay
            setIsTyping(false); // Trigger retyping
          }, delayAfterTyping); // Erase after typing completes
        }
      }, typingSpeed);
    };

    if (isTyping) {
      typeText(); // Start typing when isTyping is true
    } else {
      // Reset for the next cycle
      setTimeout(() => {
        setIsTyping(true); // Start typing again
      }, delayAfterErasing);
    }

    // Cleanup on unmount or re-run
    return () => clearInterval(interval);
  }, [isTyping, message]); // Depend on isTyping and message

  /*   useEffect(() => {
    let index = 0;
    const typingSpeed = 100;
    
    const interval = setInterval(() => {
      if (index < message.length) {
        setDisplayedText(prev => prev + message.charAt(index));
      } else {
        clearInterval(interval);
      }

      index++;
    }, typingSpeed);
    
    return () => clearInterval(interval);
  }, [message]); */

  return (
    <div>
      <span className="gradient-text text-4xl font-semibold">
        {displayedText}
      </span>
    </div>
  );
};

export default TypedWithGradient;
