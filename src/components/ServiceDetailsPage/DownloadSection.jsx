import { BsFileEarmarkArrowDown, BsArrowRightShort } from "react-icons/bs";

const DownloadSection = () => {
    return (
      <div className="bg-secondary p-10 rounded-[10px] mt-7">
        <h4 className="font-bold text-2xl text-white">Download</h4>
        <div className="space-y-5 mt-5">
          {/* company profile */}
          <div className="flex justify-between text-white">
            <div className="flex items-center gap-2">
              <BsFileEarmarkArrowDown className="text-3xl" />
              <h6 className="font-semibold text-lg">
                Company Profile <br />
                <span className="text-base font-normal text-[#a2a2a2]">
                  Download
                </span>
              </h6>
            </div>
            <div className="bg-primary h-14 w-14 rounded-[5px] flex items-center justify-center hover:cursor-pointer">
              <BsArrowRightShort className="text-4xl" />
            </div>
          </div>

          {/* brochure */}
          <div className="flex justify-between text-white">
            <div className="flex items-center gap-2">
              <BsFileEarmarkArrowDown className="text-3xl" />
              <h6 className="font-semibold text-lg">
                Our Brochure <br />
                <span className="text-base font-normal text-[#a2a2a2]">
                  Download
                </span>
              </h6>
            </div>
            <div className="bg-primary h-14 w-14 rounded-[5px] flex items-center justify-center hover:cursor-pointer">
              <BsArrowRightShort className="text-4xl" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default DownloadSection;