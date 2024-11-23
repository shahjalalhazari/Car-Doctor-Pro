"use client";

import { signIn } from "next-auth/react";
import InputField from "@/components/Authentication/InputField";
import FullWidthBtn from "@/components/shared/FullWidthBtn";
import { useRouter, useSearchParams } from "next/navigation";

const SignInForm = () => {
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect") || "/";

  const signInHandler = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: path,
    });
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
      {/* Submit Button */}
      <FullWidthBtn text="Sign In" />
    </form>
  );
};

export default SignInForm;
