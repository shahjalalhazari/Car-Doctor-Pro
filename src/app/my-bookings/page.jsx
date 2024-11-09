"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { FaPen, FaTrash } from "react-icons/fa";
import PageBanner from "@/components/shared/PageBanner";

const MyBookingsPage = () => {
  const content = { title: "Booking" };

  const { data: session, status } = useSession();
  const [bookings, setBookings] = useState([]);
  console.log(bookings);

  // get / load all the bookings
  const loadData = async () => {
    if (session?.user?.email) {
      const res = await fetch(
        `http://localhost:3000/my-bookings/api/${session?.user?.email}`
      );
      const data = await res.json();
      setBookings(data);
    }
  };

  // Delete The Booking
  const bookingDeleteHandler = async (id) => {
    const deleted = await fetch(
      `http://localhost:3000/my-bookings/api/delete-booking/${id}`,
      {
        method: "delete",
      }
    );
    const res = await deleted.json();
    console.log(res);

    if (res.response?.deletedCount > 0) {
      loadData();
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      loadData();
    }
  }, [status]);

  return (
    <div className="lg:mt-10">
      {/* Banner */}
      <PageBanner content={content} />

      {/* All Bookings List */}
      <div className="bg-[#f3f3f3] rounded-[10px] my-24 p-10 overflow-x-auto">
        <table className="table table-zebra text-center">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Service</th>
              <th>Price</th>
              <th>Date</th>
              <th>Time</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, index) => (
              <tr key={booking._id}>
                <th>{index + 1}</th>
                <td>{booking.service.title}</td>
                <td>${booking.service.price}</td>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>
                  <button className="btn btn-info">See Details</button>
                </td>
                <td className="flex gap-2 items-center justify-center">
                  <button className="btn btn-warning">
                    <FaPen />
                  </button>
                  <button
                    onClick={() => bookingDeleteHandler(booking._id)}
                    className="btn btn-error"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookingsPage;
