import Image from "next/image";

const SolarSystem = () => {
  return (
    <>
      <div className="relative flex justify-center items-center h-[650px] w-[650px] rounded-full border border-gray-300 animate-rotate-right-2">
        <Image
          src=""
          className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-fix w-12 h-12  bg-gradient-to-b from-[#59ca38] to-[#18c2d9] rounded-full"
          alt=""
          width={32}
          height={32}
        />
        <Image
          src="/path/to/planet2.png"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 rotate-fix w-12 h-12 bg-gradient-to-b from-[#fc7b82] to-[#e73f3f] rounded-full"
          alt="Planet 2"
          width={32}
          height={32}
        />
        <Image
          src="/path/to/planet3.png"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-fix w-12 h-12 bg-[#0bb0ee] rounded-full"
          alt="Planet 3"
          width={32}
          height={32}
        />
        <Image
          src="/path/to/planet4.png"
          className="absolute left-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-fix w-12 h-12 bg-gradient-to-b from-[#d787fc] to-[#845cf7] rounded-full"
          alt="Planet 4"
          width={32}
          height={32}
        />
      </div>

      <div className="absolute flex justify-center items-center w-[450px] h-[450px] rounded-full border border-gray-300 animate-rotate-left">
        <Image
          src="/path/to/planet5.png"
          className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-fix-left w-12 h-12  bg-gradient-to-b from-[#f9c91e] to-[#fc4c4a] rounded-full"
          alt="Planet 5"
          width={32}
          height={32}
        />
        <Image
          src="/path/to/planet6.png"
          className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-fix-left w-12 h-12 bg-gradient-to-r from-[#6b70ff] to-[#0bb0ee] rounded-full"
          alt="Planet 6"
          width={32}
          height={32}
        />
        <Image
          src="/path/to/planet7.png"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-fix-left w-12 h-12 bg-gradient-to-r from-[#18b5f0] to-[#b02ee5] rounded-full"
          alt="Planet 7"
          width={32}
          height={32}
        />
        <Image
          src="/path/to/planet8.png"
          className="absolute left-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-fix-left w-12 h-12 bg-gradient-to-r from-[#6b70ff] to-[#0bb0ee] rounded-full"
          alt="Planet 8"
          width={32}
          height={32}
        />
      </div>

      <div className="absolute flex justify-center items-center w-[300px] h-[300px] rounded-full border border-gray-300 animate-rotate-right">
        <Image
          src="/path/to/planet9.png"
          className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-fix w-12 h-12 bg-gradient-to-b from-[#59ca38] to-[#18c2d9] rounded-full"
          alt="Planet 9"
          width={32}
          height={32}
        />
        <Image
          src="/path/to/planet10.png"
          className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-fix w-12 h-12 bg-gradient-to-b from-[#fc7b82] to-[#e73f3f] rounded-full"
          alt="Planet 10"
          width={32}
          height={32}
        />
        <Image
          src="/path/to/planet11.png"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-fix w-12 h-12 bg-[#0bb0ee] rounded-full"
          alt="Planet 11"
          width={32}
          height={32}
        />
        <Image
          src="/path/to/planet12.png"
          className="absolute left-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-fix w-12 h-12 bg-gradient-to-b from-[#d787fc] to-[#845cf7] rounded-full"
          alt="Planet 12"
          width={32}
          height={32}
        />
      </div>
    </>
  );
};

export default SolarSystem;
