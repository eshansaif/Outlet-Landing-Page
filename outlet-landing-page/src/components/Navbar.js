"use client"
import Link from 'next/link';
import Image from 'next/image';
import BuyNowButton from './BuyNowButton';  
import { useState } from 'react';


export default function Navbar() {
    // State to manage the mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the mobile menu
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <nav
      className="fixed w-full z-10 top-0 transition duration-300 ease-in-out bg-white shadow-sm">
      <div className="max-w-xl mx-20 md:max-w-7xl md:mx-auto mx-10">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-800">
            <Image 
                src="/outletlogo.png" // Replace with your image path
                alt="Logo"
                width={200} // Adjust the width as per your needs
                height={250} // Adjust the height as per your needs
              />
            </Link>
          </div>
          <div className="ml-10 flex items-baseline space-x-4">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium">
                  Home
                </Link>
                <Link href="/features" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium">
                  Features
                </Link>
                {/* <Link href="/integrations" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium">
                  Integrations
                </Link> */}
                <Link href="/pricing" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium">
                  Pricing
                </Link>
                {/* <Link href="/blog" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium">
                  Blog
                </Link> */}
                <Link href="/faqs" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium">
                  FAQs
                </Link>
                {/* <Link href="/deals" className="gradient-text text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium">
                  Deals
                </Link> */}
                 <Link href="https://pos.outletexpense.com/login" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium mr-4">
                Login
              </Link>
              <BuyNowButton message="Sign Up" link='/pricing'/>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
        {/* Mobile menu button */}
        <button
          type="button"
          className="bg-[#0066fe] inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-300 focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            // Close icon when menu is open
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon when menu is closed
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
        </div>
         {/* Mobile Menu */}
    {isMenuOpen && (
            <div className="md:hidden flex-shrink-0" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 sm:px-3 flex flex-col">
                <Link href="/" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                  Home
                </Link>
                <Link href="/features" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                  Features
                </Link>
                <Link href="/pricing" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                  Pricing
                </Link>
                <Link href="/faqs" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium">
                  FAQs
                </Link>
                <Link href="https://pos.outletexpense.com/login" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium">
                   Login
                </Link>
                <div className="flex items-center justify-start mt-4">
                  <BuyNowButton message="Sign Up" link='/pricing'/>
                </div>
                
              </div>
            </div>
          )}
      </div>

   
    </nav>
  );
}