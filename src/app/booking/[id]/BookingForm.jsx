import InputField from "@/components/Authentication/InputField";
import FullWidthBtn from "@/components/shared/FullWidthBtn";

const BookingForm = () => {
  return (
    <form action="" className="p-24 space-y-6">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* First Name Field */}
        <InputField
          label="First Name"
          name="first-name"
          type="text"
          placeholder="Your First Name"
        />
        {/* Last Name Field */}
        <InputField
          label="Last Name"
          name="last-name"
          type="text"
          placeholder="Your Last Name"
        />
        {/* Phone Number Field */}
        <InputField
          label="Phone Number"
          name="number"
          type="text"
          placeholder="Your Phone Number"
        />
        {/* E-mail Field */}
        <InputField
          label="E-mail"
          name="email"
          type="email"
          placeholder="Your E-mail"
        />
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Date Field */}
          <InputField
            label="Date"
            name="date"
            type="date"
            placeholder="Enter Date"
          />
          {/* Time Field */}
          <InputField
            label="Time"
            name="time"
            type="time"
            placeholder="Enter Time"
          />
        </div>
        {/* Service Field */}
        <InputField
          label="Service Name"
          name="text"
          type="text"
          placeholder="Service You Want"
        />
      </div>
      {/* Message Field */}
      <label className="form-control w-full">
        <label
          htmlFor="message"
          className="font-semibold text-lg mb-2 text-secondary"
        >
          Message
        </label>
        <textarea
          name="message"
          placeholder="Want to say something?"
          className="textarea w-full pt-3"
        />
      </label>

      {/* submit button */}
      <FullWidthBtn text="Confirm Booking" />
    </form>
  );
};

export default BookingForm;
