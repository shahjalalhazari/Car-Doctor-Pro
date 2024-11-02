import React from "react";

const FullWidthBtn = ({ text }) => {
  return (
    <button
      type="submit"
      className="px-8 py-4 w-full rounded-[10px] bg-primary text-white"
    >
      {text}
    </button>
  );
};

export default FullWidthBtn;
