import { ArrowRightIcon } from '@heroicons/react/20/solid'; // Import Heroicons ArrowRightIcon
import "../app/globals.css";

export default function BuyNowButton() {
  return (
    <a
      href="#"
      className="flex items-center px-4 py-2 rounded-full bg-gradient-to-r to-blue-500 from-teal-500 text-white font-semibold text-lg transition-background transform hover:from-blue-500 hover:to-blue-500"
    >
      <span className="text-md font-medium">Buy Now</span>
      <div className="ml-3 flex items-center justify-center w-8 h-8 bg-white rounded-full">
        <ArrowRightIcon className="w-4 h-4 text-blue-500" />
      </div>
    </a>
  );
}