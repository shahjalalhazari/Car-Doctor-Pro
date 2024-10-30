"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

const SocialSignUpSection = ({ text, link, linkText }) => {
  const redirect = useRouter();

  const socialSignUpHandler = async (provider) => {
    const resp = await signIn(provider);
    console.log(resp);
    if (resp.status === "authenticated") {
      redirect.push("/");
    }
  };
  return (
    <div className="text-center mt-7 space-y-7">
      <p className="text-lg font-medium text-secondary">Or Sign Up with</p>
      <div className="flex gap-4 justify-center text-2xl">
        <button
          onClick={() => socialSignUpHandler("google")}
          className="bg-[#f5f5f5] p-4 rounded-full"
        >
          <FcGoogle />
        </button>
        <button
          onClick={() => socialSignUpHandler("facebook")}
          className="bg-[#f5f5f5] text-[#3b5998] p-4 rounded-full"
        >
          <FaFacebookF />
        </button>
        <button
          onClick={() => socialSignUpHandler("linkedin")}
          className="bg-[#f5f5f5] text-[#0a66c2] p-4 rounded-full"
        >
          <FaLinkedinIn />
        </button>
      </div>
      <p className="text-lg text-secondary">
        {text}
        {/* REPLACE */}
        <Link href={link} className="text-lg font-bold text-primary">
          {linkText}
        </Link>
      </p>
    </div>
  );
};

export default SocialSignUpSection;
