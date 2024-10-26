import { services } from "@/lib/services";
import PrimaryOutlineBtn from "../shared/PrimaryOutlineBtn";
import ServiceCard from "../cards/ServiceCard";
import SectionHeading from "../shared/SectionHeading";

const ServiceSection = () => {
  console.log(services);
  return (
    <div className="lg:mt-32 text-center">
      {/* Section Heading */}
      <SectionHeading
        title="Service"
        headline="Our Service Area"
        description="There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration <br /> in some form, by injected
          humour, or randomized words which don't look even slightly
          believable."
      />

      {/* Service Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-start my-12">
        {services.map((service) => (
          <ServiceCard service={service} key={service._id} />
        ))}
      </div>
      <PrimaryOutlineBtn text="More Services" />
    </div>
  );
};

export default ServiceSection;
