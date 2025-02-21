import React, { useEffect, useState } from "react";
import axios from "axios";

const WeddingIntro = () => {
  const [data, setData] = useState([]);
  const api_url = "https://rajwadiweddings.com";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${api_url}/api/wedding_data.php`);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full min-h-screen  ">
   

      <div 
      data-scroll 
      data-scroll-speed = "-1"
      className="flex w-full flex-wrap justify-center items-center gap-10 px-4 py-4 overflow-x-hidden ">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 w-full h-[90vh] lg:h-full  sm:w-[90%] md:w-[60%] lg:w-[50%] xl:w-[40%]   rounded-[20px] shadow-xl p-2 sm:p-6  xl:p-4 flex flex-col items-center justify-center gap-[15px] sm:gap-[8px] lg:gap-[20px]"
          >
            <h2 className="font-[Sevillana] text-[30px] text-[#102C57] md:text-[28px]">
              {item.title}
            </h2>
            <img
              className="w-[250px] h-[250px] rounded-[50%] sm:w-[250px] md:w-[250px] md:h-[220px] sm:h-[250px]  xl:h-[240px] lg:w-[270px] lg:h-[230px] 2xl:w-[350px] object-cover xl:rounded-lg shadow"
              src={`/images/${item.thumbnail}`}
              alt={item.title}
              loading="lazy" 
            />
            <p className="font-[Poppins]  text-[#006989] text-center text-[10px] px-4 sm:px-6  sm:text-[13px] ">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-1 sm:gap-2 lg:gap-3 xl:gap-4 justify-center">
              {[item.image1, item.image2, item.image3, item.image4, item.image5]
                .filter((img) => img)
                .map((img, i) => (
                  <img
                    key={i}
                    className="w-[75px] h-[70px] rounded-[50%]  md:w-[90px] sm:w-[80px] sm:h-[80px] lg:w-[80px] lg:h-[90px]  xl:w-[70px] xl:h-[90px]  2xl:w-[100px] 2xl:h-[100px] object-cover xl:rounded-md shadow"
                    src={`${api_url}/images/${img}`}
                    alt={`Wedding Image ${i + 1}`}
                    loading="lazy"
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingIntro;
