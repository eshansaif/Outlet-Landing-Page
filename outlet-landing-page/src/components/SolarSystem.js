import Image from "next/image";

const SolarSystem = () => {
  return (
    <>
      {/* First Circle */}
      <div className="relative md:h-[950px] md:w-[950px] w-[350px] h-[350px] rounded-full border border-gray-300 animate-rotate-right-2 text-white mt-20 mb-10">
        <div className="absolute flex flex-col items-center justify-center md:top-[-40px] top-[-20px] left-1/2 rotate-fix-2 md:w-20 md:h-20 w-10 h-10 bg-gradient-to-b from-[#59ca38] to-[#18c2d9] rounded-full">
          <Image
            src="/dashboard.png"
            className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px]"
            alt="Dashboard"
            width={30}
            height={30}
          />
          <span className="md:text-xs text-[8px] md:text-normal text-bold">Dashboard</span>
        </div>
        <div className="absolute flex flex-col items-center justify-center md:right-[-40px] right-[-20px] top-1/2 rotate-fix-2 md:w-20 md:h-20 w-10 h-10 bg-gradient-to-b from-[#fc7b82] to-[#e73f3f] rounded-full">
        <Image
          src="/pos.png"
          className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px]"
          alt="Sale"
          width={30}
          height={30}
        />
        <span className="md:text-xs text-[8px] md:text-normal text-bold">Sale</span>
        </div>
        
        <div className="absolute flex flex-col items-center justify-center md:bottom-[-40px] bottom-[-20px] left-1/2 rotate-fix-2 md:w-20 md:h-20 w-10 h-10 bg-[#0bb0ee] rounded-full">
          <Image
            src="/purchase.png"
            className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px]"
            alt="Purchase"
            width={30}
            height={30}
          />
           <span className="md:text-xs text-[8px] md:text-normal text-bold">Purcahse</span>
        </div>
        
        <div className="absolute md:left-[-40px] left-[-20px] flex flex-col items-center justify-center top-1/2 rotate-fix-2 md:w-20 md:h-20 w-10 h-10 bg-gradient-to-b from-[#d787fc] to-[#845cf7] rounded-full">
          <Image
            src="/analysis.png"
            className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px]"
            alt="Analytics"
            width={30}
            height={30}
          />
          <span className="md:text-xs text-[8px] md:text-normal text-bold">Analytics</span>
        </div>
      </div>

      {/* Second Circle */}
      <div className="absolute flex justify-center items-center md:w-[680px] md:h-[680px] h-[250px] w-[250px] rounded-full border border-gray-300 animate-rotate-left text-white">
        <div className="absolute flex flex-col items-center justify-center md:top-[-40px] top-[-20px] left-1/2 rotate-fix-left md:w-20 md:h-20 w-10 h-10  bg-gradient-to-b from-[#f9c91e] to-[#fc4c4a] rounded-full">
        <Image
          src="/stock.png"
          className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px]"
          alt="Stock"
          width={30}
          height={30}
        />
        <span className="md:text-xs text-[8px] md:text-normal text-bold">Stock</span>
        </div>
        
        <div className="absolute md:right-[-40px] right-[-20px] top-1/2 flex flex-col justify-center items-center rotate-fix-left md:w-20 md:h-20 w-10 h-10 bg-gradient-to-r from-[#6b70ff] to-[#0bb0ee] rounded-full">
          <Image
            src="/balance.png"
            className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px]"
            alt="Balance"
            width={30}
            height={30}
          />
          <span className="md:text-xs text-[8px] md:text-normal text-bold">Balance</span>
        </div>
        <div className="absolute md:bottom-[-40px] bottom-[-20px] left-1/2 flex flex-col justify-center items-center rotate-fix-left md:w-20 md:h-20 w-10 h-10 bg-gradient-to-r from-[#18b5f0] to-[#b02ee5] rounded-full">
        <Image
          src="/e-commerce.png"
          className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px]"
          alt="E-Commerce"
          width={32}
          height={32}
        />
        <span className="md:text-[8px] text-[6px] md:text-normal text-bold">E-Commerce</span>
        </div>
        <div className="absolute md:left-[-40px] left-[-20px] top-1/2 flex flex-col justify-center items-center rotate-fix-left md:w-20 md:h-20 w-10 h-10 bg-gradient-to-r from-[#6b70ff] to-[#0bb0ee] rounded-full">
          <Image
            src="/finance.png"
            className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px]"
            alt="Finance"
            width={32}
            height={32}
          />
          <span className="md:text-xs text-[8px] md:text-normal text-bold">Finance</span>
        </div>
        
      </div>

      {/* Third  Circle */}
      <div className="absolute flex justify-center items-center md:w-[430px] md:h-[430px] w-[150px] h-[150px] rounded-full border border-gray-300 animate-rotate-right text-white">
        <div className="absolute md:top-[-40px] top-[-20px] flex flex-col justify-center items-center left-1/2 rotate-fix md:w-20 md:h-20 w-10 h-10 bg-gradient-to-b from-[#59ca38] to-[#18c2d9] rounded-full">
        <Image
          src="/hrm.png"
          className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px]"
          alt="HRM"
          width={32}
          height={32}
        />
        <span className="md:text-xs text-[8px] md:text-normal text-bold">HRM</span>
        </div>
       
       <div className="absolute md:right-[-40px] right-[-20px] top-1/2 flex flex-col justify-center items-center rotate-fix md:w-20 md:h-20 w-10 h-10 bg-gradient-to-b from-[#fc7b82] to-[#e73f3f] rounded-full">
       <Image
          src="/warehouse.png"
          className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px]"
          alt="Warehouse"
          width={32}
          height={32}
        />
        <span className="md:text-xs text-[8px] md:text-normal text-bold">Warehouse</span>
       </div>
        <div className="absolute md:bottom-[-40px] bottom-[-20px] left-1/2 flex flex-col justify-center items-center rotate-fix md:w-20 md:h-20 w-10 h-10 bg-[#0bb0ee] rounded-full">
          <Image
            src="/expense.png"
            className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px]"
            alt="Expense"
            width={32}
            height={32}
          />
           <span className="md:text-xs text-[6px] md:text-normal text-bold">Expense</span>
        </div>
        <div className="absolute md:left-[-40px] left-[-20px] top-1/2 flex flex-col justify-center items-center rotate-fix md:w-20 md:h-20 w-10 h-10 bg-gradient-to-b from-[#d787fc] to-[#845cf7] rounded-full">
        <Image
          src="/product.png"
          className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px]"
          alt=""
          width={32}
          height={32}
        />
        <span className="md:text-xs text-[8px] md:text-normal text-bold">Product</span>
        </div>

         
        <div className="absolute flex justify-center items-center bg-white p-1 rounded-full overflow-hidden rotate-fix md:w-[300px] md:h-[300px] w-[70px] h-[70px]">
          <video
            className="object-cover w-[75%] h-[75%] rounded-full "
            src="/center.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
       
      </div>
    </>
  );
};

export default SolarSystem;
