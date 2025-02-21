import React from 'react';

const WeddingImages = () => {
  return (
    <div className="w-full h-auto ">
      <div className="relative">
        <div
          data-scroll
          data-scroll-speed="-0.4"
          className="w-full h-[100vh] bg-[url('/public/images/Wedding2.jpg')] bg-cover bg-bottom bg-no-repeat overflow-x-hidden"
        ></div>

        <h1
          data-scroll
          data-scroll-speed="3"
          className="w-full h-auto uppercase font-[Shancalluna] text-[65px] absolute top-[55%] left-[10%] z-[20] text-white font-normal 
          sm:text-[45px] md:text-[50px] lg:text-[65px] sm:left-[5%] md:left-[10%] lg:left-[10%] sm:top-[50%] md:top-[50%] lg:top-[55%] tracking-tighter"
        >
          Weddings
        </h1>
      </div>
      <div
      data-scroll
          data-scroll-speed=".2"
        className="w-full flex flex-col items-center gap-6 py-20 px-4"
      >
        <h1 className="font-[Sevillana] text-center font-medium text-3xl text-[#102C57] sm:text-2xl md:text-3xl lg:text-4xl">
          Where Dreams Begin
        </h1>
        <p className="font-[Poppins] text-center leading-7 text-lg text-[#006989] px-4 sm:text-base md:px-12 lg:px-24">
          Crafting Unforgettable Weddings with Elegance and Splendor
        </p>
        <p className="font-[Poppins] text-center leading-7 text-base text-[#006989] px-4 sm:text-sm md:px-10 lg:px-20">
          Step into a world of enchantment where every detail of your special day is
          crafted with precision and elegance. At R Rajwadi, we transform your wedding
          dreams into reality, blending timeless traditions with modern sophistication.
        </p>
      </div>
    </div>
  );
};

export default WeddingImages;
