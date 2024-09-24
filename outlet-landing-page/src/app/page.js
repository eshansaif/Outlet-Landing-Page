import Image from "next/image";
import Link from "next/link";
import BuyNowButton from '../components/BuyNowButton'; 

export default function Home() {
  return (
    <div className="flex items-center w-full justify-center font-[family-name:var(--font-geist-sans)] x-overflow-hidden">
      
        <main className="flex flex-col mt-16 w-full overflow-auto h-full">
        <section className="top-background w-full h-screen z-0 pb-12">
        <Image
          className=" absolute top-[35%] right-0"
          src="/background-half-circle.png" // Replace with your image path
          alt="Logo"
          height={150}
          width={90}
        />
        <Image
          className=" absolute top-[90%] right-0"
          src="/banner_shape_4.png" // Replace with your image path
          alt="Logo"
          height={500}
          width={150}
        />
        <Image
          className=" absolute top-[112%] left-40"
          src="/banner_shape_3.png" // Replace with your image path
          alt="Logo"
          height={500}
          width={150}
        />
          <div className="flex flex-row w-full ">
            <div className="flex w-[100%] h-[100%] max-w-7xl mx-auto">
              <div className="flex flex-col h-[100%] w-[50%] items-center">
                <div className="mt-40">
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
                <div className="flex w-[100%]">
                  <span className="font-bold text-2xl mt-12">Trusted By</span>
                </div>
                <div className="flex w-[100%] mt-10">
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
          <div className="flex flex-row row-start-2 h-screen w-full"> 
            <div className="w-full bg-[#F1F5FB] h-[45%]">
            <div className="flex items-center justify-between border-b border-gray-200 h-full w-full max-w-7xl mx-auto pt-6 pb-6">
              <div className="flex justify-evenly flex-col h-full">
                <p className="font-bold text-2xl">Trusted By More Than <br/> <span className="gradient-text">1800+</span> Companies.</p>
                <div className="">
                  <BuyNowButton message="See Client Feedback"/>
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
      className="w-52 h-28 flex justify-center items-center bg-[#FFFFFF] rounded-lg transition-transform transform hover:scale-105"
    >
      <Image
        className=""
        src={src}
        alt={`Logo ${idx + 1}`}
        height={70}
        width={170}
      />
    </figure>
  ))}
</div>
            </div>
            </div> 
          </div>
        </main>
    </div>
  );
}
