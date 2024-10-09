import Image from "next/image";

const SolarSystem = () => {
  return (
    <>
      <div className="relative h-[950px] w-[950px] rounded-full border border-gray-300 animate-rotate-right-2 text-white">
        <div className="absolute flex flex-col items-center justify-center top-[-40px] left-1/2 rotate-fix w-20 h-20 bg-gradient-to-b from-[#59ca38] to-[#18c2d9] rounded-full">
          <Image
            src="/dashboard.png"
            className=""
            alt="Dashboard"
            width={30}
            height={30}
          />
          <span className="text-xs">Dashboard</span>
        </div>
        <div className="absolute flex flex-col items-center justify-center right-[-40px] top-1/2 rotate-fix w-20 h-20 bg-gradient-to-b from-[#fc7b82] to-[#e73f3f] rounded-full">
        <Image
          src="/pos.png"
          className=""
          alt="Sale"
          width={30}
          height={30}
        />
        <span className="text-xs">Sale</span>
        </div>
        
        <div className="absolute flex flex-col items-center justify-center bottom-[-40px] left-1/2 rotate-fix w-20 h-20 bg-[#0bb0ee] rounded-full">
          <Image
            src="/purchase.png"
            className=""
            alt="Purchase"
            width={30}
            height={30}
          />
           <span className="text-xs">Purcahse</span>
        </div>
        
        <div className="absolute left-[-40px] flex flex-col items-center justify-center top-1/2 rotate-fix w-20 h-20 bg-gradient-to-b from-[#d787fc] to-[#845cf7] rounded-full">
          <Image
            src="/analysis.png"
            className=""
            alt="Analytics"
            width={30}
            height={30}
          />
          <span className="text-xs">Analytics</span>
        </div>
      </div>

      <div className="absolute flex justify-center items-center w-[680px] h-[680px] rounded-full border border-gray-300 animate-rotate-left text-white">
        <div className="absolute flex flex-col items-center justify-center top-[-40px] left-1/2 rotate-fix-left w-20 h-20  bg-gradient-to-b from-[#f9c91e] to-[#fc4c4a] rounded-full">
        <Image
          src="/stock.png"
          className=""
          alt="Stock"
          width={30}
          height={30}
        />
        <span className="text-xs">Stock</span>
        </div>
        
        <div className="absolute right-[-40px] top-1/2 flex flex-col justify-center items-center rotate-fix-left w-20 h-20 bg-gradient-to-r from-[#6b70ff] to-[#0bb0ee] rounded-full">
          <Image
            src="/balance.png"
            className=""
            alt="Balance"
            width={30}
            height={30}
          />
          <span className="text-xs">Balance</span>
        </div>
        <div className="absolute bottom-[-40px] left-1/2 flex flex-col justify-center items-center rotate-fix-left w-20 h-20 bg-gradient-to-r from-[#18b5f0] to-[#b02ee5] rounded-full">
        <Image
          src="/e-commerce.png"
          className=""
          alt="E-Commerce"
          width={32}
          height={32}
        />
        <span className="text-[10px]">E-Commerce</span>
        </div>
        <div className="absolute left-[-40px] top-1/2 flex flex-col justify-center items-center rotate-fix-left w-20 h-20 bg-gradient-to-r from-[#6b70ff] to-[#0bb0ee] rounded-full">
          <Image
            src="/finance.png"
            className=""
            alt="Finance"
            width={32}
            height={32}
          />
          <span className="text-[10px]">Finance</span>
        </div>
        
      </div>

      <div className="absolute flex justify-center items-center w-[430px] h-[430px] rounded-full border border-gray-300 animate-rotate-right text-white">
        <div className="absolute top-[-40px] flex flex-col justify-center items-center left-1/2 rotate-fix w-20 h-20 bg-gradient-to-b from-[#59ca38] to-[#18c2d9] rounded-full">
        <Image
          src="/hrm.png"
          className=""
          alt="HRM"
          width={32}
          height={32}
        />
        <span className="text-[10px]">HRM</span>
        </div>
       
       <div className="absolute right-[-40px] top-1/2 flex flex-col justify-center items-center rotate-fix w-20 h-20 bg-gradient-to-b from-[#fc7b82] to-[#e73f3f] rounded-full">
       <Image
          src="/warehouse.png"
          className=""
          alt="Warehouse"
          width={32}
          height={32}
        />
        <span className="text-[10px]">Warehouse</span>
       </div>
        <div className="absolute bottom-[-40px] left-1/2 flex flex-col justify-center items-center rotate-fix w-20 h-20 bg-[#0bb0ee] rounded-full">
          <Image
            src="/expense.png"
            className=""
            alt="Expense"
            width={32}
            height={32}
          />
           <span className="text-[10px]">Expense</span>
        </div>
        <div className="absolute left-[-40px] top-1/2 flex flex-col justify-center items-center rotate-fix w-20 h-20 bg-gradient-to-b from-[#d787fc] to-[#845cf7] rounded-full">
        <Image
          src="/product.png"
          className=""
          alt=""
          width={32}
          height={32}
        />
        <span className="text-[10px]">Product</span>
        </div>

         {/* Video player in the center */}
        <div className="absolute flex justify-center items-center rounded-full overflow-hidden rotate-fix w-[300px] h-[300px]">
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
