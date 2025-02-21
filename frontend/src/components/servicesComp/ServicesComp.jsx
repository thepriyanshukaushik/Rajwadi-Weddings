import React from 'react'

const ServicesComp = () => {
  return (
    <div data-scroll data-scroll-speed=".5" className='w-full h-auto py-4 overflow-x-hidden'>
      <div className="matter">
        <h1 className='font-[Sofia] font-medium text-[40px] sm:text-[53px] text-white bg-[#071952] mt-10 px-6 sm:px-10 py-1 text-center leading-[50px] sm:leading-[60px] w-full h-auto sm:h-[12vh] flex justify-center items-center'>
          A Glimpse into Our Offerings
        </h1>
        <div className="comps">
          <div data-scroll data-scroll-speed="-.5" className="w-full h-auto py-14 flex justify-center items-center flex-col">
            <h1 className='font-[Sevillana] font-medium text-[35px] sm:text-[45px] text-[#102C57] text-center'>*Majestic Weddings*</h1>
            <p className='font-[Poppins] mx-6 sm:mx-16 md:mx-32 text-center leading-[25px] sm:leading-[30px] text-[14px] sm:text-[16px] text-[#006989] font-light p-1'>
              Celebrate your love story in regal splendor with bespoke themes, grand décor, and royal hospitality that leave your guests enchanted. Every element is meticulously crafted to embody the essence of royalty, from majestic settings and exquisite floral arrangements to opulent lighting and personalized touches.
            </p>
            <div data-scroll data-scroll-speed="-.5" data-scroll-direction="horizontal" className="imagesec flex justify-center items-center gap-[15px] md:gap-[50px] my-10">
              <img className='w-[80px] h-[120px] object-cover sm:w-[150px] sm:h-[250px]' src="/images/Serwed3.jpg" alt="Wedding Setup 1" />
              <img className='w-[80px] h-[120px] object-cover sm:w-[150px] sm:h-[250px]' src="/images/Serwed1.jpg" alt="Wedding Setup 2" />
              <img className='w-[80px] h-[120px] object-cover sm:w-[150px] sm:h-[250px]' src="/images/Serwed2.jpg" alt="Wedding Setup 3" />
              <img className='w-[80px] h-[120px] object-cover sm:w-[150px] sm:h-[250px]' src="/images/Serwed4.jpg" alt="Wedding Setup 4" />
            </div>
          </div>

          <div data-scroll data-scroll-speed="-.5" className="w-full h-auto py-14 flex justify-center items-center flex-col">
            <h1 className='font-[Sevillana] font-medium text-[35px] sm:text-[45px] text-[#102C57] text-center'>*Elite Corporate Events*</h1>
            <p className='font-[Poppins] mx-6 sm:mx-16 md:mx-32 text-center leading-[25px] sm:leading-[30px] text-[14px] sm:text-[16px] text-[#006989] font-light p-1'>
              Elevate your corporate gatherings with sophistication and class, where professionalism meets impeccable style. At R Rajwadi, we curate elite corporate events that leave a lasting impression, blending seamless execution with unparalleled attention to detail. From grand product launches and exclusive networking soirées to impactful conferences and team-building retreats, we ensure every element is meticulously tailored to your vision.
            </p>
            <div data-scroll data-scroll-speed="-.5" data-scroll-direction="horizontal" className="imagesec flex justify-center items-center gap-[15px] sm:gap-[25px] md:gap-[40px] my-10">
              <img className='w-[80px] h-[120px] object-cover sm:w-[130px] sm:h-[230px] md:w-[200px] md:h-[280px]' src="/images/Sercorpeve1.jpg" alt="Corporate Event 1" />
              <img className='w-[160px] h-[120px] object-cover sm:w-[300px] sm:h-[230px] md:w-[400px] md:h-[280px]' src="/images/Sercorpeve2.jpg" alt="Corporate Event 2" />
              <img className='w-[80px] h-[120px] object-cover sm:w-[130px] sm:h-[230px]  md:w-[200px] md:h-[280px]' src="/images/Sercorpeve3.jpg" alt="Corporate Event 3" />
            </div>
          </div>

          <div data-scroll data-scroll-speed="-.5" className="w-full h-auto py-14 flex justify-center items-center flex-col">
            <h1 className='font-[Sevillana] font-medium text-[35px] sm:text-[45px] text-[#102C57] text-center'>*Enchanting Destination Events*</h1>
            <p className='font-[Poppins] mx-6 sm:mx-16 md:mx-32 text-center leading-[25px] sm:leading-[30px] text-[14px] sm:text-[16px] text-[#006989] font-light p-1'>
              Embark on a journey of unforgettable moments with our enchanting destination events, where every celebration is a masterpiece set against breathtaking backdrops. At R Rajwadi, we specialize in transforming exotic locales into magical venues, seamlessly blending the charm of the destination with your unique style. Whether it’s a serene beach, a lavish palace affair, or an intimate mountain retreat, we handle every detail with precision and grace.
            </p>
            <div data-scroll data-scroll-speed="-.5" data-scroll-direction="horizontal" className="imagesec flex justify-center items-center gap-[15px] sm:gap-[25px] md:gap-[40px] my-10">
              <img className='w-[80px] h-[120px] object-cover sm:w-[130px] sm:h-[230px] md:w-[200px] md:h-[280px]' src="/images/Sereve1.jpg" alt="Destination Event 1" />
              <img className='w-[160px] h-[120px] object-cover sm:w-[300px] sm:h-[230px] md:w-[400px] md:h-[280px]' src="/images/Sereve2.jpg" alt="Destination Event 2" />
              <img className='w-[80px] h-[120px] object-cover sm:w-[130px] sm:h-[230px] md:w-[200px] md:h-[280px]' src="/images/Sereve3.jpg" alt="Destination Event 3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesComp
