import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

const ServiceHorizontalCard = ({ service }) => {
  const { title, _id } = service;
  return (
    <Link href={`/services/${_id}`}>
      <div className="bg-white mt-5 p-4 flex justify-between items-center text-secondary font-semibold rounded-md hover:bg-primary hover:text-white">
        <h3 className="hover:underline">{title}</h3>
        <BsArrowRightShort className="text-2xl" />
      </div>
    </Link>
  );
};

export default ServiceHorizontalCard;
