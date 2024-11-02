import Image from "next/image";

const ContactSection = () => {
    return (
        <div className="bg-[#f3f3f3] relative text-center pt-12 pb-20 px-16 mt-7 rounded-[10px]">
            <Image
              src="/assets/logo.svg"
              alt="Car Doctor Pro"
              width={140}
              height={115}
              className="mx-auto"
            />
            <h4 className="font-bold text-xl mt-5 text-secondary">
              Need Help? We Are Here To Help You
            </h4>
            <div className="bg-white mt-7 rounded-[10px] pt-5 py-10 pb-12">
              <h4 className="text-secondary text-xl font-bold">
                <span className="text-primary">Car Doctor</span> Special
              </h4>
              <h6 className="text-paragraph mt-1">
                Save up to{" "}
                <span className="text-primary font-semibold">60% off</span>
              </h6>
              <h4 className="bg-primary absolute bottom-12 mx-12 text-white font-semibold text-lg px-8 py-4 rounded-[5px] hover:cursor-pointer">
                Get A Quote
              </h4>
            </div>
          </div>
    );
};

export default ContactSection;