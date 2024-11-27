"use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import InputField from "@/components/Authentication/InputField";
import FullWidthBtn from "@/components/shared/FullWidthBtn";
import SocialSignUpSection from "@/components/Authentication/SocialSignUpSection";
import { useSearchParams } from "next/navigation";

const SignInPage = () => {
  const [loading, setLoading] = useState(null);

  const SignInForm = ({ path }) => {
    const signInHandler = async (event) => {
      setLoading(true);
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      const res = await signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: path,
      });

      toast.promise(res, {
        pending: "You'll be redirected.",
        success: "Sign In successfully!",
        error: "Something went wrong.",
      });
      setLoading(false);
    };

    return (
      <form onSubmit={signInHandler} className="mt-10 space-y-6">
        {/* Email Field */}
        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="Your Email"
        />
        {/* Password Field */}
        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="Your Password"
        />
        {/* loading spinner */}
        {loading && (
          <p className="text-secondary text-center">
            <span className="loading loading-dots loading-xs"></span>
          </p>
        )}
        {/* Submit Button */}
        <FullWidthBtn text="Sign In" />
      </form>
    );
  };

  const SearchParamsWrapper = () => {
    const searchParams = useSearchParams();
    const path = searchParams?.get("redirect") || "/"; // Use optional chaining

    return (
      <>
        <SignInForm path={path} />
        {/* Social SignUp Buttons */}
        <Suspense
          fallback={<span className="loading loading-dots loading-md"></span>}
        >
          <SocialSignUpSection
            text="Don't have an account? "
            link="sign-up"
            linkText="Sign Up"
          />
        </Suspense>
      </>
    );
  };

  return (
    <div className="lg:my-20 grid grid-cols-1 lg:grid-cols-2 items-center">
      <Image
        src="/assets/images/login/login.svg"
        alt="login"
        width="460"
        height="502"
        className="mx-auto"
      />
      <div className="border bg-[#f3f3f3] border-primary rounded-[10px] px-10 py-8 lg:px-[75px] lg:py-[50px]">
        <h3 className="font-semibold text-secondary text-[40px] text-center">
          Sign In
        </h3>
        <Suspense
          fallback={<div className="loading loading-dots loading-md"></div>}
        >
          <SearchParamsWrapper />
        </Suspense>
      </div>
    </div>
  );
};

export default SignInPage;
