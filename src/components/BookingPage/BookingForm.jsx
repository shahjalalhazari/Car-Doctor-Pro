"use client";

import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import BookingInput from "@/components/BookingPage/BookingInput";
import FullWidthBtn from "@/components/shared/FullWidthBtn";

const BookingForm = ({ service }) => {
  const { data } = useSession();
  const { title, _id } = service.service;

  const now = new Date();
  // Format date as YYYY-MM-DD
  const formattedDate = now.toLocaleDateString("en-CA");
  // Format time as HH:MM:SS
  const formattedTime = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const bookingHandler = async (event) => {
    event.preventDefault();
    const form = event.target;

    const newBooking = {
      name: form.name.value,
      number: form.number.value,
      email: form.email.value,
      date: form.date.value,
      time: form.time.value,
      message: form.message.value,
      ...service,
    };

    const res = await fetch(`http://localhost:3000/booking/api/`, {
      method: "POST",
      body: JSON.stringify(newBooking),
      headers: {
        "content-type": "application/json",
      },
    });

    if (res.status === 200) {
      form.reset();
      toast.success("Service Booked Successfully!");
    }
  };
  return (
    <form onSubmit={bookingHandler} className="p-24 space-y-6">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Name Field */}
        <BookingInput
          name="name"
          type="text"
          label="Name"
          placeholder="Your Name"
          defaultValue={data?.user?.name}
        />

        {/* Phone Number Field */}
        <BookingInput
          name="number"
          type="text"
          label="Phone Number"
          placeholder="Your Phone Number"
          defaultValue=""
        />
        {/* E-mail Field */}
        <BookingInput
          name="email"
          type="email"
          label="E-mail"
          placeholder="Your E-mail"
          defaultValue={data?.user?.email}
        />
        {/* Service Field */}
        <BookingInput
          name="service"
          type="text"
          label="Service Name"
          placeholder="Service You Want"
          defaultValue={title}
        />
        {/* Date Field */}
        <BookingInput
          name="date"
          type="date"
          label="Choose Your Date"
          placeholder="Date You want"
          defaultValue={formattedDate}
        />
        {/* Time Field */}
        <BookingInput
          name="time"
          type="time"
          label="Choose Your Time"
          placeholder="Time You Want"
          defaultValue={formattedTime}
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
          required
        />
      </label>

      {/* submit button */}
      <FullWidthBtn text="Booking Confirm" />
    </form>
  );
};

export default BookingForm;
