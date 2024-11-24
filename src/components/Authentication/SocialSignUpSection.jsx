"use client";

import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

const SocialSignUpSection = ({ text, link, linkText }) => {
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect") || "/";

  const socialSignUpHandler = async (provider) => {
    try {
      await signIn(provider, {
        redirect: true,
        callbackUrl: path,
      });
    } catch (error) {
      toast.error(`Error signing in with ${provider}:`, error);
      alert("An error occurred while signing in. Please try again.");
    }
  };

  return (
    <div className="text-center mt-7 space-y-7">
      <p className="text-lg font-medium text-secondary">Or Sign Up with</p>
      <div className="flex gap-4 justify-center text-2xl">
        <button
          onClick={() => socialSignUpHandler("google")}
          className="bg-white p-4 rounded-full"
          aria-label="Sign in with Google"
        >
          <FcGoogle />
        </button>
        <button
          onClick={() => socialSignUpHandler("facebook")}
          className="bg-white text-[#3b5998] p-4 rounded-full"
          aria-label="Sign in with Facebook"
        >
          <FaFacebookF />
        </button>
        <button
          onClick={() => socialSignUpHandler("linkedin")}
          className="bg-white text-[#0a66c2] p-4 rounded-full"
          aria-label="Sign in with LinkedIn"
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
