"use client";

import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { FaPen, FaTrash } from "react-icons/fa";
import PageBanner from "@/components/shared/PageBanner";
import { toast } from "react-toastify";

const MyBookingsPage = () => {
  const content = { title: "Booking" };

  const { data: session, status } = useSession();
  const [bookings, setBookings] = useState([]);

  // get / load all the bookings
  const loadData = useCallback(async () => {
    if (session?.user?.email) {
      const res = await fetch(
        `http://localhost:3000/my-bookings/api/${session?.user?.email}`
      );
      const data = await res.json();
      setBookings(data);
    }
  }, [session?.user?.email]);

  // Delete The Booking
  const bookingDeleteHandler = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?"
    );
    if (!confirmDelete) return;

    const deleted = fetch(
      `http://localhost:3000/my-bookings/api/booking/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.response?.deletedCount > 0) {
          loadData();
          return "Booking deleted successfully!";
        } else {
          throw new Error("Failed to delete booking.");
        }
      });

    toast.promise(deleted, {
      pending: "Deleting booking...",
      success: "Booking deleted successfully!",
      error: "Error deleting booking.",
    });

    try {
      await deleted;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      loadData();
    }
  }, [loadData, status]);

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
