import React from "react";
import Landingintro from "./landingComp/Landingintro";
import LandingComp from "./landingComp/LandingComp";

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 relative overflow-x-hidden">
      <a
        data-scroll
        data-scroll-direction="-3"
        className="fixed bottom-[8.5%] left-[85%] sm:top-[8.5%] sm:left-[90%] lg:top-[8.5%] lg:left-[90%] z-[9999]"
        href="https://wa.me/919001725237?text=Hello!"
      >
        <img
          className="w-[55px] h-[55px] bg-white rounded-full p-1 sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px] shadow-xl"
          src="/images/Whatsapp.png"
          alt="WhatsApp"
        />
      </a>

      <Landingintro />
      <LandingComp />
    </div>
  );
};

export default LandingPage;
