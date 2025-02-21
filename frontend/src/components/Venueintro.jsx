import React from 'react'

const Venueintro = () => {
  return (
    <div  className="w-full h-auto pb-6 overflow-x-hidden">
         <div className="relative">
        <div 
          data-scroll 
          data-scroll-speed="-.4" 
          className="w-full h-[100vh] bg-[url('/images/venues.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <h1 
          data-scroll 
          data-scroll-speed="3" 
          className="w-full h-auto uppercase font-[Shancalluna] text-[65px] absolute top-[50%] left-[10%] z-[20] text-white font-normal tracking-tight sm:text-[50px] md:text-[60px] lg:text-[65px]">Venues
        </h1>
      </div>
        </div>

  )
}

export default Venueintro
