import React from "react";
import PrimaryOutlineBtn from "../shared/PrimaryOutlineBtn";
import PrimaryBtn from "../shared/PrimaryBtn";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="carousel w-full rounded-[10px]">
      {banners.map((banner, index) => (
        <div
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.7), rgba(0,0,0,0.3)),
              url(assets/images/banner/${index + 1}.jpg)`,
          }}
          key={index}
          id={`slide${index + 1}`}
          className="carousel-item relative w-full h-[90vh] bg-cover"
        >
          <div className="text-white flex items-center text-start ml-[100px] w-1/3">
            <div className="space-y-7">
              <h1 className="font-bold text-6xl leading-[4.5rem]">
                {banner.title}
              </h1>
              <p>{banner.description}</p>
              <div className="flex gap-5">
                <PrimaryBtn text="Discover More" />
                <PrimaryOutlineBtn text="Latest Project" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-[50px] right-[50px] flex gap-3  transform justify-between">
            <Link
              href={banner.prevSlide}
              className="btn btn-circle border-none hover:bg-primary hover:text-white"
            >
              ❮
            </Link>
            <Link
              href={banner.nextSlide}
              className="btn btn-circle  border-none bg-primary hover:bg-primary hover:text-white"
            >
              ❯
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

const banners = [
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form.",
    nextSlide: "#slide2",
    prevSlide: "#slide6",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form.",
    nextSlide: "#slide3",
    prevSlide: "#slide1",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form.",
    nextSlide: "#slide4",
    prevSlide: "#slide2",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form.",
    nextSlide: "#slide5",
    prevSlide: "#slide3",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form.",
    nextSlide: "#slide6",
    prevSlide: "#slide4",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form.",
    nextSlide: "#slide1",
    prevSlide: "#slide5",
  },
];

export default Banner;
