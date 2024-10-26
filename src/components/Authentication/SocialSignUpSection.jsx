import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialSignUpSection = ({ text, link }) => {
  return (
    <div className="text-center mt-7 space-y-7">
      <p className="text-lg font-medium text-secondary">Or Sign Up with</p>
      <div className="flex gap-4 justify-center text-2xl">
        <button className="bg-[#f5f5f5] p-4 rounded-full">
          <FcGoogle />
        </button>
        <button className="bg-[#f5f5f5] text-[#3b5998] p-4 rounded-full">
          <FaFacebookF />
        </button>
        <button className="bg-[#f5f5f5] text-[#0a66c2] p-4 rounded-full">
          <FaLinkedinIn />
        </button>
      </div>
      <p className="text-lg text-secondary">
        {text}
        {/* REPLACE */}
        <Link href="" className="text-lg font-bold text-primary">
          {link}
        </Link>
      </p>
    </div>
  );
};

export default SocialSignUpSection;
