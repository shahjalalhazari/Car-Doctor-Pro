import React from "react";

const InputField = ({ label, name, type, placeholder }) => {
  return (
    <label className="form-control w-full">
      <label
        htmlFor={name}
        className="font-semibold text-lg mb-2 text-secondary"
      >
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full"
        required
      />
    </label>
  );
};

export default InputField;
