import { ArrowRightIcon } from "@heroicons/react/20/solid"; // Import Heroicons ArrowRightIcon
import "../app/globals.css";

export default function BuyNowButton({ message, link = "#" }) {
  return (
    <a
      href={link}
      className="flex items-center justify-around rounded-full button-gradient"
    >
      <span className="text-sm md:text-lg font-medium">{message}</span>
      <div className="ml-2 md:ml-3 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-white rounded-full">
        <ArrowRightIcon className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
      </div>
    </a>
  );
}
