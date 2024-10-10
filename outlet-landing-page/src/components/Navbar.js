import Link from 'next/link';
import Image from 'next/image';
import BuyNowButton from './BuyNowButton';  

export default function Navbar() {
  return (
    <nav
      className="fixed w-full z-10 top-0 transition duration-300 ease-in-out bg-white shadow-sm">
      <div className="max-w-7xl mx-auto">
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
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium">
                Home
              </Link>
              <Link href="/features" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium">
                Features
              </Link>
              {/* <Link href="/integrations" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium">
                Integrations
              </Link> */}
              <Link href="/pricing" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium">
                Pricing
              </Link>
              {/* <Link href="/blog" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium">
                Blog
              </Link> */}
              <Link href="/faqs" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium">
                FaQs
              </Link>
              <Link href="/deals" className="gradient-text text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium">
                Deals
              </Link>
            </div>
          </div>
          <div className="ml-10 flex items-baseline space-x-4">
            <Link href="https://pos.outletexpense.com/login" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium">
              Login
            </Link>
            <BuyNowButton message="Buy Now" link='\pricing'/>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu (hamburger icon) */}
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
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link href="/features" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
            Features
          </Link>
          {/* <Link href="/integrations" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
            Integrations
          </Link> */}
          <Link href="/pricing" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
            Pricing
          </Link>
          {/* <Link href="/blog" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
            Blog
          </Link> */}
          <Link href="/faqs" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium">
                FaQs
          </Link>
          <Link href="/deals" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
            Deals
          </Link>
        </div>
      </div>
    </nav>
  );
}