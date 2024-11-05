const BookingInput = ({ name, type, label, placeholder, defaultValue }) => {
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
        className="input w-full"
        required
        defaultValue={defaultValue}
      />
    </label>
  );
};

export default BookingInput;
