import { ArrowRightIcon } from '@heroicons/react/20/solid'; // Import Heroicons ArrowRightIcon
import "../app/globals.css";

export default function BuyNowButton({props}) {
  const { message } = props;
  return (
    <a
      href="#"
      className="flex items-center px-4 py-2 rounded-full button-gradient"
    >
      <span className="text-md font-medium">{message}</span>
      <div className="ml-3 flex items-center justify-center w-8 h-8 bg-white rounded-full">
        <ArrowRightIcon className="w-4 h-4 text-blue-500" />
      </div>
    </a>
  );
}