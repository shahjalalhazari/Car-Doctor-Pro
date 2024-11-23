"use client";

import InputField from "@/components/Authentication/InputField";
import FullWidthBtn from "@/components/shared/FullWidthBtn";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(null);

  const SignUpHandler = async (event) => {
    setLoading(true);
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    setError("");

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setError("Passwords doesn't match.");
      return;
    }
    const newUser = { name, email, password };

    // send POST request to server with user details
    try {
      const resp = await fetch("http://localhost:3000/sign-up/api", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!resp.ok) {
        const errorData = await resp.json();
        setError(errorData.message || "Failed to create account.");
        return;
      }

      toast.success("Account created successfully! Please Sign In");
      setLoading(false);
      router.push("/sign-in");
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong. Please try again later.");
    }
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

      {/* show error messages */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* loading spinner */}
      {loading && (
        <p className="text-secondary text-center">
          <span className="loading loading-dots loading-xs"></span>
        </p>
      )}

      {/* Submit Button */}
      <FullWidthBtn text="Sign Up" />
    </form>
  );
};

export default SignUpForm;
