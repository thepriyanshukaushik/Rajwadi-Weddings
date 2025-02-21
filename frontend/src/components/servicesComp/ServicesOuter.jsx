import React from 'react'

const ServicesOuter = () => {
  return (
    <div className='w-full h-[100%] py-4 flex justify-center items-center flex-col gap-[25px] px-6 sm:px-10 overflow-x-hidden'>
      <p className='font-[Poppins] text-[14px] sm:text-[17px] text-[#006989] text-center'>
        "At R Rajwadi, we create timeless memories with unmatched elegance and precision. Let us turn your dreams into reality."</p>
      <h1 className='font-[Oxanium] font-semibold text-[24px] sm:text-[28px] text-center'>
        Contact us today to begin your journey.</h1>
      <a href="/contact">
        <button className='uppercase bg-white px-8 sm:px-14 py-2 text-[16px] sm:text-[18px] ease-out duration-200 hover:bg-[#071952] hover:text-white border-solid border-[2px] border-[#071952] text-[#071952] font-[Poppins]'>Contact Us</button>
      </a>
    </div>
  )
}

export default ServicesOuter
