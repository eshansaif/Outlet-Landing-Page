import Image from "next/image";
import Link from "next/link";
import BuyNowButton from '../components/BuyNowButton'; 

export default function Home() {
  const props = {
    message: "Start For Free"
  }
  return (
    <div className="flex items-center w-full justify-center h-full font-[family-name:var(--font-geist-sans)] x-overflow-hidden">
      <section className="h-full w-full z-0">
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
        <main className="flex flex-col justify-center h-[120%] w-full overflow-auto">
          <div className="top-background flex flex-row row-start-2 h-[120%] w-full ">
            <div className="flex w-[100%] h-[100%] max-w-7xl mx-auto">
              <div className="flex flex-col h-[100%] w-[50%] items-center">
                <div className="mt-40">
                  <h6 class="text-5xl font-bold mb-2">
                    Unlock the Power of Seamless Inventory Management
                  </h6>
                  <span class="gradient-text text-2xl font-semibold">
                    Wave Goodbye to Spreadsheets!
                  </span>
                  <p className="text-lg mt-2 w-[80%]">
                    Welcome to Outlet Expense—where efficiency and innovation
                    transform inventory management. Our software offers precise
                    tracking, automated workflows, and real-time insights to
                    streamline your operations and boost growth. Master your
                    inventory effortlessly. Welcome to Outlet Expense.
                  </p>
                </div>

                <div className="flex w-[100%] items-center justify-start mt-4 gap-5">
                  <div className="">
                      <BuyNowButton props={props} />
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
                
              </div>
              <div className="flex h-[100%] w-[50%] items-center overflow-x-hidden">
                <div className="realtive animate-float">
                  <Image
                    className=""
                    src="/outletdash.png" // Replace with your image path
                    alt="Logo"
                    height={600}
                    width={800} // Adjust the height as per your needs
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
