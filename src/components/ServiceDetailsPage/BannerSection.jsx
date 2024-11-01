import Image from "next/image";
import Link from "next/link";

const BannerSection = ({ service }) => {
  const { title, img, price, description, facility } = service;

  return (
    <div className="h-[300px] relative">
      <Image
        className="absolute h-[300px] w-full object-cover top-0 left-0 rounded-xl"
        src={img}
        alt={title}
        width={1920}
        height={300}
      />
      <div className="absolute h-full w-full left-0 top-0 flex items-center bg-gradient-to-r from-[#151515] to-transparent rounded-xl">
        <h2 className="text-white text-[45px] font-bold ml-[100px] text-left">
          {title}
        </h2>
      </div>

      <div className="absolute bottom-0 left-1/2 flex items-center space-x-2 text-white bg-primary -translate-x-1/2 px-7 py-3">
        <Link
          href="/"
          className="hover:underline transition-colors duration-200"
        >
          Home
        </Link>
        <span className="text-white">/</span>
        <Link
          href="/services"
          className="hover:underline transition-colors duration-200"
        >
          Services
        </Link>
        <span className="text-white">/</span>
        <span className="text-white font-medium text-sm opacity-70">
          {title}
        </span>
      </div>
    </div>
  );
};

export default BannerSection;
