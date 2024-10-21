import Image from "next/image";
import Link from "next/link";
import BuyNowButton from "../components/BuyNowButton";
import FirstSlider from "../components/FirstSlider";
import StatsSection from "../components/StatsSection";
import SolarSystem from "../components/SolarSystem";
import TypedWithGradient from "../components/TypedWithGradient";

export default function Home() {
  return (
    <div className="flex items-center w-full justify-center font-[family-name:var(--font-geist-sans)] x-overflow-hidden">
      <main className="flex flex-col mt-16 w-full h-full ">
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
            <div className="flex w-[100%] h-[100%] flex-col items-center justify-center md:flex-row md:max-w-7xl md:mx-auto">
              <div className="flex flex-col items-center h-[100%] md:h-auto w-[100%] md:w-[50%] px-4 md:px-0">
                <div className="mt-16 md:mt-28">
                  <h6 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-center md:text-left">
                    Unlock the Power of Seamless Inventory Management
                  </h6>
                  <div className="h-10 md:h-12 text-center md:text-left mb-14 md:mb-0">
                    <TypedWithGradient message="  Wave Goodbye To Spreadsheets!" />
                  </div>
                  <p className="text-base md:text-lg mt-4 w-full md:w-[80%] text-center md:text-left">
                    Welcome to Outlet Expense—where efficiency and innovation
                    transform inventory management. Our software offers precise
                    tracking, automated workflows, and real-time insights to
                    streamline your operations and boost growth. Master your
                    inventory effortlessly. Welcome to Outlet Expense.
                  </p>
                </div>

                <div className="flex w-[100%] items-center justify-center md:justify-start mt-10 md:mt-4 gap-5 ">
                  <div className="md:h-10 h-8 text-xs md:text-md">
                    <BuyNowButton message="Start Your Journey" link="/pricing#pricing-plans" />
                  </div>
                  <div className="h-10">
                    <Link href="/your-target-page" passHref>
                      <div className="circleRing">
                        <div className="playIcon"></div>
                      </div>
                    </Link>
                  </div>
                  <div className="h-10 flex flex-col items-center justify-center">
                    <span className="text-xs md:text-lg font-semibold h-6 mt-2">
                      How It Works
                    </span>
                  </div>
                </div>
                {/* <div className="flex w-[100%] mt-14">
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
                </div> */}
              </div>
              <div className="flex h-auto w-full md:h-[100%] md:w-[50%] items-center overflow-x-hidden">
                <div className="relative animate-float mt-28 md:mt-44 p-6 md:p-0">
                  <Image
                    className=""
                    src="/outletdash.png" // Replace with your image path
                    alt="Logo"
                    height={400} // Adjust height for smaller screens
                    width={600} // Adjust width for smaller screens
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive sizes for image
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full z-0 relative bg-gradient-to-r from-[#ffffff] via-[#f9f8f8] to-[#f9f6f6] pb-20">
          <div className="max-w-7xl mx-auto border-b border-gray-300">
            <div className="flex flex-col h-[60%] w-full pt-20">
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-4xl font-bold md:text-left text-center">
                  Is Your Business Growth Ready for{" "}
                  <span className="gradient-text">Outlet Expense's</span>{" "}
                  Support?
                </span>
                <span className="mt-10 text-gray text-xl md:text-left text-center">
                  Outlet Expense is one-stop destination for sustainable growth
                </span>
              </div>

              <StatsSection />
            </div>
          </div>
        </section>

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
          <div className="z-10 max-w-7xl mx-auto h-full">
            <div className="flex md:flex-row flex-col w-full flex-wrap">
              <div className="flex flex-col md:w-[70%] w-full flex-wrap">
                <span className="md:text-4xl text-2xl font-bold md:text-left text-center px-10 md:px-0">
                  How <span className="gradient-text">Outlet Expense's</span>{" "}
                  Inventory Fulfillment Solutions Operate
                </span>
                <p className="pt-5 px-10 md:px-0 md:text-xl text-sm md:text-left text-center">
                  Outlet Expense's automated inventory fulfillment system tracks
                  every stock, order, and sale with high accuracy and
                  transparency. Our multi-channel, automated inventory
                  management system enables real-time monitoring and
                  organization of your inventory, helping you make quick,
                  critical business decisions in a timely manner.
                </p>
              </div>
              <div className="md:w-[30%] w-full flex items-center justify-center pt-10 md:pt-0">
                <BuyNowButton message="Get Started" link="/pricing#pricing-plans"/>
              </div>
            </div>
            {/* ----------------------SLIDER------------------------ */}
            <div className="w-full mt-28 md:h-screen h-[1000px] border-b border-gray-200 relative">
              <FirstSlider />
            </div>
          </div>
        </section>

        {/*-------------------- Fourth Section------------------ */}

        <div className="flex flex-col w-full">
          <div className="w-full bg-gradient-to-r from-[#ffffff] via-[#f9f8f8] to-[#f9f6f6] h-[45%]">
            <div className="flex md:flex-row flex-col items-center justify-between border-b border-gray-200 h-full w-full max-w-7xl mx-auto pt-6 pb-6">
              <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 p-3 justify-center items-center">
                {[
                  "/brothers.jpg",
                  "/iluxurybd.jpg",
                  "/muslim.jpg",
                  "/rafi.jpg",
                  "/ap.jpg",
                  "/barcode.jpg",
                  "/lx.jpg",
                  "/inaya.jpg",
                ].map((src, idx) => (
                  <figure
                    key={idx}
                    className="w-48 h-28 flex justify-center items-center bg-[#FFFFFF] rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 overflow-hidden"
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

              <div className="flex justify-evenly flex-col h-full md:pt-0 pt-5">
                <p className="font-bold text-2xl md:text-left text-center">
                  Trusted By More Than <br />{" "}
                  <span className="gradient-text">100+</span> Clients.
                </p>
                <div className="pt-5">
                  <BuyNowButton message="See Client Feedback" link="#client-feedback"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*-------------------- Fifth Section------------------ */}

        <section className="w-full pb-20 bg-gradient-to-r bg-white relative inventory">
          <div className="max-w-7xl mx-auto z-10 h-full">
            <div className="flex flex-col h-full w-full">
              <span className="md:text-5xl text-3xl font-semibold text-center pt-20 pb-10 z-10">
                Centralized & Multi-Channel Inventory
                <br />
                Management System
              </span>
              <div className="p-5 z-10 bg-white border-l border-r border-t rounded-t-3xl h-[50%]">
                <div className="grid md:grid-cols-4 grid-cols-2 md:grid-rows-3 grid-rows-1 gap-4 h-full border-gray border rounded-3xl p-5 z-10">
                  <div className="bg-white border rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="flex md:flex-row flex-col md:justify-left justify-center items-center h-full w-full">
                      <div className="h-12 w-12 flex items-center justify-center bg-gradient-to-b from-[#59ca38] to-[#18c2d9] rounded-full">
                        <Image
                          className=""
                          src="/management_1.svg" // Replace with your image path
                          alt="Logo"
                          height={30}
                          width={30}
                        />
                      </div>
                      <p className="font-semibold md:ml-4 mt-4 md:mt-0 md:text-left text-center">
                        Access
                        <br /> Management
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="flex md:flex-row flex-col md:justify-left justify-center items-center h-full w-full">
                      <div className="h-12 w-12 bg-gradient-to-b from-[#fc7b82] to-[#e73f3f] rounded-full flex items-center justify-center">
                        <Image
                          className=""
                          src="/management_2.svg" // Replace with your image path
                          alt="Logo"
                          height={30}
                          width={30}
                        />
                      </div>
                      <p className="font-semibold md:ml-4 mt-4 md:mt-0 md:text-left text-center">
                        Inventory <br /> Control System
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border rounded-2xl p-4 hover:scale-105 transition-transform duration-300 ">
                    <div className="flex md:flex-row flex-col md:justify-left justify-center items-center h-full w-full">
                      <div className="h-12 w-12 bg-[#0bb0ee] rounded-full flex items-center justify-center">
                        <Image
                          className=""
                          src="/management_3.svg" // Replace with your image path
                          alt="Logo"
                          height={30}
                          width={30}
                        />
                      </div>
                      <p className="font-semibold md:ml-4 mt-4 md:mt-0 md:text-left text-center">
                        Payment Gateway <br />
                        Integration
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="flex md:flex-row flex-col md:justify-left justify-center items-center h-full w-full">
                      <div className="h-12 w-12 bg-gradient-to-b from-[#d787fc] to-[#845cf7] rounded-full flex items-center justify-center">
                        <Image
                          className=""
                          src="/management_12.svg" // Replace with your image path
                          alt="Logo"
                          height={30}
                          width={30}
                        />
                      </div>
                      <p className="font-semibold md:ml-4 mt-4 md:mt-0 md:text-left text-center">
                        Product Return <br />
                        Management
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="flex md:flex-row flex-col md:justify-left justify-center items-center h-full w-full">
                      <div className="h-12 w-12 bg-gradient-to-b from-[#f9c91e] to-[#fc4c4a] rounded-full flex items-center justify-center">
                        <Image
                          className=""
                          src="/management_5.svg" // Replace with your image path
                          alt="Logo"
                          height={30}
                          width={30}
                        />
                      </div>
                      <p className="font-semibold md:ml-4 mt-4 md:mt-0 md:text-left text-center">
                        Vendor <br />
                        Management
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="flex md:flex-row flex-col md:justify-left justify-center items-center h-full w-full">
                      <div className="h-12 w-12 bg-gradient-to-r from-[#6b70ff] to-[#0bb0ee] rounded-full flex items-center justify-center">
                        <Image
                          className=""
                          src="/management_6.svg" // Replace with your image path
                          alt="Logo"
                          height={30}
                          width={30}
                        />
                      </div>
                      <p className="font-semibold md:ml-4 mt-4 md:mt-0 md:text-left text-center">
                        Real-Time <br /> Analytics And Reporting
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="flex md:flex-row flex-col md:justify-left justify-center items-center h-full w-full">
                      <div className="h-12 w-12 bg-gradient-to-r from-[#18b5f0] to-[#b02ee5] rounded-full flex items-center justify-center">
                        <Image
                          className=""
                          src="/management_7.svg" // Replace with your image path
                          alt="Logo"
                          height={30}
                          width={30}
                        />
                      </div>
                      <p className="font-semibold md:ml-4 mt-4 md:mt-0 md:text-left text-center">
                        Wherehouse <br />
                        Controller
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="flex md:flex-row flex-col md:justify-left justify-center items-center h-full w-full">
                      <div className="h-12 w-12 bg-gradient-to-r from-[#6b70ff] to-[#0bb0ee] rounded-full flex items-center justify-center">
                        <Image
                          className=""
                          src="/management_8.svg" // Replace with your image path
                          alt="Logo"
                          height={30}
                          width={30}
                        />
                      </div>
                      <p className="font-semibold md:ml-4 mt-4 md:mt-0 md:text-left text-center">
                        Barcoding & <br />
                        Labeling
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="flex md:flex-row flex-col md:justify-left justify-center items-center h-full w-full">
                      <div className="h-12 w-12 bg-gradient-to-b from-[#59ca38] to-[#18c2d9] rounded-full flex items-center justify-center">
                        <Image
                          className=""
                          src="/management_9.svg" // Replace with your image path
                          alt="Logo"
                          height={30}
                          width={30}
                        />
                      </div>
                      <p className="font-semibold md:ml-4 mt-4 md:mt-0 md:text-left text-center">
                        Invoicing <br />
                        And Sales
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="flex md:flex-row flex-col md:justify-left justify-center items-center h-full w-full">
                      <div className="h-12 w-12 bg-gradient-to-b from-[#fc7b82] to-[#e73f3f] rounded-full flex items-center justify-center">
                        <Image
                          className=""
                          src="/management_10.svg" // Replace with your image path
                          alt="Logo"
                          height={30}
                          width={30}
                        />
                      </div>
                      <p className="font-semibold md:ml-4 mt-4 md:mt-0 md:text-left text-center">
                        Product
                        <br />
                        Management
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="flex md:flex-row flex-col md:justify-left justify-center items-center h-full w-full">
                      <div className="h-12 w-12 bg-[#0bb0ee] rounded-full flex items-center justify-center">
                        <Image
                          className=""
                          src="/management_11.svg" // Replace with your image path
                          alt="Logo"
                          height={30}
                          width={30}
                        />
                      </div>
                      <p className="font-semibold md:ml-4 mt-4 md:mt-0 md:text-left text-center">
                        Exporter
                        <br />
                        Management
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="flex md:flex-row flex-col md:justify-left justify-center items-center h-full w-full">
                      <div className="h-12 w-12 bg-gradient-to-b from-[#d787fc] to-[#845cf7] rounded-full flex items-center justify-center">
                        <Image
                          className=""
                          src="/management_9-1.svg" // Replace with your image path
                          alt="Logo"
                          height={30}
                          width={30}
                        />
                      </div>
                      <p className="font-semibold md:ml-4 mt-4 md:mt-0 md:text-left text-center">
                        Dynamic
                        <br />
                        HRM Management
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*-------------------- Sixth Section------------------ */}

        <section className="w-full bg-[#F8F9FD] relative pt-20">
          <div className="max-w-7xl mx-auto h-full">
            <div className="flex md:flex-row flex-col w-full h-[90%] items-center">
              <div className="md:w-[50%] md:h-full w-full h-[50%]">
                <div className="custom-gradient-background w-full h-full rounded-3xl flex items-center justify-center">
                  <Image
                    className="relative animate-float w-full max-w-[300px] sm:max-w-[500px] md:max-w-[600px] h-auto"
                    src="/outlet-dashboard-mockup.png" // Replace with your image path
                    alt="Logo"
                    height={700}
                    width={600}
                  />
                </div>
              </div>
              <div className="md:w-[50%] md:h-full w-full h-[50%] pl-16 md:pt-0 pt-16">
                <div className="flex flex-col w-full h-full">
                  <span className="custom-gradient-text text-2xl pb-4">
                    Key Features Of :
                  </span>
                  <span className="md:text-4xl text-2xl font-bold">
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
                    <BuyNowButton message="See All Fatures"  link="/features"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*-------------------- Seventh Section (Solar System)------------------ */}
        <section className="w-full h-full relative solar-background pt-10">
          <div className="md:max-w-7xl max-w-lg mx-auto h-full">
            <div className="flex flex-col h-full w-full items-center justify-center">
              <span className="pb-3 md:text-4xl text-3xl font-semibold text-center">
                Our Inventory Management System is Loaded <br />
                with Powerful Features
              </span>
              <div className="relative flex flex-col h-full w-full items-center justify-center overflow-hidden">
                <SolarSystem/>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------- Eighth Section (Customer Feedback)------------------  */}
        <section className="w-full relative pt-20 pb-20 bg-custom-gradient-sevent" id="client-feedback">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="md:text-5xl text-3xl font-semibold font-gilroy text-center text-gray-900 mb-8">
              Our Clients Expresses Their Satisfaction
            </h2>
            <p className="pt-6 text-center text-xl text-gray-500">
              Our clients consistently share their satisfaction with our
              services,
              <br /> emphasizing our dedication to providing outstanding
              experiences
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-20">
              {/* <!-- Card 1 --> */}
              <div className="bg-blue-200 rounded-lg shadow-lg overflow-hidden flex flex-col justify-center">
                <div className="pl-8 pt-8">
                  <p className="text-lg text-gray-700 mb-16 mt-12 font-semibold">
                    "This product has greatly improved our workflow. We can't
                    imagine going back!"
                  </p>
                </div>
                <div className="bg-white h-[1px]"></div>
                <div className="flex items-center justify-start pl-2 py-6">
                  <div className="pl-4 pt-3 rounded-full">
                    <Image
                      className="rounded-full"
                      src="/user3.jpg" // Replace with your image path
                      alt="Logo"
                      height={50}
                      width={50}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-gray-900 pl-3 pt-3">
                      <span className="font-semibold">Anwar Khan</span>, I
                      Luxury BD
                    </p>
                    <div class="flex items-center  pl-3 pt-1">
                      {/* <!-- Star 1 --> */}
                      <svg
                        class="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.558 4.768a1 1 0 00.95.69h5.02c.969 0 1.372 1.24.588 1.81l-4.066 2.95a1 1 0 00-.364 1.118l1.558 4.768c.3.922-.755 1.688-1.54 1.118l-4.066-2.95a1 1 0 00-1.176 0l-4.066 2.95c-.784.57-1.838-.196-1.54-1.118l1.558-4.768a1 1 0 00-.364-1.118L2.43 9.195c-.783-.57-.38-1.81.588-1.81h5.02a1 1 0 00.95-.69L9.049 2.927z"></path>
                      </svg>
                      {/* <!-- Star 2 --> */}
                      <svg
                        class="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.558 4.768a1 1 0 00.95.69h5.02c.969 0 1.372 1.24.588 1.81l-4.066 2.95a1 1 0 00-.364 1.118l1.558 4.768c.3.922-.755 1.688-1.54 1.118l-4.066-2.95a1 1 0 00-1.176 0l-4.066 2.95c-.784.57-1.838-.196-1.54-1.118l1.558-4.768a1 1 0 00-.364-1.118L2.43 9.195c-.783-.57-.38-1.81.588-1.81h5.02a1 1 0 00.95-.69L9.049 2.927z"></path>
                      </svg>
                      {/* <!-- Star 3 --> */}
                      <svg
                        class="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.558 4.768a1 1 0 00.95.69h5.02c.969 0 1.372 1.24.588 1.81l-4.066 2.95a1 1 0 00-.364 1.118l1.558 4.768c.3.922-.755 1.688-1.54 1.118l-4.066-2.95a1 1 0 00-1.176 0l-4.066 2.95c-.784.57-1.838-.196-1.54-1.118l1.558-4.768a1 1 0 00-.364-1.118L2.43 9.195c-.783-.57-.38-1.81.588-1.81h5.02a1 1 0 00.95-.69L9.049 2.927z"></path>
                      </svg>
                      {/* <!-- Star 4 --> */}
                      <svg
                        class="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.558 4.768a1 1 0 00.95.69h5.02c.969 0 1.372 1.24.588 1.81l-4.066 2.95a1 1 0 00-.364 1.118l1.558 4.768c.3.922-.755 1.688-1.54 1.118l-4.066-2.95a1 1 0 00-1.176 0l-4.066 2.95c-.784.57-1.838-.196-1.54-1.118l1.558-4.768a1 1 0 00-.364-1.118L2.43 9.195c-.783-.57-.38-1.81.588-1.81h5.02a1 1 0 00.95-.69L9.049 2.927z"></path>
                      </svg>
                      {/* <!-- Star 5 --> */}
                      <svg
                        class="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.558 4.768a1 1 0 00.95.69h5.02c.969 0 1.372 1.24.588 1.81l-4.066 2.95a1 1 0 00-.364 1.118l1.558 4.768c.3.922-.755 1.688-1.54 1.118l-4.066-2.95a1 1 0 00-1.176 0l-4.066 2.95c-.784.57-1.838-.196-1.54-1.118l1.558-4.768a1 1 0 00-.364-1.118L2.43 9.195c-.783-.57-.38-1.81.588-1.81h5.02a1 1 0 00.95-.69L9.049 2.927z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/*  <!-- Card 2 --> */}
              <div className="bg-yellow-200 rounded-lg shadow-lg overflow-hidden flex flex-col justify-center">
                <div className="pl-8 pt-8">
                  <p className="text-lg text-gray-700 mb-16 mt-12 font-semibold">
                    "Fantastic support and amazing value. Highly recommended!"
                  </p>
                </div>
                <div className="bg-white h-[1px]"></div>
                <div className="flex items-center justify-start pl-2 py-6">
                  <div className="pl-4 pt-3 rounded-full">
                    <Image
                      className="rounded-full"
                      src="/user2.jpg" // Replace with your image path
                      alt="Logo"
                      height={50}
                      width={50}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-gray-900 pl-3 pt-3">
                      <span className="font-semibold">H M Abdul Kader</span>,
                      Muslim Pharma
                    </p>
                    <div class="flex items-center  pl-3 pt-1">
                      {/* <!-- Star 1 --> */}
                      <svg
                        class="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.558 4.768a1 1 0 00.95.69h5.02c.969 0 1.372 1.24.588 1.81l-4.066 2.95a1 1 0 00-.364 1.118l1.558 4.768c.3.922-.755 1.688-1.54 1.118l-4.066-2.95a1 1 0 00-1.176 0l-4.066 2.95c-.784.57-1.838-.196-1.54-1.118l1.558-4.768a1 1 0 00-.364-1.118L2.43 9.195c-.783-.57-.38-1.81.588-1.81h5.02a1 1 0 00.95-.69L9.049 2.927z"></path>
                      </svg>
                      {/* <!-- Star 2 --> */}
                      <svg
                        class="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.558 4.768a1 1 0 00.95.69h5.02c.969 0 1.372 1.24.588 1.81l-4.066 2.95a1 1 0 00-.364 1.118l1.558 4.768c.3.922-.755 1.688-1.54 1.118l-4.066-2.95a1 1 0 00-1.176 0l-4.066 2.95c-.784.57-1.838-.196-1.54-1.118l1.558-4.768a1 1 0 00-.364-1.118L2.43 9.195c-.783-.57-.38-1.81.588-1.81h5.02a1 1 0 00.95-.69L9.049 2.927z"></path>
                      </svg>
                      {/* <!-- Star 3 --> */}
                      <svg
                        class="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.558 4.768a1 1 0 00.95.69h5.02c.969 0 1.372 1.24.588 1.81l-4.066 2.95a1 1 0 00-.364 1.118l1.558 4.768c.3.922-.755 1.688-1.54 1.118l-4.066-2.95a1 1 0 00-1.176 0l-4.066 2.95c-.784.57-1.838-.196-1.54-1.118l1.558-4.768a1 1 0 00-.364-1.118L2.43 9.195c-.783-.57-.38-1.81.588-1.81h5.02a1 1 0 00.95-.69L9.049 2.927z"></path>
                      </svg>
                      {/* <!-- Star 4 --> */}
                      <svg
                        class="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.558 4.768a1 1 0 00.95.69h5.02c.969 0 1.372 1.24.588 1.81l-4.066 2.95a1 1 0 00-.364 1.118l1.558 4.768c.3.922-.755 1.688-1.54 1.118l-4.066-2.95a1 1 0 00-1.176 0l-4.066 2.95c-.784.57-1.838-.196-1.54-1.118l1.558-4.768a1 1 0 00-.364-1.118L2.43 9.195c-.783-.57-.38-1.81.588-1.81h5.02a1 1 0 00.95-.69L9.049 2.927z"></path>
                      </svg>
                      {/* <!-- Star 5 --> */}
                      <svg
                        class="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.558 4.768a1 1 0 00.95.69h5.02c.969 0 1.372 1.24.588 1.81l-4.066 2.95a1 1 0 00-.364 1.118l1.558 4.768c.3.922-.755 1.688-1.54 1.118l-4.066-2.95a1 1 0 00-1.176 0l-4.066 2.95c-.784.57-1.838-.196-1.54-1.118l1.558-4.768a1 1 0 00-.364-1.118L2.43 9.195c-.783-.57-.38-1.81.588-1.81h5.02a1 1 0 00.95-.69L9.049 2.927z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Card 3 --> */}
              <div className="bg-pink-200 rounded-lg shadow-lg overflow-hidden flex flex-col justify-center">
                <div className="pl-8 pt-8">
                  <p className="text-lg text-gray-700 mb-16 mt-12 font-semibold">
                    "The best decision we made for our business. The features
                    are unmatched."
                  </p>
                </div>
                <div className="bg-white h-[1px]"></div>
                <div className="flex items-center justify-start pl-2 py-6">
                  <div className="pl-4 pt-3 rounded-full">
                    <Image
                      className="rounded-full"
                      src="/user1.jpg" // Replace with your image path
                      alt="Logo"
                      height={50}
                      width={50}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-gray-900 pl-3 pt-3">
                      <span className="font-semibold">Robert Jhonson</span>,
                      BizSolutions
                    </p>
                    <div class="flex items-center  pl-3 pt-1">
                      {/* <!-- Star 1 --> */}
                      <svg
                        class="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.558 4.768a1 1 0 00.95.69h5.02c.969 0 1.372 1.24.588 1.81l-4.066 2.95a1 1 0 00-.364 1.118l1.558 4.768c.3.922-.755 1.688-1.54 1.118l-4.066-2.95a1 1 0 00-1.176 0l-4.066 2.95c-.784.57-1.838-.196-1.54-1.118l1.558-4.768a1 1 0 00-.364-1.118L2.43 9.195c-.783-.57-.38-1.81.588-1.81h5.02a1 1 0 00.95-.69L9.049 2.927z"></path>
                      </svg>
                      {/* <!-- Star 2 --> */}
                      <svg
                        class="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.558 4.768a1 1 0 00.95.69h5.02c.969 0 1.372 1.24.588 1.81l-4.066 2.95a1 1 0 00-.364 1.118l1.558 4.768c.3.922-.755 1.688-1.54 1.118l-4.066-2.95a1 1 0 00-1.176 0l-4.066 2.95c-.784.57-1.838-.196-1.54-1.118l1.558-4.768a1 1 0 00-.364-1.118L2.43 9.195c-.783-.57-.38-1.81.588-1.81h5.02a1 1 0 00.95-.69L9.049 2.927z"></path>
                      </svg>
                      {/* <!-- Star 3 --> */}
                      <svg
                        class="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.558 4.768a1 1 0 00.95.69h5.02c.969 0 1.372 1.24.588 1.81l-4.066 2.95a1 1 0 00-.364 1.118l1.558 4.768c.3.922-.755 1.688-1.54 1.118l-4.066-2.95a1 1 0 00-1.176 0l-4.066 2.95c-.784.57-1.838-.196-1.54-1.118l1.558-4.768a1 1 0 00-.364-1.118L2.43 9.195c-.783-.57-.38-1.81.588-1.81h5.02a1 1 0 00.95-.69L9.049 2.927z"></path>
                      </svg>
                      {/* <!-- Star 4 --> */}
                      <svg
                        class="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.558 4.768a1 1 0 00.95.69h5.02c.969 0 1.372 1.24.588 1.81l-4.066 2.95a1 1 0 00-.364 1.118l1.558 4.768c.3.922-.755 1.688-1.54 1.118l-4.066-2.95a1 1 0 00-1.176 0l-4.066 2.95c-.784.57-1.838-.196-1.54-1.118l1.558-4.768a1 1 0 00-.364-1.118L2.43 9.195c-.783-.57-.38-1.81.588-1.81h5.02a1 1 0 00.95-.69L9.049 2.927z"></path>
                      </svg>
                      {/* <!-- Star 5 --> */}
                      <svg
                        class="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.558 4.768a1 1 0 00.95.69h5.02c.969 0 1.372 1.24.588 1.81l-4.066 2.95a1 1 0 00-.364 1.118l1.558 4.768c.3.922-.755 1.688-1.54 1.118l-4.066-2.95a1 1 0 00-1.176 0l-4.066 2.95c-.784.57-1.838-.196-1.54-1.118l1.558-4.768a1 1 0 00-.364-1.118L2.43 9.195c-.783-.57-.38-1.81.588-1.81h5.02a1 1 0 00.95-.69L9.049 2.927z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
