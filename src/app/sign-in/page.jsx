import InputField from "@/components/Authentication/InputField";
import SocialSignUpSection from "@/components/Authentication/SocialSignUpSection";
import FullWidthBtn from "@/components/shared/FullWidthBtn";
import Image from "next/image";
import React from "react";

const SignInPage = () => {
  return (
    <div className="lg:my-20 grid grid-cols-1 lg:grid-cols-2 items-center">
      <Image
        src="/assets/images/login/login.svg"
        alt="login"
        width="460"
        height="502"
        className="mx-auto"
      />
      <div className="border border-paragraph rounded-xl px-10 py-8 lg:px-[75px] lg:py-[50px]">
        <h3 className="font-semibold text-secondary text-[40px] text-center">
          Sign In
        </h3>
        <form action="" className="mt-10 space-y-6">
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
          {/* Submit Button */}
          <FullWidthBtn text="Sign In" />
        </form>

        {/* Social SignUp Buttons */}
        <SocialSignUpSection
          text="Don't have an account? "
          link="sign-up"
          linkText="Sign Up"
        />
      </div>
    </div>
  );
};

export default SignInPage;
