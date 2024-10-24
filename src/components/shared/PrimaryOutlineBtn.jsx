import React from "react";

const PrimaryOutlineBtn = ({ text }) => {
  return (
    <button
      className="px-8 py-4
        rounded-md border-2 border-primary
        hover:bg-primary hover:text-white"
    >
      {text}
    </button>
  );
};

export default PrimaryOutlineBtn;
