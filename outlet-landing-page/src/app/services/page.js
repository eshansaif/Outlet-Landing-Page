"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

const services = [
  // Industry Solutions
  {
    id: 1,
    slug: "fashion-shop",
    name: "Fashion Shop POS",
    category: "Industry Solutions",
    icon: ShoppingBagIcon,
    description: "Complete retail solution for fashion boutiques with inventory, sales, and customer management.",
    features: ["Size & color variants", "Seasonal collections", "Customer loyalty", "Multi-location"],
  },
  {
    id: 2,
    slug: "restaurant-pos",
    name: "Restaurant Software",
    category: "Industry Solutions",
    icon: BuildingStorefrontIcon,
    description: "Full-featured restaurant management system with table booking, kitchen display, and delivery tracking.",
    features: ["Table management", "Kitchen display", "Online orders", "Delivery tracking"],
  },
  {
    id: 3,
    slug: "supershop",
    name: "SuperShop POS",
    category: "Industry Solutions",
    icon: ShoppingCartIcon,
    description: "Comprehensive supermarket management with barcode scanning, inventory, and multi-checkout support.",
    features: ["Barcode scanning", "Bulk inventory", "Multi-checkout", "Supplier management"],
  },
  {
    id: 4,
    slug: "electronics-store",
    name: "Electronics Store",
    category: "Industry Solutions",
    icon: ComputerDesktopIcon,
    description: "Specialized POS for electronics retailers with warranty tracking, serial numbers, and tech support.",
    features: ["Warranty tracking", "Serial numbers", "Repair management", "Tech specs"],
  },
  {
    id: 5,
    slug: "hardware-store",
    name: "Hardware Store",
    category: "Industry Solutions",
    icon: WrenchScrewdriverIcon,
    description: "Hardware and building materials management with bulk pricing, contractor accounts, and delivery.",
    features: ["Bulk pricing", "Contractor accounts", "Delivery scheduling", "Unit conversions"],
  },
  {
    id: 6,
    slug: "gadget-shop",
    name: "Gadget Shop POS",
    category: "Industry Solutions",
    icon: DevicePhoneMobileIcon,
    description: "Mobile and gadget retail solution with IMEI tracking, buyback, and accessories management.",
    features: ["IMEI tracking", "Device buyback", "Accessories linking", "Trade-in management"],
  },
  
  // Core Products
  {
    id: 7,
    slug: "inventory-management",
    name: "Inventory Management",
    category: "Core Products",
    icon: CubeIcon,
    description: "Advanced inventory system with real-time tracking, alerts, and multi-warehouse support.",
    features: ["Real-time tracking", "Low stock alerts", "Multi-warehouse", "Transfer management"],
  },
  {
    id: 8,
    slug: "point-of-sale",
    name: "Point of Sale",
    category: "Core Products",
    icon: CreditCardIcon,
    description: "Modern POS system with fast checkout, multiple payment methods, and receipt printing.",
    features: ["Fast checkout", "Multiple payments", "Receipt printing", "Offline mode"],
  },
  {
    id: 9,
    slug: "erp-system",
    name: "ERP System",
    category: "Core Products",
    icon: BuildingOfficeIcon,
    description: "Enterprise resource planning solution integrating finance, HR, inventory, and operations.",
    features: ["Finance integration", "HR management", "Operations", "Reporting"],
  },
  {
    id: 10,
    slug: "accounting",
    name: "Accounting Software",
    category: "Core Products",
    icon: CalculatorIcon,
    description: "Complete accounting solution with invoicing, expenses, tax calculation, and financial reports.",
    features: ["Invoice generation", "Expense tracking", "Tax calculation", "Financial reports"],
  },
  
  // Specialized Solutions
  {
    id: 11,
    slug: "wholesale-management",
    name: "Wholesale Management",
    category: "Specialized",
    icon: ClipboardDocumentListIcon,
    description: "B2B wholesale platform with bulk ordering, credit management, and distributor networks.",
    features: ["Bulk ordering", "Credit management", "Distributor network", "Price tiers"],
  },
  {
    id: 12,
    slug: "tailor-software",
    name: "Tailor Software",
    category: "Specialized",
    icon: ScissorsIcon,
    description: "Tailoring shop management with measurement tracking, order scheduling, and custom designs.",
    features: ["Measurement tracking", "Order scheduling", "Design catalog", "Fitting reminders"],
  },
  {
    id: 13,
    slug: "pharmacy-pos",
    name: "Pharmacy POS",
    category: "Specialized",
    icon: BeakerIcon,
    description: "Pharmacy management with prescription tracking, expiry alerts, and batch management.",
    features: ["Prescription tracking", "Expiry alerts", "Batch management", "Drug database"],
  },
];

const categories = ["All", "Industry Solutions", "Core Products", "Specialized"];

const accentBorder =
  "border border-slate-200/70 dark:border-white/10 shadow-[0_25px_70px_rgba(15,23,42,0.08)] dark:shadow-[0_25px_70px_rgba(2,6,23,0.8)]";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices = services.filter((service) => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-slate-50 to-white dark:from-[#030615] dark:via-[#050b1d] dark:to-[#030615] text-slate-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 blur-3xl">
          <div className="absolute inset-y-0 left-1/3 w-[800px] rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.35),_transparent_70%)]" />
          <div className="absolute top-10 right-0 w-[500px] rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.35),_transparent_70%)]" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 pb-16 pt-10 text-center">
          <span className="text-xs uppercase tracking-[0.5em] text-slate-500 dark:text-slate-300">
            Our Services
          </span>
          <h1 className="text-4xl font-semibold leading-tight md:text-4xl">
            Industry-Specific Solutions for{" "}
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
              Every Business Type
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-white/70 md:w-3/4">
            From fashion boutiques to restaurants, we provide tailored POS and management solutions
            designed specifically for your industry needs.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative w-full pb-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg"
                    : "border border-slate-200 bg-white/80 text-slate-700 hover:border-slate-400 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:border-white/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative w-full pb-20">
        <div className="mx-auto max-w-6xl px-6">
          {filteredServices.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`flex flex-col rounded-3xl bg-white/80 p-6 dark:bg-white/5 ${accentBorder}`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/10 to-teal-500/10 dark:from-blue-300/10 dark:to-teal-300/10">
                      {(() => {
                        const IconComponent = service.icon;
                        return <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />;
                      })()}
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-white/10 dark:text-white/70">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                    {service.name}
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-slate-600 dark:text-white/70">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-white/70">
                        <svg className="h-4 w-4 flex-shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex min-h-[300px] items-center justify-center">
              <div className={`rounded-3xl bg-white/80 p-12 text-center dark:bg-white/5 ${accentBorder}`}>
                <p className="text-lg text-slate-600 dark:text-white/70">
                  No services found in this category.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-20">
        <div className="absolute inset-0 opacity-30 blur-3xl">
          <div className="absolute bottom-0 right-1/4 w-[600px] rounded-full bg-[radial-gradient(circle,_rgba(52,211,153,0.2),_transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <div className={`rounded-3xl bg-white/80 p-10 dark:bg-white/5 ${accentBorder}`}>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Ready to transform your{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                business operations?
              </span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-white/70 mx-auto md:w-3/4">
              Choose the perfect solution for your business type and start your free trial today.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                View Pricing
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/clients"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition-all duration-300 hover:border-slate-400 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-white/40"
              >
                See Our Clients
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

