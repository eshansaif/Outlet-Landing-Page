import "./page.css";
import Image from "next/image";

const Features = async () => {
  return (
    <div clasName="bg-gradient-to-r from-[#ffffff] via-[#f9f8f8] to-[#f9f6f6] w-full">
      <section className="w-full h-[50%] z-0 relative page-top-background pt-36 pb-20">
        <Image
          className="absolute top-[50%] right-0"
          src="/banner-shape-2.png" // Replace with your image path
          alt="Logo"
          height={100}
          width={70}
        />
        <Image
          className=" absolute bottom-0 left-0"
          src="/banner-shape-1.png" // Replace with your image path
          alt="Logo"
          height={100}
          width={70}
        />
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center">
            <span className="gradient-text font-semibold text-2xl">
              Our Features
            </span>
            <span className="font-bold text-5xl w-[80%] mt-6 text-center">
              Discover Our Feature Packed Inventory Management System
            </span>
            <p className="text-xl mt-6 text-center text-gray-500">
              Discover how Outlet Expense streamlines inventory management with
              <br /> features designed for simplicity and organization
            </p>
          </div>
        </div>
      </section>
      <section className="w-full z-0 relative pt-24 pb-10 h-screen">
        <div clasName="max-w-7xl mx-auto h-full">
          <div className="grid grid-cols-4 grid-rows-3 gap-2 h-screen w-full px-20">
            {/* Cell 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-end min-h-48 group">
              <div className="flex justify-left items-center p-3">
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
              <p className="text-md text-gray-500 py-2 px-4">
                Outlet Expense offers comprehensive inventory management,
                tracking stock levels, managing suppliers,
                <br />
                and generating insightful reports for efficient decision-making.
              </p>
              <div className="bg-transparent h-[3px] rounded-b-lg group-hover:bg-blue-800 transition-all duration-500 ease-in-out"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
