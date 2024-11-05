import { getServiceDetails } from "@/lib/getService";
import PageBanner from "@/components/shared/PageBanner";
import BookingForm from "@/components/BookingPage/BookingForm";

const BookingPage = async ({ params }) => {
  const service  = await getServiceDetails(params.id);
  const content = {
    title: "Booking",
  };
  return (
    <div className="lg:mt-10">
      {/* Banner */}
      <PageBanner content={content} />

      {/* Checkout Form */}
      <div className="bg-[#f3f3f3] rounded-[10px] my-32">
        <BookingForm  service={service}/>
      </div>
    </div>
  );
};

export default BookingPage;
