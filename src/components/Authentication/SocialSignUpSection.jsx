"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { Suspense } from "react";

const SocialSignUpSection = ({ redirectPath, text, link, linkText }) => {
  const socialSignUpHandler = async (provider) => {
    try {
      await signIn(provider, {
        redirect: true,
        callbackUrl: redirectPath,
      });
    } catch (error) {
      console.error(`Error signing in with ${provider}:`, error);
      toast.error(`Failed to sign in with ${provider}. Please try again.`);
    }
  };

  return (
    // <Suspense
    //   fallback={<span className="loading loading-dots loading-md"></span>}
    // >
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
        {text}{" "}
        <Link href={link} className="text-lg font-bold text-primary">
          {linkText}
        </Link>
      </p>
    </div>
    // </Suspense>
  );
};

export default SocialSignUpSection;
