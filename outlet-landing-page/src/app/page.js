import Image from "next/image";
import Link from "next/link";
import BuyNowButton from "../components/BuyNowButton";
import FirstSlider from "../components/FirstSlider";
import StatsSection from "../components/StatsSection";
import SolarSystem from "../components/SolarSystem";

export default function Home() {
  return (
    <div className="flex items-center w-full justify-center font-[family-name:var(--font-geist-sans)] x-overflow-hidden">
      <main className="flex flex-col mt-16 w-full h-full">
        <section className="top-background w-full z-0 pb-28 relative">
          <Image
            className=" absolute top-[35%] right-0"
            src="/background-half-circle.png" // Replace with your image path
            alt="Logo"
            height={150}
            width={90}
          />
          <Image
            className=" absolute bottom-0 right-0"
            src="/banner_shape_4.png" // Replace with your image path
            alt="Logo"
            height={500}
            width={150}
          />
          <Image
            className=" absolute bottom-0 left-40"
            src="/banner_shape_3.png" // Replace with your image path
            alt="Logo"
            height={500}
            width={150}
          />
          <div className="flex flex-row w-full ">
            <div className="flex w-[100%] h-[100%] max-w-7xl mx-auto">
              <div className="flex flex-col h-[100%] w-[50%] items-center">
                <div className="mt-28">
                  <h6 className="text-5xl font-bold mb-4">
                    Unlock the Power of Seamless Inventory Management
                  </h6>
                  <span className="gradient-text text-4xl font-semibold">
                    Wave Goodbye To Spreadsheets!
                  </span>
                  <p className="text-lg mt-4 w-[80%]">
                    Welcome to Outlet Expense—where efficiency and innovation
                    transform inventory management. Our software offers precise
                    tracking, automated workflows, and real-time insights to
                    streamline your operations and boost growth. Master your
                    inventory effortlessly. Welcome to Outlet Expense.
                  </p>
                </div>

                <div className="flex w-[100%] items-center justify-start mt-4 gap-5">
                  <div className="">
                    <BuyNowButton message="Start For Free" />
                  </div>
                  <div className="">
                    <Link href="/your-target-page" passHref>
                      <div className="circleRing">
                        <div className="playIcon"></div>
                      </div>
                    </Link>
                  </div>
                  <div className="">
                    <span className="text-lg font-semibold">How it Works</span>
                  </div>
                </div>
                <div className="flex w-[100%] mt-14">
                  <span className="font-bold text-2xl lg:mt-2">Trusted By</span>
                </div>
                <div className="flex w-[100%] mt-4">
                  <ul className="flex">
                    <li className="flex items-center justify-center mr-6">
                      <Image
                        src="/Google-Reviews.png" // Replace with your image path
                        alt="Logo"
                        height={40}
                        width={70}
                      />
                      <span className="ml-3 font-semibold">(4.5)</span>
                    </li>
                    <li className="flex items-center justify-center mr-6">
                      <Image
                        src="/trusted_2.png" // Replace with your image path
                        alt="Logo"
                        height={40}
                        width={100}
                      />
                      <span className="ml-3 font-semibold">(5.0)</span>
                    </li>
                    <li className="flex items-center justify-center mr-6">
                      <Image
                        src="/trusted_3.png" // Replace with your image path
                        alt="Logo"
                        height={40}
                        width={100}
                      />
                      <span className="ml-3 font-semibold">(4.0)</span>
                    </li>
                    <li className="flex items-center justify-center mr-6">
                      <Image
                        src="/trusted_4.png" // Replace with your image path
                        alt="Logo"
                        height={20}
                        width={40}
                      />
                      <span className="ml-3 font-semibold">(4.5)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex h-[100%] w-[50%] items-center overflow-x-hidden">
                <div className="realtive animate-float mt-44">
                  <Image
                    className=""
                    src="/outletdash.png" // Replace with your image path
                    alt="Logo"
                    height={700}
                    width={900} // Adjust the height as per your needs
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex flex-col w-full">
          <div className="w-full bg-gradient-to-r from-[#ffffff] via-[#f9f8f8] to-[#f9f6f6] h-[45%]">
            <div className="flex items-center justify-between border-b border-gray-200 h-full w-full max-w-7xl mx-auto pt-6 pb-6">
              <div className="flex justify-evenly flex-col h-full">
                <p className="font-bold text-2xl">
                  Trusted By More Than <br />{" "}
                  <span className="gradient-text">1800+</span> Companies.
                </p>
                <div className="pt-5">
                  <BuyNowButton message="See Client Feedback" />
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 p-3 justify-center items-center">
                {[
                  "/companies_1.webp",
                  "/companies_2.webp",
                  "/companies_3.webp",
                  "/companies_4.webp",
                  "/companies_5.webp",
                  "/companies_6.webp",
                  "/companies_7.webp",
                  "/companies_8.webp",
                ].map((src, idx) => (
                  <figure
                    key={idx}
                    className="w-52 h-28 flex justify-center items-center bg-[#FFFFFF] rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                  >
                    <Image
                      className=""
                      src={src}
                      alt={`Logo ${idx + 1}`}
                      height={50}
                      width={100}
                    />
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/*-------------------- Third Section------------------ */}

        <section className="w-full z-0 relative bg-gradient-to-r from-[#ffffff] via-[#f9f8f8] to-[#f9f6f6] pt-20">
          <Image
            className=" absolute top-[25%] right-0 transform rotate-180"
            src="/work_images.png" // Replace with your image path
            alt="Logo"
            height={700}
            width={400}
          />
          <Image
            className=" absolute top-[45%] left-0"
            src="/work_images.png" // Replace with your image path
            alt="Logo"
            height={700}
            width={400}
          />
          <div className="z-10 max-w-7xl mx-auto">
            <div className="flex w-full flex-wrap">
              <div className="flex flex-col w-[70%] flex-wrap">
                <span className="text-4xl font-bold">
                  How <span className="gradient-text">Outlet Expense's</span>{" "}
                  Inventory Fullfillment Solutions Works
                </span>
                <p className="pt-5">
                  Outlet Expense's automated inventory fulfillment system tracks
                  every stock, order, and sale with high accuracy and
                  transparency. Our multi-channel, automated inventory
                  management system enables real-time monitoring and
                  organization of your inventory, helping you make quick,
                  critical business decisions in a timely manner.
                </p>
              </div>
              <div className="w-[30%] flex items-center justify-center">
                <BuyNowButton message="Get Starte" />
              </div>
            </div>
            {/* ----------------------SLIDER------------------------ */}
            <div className="w-full h-screen mt-28 border-b border-gray-200">
              <FirstSlider />
            </div>
          </div>
        </section>

        {/*-------------------- Fourth Section------------------ */}

        <section className="w-full z-0 relative bg-gradient-to-r from-[#ffffff] via-[#f9f8f8] to-[#f9f6f6] pb-20">
          <div className="max-w-7xl mx-auto border-b border-gray-300">
            <div className="flex flex-col h-[60%] w-full pt-20">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold">
                  Is Your Business Growth Ready for{" "}
                  <span className="gradient-text">Outlet Expense's</span>{" "}
                  Support?
                </span>
                <span className="mt-10 text-gray text-xl">
                  Outlet Expense is one-stop destination for sustainable growth
                </span>
              </div>

              <StatsSection />
            </div>
          </div>
        </section>

        {/*-------------------- Fifth Section------------------ */}

        <section className="w-full pb-20 bg-gradient-to-r bg-white relative inventory">
          <div className="max-w-7xl mx-auto z-10 h-full">
            <div className="flex flex-col h-full w-full">
              <span className="text-5xl font-semibold text-center pt-20 pb-10 z-10">
                Centralized & Multi-Channel Inventory
                <br />
                Management System
              </span>
              <div className="p-5 z-10 bg-white border-l border-r border-t rounded-t-3xl h-[50%]">
                <div className="grid grid-cols-4 grid-rows-3 gap-4 h-full border-gray border rounded-3xl p-5 z-10">
                  <div className="bg-white border rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-left items-center h-full w-full">
                      <div className="h-12 w-12 flex items-center justify-center bg-gradient-to-b from-[#59ca38] to-[#18c2d9] rounded-full">
                        <Image
                          className=""
                          src="/management_1.svg" // Replace with your image path
                          alt="Logo"
                          height={30}
                          width={30}
                        />
                      </div>
                      <p className="font-semibold ml-4">
                        User Access <br />
                        Management
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-left items-center h-full w-full">
                      <div className="h-12 w-12 bg-gradient-to-b from-[#fc7b82] to-[#e73f3f] rounded-full flex items-center justify-center">
                        <Image
                          className=""
                          src="/management_2.svg" // Replace with your image path
                          alt="Logo"
                          height={30}
                          width={30}
                        />
                      </div>
                      <p className="font-semibold ml-4">
                        Inventory <br />
                        Management
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border rounded-2xl p-4 hover:scale-105 transition-transform duration-300 ">
                    <div className="flex justify-left items-center h-full w-full">
                      <div className="h-12 w-12 bg-[#0bb0ee] rounded-full flex items-center justify-center">
                        <Image
                          className=""
                          src="/management_3.svg" // Replace with your image path
                          alt="Logo"
                          height={30}
                          width={30}
                        />
                      </div>
                      <p className="font-semibold ml-4">
                        Third-party <br />
                        Integration
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-left items-center h-full w-full">
                      <div className="h-12 w-12 bg-gradient-to-b from-[#d787fc] to-[#845cf7] rounded-full flex items-center justify-center">
                        <Image
                          className=""
                          src="/management_12.svg" // Replace with your image path
                          alt="Logo"
                          height={30}
                          width={30}
                        />
                      </div>
                      <p className="font-semibold ml-4">
                        Return <br />
                        Management
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-left items-center h-full w-full">
                      <div className="h-12 w-12 bg-gradient-to-b from-[#f9c91e] to-[#fc4c4a] rounded-full flex items-center justify-center">
                        <Image
                          className=""
                          src="/management_5.svg" // Replace with your image path
                          alt="Logo"
                          height={30}
                          width={30}
                        />
                      </div>
                      <p className="font-semibold ml-4">
                        Supplier <br />
                        Management
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-left items-center h-full w-full">
                      <div className="h-12 w-12 bg-gradient-to-r from-[#6b70ff] to-[#0bb0ee] rounded-full flex items-center justify-center">
                        <Image
                          className=""
                          src="/management_6.svg" // Replace with your image path
                          alt="Logo"
                          height={30}
                          width={30}
                        />
                      </div>
                      <p className="font-semibold ml-4">
                        Real-Time Analytics And <br />
                        Reporting
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-left items-center h-full w-full">
                      <div className="h-12 w-12 bg-gradient-to-r from-[#18b5f0] to-[#b02ee5] rounded-full flex items-center justify-center">
                        <Image
                          className=""
                          src="/management_7.svg" // Replace with your image path
                          alt="Logo"
                          height={30}
                          width={30}
                        />
                      </div>
                      <p className="font-semibold ml-4">
                        Wherehouse <br />
                        Management
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-left items-center h-full w-full">
                      <div className="h-12 w-12 bg-gradient-to-r from-[#6b70ff] to-[#0bb0ee] rounded-full flex items-center justify-center">
                        <Image
                          className=""
                          src="/management_8.svg" // Replace with your image path
                          alt="Logo"
                          height={30}
                          width={30}
                        />
                      </div>
                      <p className="font-semibold ml-4">
                        Labeling & <br />
                        Barcoding
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-left items-center h-full w-full">
                      <div className="h-12 w-12 bg-gradient-to-b from-[#59ca38] to-[#18c2d9] rounded-full flex items-center justify-center">
                        <Image
                          className=""
                          src="/management_9.svg" // Replace with your image path
                          alt="Logo"
                          height={30}
                          width={30}
                        />
                      </div>
                      <p className="font-semibold ml-4">
                        Sales And
                        <br />
                        Invoicing
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-left items-center h-full w-full">
                      <div className="h-12 w-12 bg-gradient-to-b from-[#fc7b82] to-[#e73f3f] rounded-full flex items-center justify-center">
                        <Image
                          className=""
                          src="/management_10.svg" // Replace with your image path
                          alt="Logo"
                          height={30}
                          width={30}
                        />
                      </div>
                      <p className="font-semibold ml-4">
                        Product Attribution
                        <br />
                        Management
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-left items-center h-full w-full">
                      <div className="h-12 w-12 bg-[#0bb0ee] rounded-full flex items-center justify-center">
                        <Image
                          className=""
                          src="/management_11.svg" // Replace with your image path
                          alt="Logo"
                          height={30}
                          width={30}
                        />
                      </div>
                      <p className="font-semibold ml-4">
                        Order
                        <br />
                        Management
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-left items-center h-full w-full">
                      <div className="h-12 w-12 bg-gradient-to-b from-[#d787fc] to-[#845cf7] rounded-full flex items-center justify-center">
                        <Image
                          className=""
                          src="/management_9-1.svg" // Replace with your image path
                          alt="Logo"
                          height={30}
                          width={30}
                        />
                      </div>
                      <p className="font-semibold ml-4">
                        Purchasing
                        <br />
                        Receiving
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*-------------------- Fifth Section------------------ */}

        <section className="w-full h-screen bg-[#F8F9FD] relative pt-20">
          <div className="max-w-7xl mx-auto h-full">
            <div className="flex w-full h-[90%] items-center">
              <div className="w-[50%] h-full">
                <div className="custom-gradient-background w-full h-full rounded-3xl flex items-center justify-center">
                  <Image
                    className="relative animate-float"
                    src="/outlet-dashboard-mockup.png" // Replace with your image path
                    alt="Logo"
                    height={700}
                    width={600}
                  />
                </div>
              </div>
              <div className="w-[50%] h-full pl-16">
                <div className="flex flex-col w-full h-full">
                  <span className="custom-gradient-text text-2xl pb-4">
                    Key Features Of :
                  </span>
                  <span className="text-4xl font-bold">
                    Our Automated Solutions for{" "}
                    <span className="text-[#3b82f6]">
                      <br />
                      Inventory Management
                    </span>{" "}
                    and Fulfillment
                  </span>
                  <span className="pt-10 pb-10 text-xl">
                    These features become even more impressive when experienced
                    firsthand.
                  </span>
                  <ul>
                    <li className="flex justify-start pb-5 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#1C75BB"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="pl-5 text-lg">
                        User Permission Management
                      </span>
                    </li>
                    <li className="flex justify-start pb-5 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#1C75BB"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="pl-5 text-lg">
                        Centralized Inventory Management
                      </span>
                    </li>
                    <li className="flex justify-start pb-5 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#1C75BB"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="pl-5 text-lg">
                        Real-time analytics and reporting
                      </span>
                    </li>
                    <li className="flex justify-start pb-5 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#1C75BB"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="pl-5 text-lg">
                        Product Attribution Management
                      </span>
                    </li>
                  </ul>
                  <div className="flex items-start pt-6">
                    <BuyNowButton message="See All Fatures" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/*--------------------Sixth Section (Solar System)------------------ */}
        <section className="w-full relative solar-background pt-20 pb-20">
        <div className="max-w-7xl mx-auto h-full">
          <div className="flex flex-col h-full w-full items-center justify-center">
            <span className="pb-10 text-4xl font-semibold text-center">Our Inventory Management System is Loaded <br/>with Powerful Features</span>
            <div className="flex flex-col h-full w-full items-center justify-center mt-10">
              <SolarSystem/>
            </div>
          
          </div>
        </div>
        </section>
      </main>
    </div>
  );
}
