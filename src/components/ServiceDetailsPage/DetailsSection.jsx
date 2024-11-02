import Image from "next/image";
import React from "react";

const DetailsSection = ({ service }) => {
  const { img, title, description, facility } = service;
  return (
    <div>
      {/* Service Image */}
      <Image
        src={img}
        alt={title}
        width={752}
        height={400}
        className="object-cover w-full h-[400px] rounded-[10px]"
      />

      {/* details */}
      <h3 className="text-4xl font-bold mt-12">{title}</h3>
      <p className="text-paragraph text-justify mt-7">{description}</p>

      {/* Facilities */}
      <div className="grid lg:grid-cols-2 gap-7 mt-7">
        {facility?.map((item, index) => (
          <div
            key={index}
            className="bg-[#f3f3f3] rounded-[10px] border-t-[3px] border-primary p-8"
          >
            <h5 className="font-bold text-xl">{item.name}</h5>
            <p className="text-paragraph mt-3">{item.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsSection;
