import React from "react";

const SectionHeading = ({ title, headline, description }) => {
  return (
    <div className="space-y-5">
      <h6 className="font-bold text-xl text-primary">{title}</h6>
      <h2 className="font-bold text-5xl text-secondary">{headline}</h2>
      <p className="leading-8 text-paragraph w-2/3 mx-auto">{description}</p>
    </div>
  );
};

export default SectionHeading;
