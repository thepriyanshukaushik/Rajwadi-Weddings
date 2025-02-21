import React from 'react';

const ServicesIntro = () => {
  return (
    <div  className="w-full h-auto pb-6 overflow-x-hidden">
      <div className="relative">
        <div 
          data-scroll 
          data-scroll-speed="-.4" 
          className="w-full h-[100vh] bg-[url('/images/Services.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <h1 
          data-scroll 
          data-scroll-speed="3" 
          className="w-full h-auto uppercase font-[Shancalluna] text-[65px] absolute top-[50%] left-[10%] z-[20] text-white font-normal tracking-tight sm:text-[50px] md:text-[60px] lg:text-[65px]">Our Services
        </h1>
      </div>
      <div 
        data-scroll 
        data-scroll-speed="-.5" 
        className="w-full h-auto flex justify-start items-center flex-col gap-[25px] py-[90px] sm:py-[70px] md:py-[80px] px-6 sm:px-12 md:px-24">
        <h1 className="font-[Sevillana] font-medium text-[45px] text-[#102C57] sm:text-[40px] md:text-[45px] lg:text-[50px]">Our Offerings</h1>
        <p className="font-[Poppins] mx-6 sm:mx-16 md:mx-32 text-center leading-[30px] text-[16px] text-[#006989] font-light p-1">
          At R Rajwadi, we believe every event deserves to be nothing short of a grand celebration—one that resonates with the elegance and regality that our name represents. Inspired by the rich heritage of Rajasthan, we craft experiences that exude sophistication, charm, and unmatched grandeur.
        </p>
        <p className="font-[Poppins] mx-6 sm:mx-16 md:mx-32 text-center leading-[30px] text-[16px] text-[#006989] font-light p-1">
          From majestic weddings to exquisite social gatherings and prestigious corporate events, our services are tailored to reflect your unique vision while ensuring a flawless and opulent execution. When you choose R Rajwadi, you’re not just planning an event—you’re creating timeless memories in a setting befitting royalty.
        </p>
      </div>
    </div>
  );
};

export default ServicesIntro;
