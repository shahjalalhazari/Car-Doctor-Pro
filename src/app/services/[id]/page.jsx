import { getServiceDetails } from "@/lib/getService";

import BannerSection from "@/components/ServiceDetailsPage/BannerSection";
import DetailsSection from "@/components/ServiceDetailsPage/DetailsSection";
import DownloadSection from "@/components/ServiceDetailsPage/DownloadSection";
import ServicesList from "@/components/ServiceDetailsPage/ServicesList";

const ServiceDetailsPage = async ({ params }) => {
  const { service } = await getServiceDetails(params.id);
  const { description} = service;

  return (
    <div className="lg:mt-10">
      {/* Banner */}
      <BannerSection service={service} />

      {/* Content Area */}
      <div className="my-24 grid lg:grid-cols-3 gap-8">
        {/* Details Section */}
        <div className="lg:col-span-2">
          {/* Details */}
          <DetailsSection service={service} />

          {/* 3 steps */}
          <h3 className="text-4xl font-bold mt-12">
            3 Simple Steps to Process
          </h3>
          <p className="text-paragraph text-justify mt-7">{description}</p>

          <div className="grid lg:grid-cols-3 gap-6 mt-8">
            {/* step 01 */}
            <div className="border-2 text-center px-10 pt-14 pb-9 rounded-[10px]">
              <div className="bg-primary-opacity-50">
                <h5 className="font-bold text-2xl">01</h5>
              </div>
              <h5 className="font-bold text-xl mt-10">STEP ONE</h5>
              <p className="text-paragraph mt-3">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            {/* step 02 */}
            <div className="border-2 text-center px-10 pt-14 pb-9 rounded-[10px]">
              <div className="bg-primary-opacity-50">
                <h5 className="font-bold text-2xl">02</h5>
              </div>
              <h5 className="font-bold text-xl mt-10">STEP TWO</h5>
              <p className="text-paragraph mt-3">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            {/* step 03 */}
            <div className="border-2 text-center px-10 pt-14 pb-9 rounded-[10px]">
              <div className="bg-primary-opacity-50">
                <h5 className="font-bold text-2xl">03</h5>
              </div>
              <h5 className="font-bold text-xl mt-10">STEP THREE</h5>
              <p className="text-paragraph mt-3">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>

          {/* VIDEO SECTION */}
          <div className="mt-12">
            <iframe
              className="w-full h-[450px]"
              src="https://www.youtube.com/embed/LYOAxdJX0vA?si=LEDeCUb9rg4haxNc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="aside">
          {/* All Services List */}
          <ServicesList/>

          {/* Download List Section */}
          <DownloadSection />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
