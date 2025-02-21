import React from "react";

const Landingintro = () => {
  return (
    <div data-scroll className="w-full h-auto overflow-x-hidden">
      <div
        data-scroll
        data-scroll-speed="-0.4"
        className="w-full h-[100vh] bg-[url('/public/images/LandingIntro.jpg')] bg-cover bg-bottom bg-no-repeat"
      ></div>

      <div
        data-scroll
        data-scroll-speed="-0.5"
        className="w-full flex justify-start items-center flex-col gap-[25px] py-[90px] px-5 sm:px-10 md:px-16 lg:px-32"
      >
        <h1 className="font-[Sevillana] font-medium text-[28px] sm:text-[32px] md:text-[36px] lg:text-[45px] text-[#102C57] text-center">
          We are R Rajwadi.
        </h1>
        <p className="font-[Poppins] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] mx-4 sm:mx-10 md:mx-20 lg:mx-32 text-center leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[30px] text-[#006989] font-light">
          Where dreams meet reality and every moment turns into a cherished
          memory. We are your partners in crafting spectacular events that
          reflect your personality and style. Whether it's a grand wedding
          steeped in tradition, a sophisticated corporate gathering, or an
          enchanting celebration of life’s milestones, we bring our passion,
          expertise, and creativity to every detail. So, transform your vision
          into a magical experience that will be remembered for years to come.
        </p>
      </div>

      <video
        className="w-full h-full rounded-lg shadow-lg px-10"
        src="videos/Intro.mp4"
        autoPlay
        controls
        loop
      ></video>

    </div>
  );
};

export default Landingintro;
