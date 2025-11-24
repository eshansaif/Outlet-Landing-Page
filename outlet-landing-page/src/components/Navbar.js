"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import BuyNowButton from "./BuyNowButton";
import { useTheme } from "../contexts/ThemeContext";
import { useState, useEffect } from "react";
import {
  ShoppingBagIcon,
  BuildingStorefrontIcon,
  ShoppingCartIcon,
  ComputerDesktopIcon,
  WrenchScrewdriverIcon,
  DevicePhoneMobileIcon,
  CubeIcon,
  CreditCardIcon,
  BuildingOfficeIcon,
  CalculatorIcon,
  ClipboardDocumentListIcon,
  ScissorsIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
  ];

  const navLinksAfterServices = [
    { href: "/pricing", label: "Pricing" },
    { href: "/clients", label: "Our Clients" },
    { href: "/blogs", label: "Blogs" },
    { href: "/faqs", label: "FAQs" },
  ];

  const servicesMenu = [
    {
      category: "Industry Solutions",
      items: [
        { name: "Fashion Shop POS", href: "/services/fashion-shop", icon: ShoppingBagIcon },
        { name: "Restaurant Software", href: "/services/restaurant-pos", icon: BuildingStorefrontIcon },
        { name: "SuperShop POS", href: "/services/supershop", icon: ShoppingCartIcon },
        { name: "Electronics Store", href: "/services/electronics-store", icon: ComputerDesktopIcon },
        { name: "Hardware Store", href: "/services/hardware-store", icon: WrenchScrewdriverIcon },
        { name: "Gadget Shop", href: "/services/gadget-shop", icon: DevicePhoneMobileIcon },
      ],
    },
    {
      category: "Core Products",
      items: [
        { name: "Inventory Management", href: "/services/inventory-management", icon: CubeIcon },
        { name: "Point of Sale", href: "/services/point-of-sale", icon: CreditCardIcon },
        { name: "ERP System", href: "/services/erp-system", icon: BuildingOfficeIcon },
        { name: "Accounting", href: "/services/accounting", icon: CalculatorIcon },
      ],
    },
    {
      category: "Specialized",
      items: [
        { name: "Wholesale", href: "/services/wholesale-management", icon: ClipboardDocumentListIcon },
        { name: "Tailor Software", href: "/services/tailor-software", icon: ScissorsIcon },
        { name: "Pharmacy POS", href: "/services/pharmacy-pos", icon: BeakerIcon },
      ],
    },
  ];

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-700/50"
            : "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center group transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/outletlogo.png"
                  alt="Outlet Expense Logo"
                  width={180}
                  height={50}
                  className="h-10 w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-1">
              <div className="flex items-center space-x-1">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                        active
                          ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                          : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      {link.label}
                      {active && (
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                      )}
                    </Link>
                  );
                })}
                
                {/* Services Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    className={`relative flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      pathname.startsWith("/services")
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                        : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    Services
                    <svg
                      className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    {pathname.startsWith("/services") && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                    )}
                  </button>

                  {/* Mega Menu Dropdown */}
                  {isServicesOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[600px] rounded-2xl border border-slate-200/70 bg-white/95 p-6 shadow-2xl backdrop-blur-md dark:border-white/10 dark:bg-gray-900/95">
                      <div className="grid grid-cols-3 gap-6">
                        {servicesMenu.map((column) => (
                          <div key={column.category}>
                            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                              {column.category}
                            </h3>
                            <ul className="space-y-2">
                              {column.items.map((item) => {
                                const IconComponent = item.icon;
                                return (
                                  <li key={item.href}>
                                    <Link
                                      href="/services"
                                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
                                    >
                                      <IconComponent className="h-5 w-5 flex-shrink-0" />
                                      <span>{item.name}</span>
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 border-t border-slate-200 pt-4 dark:border-white/10">
                        <Link
                          href="/services"
                          className="flex items-center justify-center gap-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          View All Services
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Links after Services */}
                {navLinksAfterServices.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                        active
                          ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                          : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      {link.label}
                      {active && (
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                      )}
                    </Link>
                  );
                })}
              </div>

              <div className="ml-4 flex items-center space-x-3 border-l border-gray-200 dark:border-gray-700 pl-4">
                {/* Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  className="p-1.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                  aria-label={`Switch to ${
                    theme === "light" ? "dark" : "light"
                  } mode`}
                >
                  {theme === "light" ? (
                    // Moon icon for dark mode
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  ) : (
                    // Sun icon for light mode
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  )}
                </button>
                <Link
                  href="https://pos.outletexpense.com/login"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
                >
                  Login
                </Link>
                <BuyNowButton
                  message="Sign Up"
                  link="https://pos.outletexpense.com/signup"
                />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <div className="flex items-center space-x-2">
                {/* Theme Toggle Button - Mobile */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label={`Switch to ${
                    theme === "light" ? "dark" : "light"
                  } mode`}
                >
                  {theme === "light" ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  )}
                </button>
                {/* Mobile menu button */}
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200"
                  aria-controls="mobile-menu"
                  aria-expanded={isMenuOpen ? "true" : "false"}
                  onClick={toggleMenu}
                >
                  <span className="sr-only">Open main menu</span>
                  <div className="relative w-6 h-6">
                    <span
                      className={`absolute top-0 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                        isMenuOpen
                          ? "rotate-45 translate-y-2.5"
                          : "translate-y-0"
                      }`}
                    ></span>
                    <span
                      className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                        isMenuOpen ? "opacity-0" : "opacity-100"
                      }`}
                    ></span>
                    <span
                      className={`absolute top-5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                        isMenuOpen
                          ? "-rotate-45 -translate-y-2.5"
                          : "translate-y-0"
                      }`}
                    ></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
          id="mobile-menu"
        >
          <div className="px-4 pt-2 pb-6 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    active
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                      : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              );
            })}
            
            {/* Services Link for Mobile */}
            <Link
              href="/services"
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                pathname.startsWith("/services")
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                  : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
              onClick={toggleMenu}
            >
              Services
            </Link>
            
            {/* Links after Services for Mobile */}
            {navLinksAfterServices.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    active
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                      : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 space-y-3 border-t border-gray-200 dark:border-gray-700 mt-3">
              <Link
                href="https://pos.outletexpense.com/login"
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                onClick={toggleMenu}
              >
                Login
              </Link>
              <div className="px-4">
                <BuyNowButton
                  message="Sign Up"
                  link="https://pos.outletexpense.com/signup"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16"></div>
    </>
  );
}
