"use client";

import { useCallback, useEffect, useState } from "react";
import FullWidthBtn from "@/components/shared/FullWidthBtn";
import PageBanner from "@/components/shared/PageBanner";
import { toast } from "react-toastify";
import BookingInput from "@/components/BookingPage/BookingInput";

const UpdateBookingPage = ({ params }) => {
  const content = {
    title: "Update Booking",
  };

  const [bookingDetail, setBookingDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  // fetch the booking details wants to update.
  const getBookingDetail = useCallback(async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/my-bookings/api/booking/${params.id}`
      );
      const data = await res.json();
      setBookingDetail(data.res);
    } catch (error) {
      toast.error("Error on fetching booking details", error);
    } finally {
      setLoading(false);
    }
  }, [params.id]);

  useEffect(() => {
    getBookingDetail();
  }, [getBookingDetail]);

  // update handler
  const UpdateBookingHandler = async (event) => {
    event.preventDefault();
    const form = event.target;

    const updatedDetails = {
      number: form.number.value,
      date: form.date.value,
      time: form.time.value,
      message: form.message.value,
    };

    try {
      await toast.promise(
        fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/my-bookings/api/booking/${bookingDetail._id}`,
          {
            method: "PATCH",
            body: JSON.stringify(updatedDetails),
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then(async (res) => {
          if (!res.status === 200) {
            const errorData = await res.json();
            throw new Error(errorData?.message || "Failed to update booking.");
          }
          return res.json();
        }),
        {
          pending: "Updating your booking...",
          success: "Booking updated successfully!",
          error: "Failed to update the booking.",
        }
      );
    } catch (error) {
      toast.error("Update booking error:", error);
    }
  };

  return (
    <div className="lg:mt-10">
      {/* Banner */}
      <PageBanner content={content} />

      {/* Checkout Form */}
      <div className="bg-[#f3f3f3] rounded-[10px] my-32">
        {/* <BookingForm service={service} /> */}

        {loading ? (
          <div className="text-center text-primary m-24">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        ) : (
          <form onSubmit={UpdateBookingHandler} className="p-24 space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Phone Number Field */}
              <BookingInput
                name="number"
                type="text"
                label="Phone Number"
                placeholder=""
                defaultValue={bookingDetail?.number}
              />
              {/* Date Field */}
              <BookingInput
                name="date"
                type="date"
                label="Choose Your Date"
                placeholder=""
                defaultValue={bookingDetail?.date}
              />

              {/* Time Field */}
              <BookingInput
                name="time"
                type="time"
                label="Pick Your Time"
                placeholder=""
                defaultValue={bookingDetail?.time}
              />

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
                  defaultValue={bookingDetail?.message}
                />
              </label>
            </div>

            {/* submit button */}
            <FullWidthBtn text="Update Booking" />
          </form>
        )}
      </div>
    </div>
  );
};

export default UpdateBookingPage;
