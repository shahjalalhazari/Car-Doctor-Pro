import React from "react";

const PrimaryBtn = ({ text }) => {
  return (
    <button
      className="px-8 py-4
        rounded-md bg-primary text-white 
        hover:underline"
    >
      {text}
    </button>
  );
};

export default PrimaryBtn;
