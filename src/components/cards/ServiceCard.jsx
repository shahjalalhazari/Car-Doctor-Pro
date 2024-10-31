import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

const ServiceCard = ({ service }) => {
  const { title, img, price, _id } = service;

  return (
    <div className="card bg-base-100 border border-paragraph p-6">
      <Link href={`/services/${_id}`}>
        <Image
          src={img}
          alt={title}
          width="750"
          height="500"
          className="rounded-lg"
        />
      </Link>
      <div className="mt-5">
        <Link href={`/services/${_id}`}>
          <h2 className="text-secondary font-bold text-2xl hover:underline">
            {title}
          </h2>
        </Link>
        <div className="flex justify-between items-center mt-3">
          <p className="text-xl font-semibold text-primary">Price : ${price}</p>
          <Link href={`/services/${_id}`}>
            <BsArrowRightShort className="text-primary text-3xl hover:border rounded-full border-primary ease-in-out" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
