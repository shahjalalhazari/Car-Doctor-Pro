import Image from "next/image";
import React from "react";
import PrimaryBtn from "../shared/PrimaryBtn";

const AboutSection = () => {
  return (
    <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 lg:gap-20">
      <div className="relative">
        <Image
          src="/assets/images/about_us/person.jpg"
          alt="about us"
          width="460"
          height="473"
          className="bg-cover"
        />
        <Image
          src="/assets/images/about_us/parts.jpg"
          alt="about us"
          width="327"
          height="332"
          className="absolute top-44 right-0 border-white border-[10px] rounded-xl"
        />
      </div>
      <div className="space-y-7">
        <h6 className="font-bold text-xl text-primary">About Us</h6>
        <h2 className="font-bold text-5xl text-secondary">
          We are qualified & of experience in this field
        </h2>
        <div className="space-y-4 text-paragraph">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which don&apos;t look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which don&apos;t look even slightly
            believable.
          </p>
        </div>
        <PrimaryBtn text="Get More Info" />
      </div>
    </div>
  );
};

export default AboutSection;
