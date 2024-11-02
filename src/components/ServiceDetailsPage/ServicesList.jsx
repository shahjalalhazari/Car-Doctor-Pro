import { getServices } from "@/lib/getService";
import ServiceHorizontalCard from "@/components/cards/ServiceHorizontalCard";

const ServicesList = async () => {
  const { services } = await getServices();
  return (
    <div className="bg-[#f3f3f3] p-10 rounded-[10px]">
      <h4 className="font-bold text-2xl text-secondary">Services</h4>
      {services &&
          services?.map((service) => (
            <ServiceHorizontalCard service={service} key={service._id} />
          ))}
    </div>
  );
};

export default ServicesList;
