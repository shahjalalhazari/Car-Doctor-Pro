import React from "react";
import Banner from "./Banner";
import AboutSection from "./AboutSection";
import ServiceSection from "./ServiceSection";

const HomePage = () => {
  return (
    <div className="lg:mt-10">
      <Banner />
      <AboutSection />
      <ServiceSection/>
    </div>
  );
};

export default HomePage;
