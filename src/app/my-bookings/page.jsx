"use client";

import { useSession } from "next-auth/react";
import PageBanner from "@/components/shared/PageBanner";
import { useState, useEffect } from "react";

const MyBookingsPage = () => {
  const content = { title: "Booking" };

  const session = useSession();
  const [bookings, setBookings] = useState([]);

  const loadData = async () => {
    const res = await fetch(
      `http://localhost:3000/my-bookings/api/${session?.data?.user?.email}`
    );
    const data = await res.json();
    setBookings(data);
  };

  useEffect(() => {
    loadData();
  }, [session]);

  return (
    <div className="lg:mt-10">
      {/* Banner */}
      <PageBanner content={content} />

      {/* All Bookings List */}
      <div className="bg-[#f3f3f3] rounded-[10px] my-32 p-10 overflow-x-auto">
        <table className="table table-zebra text-center">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Service</th>
              <th>Price</th>
              <th>Date</th>
              <th>Time</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking._id}>
                <th>{index + 1}</th>
                <td>{booking.service.title}</td>
                <td>${booking.service.price}</td>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>Update | Delete</td>
                <td>Full Details</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookingsPage;
