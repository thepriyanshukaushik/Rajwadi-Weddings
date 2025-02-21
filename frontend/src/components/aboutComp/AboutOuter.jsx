import React from 'react'

const AboutOuter = () => {
  return (
    <div className='w-full h-[30vh] flex justify-center items-center flex-col gap-[30px] px-4 my-4 sm:px-10 overflow-x-hidden'>
      <p className='font-[Poppins] text-[16px] sm:text-[19px] text-[#0A5EB0] text-center w-full sm:w-[50%]'>
        "Bring your dream event to life with R Rajwadi. Whether it’s an extravagant celebration or a cozy affair, we turn your vision into a flawless experience. Let us make your special moments truly unforgettable!"</p>
      <a href="/contact">
        <button className='uppercase bg-white px-10 py-2 sm:px-14 sm:py-3 text-normal text-[16px] sm:text-[18px] ease-out duration-200 hover:bg-[#071952] hover:text-white border-solid border-[2px] border-[#071952] text-[#071952] font-[Poppins]'>
          Plan Your Dream Event</button>
      </a>
    </div>
  )
}

export default AboutOuter
