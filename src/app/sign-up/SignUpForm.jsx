"use client";

import InputField from "@/components/Authentication/InputField";
import FullWidthBtn from "@/components/shared/FullWidthBtn";
import { useState } from "react";

const SignUpForm = () => {
  const [error, setError] = useState("");

  const SignUpHandler = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    setError("");

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Simulate form submission and reset form
    const newUser = { name, email, password };
    console.log("New User:", newUser);
    form.reset();
  };

  return (
    <form onSubmit={SignUpHandler} className="mt-10 space-y-6">
      {/* Name Field */}
      <InputField
        label="Name"
        name="name"
        type="text"
        placeholder="Your Name"
      />
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
      {/* Confirm Password Field */}
      <InputField
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        placeholder="Re-enter Password"
      />
      {/* Submit Button */}
      <FullWidthBtn text="Sign Up" />
    </form>
  );
};

export default SignUpForm;
