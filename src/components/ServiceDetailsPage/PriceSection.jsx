import FullWidthBtn from "../shared/FullWidthBtn";
import Link from "next/link";

const PriceSection = ({ service }) => {
  const { price, _id } = service;

  return (
    <div className="bg-secondary p-10 rounded-[10px]">
      <h3 className="text-4xl mb-7 font-bold text-white">Price: ${price}</h3>
      <Link href={`/booking/${_id}`}>
        <FullWidthBtn text="Proceed To Booking" />
      </Link>
    </div>
  );
};

export default PriceSection;
