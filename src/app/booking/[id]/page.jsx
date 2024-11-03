import PageBanner from "@/components/shared/PageBanner";
import BookingForm from "./BookingForm";

const BookingPage = () => {
  const content = {
    title: "Booking",
  };
  return (
    <div className="lg:mt-10">
      {/* Banner */}
      <PageBanner content={content} />

      {/* Checkout Form */}
      <div className="bg-[#f3f3f3] rounded-[10px] my-32">
        <BookingForm/>
      </div>
    </div>
  );
};

export default BookingPage;
