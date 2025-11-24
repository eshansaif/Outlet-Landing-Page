import Link from "next/link";
import { notFound } from "next/navigation";
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

const servicesData = {
  "fashion-shop": {
    name: "Fashion Shop POS",
    icon: ShoppingBagIcon,
    category: "Industry Solutions",
    tagline: "Complete retail solution for fashion boutiques",
    description: "Manage your fashion retail business with ease. Our specialized POS system handles size and color variants, seasonal collections, customer loyalty programs, and multi-location operations seamlessly.",
    features: [
      {
        title: "Size & Color Variants",
        description: "Manage unlimited product variations with automatic inventory tracking for each size and color combination.",
      },
      {
        title: "Seasonal Collections",
        description: "Organize products by season, launch new collections, and track performance over time.",
      },
      {
        title: "Customer Loyalty",
        description: "Built-in loyalty program with points, rewards, and personalized customer profiles.",
      },
      {
        title: "Multi-Location Support",
        description: "Manage inventory across multiple stores with real-time synchronization.",
      },
      {
        title: "Barcode & SKU Management",
        description: "Generate and print barcodes, manage SKUs automatically for all variants.",
      },
      {
        title: "Sales Analytics",
        description: "Track best-selling items, seasonal trends, and customer preferences.",
      },
    ],
    benefits: [
      "Reduce checkout time by 40%",
      "Eliminate stock discrepancies",
      "Increase customer retention",
      "Real-time business insights",
    ],
    pricing: "Starting from ৳1,499/month",
  },
  "restaurant-pos": {
    name: "Restaurant Software",
    icon: BuildingStorefrontIcon,
    category: "Industry Solutions",
    tagline: "Full-featured restaurant management system",
    description: "Streamline your restaurant operations with table management, kitchen display system, online order integration, and delivery tracking all in one platform.",
    features: [
      {
        title: "Table Management",
        description: "Visual table layout, reservation system, and real-time table status tracking.",
      },
      {
        title: "Kitchen Display System (KDS)",
        description: "Digital kitchen displays with order routing, timing, and preparation tracking.",
      },
      {
        title: "Online Order Integration",
        description: "Accept orders from your website, mobile app, and third-party platforms.",
      },
      {
        title: "Delivery Tracking",
        description: "GPS-based delivery tracking, driver management, and customer notifications.",
      },
      {
        title: "Menu Management",
        description: "Easy menu updates, modifiers, combo meals, and time-based pricing.",
      },
      {
        title: "Staff Management",
        description: "Shift scheduling, tip management, and performance tracking.",
      },
    ],
    benefits: [
      "Faster table turnover",
      "Reduced order errors",
      "Improved kitchen efficiency",
      "Better customer experience",
    ],
    pricing: "Starting from ৳2,999/month",
  },
  "supershop": {
    name: "SuperShop POS",
    icon: ShoppingCartIcon,
    category: "Industry Solutions",
    tagline: "Comprehensive supermarket management",
    description: "Handle high-volume retail operations with barcode scanning, bulk inventory management, multi-checkout support, and supplier integration.",
    features: [
      {
        title: "Barcode Scanning",
        description: "Fast and accurate product scanning with support for all standard barcode formats.",
      },
      {
        title: "Bulk Inventory",
        description: "Manage thousands of products with automatic reordering and stock alerts.",
      },
      {
        title: "Multi-Checkout Support",
        description: "Run unlimited POS terminals with centralized management and reporting.",
      },
      {
        title: "Supplier Management",
        description: "Track supplier orders, deliveries, and payment terms in one place.",
      },
      {
        title: "Promotions & Discounts",
        description: "Create flexible promotion rules, bundle deals, and loyalty discounts.",
      },
      {
        title: "Shelf Label Printing",
        description: "Generate and print shelf labels with pricing and barcode information.",
      },
    ],
    benefits: [
      "Process 100+ items per minute",
      "Zero stock-out situations",
      "Automated reordering",
      "Complete audit trail",
    ],
    pricing: "Starting from ৳3,999/month",
  },
  "electronics-store": {
    name: "Electronics Store POS",
    icon: ComputerDesktopIcon,
    category: "Industry Solutions",
    tagline: "Specialized solution for electronics retail",
    description: "Manage electronics inventory with IMEI tracking, warranty management, service center integration, and technical specification databases.",
    features: [
      {
        title: "IMEI/Serial Tracking",
        description: "Track individual devices by IMEI or serial number for warranty and service.",
      },
      {
        title: "Warranty Management",
        description: "Automated warranty tracking with customer notifications and claim processing.",
      },
      {
        title: "Technical Specs Database",
        description: "Comprehensive product specifications for customer inquiries and comparisons.",
      },
      {
        title: "Service Center Integration",
        description: "Connect with repair services and track repair status in real-time.",
      },
      {
        title: "Trade-in Management",
        description: "Handle device trade-ins, valuations, and refurbishment tracking.",
      },
      {
        title: "Extended Warranty Sales",
        description: "Sell and manage extended warranty packages with automated reminders.",
      },
    ],
    benefits: [
      "Complete device traceability",
      "Reduced warranty disputes",
      "Increased accessory sales",
      "Better customer service",
    ],
    pricing: "Starting from ৳2,499/month",
  },
  "hardware-store": {
    name: "Hardware Store POS",
    icon: WrenchScrewdriverIcon,
    category: "Industry Solutions",
    tagline: "Complete solution for hardware and building materials",
    description: "Manage construction materials, tools, bulk items with unit conversion, contractor accounts, and delivery scheduling.",
    features: [
      {
        title: "Unit Conversion",
        description: "Automatic conversion between units (bags, kg, tons, pieces) with pricing.",
      },
      {
        title: "Contractor Accounts",
        description: "Manage contractor credit accounts, project-based billing, and payment terms.",
      },
      {
        title: "Bulk Item Management",
        description: "Handle cement, sand, gravel, and other bulk materials efficiently.",
      },
      {
        title: "Delivery Scheduling",
        description: "Schedule deliveries, track vehicles, and optimize delivery routes.",
      },
      {
        title: "Tool Rental",
        description: "Manage tool rental inventory with daily/weekly rates and deposits.",
      },
      {
        title: "Project Estimation",
        description: "Create material estimates for construction projects with pricing.",
      },
    ],
    benefits: [
      "Accurate material costing",
      "Improved contractor relations",
      "Optimized delivery logistics",
      "Better inventory control",
    ],
    pricing: "Starting from ৳2,299/month",
  },
  "gadget-shop": {
    name: "Gadget Shop POS",
    icon: DevicePhoneMobileIcon,
    category: "Industry Solutions",
    tagline: "Modern POS for mobile and gadget stores",
    description: "Specialized for mobile phones, accessories, and gadgets with IMEI tracking, trade-ins, and repair service management.",
    features: [
      {
        title: "IMEI Management",
        description: "Track every device by IMEI with purchase history and warranty details.",
      },
      {
        title: "Accessory Bundling",
        description: "Create smart bundles with cases, screen protectors, and chargers.",
      },
      {
        title: "Trade-in System",
        description: "Evaluate, price, and process phone trade-ins seamlessly.",
      },
      {
        title: "Repair Tracking",
        description: "Manage repair orders, parts, and customer notifications.",
      },
      {
        title: "Multiple Variants",
        description: "Handle color, storage, and network variants efficiently.",
      },
      {
        title: "Plan Integration",
        description: "Integrate with carrier plans and installment schemes.",
      },
    ],
    benefits: [
      "Faster device sales",
      "Increased accessory revenue",
      "Better trade-in management",
      "Complete repair tracking",
    ],
    pricing: "Starting from ৳1,999/month",
  },
  "inventory-management": {
    name: "Inventory Management System",
    icon: CubeIcon,
    category: "Core Products",
    tagline: "Complete control over your inventory",
    description: "Advanced inventory management with real-time tracking, automated reordering, multi-warehouse support, and comprehensive reporting.",
    features: [
      {
        title: "Real-time Tracking",
        description: "Monitor inventory levels across all locations in real-time.",
      },
      {
        title: "Automated Reordering",
        description: "Set reorder points and automate purchase orders to suppliers.",
      },
      {
        title: "Multi-Warehouse",
        description: "Manage inventory across multiple warehouses and locations.",
      },
      {
        title: "Batch & Expiry Tracking",
        description: "Track batch numbers, manufacturing dates, and expiry dates.",
      },
      {
        title: "Stock Adjustments",
        description: "Handle stock transfers, adjustments, and cycle counts easily.",
      },
      {
        title: "Barcode System",
        description: "Generate, print, and scan barcodes for efficient inventory management.",
      },
    ],
    benefits: [
      "Reduce stock-outs by 90%",
      "Minimize carrying costs",
      "Improve order accuracy",
      "Real-time visibility",
    ],
    pricing: "Starting from ৳1,999/month",
  },
  "point-of-sale": {
    name: "Point of Sale System",
    icon: CreditCardIcon,
    category: "Core Products",
    tagline: "Fast, reliable, and feature-rich POS",
    description: "Modern point of sale system with multi-payment support, customer management, loyalty programs, and detailed sales analytics.",
    features: [
      {
        title: "Multi-Payment Support",
        description: "Accept cash, cards, mobile payments, and digital wallets.",
      },
      {
        title: "Customer Management",
        description: "Track customer purchases, preferences, and contact information.",
      },
      {
        title: "Loyalty Programs",
        description: "Built-in loyalty points, rewards, and promotional campaigns.",
      },
      {
        title: "Sales Analytics",
        description: "Detailed reports on sales, products, and employee performance.",
      },
      {
        title: "Receipt Customization",
        description: "Custom receipt designs with logo, promotions, and QR codes.",
      },
      {
        title: "Offline Mode",
        description: "Continue selling even without internet connection.",
      },
    ],
    benefits: [
      "Faster checkout process",
      "Increased customer loyalty",
      "Better sales insights",
      "Works offline",
    ],
    pricing: "Starting from ৳1,499/month",
  },
  "erp-system": {
    name: "ERP System",
    icon: BuildingOfficeIcon,
    category: "Core Products",
    tagline: "Enterprise resource planning for growing businesses",
    description: "Comprehensive ERP solution integrating sales, inventory, accounting, HR, and manufacturing in one unified platform.",
    features: [
      {
        title: "Sales Management",
        description: "Complete sales cycle from quotations to invoicing and collections.",
      },
      {
        title: "Inventory Control",
        description: "Multi-location inventory with automated replenishment and tracking.",
      },
      {
        title: "Accounting Integration",
        description: "Fully integrated accounting with automatic journal entries.",
      },
      {
        title: "HR & Payroll",
        description: "Employee management, attendance, leave, and payroll processing.",
      },
      {
        title: "Manufacturing",
        description: "BOM management, production planning, and shop floor control.",
      },
      {
        title: "Reporting & Analytics",
        description: "Comprehensive dashboards and reports across all modules.",
      },
    ],
    benefits: [
      "Unified business platform",
      "Improved efficiency",
      "Better decision making",
      "Scalable solution",
    ],
    pricing: "Starting from ৳4,999/month",
  },
  "accounting": {
    name: "Accounting Software",
    icon: CalculatorIcon,
    category: "Core Products",
    tagline: "Complete accounting solution for your business",
    description: "Professional accounting software with general ledger, accounts payable/receivable, financial statements, and tax compliance.",
    features: [
      {
        title: "General Ledger",
        description: "Complete chart of accounts with multi-currency support.",
      },
      {
        title: "Accounts Receivable",
        description: "Track customer invoices, payments, and aging reports.",
      },
      {
        title: "Accounts Payable",
        description: "Manage supplier bills, payments, and expense tracking.",
      },
      {
        title: "Financial Statements",
        description: "Automatic generation of P&L, balance sheet, and cash flow.",
      },
      {
        title: "Tax Compliance",
        description: "VAT/TAX calculation, returns, and compliance reporting.",
      },
      {
        title: "Bank Reconciliation",
        description: "Automated bank feed integration and reconciliation.",
      },
    ],
    benefits: [
      "Accurate financial records",
      "Tax compliance assured",
      "Better cash flow management",
      "Real-time financial insights",
    ],
    pricing: "Starting from ৳1,799/month",
  },
  "wholesale-management": {
    name: "Wholesale Management",
    icon: ClipboardDocumentListIcon,
    category: "Specialized",
    tagline: "Streamline your wholesale operations",
    description: "Manage bulk orders, distributor networks, price tiers, credit limits, and delivery scheduling for wholesale businesses.",
    features: [
      {
        title: "Bulk Order Processing",
        description: "Handle large volume orders with multi-item selections and pricing.",
      },
      {
        title: "Price Tiers",
        description: "Multiple price levels for different customer types and volumes.",
      },
      {
        title: "Credit Management",
        description: "Set credit limits, payment terms, and track outstanding balances.",
      },
      {
        title: "Distributor Network",
        description: "Manage distributor hierarchy, territories, and commissions.",
      },
      {
        title: "Delivery Scheduling",
        description: "Route planning, vehicle tracking, and delivery confirmation.",
      },
      {
        title: "Minimum Order Quantity",
        description: "Set MOQ rules and enforce minimum order requirements.",
      },
    ],
    benefits: [
      "Efficient bulk processing",
      "Better distributor management",
      "Optimized delivery routes",
      "Improved cash flow",
    ],
    pricing: "Starting from ৳2,999/month",
  },
  "tailor-software": {
    name: "Tailor Software",
    icon: ScissorsIcon,
    category: "Specialized",
    tagline: "Complete solution for tailoring businesses",
    description: "Manage custom measurements, design catalogs, order tracking, fitting schedules, and customer profiles for tailoring shops.",
    features: [
      {
        title: "Measurement Management",
        description: "Store detailed customer measurements with body profiles and preferences.",
      },
      {
        title: "Design Catalog",
        description: "Digital catalog of designs, fabrics, and customization options.",
      },
      {
        title: "Order Tracking",
        description: "Track orders from measurement to cutting, stitching, and delivery.",
      },
      {
        title: "Fitting Schedule",
        description: "Schedule fittings and send automated reminders to customers.",
      },
      {
        title: "Fabric Management",
        description: "Track fabric inventory with patterns, colors, and supplier details.",
      },
      {
        title: "Photo Gallery",
        description: "Store customer photos and design references for future orders.",
      },
    ],
    benefits: [
      "Never lose measurements",
      "Faster order processing",
      "Better customer satisfaction",
      "Repeat business tracking",
    ],
    pricing: "Starting from ৳1,299/month",
  },
  "pharmacy-pos": {
    name: "Pharmacy POS",
    icon: BeakerIcon,
    category: "Specialized",
    tagline: "Healthcare-compliant pharmacy management",
    description: "Specialized pharmacy POS with medicine inventory, prescription management, batch tracking, expiry alerts, and regulatory compliance.",
    features: [
      {
        title: "Prescription Management",
        description: "Digital prescription storage with doctor and patient details.",
      },
      {
        title: "Batch & Expiry Tracking",
        description: "Track medicine batches with automatic expiry alerts and FIFO.",
      },
      {
        title: "Drug Database",
        description: "Comprehensive medicine database with generic alternatives.",
      },
      {
        title: "Insurance Integration",
        description: "Process insurance claims and co-payments seamlessly.",
      },
      {
        title: "Regulatory Compliance",
        description: "Maintain records as per pharmaceutical regulations.",
      },
      {
        title: "Automatic Reordering",
        description: "Smart reordering based on sales patterns and expiry dates.",
      },
    ],
    benefits: [
      "Regulatory compliance",
      "Zero expired medicine sales",
      "Better inventory control",
      "Improved customer safety",
    ],
    pricing: "Starting from ৳2,199/month",
  },
};

