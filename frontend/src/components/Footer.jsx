import React from 'react';
// import axios from 'axios';

const Footer = () => {
  // const [data, setData] = useState([]);
  // const api_url = 'https://rajwadiweddings.com';

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`${api_url}/api/getsettingsinfo.php`);
  //       if (response.status === 200) {
  //         setData(response.data);
  //       }
  //     } catch (err) {
  //       console.error('Error fetching data', err);
  //     }
  //   };
  //   fetchData();
  // }, [api_url]);

  return (
    <div className="w-full h-auto sm:h-[80vh] bg-[#102C57] pt-8 flex flex-col items-center overflow-x-hidden ">
      <div className="flex flex-col sm:flex-row w-full justify-between items-center sm:px-10 px-6">
        <div className="intro w-full sm:w-[45%] h-auto sm:h-[50vh] mx-4 sm:mx-0 px-8 sm:my-6 flex flex-col justify-center items-center text-center">
          <img
            src="/images/rRajwadi.jpg"
            alt="Logo_img"
            className="w-auto sm:w-[150px] md:w-[160px] lg:w-[180px] xl:w-[200px] md:h-[220px] sm:h-[260px] h-[180px] rounded-full mt-10 mb-4"
          />
          <h2 className="font-[Sevillana] text-white text-[24px] sm:text-[32px] mb-2">R Rajwadi</h2>
          <p className="font-[Poppins] text-[14px] sm:text-[16px] text-white font-thin px-4">
            Crafting Memories, One Event at a Time.
          </p>

          <p className="font-[Poppins] text-[14px] sm:text-[16px] text-white font-thin px-4 pt-2">
              Address
          </p>
          <p className="font-[Poppins] text-[14px] sm:text-[16px] text-white font-thin px-4">
            Email
          </p>
          <p className="font-[Poppins] text-[14px] sm:text-[16px] text-white font-thin px-4">
            Contact no
          </p>
          {/* {data.address && (
            <p className="font-[Poppins] text-[14px] sm:text-[16px] text-white font-thin px-4 pt-2">
              {data.address}
            </p>
          )}
          {data.email && (
            <p className="font-[Poppins] text-[14px] sm:text-[16px] text-white font-thin px-4">
              {data.email}
            </p>
          )}
          {data.contact_no && (
            <p className="font-[Poppins] text-[14px] sm:text-[16px] text-white font-thin px-4">
              {data.contact_no}
            </p>
          )} */}
        </div>

        <div className="w-full sm:w-[70%] lg:w-[60%] pt-6 h-auto sm:h-[50vh] mx-4 sm:mx-0 px-6 sm:py-6 flex flex-col justify-start items-center">
          <p className="font-[Poppins] text-[14px] sm:text-[14px] md:text-[15px] md:leading-[20px] text-white font-light text-center leading-[20px] sm:leading-[19px] px-4 py-6">
            R Rajwadi is more than just an event planner; we are visionaries dedicated to creating unforgettable experiences that resonate with elegance, joy, and meaning. Nestled in the heart of Hanumangarh, Rajasthan, India, our approach goes beyond the ordinary, crafting events that are a true reflection of your unique style, personality, and aspirations.
          </p>
          <a href="/contact">
            <button className="uppercase font-[Poppins] bg-white text-[#2B3467] py-1 xl:py-2 px-10 text-center ease-in duration-150 hover:bg-gray-200">
              Contact us
            </button>
          </a>

          <div className="flex gap-4 bg-white w-auto px-4 py-2 rounded-[30px] bg-opacity-[70%] justify-center items-center mt-4 sm:mt-2 md:mt-4">
            <div  className="footermedia flex gap-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="ri-instagram-line text-2xl text-[#102C57]"></i>
                </a>

                <a href="httpa://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="ri-facebook-circle-line text-2xl text-[#102C57]"></i>
                </a>
            </div>
          </div>

          {/* <div className="flex gap-4 bg-white w-auto px-4 py-2 rounded-[30px] bg-opacity-[70%] justify-center items-center mt-4 sm:mt-2 md:mt-4">
            <div className="footermedia flex gap-6">
              {data.instagram && (
                <a href={data.instagram} target="_blank" rel="noopener noreferrer">
                  <i className="ri-instagram-line text-2xl text-[#102C57]"></i>
                </a>
              )}
              {data.facebook && (
                <a href={data.facebook} target="_blank" rel="noopener noreferrer">
                  <i className="ri-facebook-circle-line text-2xl text-[#102C57]"></i>
                </a>
              )}
            </div>
          </div> */}
        </div>
      </div>

      <div className="font-[Poppins] text-[14px] text-white text-center mt-12">
        ©2025 R Rajwadi, All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
