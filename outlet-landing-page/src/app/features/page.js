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
      <section className="w-full z-0 relative pt-24 pb-10">
        <div clasName="max-w-7xl mx-auto h-full">
          <div className="grid grid-cols-4 grid-rows-3 gap-6 w-full px-20 pb-28">
            {/* Cell 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between min-h-48 group">
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
            {/* Cell 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between min-h-48 group">
              <div className="flex justify-left items-center p-3">
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
              <p className="text-md text-gray-500 py-2 px-4">
                User Access Management in Outlet Expense enables secure
                role-based access, allowing businesses to control permissions
                and monitor user activities efficiently.
              </p>
              <div className="flex flex-col justify-end">
                <div className="bg-transparent h-[3px] rounded-b-lg group-hover:bg-blue-800 transition-all duration-500 ease-in-out"></div>
              </div>
              
            </div>
            {/* Cell 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between min-h-48 group">
              <div className="flex justify-left items-center p-3">
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
              <p className="text-md text-gray-500 py-2 px-4">
                Third-party Integration in Outlet Expense seamlessly connects with external platforms, 
                enhancing workflow automation, data synchronization, and expanding business functionality.
              </p>

              <div className="bg-transparent h-[3px] rounded-b-lg group-hover:bg-blue-800 transition-all duration-500 ease-in-out"></div>
            </div>

            {/* Cell 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between min-h-48 group">
              <div className="flex justify-left items-center p-3">
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
              <p className="text-md text-gray-500 py-2 px-4">
              Return Management in Outlet Expense streamlines product returns, ensuring smooth handling and maintaining accurate inventory records.
              </p>

              <div className="bg-transparent h-[3px] rounded-b-lg group-hover:bg-blue-800 transition-all duration-500 ease-in-out"></div>
            </div>

            {/* Cell 5 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between min-h-48 group">
              <div className="flex justify-left items-center p-3">
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
              <p className="text-md text-gray-500 py-2 px-4">
                Supplier Management in Outlet Expense simplifies vendor tracking, order management, and communication to ensure efficient procurement and stock replenishment.
              </p>

              <div className="bg-transparent h-[3px] rounded-b-lg group-hover:bg-blue-800 transition-all duration-500 ease-in-out"></div>
            </div>

            {/* Cell 6 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between min-h-48 group">
              <div className="flex justify-left items-center p-3">
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
              <p className="text-md text-gray-500 py-2 px-4">
              Real-Time Analytics and Reporting in Outlet Expense provide instant insights into sales, inventory, and performance, enabling data-driven decision-making.
              </p>

              <div className="bg-transparent h-[3px] rounded-b-lg group-hover:bg-blue-800 transition-all duration-500 ease-in-out"></div>
            </div>

            {/* Cell 7 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between min-h-48 group">
              <div className="flex justify-left items-center p-3">
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
              <p className="text-md text-gray-500 py-2 px-4">
                Warehouse Management in Outlet Expense optimizes storage, streamlines inventory tracking, and ensures efficient stock movement across multiple locations.
              </p>

              <div className="bg-transparent h-[3px] rounded-b-lg group-hover:bg-blue-800 transition-all duration-500 ease-in-out"></div>
            </div>

            {/* Cell 8 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between min-h-48 group">
              <div className="flex justify-left items-center p-3">
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
              <p className="text-md text-gray-500 py-2 px-4">
              Labeling & Barcoding in Outlet Expense simplifies product identification, speeds up inventory processes, and ensures accurate stock management.
              </p>

              <div className="bg-transparent h-[3px] rounded-b-lg group-hover:bg-blue-800 transition-all duration-500 ease-in-out"></div>
            </div>

            {/* Cell 9 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between min-h-48 group">
              <div className="flex justify-left items-center p-3">
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
              <p className="text-md text-gray-500 py-2 px-4">
                Sales and Invoicing in Outlet Expense automate transaction tracking, generate invoices, and streamline payment processing for efficient sales management.
              </p>

              <div className="bg-transparent h-[3px] rounded-b-lg group-hover:bg-blue-800 transition-all duration-500 ease-in-out"></div>
            </div>

            {/* Cell 10 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between min-h-48 group">
              <div className="flex justify-left items-center p-3">
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
              <p className="text-md text-gray-500 py-2 px-4">
                 Product Attribution Management in Outlet Expense organizes product details, including size, color, and category, for efficient inventory categorization and tracking.
              </p>

              <div className="bg-transparent h-[3px] rounded-b-lg group-hover:bg-blue-800 transition-all duration-500 ease-in-out"></div>
            </div>

            {/* Cell 11 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between min-h-48 group">
              <div className="flex justify-left items-center p-3">
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
              <p className="text-md text-gray-500 py-2 px-4">
                Order Management in Outlet Expense streamlines order processing, tracks fulfillment, and ensures timely delivery for improved customer satisfaction.
              </p>

              <div className="bg-transparent h-[3px] rounded-b-lg group-hover:bg-blue-800 transition-all duration-500 ease-in-out"></div>
            </div>

            {/* Cell 12 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between min-h-48 group">
              <div className="flex justify-left items-center p-3">
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
              <p className="text-md text-gray-500 py-2 px-4">
              Purchasing Receiving in Outlet Expense efficiently manages incoming stock, verifies order accuracy, and updates inventory levels for seamless operations.
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
