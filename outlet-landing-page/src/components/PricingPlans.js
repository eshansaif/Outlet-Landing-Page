"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import BuyNowButton from "./BuyNowButton";

const PricingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  const handleToggle = (plan) => {
    setSelectedPlan(plan);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}subscriptions-list`
      ); // Replace with your API endpoint
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center w-full h-full">
      {/* Button Toggle */}
      <div className="flex justify-center items-center">
        <div
          className="p-[2px] rounded-full"
          style={{ background: "linear-gradient(90deg, #3b82f6, #14b8a6)" }}
        >
          <ul className="flex p-1 rounded-full bg-white">
            <li
              className={`flex items-center text-center cursor-pointer py-4 px-5 text-lg rounded-full  ${
                selectedPlan === "monthly"
                  ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white"
                  : "text-gray-600"
              }`}
              onClick={() => handleToggle("monthly")}
            >
              Monthly Plan
            </li>
            <li
              className={`flex items-center text-center cursor-pointer py-4 px-5 text-lg rounded-full ${
                selectedPlan === "annual"
                  ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white"
                  : "text-gray-600"
              }`}
              onClick={() => handleToggle("annual")}
            >
              Annual Plan
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 flex gap-6 w-full h-full flex-wrap items-center justify-center">
        {/* Starter */}
        {data[0]?.status == 1 && (
          <div className="flex flex-col md:h-full md:w-[30%] w-full h-full p-5 md:p-0">
            <div className="border-2 border-gray-300 hover:border-blue-500 rounded-3xl h-full w-full group transition-all duration-500 ease-in-out pb-4">
              <div className="h-[20%] flex flex-col items-start justify-center border-b border-gray-300">
                <div className="flex w-full h-full items-center justify-start pl-10">
                  <div className="h-[30%] flex flex-col items-start justify-center py-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 group-hover:bg-[#F9F8F8] p-1">
                      <svg
                        className="text-black group-hover:text-blue-500 transform group-hover:-rotate-45 transition-transform duration-500 ease-in-out" // Adjust your width, height, and color
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.918 10.0005H7.082C6.66587 9.99708 6.26541 10.1591 5.96873 10.4509C5.67204 10.7427 5.50343 11.1404 5.5 11.5565V17.4455C5.5077 18.3117 6.21584 19.0078 7.082 19.0005H9.918C10.3341 19.004 10.7346 18.842 11.0313 18.5502C11.328 18.2584 11.4966 17.8607 11.5 17.4445V11.5565C11.4966 11.1404 11.328 10.7427 11.0313 10.4509C10.7346 10.1591 10.3341 9.99708 9.918 10.0005Z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.918 4.0006H7.082C6.23326 3.97706 5.52559 4.64492 5.5 5.4936V6.5076C5.52559 7.35629 6.23326 8.02415 7.082 8.0006H9.918C10.7667 8.02415 11.4744 7.35629 11.5 6.5076V5.4936C11.4744 4.64492 10.7667 3.97706 9.918 4.0006Z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.082 13.0007H17.917C18.3333 13.0044 18.734 12.8425 19.0309 12.5507C19.3278 12.2588 19.4966 11.861 19.5 11.4447V5.55666C19.4966 5.14054 19.328 4.74282 19.0313 4.45101C18.7346 4.1592 18.3341 3.9972 17.918 4.00066H15.082C14.6659 3.9972 14.2654 4.1592 13.9687 4.45101C13.672 4.74282 13.5034 5.14054 13.5 5.55666V11.4447C13.5034 11.8608 13.672 12.2585 13.9687 12.5503C14.2654 12.8421 14.6659 13.0041 15.082 13.0007Z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.082 19.0006H17.917C18.7661 19.0247 19.4744 18.3567 19.5 17.5076V16.4936C19.4744 15.6449 18.7667 14.9771 17.918 15.0006H15.082C14.2333 14.9771 13.5256 15.6449 13.5 16.4936V17.5066C13.525 18.3557 14.2329 19.0241 15.082 19.0006Z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="h-[30%] flex flex-col items-start justify-center pl-6">
                    {/* <span className="text-3xl font-bold">
                                499.0<span className="text-gray-500 text-xs">BDT</span> <span className="text-gray-500 text-xs">/Month</span>
                            </span> */}
                    <span className="text-3xl font-bold">
                      {data[0]?.plan_name}
                    </span>
                    <p className="pt-1 text-sm text-gray-500">
                      For {data[0]?.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full h-[80%] flex flex-col items-center">
                <div className="mt-5 flex items-center justify-center">
                  <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white text-xl font-bold px-3 py-1 rounded-full shadow-lg animate-pulse hover:scale-105 transition-transform duration-300 text-center">
                    1 Month Free
                  </span>
                </div>

                <ul className="w-full flex flex-col items-center justify-center pt-5">
                  <li className="flex w-full items-center justify-start pl-10">
                    <div className=" rounded-full bg-[#EBF4FE] p-2">
                      <svg
                        width="13"
                        height="11"
                        viewBox="0 0 13 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.2596 10.677C5.25791 10.677 5.25594 10.677 5.25425 10.677C5.18438 10.6756 5.11846 10.6466 5.07112 10.5969L0.240477 5.49889C0.157647 5.41139 0.15004 5.27959 0.222446 5.18362C0.294853 5.08791 0.426705 5.0551 0.537709 5.10541L4.95899 7.11463C4.99618 7.13158 5.04013 7.12338 5.06859 7.09467L11.8128 0.253538C11.9041 0.160843 12.0534 0.150726 12.1571 0.23057C12.2607 0.310413 12.2847 0.453695 12.2123 0.561155L5.50359 10.5356C5.49401 10.5501 5.48274 10.5632 5.47034 10.5755L5.44076 10.6042C5.39258 10.6507 5.32722 10.677 5.2596 10.677Z"
                          fill="url(#paint0_linear_676_2806)"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_676_2806"
                            x1="0.172852"
                            y1="5.10729"
                            x2="12.254"
                            y2="5.10729"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6B70FF"></stop>
                            <stop offset="1" stopColor="#0BB0EE"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <span className="pl-6">Unlimited Invoices</span>
                  </li>
                  <li className="flex w-full items-center justify-start pl-10 mt-4">
                    <div className=" rounded-full bg-[#EBF4FE] p-2">
                      <svg
                        width="13"
                        height="11"
                        viewBox="0 0 13 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.2596 10.677C5.25791 10.677 5.25594 10.677 5.25425 10.677C5.18438 10.6756 5.11846 10.6466 5.07112 10.5969L0.240477 5.49889C0.157647 5.41139 0.15004 5.27959 0.222446 5.18362C0.294853 5.08791 0.426705 5.0551 0.537709 5.10541L4.95899 7.11463C4.99618 7.13158 5.04013 7.12338 5.06859 7.09467L11.8128 0.253538C11.9041 0.160843 12.0534 0.150726 12.1571 0.23057C12.2607 0.310413 12.2847 0.453695 12.2123 0.561155L5.50359 10.5356C5.49401 10.5501 5.48274 10.5632 5.47034 10.5755L5.44076 10.6042C5.39258 10.6507 5.32722 10.677 5.2596 10.677Z"
                          fill="url(#paint0_linear_676_2806)"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_676_2806"
                            x1="0.172852"
                            y1="5.10729"
                            x2="12.254"
                            y2="5.10729"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6B70FF"></stop>
                            <stop offset="1" stopColor="#0BB0EE"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <span className="pl-6">Api Access for 1 Domain</span>
                  </li>
                  <li className="flex w-full items-center justify-start pl-10 mt-4">
                    <div className=" rounded-full bg-[#EBF4FE] p-2">
                      <svg
                        width="13"
                        height="11"
                        viewBox="0 0 13 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.2596 10.677C5.25791 10.677 5.25594 10.677 5.25425 10.677C5.18438 10.6756 5.11846 10.6466 5.07112 10.5969L0.240477 5.49889C0.157647 5.41139 0.15004 5.27959 0.222446 5.18362C0.294853 5.08791 0.426705 5.0551 0.537709 5.10541L4.95899 7.11463C4.99618 7.13158 5.04013 7.12338 5.06859 7.09467L11.8128 0.253538C11.9041 0.160843 12.0534 0.150726 12.1571 0.23057C12.2607 0.310413 12.2847 0.453695 12.2123 0.561155L5.50359 10.5356C5.49401 10.5501 5.48274 10.5632 5.47034 10.5755L5.44076 10.6042C5.39258 10.6507 5.32722 10.677 5.2596 10.677Z"
                          fill="url(#paint0_linear_676_2806)"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_676_2806"
                            x1="0.172852"
                            y1="5.10729"
                            x2="12.254"
                            y2="5.10729"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6B70FF"></stop>
                            <stop offset="1" stopColor="#0BB0EE"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <span className="pl-6">2 Warehouses</span>
                  </li>
                  <li className="flex w-full items-center justify-start pl-10 mt-4">
                    <div className=" rounded-full bg-[#EBF4FE] p-2">
                      <svg
                        width="13"
                        height="11"
                        viewBox="0 0 13 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.2596 10.677C5.25791 10.677 5.25594 10.677 5.25425 10.677C5.18438 10.6756 5.11846 10.6466 5.07112 10.5969L0.240477 5.49889C0.157647 5.41139 0.15004 5.27959 0.222446 5.18362C0.294853 5.08791 0.426705 5.0551 0.537709 5.10541L4.95899 7.11463C4.99618 7.13158 5.04013 7.12338 5.06859 7.09467L11.8128 0.253538C11.9041 0.160843 12.0534 0.150726 12.1571 0.23057C12.2607 0.310413 12.2847 0.453695 12.2123 0.561155L5.50359 10.5356C5.49401 10.5501 5.48274 10.5632 5.47034 10.5755L5.44076 10.6042C5.39258 10.6507 5.32722 10.677 5.2596 10.677Z"
                          fill="url(#paint0_linear_676_2806)"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_676_2806"
                            x1="0.172852"
                            y1="5.10729"
                            x2="12.254"
                            y2="5.10729"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6B70FF"></stop>
                            <stop offset="1" stopColor="#0BB0EE"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <span className="pl-6">2 Addon Integrations</span>
                  </li>
                </ul>

                <span className="text-3xl font-bold pt-28 pb-4">
                  {data[0]?.price_bd}
                  <span className="text-gray-500 text-xs">BDT</span>{" "}
                  <span className="text-gray-500 text-xs">/Month</span>
                </span>

                <div className="pb-6">
                  <BuyNowButton message="Get Started" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Enterprise */}
        {data[2]?.status == 1 && (
          <div className="flex flex-colmd:h-full md:w-[30%] w-full h-full p-5 md:p-0">
            <div className="border-2 border-gray-300 hover:border-red-500 rounded-3xl h-full w-full group transition-all duration-500 ease-in-out pb-4">
              <div className="h-[20%] flex flex-col items-start justify-center border-b border-gray-300">
                <div className="flex w-full h-full items-center justify-start pl-10">
                  <div className="h-[30%] flex flex-col items-start justify-center py-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 group-hover:bg-[#F9F8F8] p-1">
                      <svg
                        className="text-black group-hover:text-red-500 transform group-hover:-rotate-45 transition-transform duration-500 ease-in-out" // Adjust your width, height, and color
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.918 10.0005H7.082C6.66587 9.99708 6.26541 10.1591 5.96873 10.4509C5.67204 10.7427 5.50343 11.1404 5.5 11.5565V17.4455C5.5077 18.3117 6.21584 19.0078 7.082 19.0005H9.918C10.3341 19.004 10.7346 18.842 11.0313 18.5502C11.328 18.2584 11.4966 17.8607 11.5 17.4445V11.5565C11.4966 11.1404 11.328 10.7427 11.0313 10.4509C10.7346 10.1591 10.3341 9.99708 9.918 10.0005Z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.918 4.0006H7.082C6.23326 3.97706 5.52559 4.64492 5.5 5.4936V6.5076C5.52559 7.35629 6.23326 8.02415 7.082 8.0006H9.918C10.7667 8.02415 11.4744 7.35629 11.5 6.5076V5.4936C11.4744 4.64492 10.7667 3.97706 9.918 4.0006Z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.082 13.0007H17.917C18.3333 13.0044 18.734 12.8425 19.0309 12.5507C19.3278 12.2588 19.4966 11.861 19.5 11.4447V5.55666C19.4966 5.14054 19.328 4.74282 19.0313 4.45101C18.7346 4.1592 18.3341 3.9972 17.918 4.00066H15.082C14.6659 3.9972 14.2654 4.1592 13.9687 4.45101C13.672 4.74282 13.5034 5.14054 13.5 5.55666V11.4447C13.5034 11.8608 13.672 12.2585 13.9687 12.5503C14.2654 12.8421 14.6659 13.0041 15.082 13.0007Z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.082 19.0006H17.917C18.7661 19.0247 19.4744 18.3567 19.5 17.5076V16.4936C19.4744 15.6449 18.7667 14.9771 17.918 15.0006H15.082C14.2333 14.9771 13.5256 15.6449 13.5 16.4936V17.5066C13.525 18.3557 14.2329 19.0241 15.082 19.0006Z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="h-[30%] flex flex-col items-start justify-center pl-6">
                    {/*  <span className="text-3xl font-bold">
                                2999.0<span className="text-gray-500 text-xs">BDT</span> <span className="text-gray-500 text-xs">/Month</span>
                            </span> */}
                    <span className="text-3xl font-bold">
                      {data[2]?.plan_name}
                    </span>
                    <p className="pt-1 text-sm text-gray-500">
                      For {data[2]?.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full h-[80%] flex flex-col items-center">
                <div className="mt-5 flex items-center justify-center">
                  <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white text-xl font-bold px-3 py-1 rounded-full shadow-lg animate-pulse hover:scale-105 transition-transform duration-300 text-center">
                    1 Month Free
                  </span>
                </div>
                <ul className="w-full flex flex-col items-center justify-center pt-5">
                  <li className="flex w-full items-center justify-start pl-10">
                    <div className=" rounded-full bg-[#EBF4FE] p-2">
                      <svg
                        width="13"
                        height="11"
                        viewBox="0 0 13 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.2596 10.677C5.25791 10.677 5.25594 10.677 5.25425 10.677C5.18438 10.6756 5.11846 10.6466 5.07112 10.5969L0.240477 5.49889C0.157647 5.41139 0.15004 5.27959 0.222446 5.18362C0.294853 5.08791 0.426705 5.0551 0.537709 5.10541L4.95899 7.11463C4.99618 7.13158 5.04013 7.12338 5.06859 7.09467L11.8128 0.253538C11.9041 0.160843 12.0534 0.150726 12.1571 0.23057C12.2607 0.310413 12.2847 0.453695 12.2123 0.561155L5.50359 10.5356C5.49401 10.5501 5.48274 10.5632 5.47034 10.5755L5.44076 10.6042C5.39258 10.6507 5.32722 10.677 5.2596 10.677Z"
                          fill="url(#paint0_linear_676_2806)"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_676_2806"
                            x1="0.172852"
                            y1="5.10729"
                            x2="12.254"
                            y2="5.10729"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6B70FF"></stop>
                            <stop offset="1" stopColor="#0BB0EE"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <span className="pl-6">Unlimited Invoices</span>
                  </li>
                  <li className="flex w-full items-center justify-start pl-10 mt-4">
                    <div className=" rounded-full bg-[#EBF4FE] p-2">
                      <svg
                        width="13"
                        height="11"
                        viewBox="0 0 13 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.2596 10.677C5.25791 10.677 5.25594 10.677 5.25425 10.677C5.18438 10.6756 5.11846 10.6466 5.07112 10.5969L0.240477 5.49889C0.157647 5.41139 0.15004 5.27959 0.222446 5.18362C0.294853 5.08791 0.426705 5.0551 0.537709 5.10541L4.95899 7.11463C4.99618 7.13158 5.04013 7.12338 5.06859 7.09467L11.8128 0.253538C11.9041 0.160843 12.0534 0.150726 12.1571 0.23057C12.2607 0.310413 12.2847 0.453695 12.2123 0.561155L5.50359 10.5356C5.49401 10.5501 5.48274 10.5632 5.47034 10.5755L5.44076 10.6042C5.39258 10.6507 5.32722 10.677 5.2596 10.677Z"
                          fill="url(#paint0_linear_676_2806)"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_676_2806"
                            x1="0.172852"
                            y1="5.10729"
                            x2="12.254"
                            y2="5.10729"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6B70FF"></stop>
                            <stop offset="1" stopColor="#0BB0EE"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <span className="pl-6">Api Access for 1 Domain</span>
                  </li>
                  <li className="flex w-full items-center justify-start pl-10 mt-4">
                    <div className=" rounded-full bg-[#EBF4FE] p-2">
                      <svg
                        width="13"
                        height="11"
                        viewBox="0 0 13 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.2596 10.677C5.25791 10.677 5.25594 10.677 5.25425 10.677C5.18438 10.6756 5.11846 10.6466 5.07112 10.5969L0.240477 5.49889C0.157647 5.41139 0.15004 5.27959 0.222446 5.18362C0.294853 5.08791 0.426705 5.0551 0.537709 5.10541L4.95899 7.11463C4.99618 7.13158 5.04013 7.12338 5.06859 7.09467L11.8128 0.253538C11.9041 0.160843 12.0534 0.150726 12.1571 0.23057C12.2607 0.310413 12.2847 0.453695 12.2123 0.561155L5.50359 10.5356C5.49401 10.5501 5.48274 10.5632 5.47034 10.5755L5.44076 10.6042C5.39258 10.6507 5.32722 10.677 5.2596 10.677Z"
                          fill="url(#paint0_linear_676_2806)"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_676_2806"
                            x1="0.172852"
                            y1="5.10729"
                            x2="12.254"
                            y2="5.10729"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6B70FF"></stop>
                            <stop offset="1" stopColor="#0BB0EE"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <span className="pl-6">2 Warehouses</span>
                  </li>
                  <li className="flex w-full items-center justify-start pl-10 mt-4">
                    <div className=" rounded-full bg-[#EBF4FE] p-2">
                      <svg
                        width="13"
                        height="11"
                        viewBox="0 0 13 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.2596 10.677C5.25791 10.677 5.25594 10.677 5.25425 10.677C5.18438 10.6756 5.11846 10.6466 5.07112 10.5969L0.240477 5.49889C0.157647 5.41139 0.15004 5.27959 0.222446 5.18362C0.294853 5.08791 0.426705 5.0551 0.537709 5.10541L4.95899 7.11463C4.99618 7.13158 5.04013 7.12338 5.06859 7.09467L11.8128 0.253538C11.9041 0.160843 12.0534 0.150726 12.1571 0.23057C12.2607 0.310413 12.2847 0.453695 12.2123 0.561155L5.50359 10.5356C5.49401 10.5501 5.48274 10.5632 5.47034 10.5755L5.44076 10.6042C5.39258 10.6507 5.32722 10.677 5.2596 10.677Z"
                          fill="url(#paint0_linear_676_2806)"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_676_2806"
                            x1="0.172852"
                            y1="5.10729"
                            x2="12.254"
                            y2="5.10729"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6B70FF"></stop>
                            <stop offset="1" stopColor="#0BB0EE"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <span className="pl-6">2 Addon Integrations</span>
                  </li>
                </ul>

                <span className="text-3xl font-bold pt-28 pb-4">
                  {data[2]?.price_bd}
                  <span className="text-gray-500 text-xs">BDT</span>{" "}
                  <span className="text-gray-500 text-xs">/Month</span>
                </span>

                <div className="pb-6">
                  <BuyNowButton message="Get Started" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Premium */}
        {data[1]?.status == 1 && (
          <div className="flex flex-col md:h-full md:w-[30%] w-full h-full p-5 md:p-0">
            <div className="border-2 border-gray-300 hover:border-green-500 rounded-3xl h-full w-full group transition-all duration-500 ease-in-out pb-4">
              <div className="w-full h-[20%] flex flex-col items-center justify-center border-b border-gray-300">
                <div className="flex w-full h-full items-center justify-start pl-10">
                  <div className="h-[30%] flex flex-col items-start justify-center py-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 group-hover:bg-[#F9F8F8] p-1">
                      <svg
                        className="text-black group-hover:text-green-500 transform group-hover:-rotate-45 transition-transform duration-500 ease-in-out" // Adjust your width, height, and color
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.918 10.0005H7.082C6.66587 9.99708 6.26541 10.1591 5.96873 10.4509C5.67204 10.7427 5.50343 11.1404 5.5 11.5565V17.4455C5.5077 18.3117 6.21584 19.0078 7.082 19.0005H9.918C10.3341 19.004 10.7346 18.842 11.0313 18.5502C11.328 18.2584 11.4966 17.8607 11.5 17.4445V11.5565C11.4966 11.1404 11.328 10.7427 11.0313 10.4509C10.7346 10.1591 10.3341 9.99708 9.918 10.0005Z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.918 4.0006H7.082C6.23326 3.97706 5.52559 4.64492 5.5 5.4936V6.5076C5.52559 7.35629 6.23326 8.02415 7.082 8.0006H9.918C10.7667 8.02415 11.4744 7.35629 11.5 6.5076V5.4936C11.4744 4.64492 10.7667 3.97706 9.918 4.0006Z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.082 13.0007H17.917C18.3333 13.0044 18.734 12.8425 19.0309 12.5507C19.3278 12.2588 19.4966 11.861 19.5 11.4447V5.55666C19.4966 5.14054 19.328 4.74282 19.0313 4.45101C18.7346 4.1592 18.3341 3.9972 17.918 4.00066H15.082C14.6659 3.9972 14.2654 4.1592 13.9687 4.45101C13.672 4.74282 13.5034 5.14054 13.5 5.55666V11.4447C13.5034 11.8608 13.672 12.2585 13.9687 12.5503C14.2654 12.8421 14.6659 13.0041 15.082 13.0007Z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.082 19.0006H17.917C18.7661 19.0247 19.4744 18.3567 19.5 17.5076V16.4936C19.4744 15.6449 18.7667 14.9771 17.918 15.0006H15.082C14.2333 14.9771 13.5256 15.6449 13.5 16.4936V17.5066C13.525 18.3557 14.2329 19.0241 15.082 19.0006Z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className=" h-[30%] flex flex-col items-start justify-center pl-6">
                    {/* <span className="text-3xl font-bold">
                                    1499.0<span className="text-gray-500 text-xs">BDT</span> <span className="text-gray-500 text-xs">/Month</span>
                                </span> */}
                    <span className="text-3xl font-bold">
                      {data[1]?.plan_name}
                    </span>
                    <p className="pt-1 text-sm text-gray-500">
                      For {data[1]?.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full h-[80%] flex flex-col items-center">
                <div className="mt-5 flex items-center justify-center">
                  <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white text-xl font-bold px-3 py-1 rounded-full shadow-lg animate-pulse hover:scale-105 transition-transform duration-300 text-center">
                    1 Month Free
                  </span>
                </div>
                <ul className="w-full flex flex-col items-center justify-center pt-5">
                  <li className="flex w-full items-center justify-start pl-10">
                    <div className=" rounded-full bg-[#EBF4FE] p-2">
                      <svg
                        width="13"
                        height="11"
                        viewBox="0 0 13 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.2596 10.677C5.25791 10.677 5.25594 10.677 5.25425 10.677C5.18438 10.6756 5.11846 10.6466 5.07112 10.5969L0.240477 5.49889C0.157647 5.41139 0.15004 5.27959 0.222446 5.18362C0.294853 5.08791 0.426705 5.0551 0.537709 5.10541L4.95899 7.11463C4.99618 7.13158 5.04013 7.12338 5.06859 7.09467L11.8128 0.253538C11.9041 0.160843 12.0534 0.150726 12.1571 0.23057C12.2607 0.310413 12.2847 0.453695 12.2123 0.561155L5.50359 10.5356C5.49401 10.5501 5.48274 10.5632 5.47034 10.5755L5.44076 10.6042C5.39258 10.6507 5.32722 10.677 5.2596 10.677Z"
                          fill="url(#paint0_linear_676_2806)"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_676_2806"
                            x1="0.172852"
                            y1="5.10729"
                            x2="12.254"
                            y2="5.10729"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6B70FF"></stop>
                            <stop offset="1" stopColor="#0BB0EE"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <span className="pl-6">Unlimited Invoices</span>
                  </li>
                  <li className="flex w-full items-center justify-start pl-10 mt-4">
                    <div className=" rounded-full bg-[#EBF4FE] p-2">
                      <svg
                        width="13"
                        height="11"
                        viewBox="0 0 13 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.2596 10.677C5.25791 10.677 5.25594 10.677 5.25425 10.677C5.18438 10.6756 5.11846 10.6466 5.07112 10.5969L0.240477 5.49889C0.157647 5.41139 0.15004 5.27959 0.222446 5.18362C0.294853 5.08791 0.426705 5.0551 0.537709 5.10541L4.95899 7.11463C4.99618 7.13158 5.04013 7.12338 5.06859 7.09467L11.8128 0.253538C11.9041 0.160843 12.0534 0.150726 12.1571 0.23057C12.2607 0.310413 12.2847 0.453695 12.2123 0.561155L5.50359 10.5356C5.49401 10.5501 5.48274 10.5632 5.47034 10.5755L5.44076 10.6042C5.39258 10.6507 5.32722 10.677 5.2596 10.677Z"
                          fill="url(#paint0_linear_676_2806)"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_676_2806"
                            x1="0.172852"
                            y1="5.10729"
                            x2="12.254"
                            y2="5.10729"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6B70FF"></stop>
                            <stop offset="1" stopColor="#0BB0EE"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <span className="pl-6">Api Access for 1 Domain</span>
                  </li>
                  <li className="flex w-full items-center justify-start pl-10 mt-4">
                    <div className=" rounded-full bg-[#EBF4FE] p-2">
                      <svg
                        width="13"
                        height="11"
                        viewBox="0 0 13 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.2596 10.677C5.25791 10.677 5.25594 10.677 5.25425 10.677C5.18438 10.6756 5.11846 10.6466 5.07112 10.5969L0.240477 5.49889C0.157647 5.41139 0.15004 5.27959 0.222446 5.18362C0.294853 5.08791 0.426705 5.0551 0.537709 5.10541L4.95899 7.11463C4.99618 7.13158 5.04013 7.12338 5.06859 7.09467L11.8128 0.253538C11.9041 0.160843 12.0534 0.150726 12.1571 0.23057C12.2607 0.310413 12.2847 0.453695 12.2123 0.561155L5.50359 10.5356C5.49401 10.5501 5.48274 10.5632 5.47034 10.5755L5.44076 10.6042C5.39258 10.6507 5.32722 10.677 5.2596 10.677Z"
                          fill="url(#paint0_linear_676_2806)"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_676_2806"
                            x1="0.172852"
                            y1="5.10729"
                            x2="12.254"
                            y2="5.10729"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6B70FF"></stop>
                            <stop offset="1" stopColor="#0BB0EE"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <span className="pl-6">2 Warehouses</span>
                  </li>
                  <li className="flex w-full items-center justify-start pl-10 mt-4">
                    <div className=" rounded-full bg-[#EBF4FE] p-2">
                      <svg
                        width="13"
                        height="11"
                        viewBox="0 0 13 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.2596 10.677C5.25791 10.677 5.25594 10.677 5.25425 10.677C5.18438 10.6756 5.11846 10.6466 5.07112 10.5969L0.240477 5.49889C0.157647 5.41139 0.15004 5.27959 0.222446 5.18362C0.294853 5.08791 0.426705 5.0551 0.537709 5.10541L4.95899 7.11463C4.99618 7.13158 5.04013 7.12338 5.06859 7.09467L11.8128 0.253538C11.9041 0.160843 12.0534 0.150726 12.1571 0.23057C12.2607 0.310413 12.2847 0.453695 12.2123 0.561155L5.50359 10.5356C5.49401 10.5501 5.48274 10.5632 5.47034 10.5755L5.44076 10.6042C5.39258 10.6507 5.32722 10.677 5.2596 10.677Z"
                          fill="url(#paint0_linear_676_2806)"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_676_2806"
                            x1="0.172852"
                            y1="5.10729"
                            x2="12.254"
                            y2="5.10729"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6B70FF"></stop>
                            <stop offset="1" stopColor="#0BB0EE"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <span className="pl-6">2 Addon Integrations</span>
                  </li>
                </ul>

                <span className="text-3xl font-bold pt-28 pb-4">
                  {data[1]?.price_bd}
                  <span className="text-gray-500 text-xs">BDT</span>{" "}
                  <span className="text-gray-500 text-xs">/Month</span>
                </span>

                <div className="pb-6">
                  <BuyNowButton message="Get Started" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingPlans;
