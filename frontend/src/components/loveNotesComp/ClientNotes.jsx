import React from 'react'

const ClientNotes = () => {
  return (
    <div className='w-full min-h-screen'>
      <div className='relative'>
        <div data-scroll data-scroll-speed="-.4" className='w-full h-[100vh] bg-[url("/public/images/lovenotes.jpg")] bg-cover bg-center bg-no-repeat'></div>
        <h1 data-scroll data-scroll-speed="3" className='w-full h-auto uppercase font-[Shancalluna] text-[50px] sm:text-[65px] absolute top-[55%] left-[10%] z-[20] text-white font-normal tracking-tighter'>
          Love notes
        </h1>
      </div>

      <div data-scroll data-scroll-speed="-.5" className='w-full h-auto flex justify-start items-center flex-col gap-[25px] py-[90px] sm:py-[100px]'>
        <h1 className='font-[Sevillana] font-medium text-[45px] sm:text-[55px] text-[#102C57]'>Words of Appreciation</h1>

        <div className='flex flex-col gap-[50px] items-center'>
          <p className='font-[Poppins] mx-4 sm:mx-32 text-center leading-[30px] text-[14px] sm:text-[16px] text-[#006989] font-light p-1 mt-10'>
            "R Rajwadi transformed our wedding into an experience straight out of a royal fairytale. From the moment we first met the team, their passion and commitment to perfection were evident. The intricate detailing in the décor, the seamless coordination of every event, and their ability to bring our vision to life left us in awe..."
          </p>
          <span className='font-[Poppins] text-center text-[#006989] font-bold text-[17px] sm:text-[20px] md:text-[22px]'>Anjali & Rajesh – Jaipur, Rajasthan</span>
          <img data-scroll data-scroll-speed="-.4" className='w-[80vw] sm:w-[40vw] h-auto shadow-xl my-8' src="/public/images/couple1.jpg" alt="Couple 1" />
          <div className='w-[90vw] sm:w-[90vw] h-[1px] bg-gray-300'></div>
        </div>

        <div className='flex flex-col gap-[50px] items-center mt-6'>
          <p className='font-[Poppins] mx-4 sm:mx-32 text-center leading-[30px] text-[14px] sm:text-[16px] text-[#006989] font-light p-1 mt-10'>
            "Our destination wedding in Udaipur was a dream come true, thanks to R Rajwadi. The team’s expertise in planning and execution was nothing short of extraordinary. They transformed the venue into a magnificent spectacle that blended the charm of Rajasthan’s heritage with our contemporary taste..."
          </p>
          <span className='font-[Poppins] text-center text-[#006989] font-bold text-[17px] sm:text-[20px] md:text-[22px]'>Priya & Sameer – Udaipur, Rajasthan</span>
          <div className='w-[90vw] sm:w-[90vw] h-[1px] bg-gray-300'></div>
        </div>

        <div className='flex flex-col gap-[50px] items-center mt-6'>
          <p className='font-[Poppins] mx-4 sm:mx-32 text-center leading-[30px] text-[14px] sm:text-[16px] text-[#006989] font-light p-1 mt-10'>
            "R Rajwadi brought a regal touch to our wedding that surpassed all our expectations. From the vibrant colors of the sangeet to the breathtakingly beautiful wedding stage, every element reflected their mastery of design and planning..."
          </p>
          <span className='font-[Poppins] text-center text-[#006989] font-bold text-[17px] sm:text-[20px] md:text-[22px]'>Sneha & Aditya – Jodhpur, Rajasthan</span>
          <div className='w-[90vw] sm:w-[90vw] h-[1px] bg-gray-300'></div>
        </div>
      </div>
    </div>
  )
}

export default ClientNotes
