import React from 'react';

const WeddingOuter = () => {
  return (
    <div
    data-scroll
    data-scroll-speed=".3" className="w-full h-[45vh] flex justify-center items-center flex-col gap-[25px] py-10 px-20 overflow-x-hidden ">
      <p className="font-[Poppins] text-[16px] text-[#006989] sm:text-[16px] md:text-[18px] text-center max-w-3xl mx-auto">
        "At R Rajwadi, we create timeless memories with unmatched elegance and precision. Let us turn your dreams into reality."
      </p>
      <h1 className="font-[Oxanium] font-semibold text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px] text-center max-w-3xl mx-auto">
        Two souls, two hearts, one love story—join us as we celebrate our forever.
      </h1>
      <a href="/contact">
        <button className="uppercase bg-white px-4 sm:px-14 py-2 text-normal text-center text-[14px] sm:text-[18px] ease-out duration-200 hover:bg-[#071952] hover:text-white border-solid border-[2px] border-[#071952] text-[#071952] font-[Poppins] sm:px-10 sm:py-3 sm:text-[16px] md:px-12 md:py-4 md:text-[17px]">
          Book Your Wedding
        </button>

      </a>
    </div>

  );
};

export default WeddingOuter;
