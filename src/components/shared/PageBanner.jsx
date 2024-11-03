import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";

const PageBanner = ({ content }) => {
  const { img, title } = content;

  return (
    <div className="h-[300px] relative">
      <Image
        className="absolute h-[300px] w-full object-cover top-0 left-0 rounded-[10px]"
        src="/assets/images/checkout/checkout.png"
        alt={title}
        width={1920}
        height={300}
      />
      <div className="absolute h-full w-full left-0 top-0 flex items-center bg-gradient-to-r from-[#151515] to-transparent rounded-[10px]">
        <h2 className="text-white text-[45px] font-bold ml-[100px] text-left">
          {title}
        </h2>
      </div>

      <Breadcrumbs title={title} />
    </div>
  );
};

export default PageBanner;
