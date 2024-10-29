"use client";

import { signIn } from "next-auth/react";
import InputField from "@/components/Authentication/InputField";
import FullWidthBtn from "@/components/shared/FullWidthBtn";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const route = useRouter();

  const signInHandler = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res.status === 200) {
      route.push("/");
    }
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
