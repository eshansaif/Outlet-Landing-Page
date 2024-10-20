"use client";
import React, { useState } from 'react';
import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const faqsData = [
  {
    question: "What is Outlet Expense?",
    answer: "Outlet Expense is an advanced inventory management system that helps businesses track and manage products, expenses, and profits efficiently.",
  },
  {
    question: "How does the profit calculation work?",
    answer: "Our system calculates profit for both product types with and without variants, even if they appear in the same transaction.",
  },
  {
    question: "Can I manage multiple payments and dues?",
    answer: "Yes, Outlet Expense supports multi-payment systems and due collection management for customers.",
  },
  {
    question: "Is support available for my organization?",
    answer: "Yes, we provide full technical support to ensure your organization operates smoothly with our system.",
  },
  // Add more FAQs as needed
];

const FAQItem = ({ faq, isOpen, toggle }) => (
  <div className="border-b border-gray-200 py-6">
    <div
      className="flex justify-between items-center cursor-pointer"
      onClick={toggle}
    >
      <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
      {isOpen ? (
        <ChevronUpIcon className="w-6 h-6 text-indigo-500" />
      ) : (
        <ChevronDownIcon className="w-6 h-6 text-indigo-500" />
      )}
    </div>
    <div
      className={`mt-4 text-base text-gray-600 transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}
    >
      <p>{faq.answer}</p>
    </div>
  </div>
);

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-16 pt-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Adjusted width */}
        <div className='flex items-center justify-between'>
            <h1 className="text-5xl font-bold text-center text-gray-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Frequently Asked Questions
            </h1>
            <Image
                src="/faq-image.svg" // Replace with your image path
                alt="Logo"
                width={400} // Adjust the width as per your needs
                height={350} // Adjust the height as per your needs
              />
        </div>
        
        <div className="space-y-6 md:space-y-10 mt-20">
          {faqsData.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              toggle={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;