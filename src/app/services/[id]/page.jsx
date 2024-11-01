import BannerSection from "@/components/ServiceDetailsPage/BannerSection";
import { getServiceDetails } from "@/lib/getService";

const ServiceDetailsPage = async ({ params }) => {
  const { service } = await getServiceDetails(params.id);
  return (
    <div className="lg:mt-10">
      {/* Banner */}
      <BannerSection service={service} />
    </div>
  );
};

export default ServiceDetailsPage;
