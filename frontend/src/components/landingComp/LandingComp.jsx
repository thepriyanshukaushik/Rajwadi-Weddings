import React, { useRef } from "react";

const LandingComp = () => {
  const comp1 = useRef();
  const comp2 = useRef();
  const comp3 = useRef();
  const comp4 = useRef();
  

  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      className="w-full h-auto flex flex-col justify-center items-center gap-[150px] py-[150px] overflow-x-hidden"
    >
      <div ref={comp1} className="comp w-[90vw] lg:w-[84vw] min-h-[100vh] flex flex-col lg:flex-row">
        <div className="matter flex flex-col justify-center items-start w-full lg:w-[40%] bg-[#FFF7FC] px-5 sm:px-8 lg:px-10 gap-6 lg:gap-[40px] py-10">
          <h1 className="font-medium text-[30px] sm:text-[40px] lg:text-[60px] text-[#071952] font-[Sofia] leading-[40px] sm:leading-[50px] lg:leading-[80px]">
            Personalized Event Planning
          </h1>
          <p className="font-[Poppins] text-[14px] sm:text-[15px] text-light text-[#102C57] leading-[25px] sm:leading-[35px] font-semibold">
            At R Rajwadi, we believe every event is unique, just like you. That’s
            why we take pride in offering personalized event planning tailored
            to your vision and preferences. Whether it’s an intimate wedding, a
            grand corporate gathering, or a milestone celebration, we work
            closely with you to bring your dreams to life.
          </p>
          <button className="bg-[#102C57] text-white uppercase px-10 sm:px-14 py-2 sm:py-3 font-normal ease-in duration-150 hover:opacity-[90%]">
            <a href="/weddings">Wedding Section</a>
          </button>
        </div>
        <div className="w-full lg:w-[65%] min-h-[50vh] lg:min-h-[100vh] bg-[url('/images/personalevents.jpg')] bg-cover bg-center bg-no-repeat"></div>
      </div>

      <div ref={comp2} className="comp w-[90vw] lg:w-[84vw] min-h-[100vh] flex flex-col lg:flex-row justify-center items-center">
        <div className="w-full lg:w-[55%] h-[300px] lg:h-[600px] bg-[url('/images/BetterExp.jpg')] bg-cover bg-center bg-no-repeat mb-5 lg:mb-0"></div>
        <div className="matter w-full lg:w-[40%] bg-[#EB455F] p-6 sm:p-8 lg:p-10">
          <h1 className="font-medium text-[30px] sm:text-[40px] lg:text-[60px] text-white font-[Sofia] leading-[40px] sm:leading-[50px] lg:leading-[80px] font-semibold">
            Bespoke Experiences
          </h1>
          <p className="font-[Poppins] text-[14px] sm:text-[15px] text-light text-white leading-[25px] sm:leading-[35px]">
            At R Rajwadi, we pride ourselves on crafting bespoke experiences
            that reflect your individuality and vision. Whether it's a grand
            wedding, an intimate gathering, or a corporate event, every detail
            is thoughtfully tailored to create an atmosphere that resonates with
            your style and preferences.
          </p>
          <button className="bg-[#102C57] text-white uppercase px-10 sm:px-14 py-2 sm:py-3 font-normal ease-in duration-150 hover:opacity-[90%]">
            <a href="/services">Our Services</a>
          </button>
        </div>
      </div>

      <div ref={comp3} className="comp w-[90vw] lg:w-[84vw] min-h-[100vh] flex flex-col lg:flex-row">
        <div className="w-full lg:w-[65%] min-h-[50vh] lg:min-h-[100vh] bg-[url('/images/team.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="matter flex flex-col justify-center items-start w-full lg:w-[40%] bg-[#FFF7FC] px-5 sm:px-8 lg:px-10 gap-6 lg:gap-[40px] py-10">
          <h1 className="font-medium text-[30px] sm:text-[40px] lg:text-[65px] text-[#071952] font-[Sofia] leading-[40px] sm:leading-[50px] lg:leading-[80px] font-semibold">
            Expert Team
          </h1>
          <p className="font-[Poppins] text-[14px] sm:text-[15px] text-light text-[#102C57] leading-[25px] sm:leading-[35px]">
            At R Rajwadi, our expert team is the backbone of every unforgettable
            event we create. With years of experience and a passion for
            perfection, our dedicated professionals bring creativity, precision,
            and innovation to every detail.
          </p>
          <button className="bg-[#102C57] text-white uppercase px-10 sm:px-14 py-2 sm:py-3 font-normal ease-in duration-150 hover:opacity-[90%]">
            <a href="/about">About Our Team</a>
          </button>
        </div>
      </div>

      <div ref={comp4} className="comp w-[90vw] lg:w-[84vw] min-h-[100vh] flex flex-col lg:flex-row justify-center items-center">
        <div className="matter w-full lg:w-[40%] bg-[#EB455F] p-6 sm:p-8 lg:p-10">
          <h1 className="font-medium text-[30px] sm:text-[40px] lg:text-[60px] text-white font-[Sofia] leading-[40px] sm:leading-[50px] lg:leading-[80px] font-semibold">
            Client-Centered Approach
          </h1>
          <p className="font-[Poppins] text-[14px] sm:text-[15px] text-light text-white leading-[25px] sm:leading-[35px]">
            At R Rajwadi, you are at the heart of everything we do. Our
            client-centered approach ensures that every event reflects your
            unique personality, preferences, and aspirations.
          </p>
          <button className="bg-[#102C57] text-white uppercase px-10 sm:px-14 py-2 sm:py-3 font-normal ease-in duration-150 hover:opacity-[90%]">
            <a href="/lovenotes">Clients Response</a>
          </button>
        </div>
        <div className="w-full lg:w-[55%] h-[300px] lg:h-[600px] bg-[url('/images/Clients.jpg')] bg-cover bg-center bg-no-repeat"></div>
      </div>
    </div>
  );
};

export default LandingComp;
