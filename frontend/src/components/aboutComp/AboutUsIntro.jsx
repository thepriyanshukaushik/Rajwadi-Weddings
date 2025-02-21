
import React from 'react'

const AboutUsIntro = () => {
  return (
    <div  className='w-full h-auto pb-8 overflow-x-hidden'>
      <div className='relative'>
        <div
          data-scroll
          data-scroll-speed="-.4"
          className='w-full h-[70vh] sm:h-[100vh] bg-[url("/public/images/OurTeam.jpg")] bg-cover bg-center bg-no-repeat'></div>
        <h1
          data-scroll
          data-scroll-speed="3"
          className='w-full h-auto uppercase font-[Shancalluna] text-[45px] sm:text-[65px] absolute top-[45%] sm:top-[50%] tracking-tighter left-[10%] z-[20] text-white font-normal'>
          Meet the minds</h1>
      </div>

      <div
        data-scroll
        data-scroll-speed="-.5"
        className='w-full h-auto flex justify-start items-center flex-col gap-[25px] py-[50px] sm:py-[90px]'
      >
        <h1 className='font-[Sevillana] font-medium text-[35px] sm:text-[50px] text-[#102C57]'>
          Meet R Rajwadi</h1>
        <p className='font-[Poppins] mx-6 sm:mx-32 text-center leading-[25px] sm:leading-[30px] text-[14px] sm:text-[16px] text-[#006989] font-light p-1'>
          Welcome to R Rajwadi, where dreams are transformed into extraordinary celebrations. Nestled in the heart of India, R Rajwadi embodies the grandeur and regal traditions of Rajasthan while seamlessly blending modern aesthetics and creativity. Our journey began with a passion for crafting unforgettable memories, and today, we are proud to be a leading name in the world of event planning and management.</p>
        <p className='font-[Poppins] mx-6 sm:mx-32 text-center leading-[25px] sm:leading-[30px] text-[14px] sm:text-[16px] text-[#006989] font-light p-1'>
          From opulent weddings to elite corporate events, our hallmark lies in delivering bespoke experiences that reflect the unique essence of every client. At R Rajwadi, every detail matters. Whether it’s a grand destination event or an intimate gathering, we ensure every moment is perfect and every guest is left awestruck. With a passion for creativity and a commitment to excellence, we transform ordinary events into extraordinary experiences. Our team blends tradition with innovation, crafting memories that resonate with grandeur and elegance. From intricate décor to seamless execution, we leave no stone unturned in making your vision a reality.</p>
        <p className='font-[Poppins] mx-6 sm:mx-32 text-center leading-[25px] sm:leading-[30px] text-[14px] sm:text-[16px] text-[#006989] font-light p-1'>
          We pride ourselves on curating personalized experiences, where your dreams take center stage. Every celebration with R Rajwadi is a symphony of luxury, love, and meticulous attention to detail. When you choose us, you’re not just planning an event—you’re creating an unforgettable legacy.</p>
      </div>
    </div>
  )
}

export default AboutUsIntro