const accentBorder =
  "border border-slate-200/70 dark:border-white/10 shadow-[0_25px_70px_rgba(15,23,42,0.08)] dark:shadow-[0_25px_70px_rgba(2,6,23,0.8)]";

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

const ServiceDetail = ({ params }) => {
  const service = servicesData[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-slate-50 to-white dark:from-[#030615] dark:via-[#050b1d] dark:to-[#030615] text-slate-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 blur-3xl">
          <div className="absolute inset-y-0 left-1/3 w-[800px] rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.35),_transparent_70%)]" />
          <div className="absolute top-10 right-0 w-[500px] rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.35),_transparent_70%)]" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 pb-16 pt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 dark:text-white/70 dark:hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Services
          </Link>

          <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-teal-400 p-6 shadow-xl">
            {(() => {
              const IconComponent = service.icon;
              return <IconComponent className="h-full w-full text-white" />;
            })()}
          </div>
          
          <div className="space-y-4">
            <span className="inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-600 dark:bg-blue-300/10 dark:text-blue-300">
              {service.category}
            </span>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              {service.name}
            </h1>
            <p className="text-xl text-slate-600 dark:text-white/70 md:w-3/4 mx-auto">
              {service.tagline}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Get Started
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition-all duration-300 hover:border-slate-400 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-white/40"
            >
              {service.pricing}
            </Link>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="relative w-full py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className={`rounded-3xl bg-white/80 p-8 dark:bg-white/5 ${accentBorder}`}>
            <p className="text-lg leading-relaxed text-slate-700 dark:text-white/80">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative w-full py-12">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-semibold md:text-4xl">
            Key{" "}
            <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className={`rounded-3xl bg-white/80 p-6 dark:bg-white/5 ${accentBorder}`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 dark:bg-blue-300/10">
                  <svg className="h-6 w-6 text-blue-500 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-white/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative w-full py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className={`rounded-3xl bg-white/80 p-8 dark:bg-white/5 ${accentBorder}`}>
            <h2 className="mb-6 text-2xl font-semibold text-slate-900 dark:text-white">
              Why Choose This Solution?
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                    <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700 dark:text-white/80">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full py-20">
        <div className="absolute inset-0 opacity-30 blur-3xl">
          <div className="absolute bottom-0 right-1/4 w-[600px] rounded-full bg-[radial-gradient(circle,_rgba(52,211,153,0.2),_transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <div className={`rounded-3xl bg-white/80 p-10 dark:bg-white/5 ${accentBorder}`}>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Ready to get{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                started?
              </span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-white/70 mx-auto md:w-3/4">
              Start your free trial today and see how {service.name} can transform your business.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                View Pricing Plans
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition-all duration-300 hover:border-slate-400 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-white/40"
              >
                Browse All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

