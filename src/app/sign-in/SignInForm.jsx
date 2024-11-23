"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

import InputField from "@/components/Authentication/InputField";
import FullWidthBtn from "@/components/shared/FullWidthBtn";

const SignInForm = () => {
  const [loading, setLoading] = useState(null);
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect") || "/";

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

export default SignInForm;
