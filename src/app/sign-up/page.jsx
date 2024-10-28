import SocialSignUpSection from "@/components/Authentication/SocialSignUpSection";
import Image from "next/image";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {

  return (
    <div className="lg:my-20 grid grid-cols-1 lg:grid-cols-2 items-center">
      <Image
        src="/assets/images/login/login.svg"
        alt="login"
        width={460}
        height={502}
        className="mx-auto"
      />
      <div className="border border-paragraph rounded-xl px-10 py-8 lg:px-[75px] lg:py-[50px]">
        <h3 className="font-semibold text-secondary text-[40px] text-center">
          Sign Up
        </h3>

        {/* sign up form */}
        <SignUpForm/>

        {/* Social SignUp Buttons */}
        <SocialSignUpSection
          text="Already have an account? "
          link="sign-in"
          linkText="Sign In"
        />
      </div>
    </div>
  );
};

export default SignUpPage;
