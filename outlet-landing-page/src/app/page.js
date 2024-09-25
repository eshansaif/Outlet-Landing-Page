import Image from "next/image";
import Link from "next/link";
import BuyNowButton from "../components/BuyNowButton";
import FirstSlider from "../components/FirstSlider";


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
                  <h6 class="text-5xl font-bold mb-4">
                    Unlock the Power of Seamless Inventory Management
                  </h6>
                  <span class="gradient-text text-4xl font-semibold">
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

      <section className="w-full z-0 pb-28 relative bg-gradient-to-r from-[#ffffff] via-[#f9f8f8] to-[#f9f6f6]  pt-20">
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
                  <span className="text-4xl font-bold">How <span className="gradient-text">Outlet Expense's</span> Inventory Fullfillment Solutions Works</span>
                  <p className="pt-5">
                    Outlet Expense's automated inventory fulfillment system tracks every stock, order, 
                    and sale with high accuracy and transparency. 
                    Our multi-channel, automated inventory management system enables 
                    real-time monitoring and organization of your inventory, 
                    helping you make quick, critical business decisions in a timely manner.
                  </p>
                </div>
                <div className="w-[30%] flex items-center justify-center">
                  <BuyNowButton message="Get Starte"/>
                </div>

              </div>
              {/* ----------------------SLIDER------------------------ */}
              <div className="w-full h-screen mt-28">
                <FirstSlider/>
              </div>
          </div>
      </section>
        
      </main>
    </div>
  );
}
