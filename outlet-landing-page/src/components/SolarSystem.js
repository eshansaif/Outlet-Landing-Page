import Image from "next/image";

const SolarSystem = () => {
  return (
    <>
      <div className="relative h-[950px] w-[950px] rounded-full border border-gray-300 animate-rotate-right-2">
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

      <div className="absolute flex justify-center items-center w-[600px] h-[600px] rounded-full border border-gray-300 animate-rotate-left">
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
        <Image
          src="/path/to/planet7.png"
          className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-fix-left w-20 h-20 bg-gradient-to-r from-[#18b5f0] to-[#b02ee5] rounded-full"
          alt="Planet 7"
          width={32}
          height={32}
        />
        <Image
          src="/path/to/planet8.png"
          className="absolute left-[-40px] top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-fix-left w-20 h-20 bg-gradient-to-r from-[#6b70ff] to-[#0bb0ee] rounded-full"
          alt="Planet 8"
          width={32}
          height={32}
        />
      </div>

      <div className="absolute flex justify-center items-center w-[350px] h-[350px] rounded-full border border-gray-300 animate-rotate-right">
        <Image
          src="/path/to/planet9.png"
          className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-fix w-20 h-20 bg-gradient-to-b from-[#59ca38] to-[#18c2d9] rounded-full"
          alt="Planet 9"
          width={32}
          height={32}
        />
        <Image
          src="/path/to/planet10.png"
          className="absolute right-[-40px] top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-fix w-20 h-20 bg-gradient-to-b from-[#fc7b82] to-[#e73f3f] rounded-full"
          alt="Planet 10"
          width={32}
          height={32}
        />
        <Image
          src="/path/to/planet11.png"
          className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-fix w-20 h-20 bg-[#0bb0ee] rounded-full"
          alt="Planet 11"
          width={32}
          height={32}
        />
        <Image
          src="/path/to/planet12.png"
          className="absolute left-[-40px] top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-fix w-20 h-20 bg-gradient-to-b from-[#d787fc] to-[#845cf7] rounded-full"
          alt="Planet 12"
          width={32}
          height={32}
        />
      </div>
    </>
  );
};

export default SolarSystem;
