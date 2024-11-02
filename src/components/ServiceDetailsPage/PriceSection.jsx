import React from "react";
import FullWidthBtn from "../shared/FullWidthBtn";
import Link from "next/link";

const PriceSection = ({ price }) => {
  return (
    <div className="bg-secondary p-10 rounded-[10px]">
      <h3 className="text-4xl mb-7 font-bold text-white">Price: ${price}</h3>
      <Link href="/checkout">
        <FullWidthBtn text="Proceed Checkout" />
      </Link>
    </div>
  );
};

export default PriceSection;
