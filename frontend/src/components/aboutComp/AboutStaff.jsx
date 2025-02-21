import React from 'react'

const AboutStaff = () => {
  return (
    <div data-scroll data-scroll-speed=".5" className='w-full h-auto flex flex-col justify-center overflow-x-hidden'>
      <h1 className='font-[Sofia] font-medium text-[30px] sm:text-[40px] lg:text-[53px] text-white bg-[#071952] mt-10 px-4 sm:px-10 py-2 sm:py-3 text-center leading-[45px] sm:leading-[60px] w-full h-[13vh] flex justify-center items-center'>
        Meet Our Founders</h1>

      <div data-scroll data-scroll-speed="-0.6" className='w-full h-auto flex flex-col sm:flex-row gap-[40px] sm:gap-[60px] lg:gap-[120px] justify-center items-center py-6 sm:py-10'>
        <div className="founder1 w-[90%] sm:w-[45%] lg:w-[28vw] flex flex-col justify-center items-center gap-[15px]">
          <h1 className='font-[Geologica] font-semibold text-center text-[22px] sm:text-[28px] lg:text-[35px] text-[#102C57] px-2'>
            Rajveer Singh
          </h1>
          <p className='font-[Poppins] py-4 px-4 sm:py-6 text-center leading-[20px] sm:leading-[25px] text-[14px] sm:text-[15px] text-[#006989] font-light'>
            Rajveer Singh is the creative visionary behind R Rajwadi, celebrated for his exceptional talent in event design and conceptualization. With a solid foundation in the world of design and over a decade of experience in the hospitality industry, Rajveer is known for transforming events into unique works of art. He has a remarkable ability to blend traditional elements with contemporary aesthetics, ensuring every event radiates luxury and sophistication. Rajveer is admired for his meticulous attention to detail, innovative ideas, and commitment to excellence. His expertise ensures that every event not only meets but exceeds client expectations, delivering an unforgettable experience.    </p>
        </div>

        <div className="founder2 w-[90%] sm:w-[45%] lg:w-[28vw] flex flex-col justify-center items-center gap-[15px]">
          <h1 className='font-[Geologica] font-semibold text-center text-[22px] sm:text-[28px] lg:text-[35px] text-[#102C57] px-2'>
            Kavya Rathore
          </h1>
          <p className='font-[Poppins] py-2 px-4 sm:py-6 text-center leading-[20px] sm:leading-[25px] text-[14px] sm:text-[15px] text-[#006989] font-light'>
            Kavya Rathore is the operational mastermind behind R Rajwadi, renowned for her exceptional skills in event logistics and management. With a strong academic background in business administration and years of hands-on experience in organizing high-profile events, Kavya excels at turning every event into a seamless experience. She has a unique ability to understand client expectations and brings those visions to life with precision. Kavya is highly regarded for her attention to detail, strategic thinking, and her dedication to making every event not only successful but unforgettable. Her leadership ensures smooth coordination from start to finish, delivering excellence at every step.    </p>
        </div>
      </div>

    </div>
  )
}

export default AboutStaff
