import Image from "next/image";
import SocialSignUpSection from "@/components/Authentication/SocialSignUpSection";
import SignInForm from "./SignInForm";

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
      <div className="border bg-[#f3f3f3] border-primary rounded-[10px] px-10 py-8 lg:px-[75px] lg:py-[50px]">
        <h3 className="font-semibold text-secondary text-[40px] text-center">
          Sign In
        </h3>
        {/* SignIn Form */}
        <SignInForm />

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
