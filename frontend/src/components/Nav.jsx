import React, { useState } from "react";
// import axios from "axios";
// import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [data, setData] = useState(null);
  const api_url = "https://rajwadiweddings.com";
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const newState = !prev;
      document.body.classList.toggle("overflow-hidden", newState);
      return newState;
    });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  const handleNavigation = (link) => {
    closeMenu();
    navigate(link);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`${api_url}/api/getsettingsinfo.php`);
  //       if (response.status === 200) {
  //         setData(response.data);
  //       }
  //     } catch (err) {
  //       console.error("Error fetching data", err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // if (!data) return null;

  const navLinks = [
    { label: "Home", link: "/" },
    { label: "Weddings", link: "/weddings" },
    { label: "Venues", link: "/venues" },
    { label: "Services", link: "/services" },
    { label: "About", link: "/about" },
    { label: "Love Notes", link: "/lovenotes" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <div
      className={`w-full ${isMenuOpen ? "h-screen" : "h-[18vh]"} bg-white shadow-xl flex lg:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-20 transition-all duration-300 ease-in-out overflow-x-hidden ${
        isMenuOpen ? "backdrop-blur-md" : ""
      }`}
    >
      <a href="/" className="flex items-center">
        <img
          src="/images/rRajwadi.jpg"
          className="w-[80px] h-[70px] sm:w-[100px] sm:h-[90px] lg:w-[120px] lg:h-[110px] my-2 transition-opacity duration-300"
          alt="Logo_img"
          style={{ opacity: isMenuOpen ? "0" : "1" }}
        />
      </a>

      <div
        className="lg:hidden text-[30px] sm:text-[30px] text-[#071952] tracking-tighter font-[Poppins] uppercase font-normal text-center transition-opacity duration-300"
        style={{ opacity: isMenuOpen ? "0" : "1" }}
      >
        Rajwadi Weddings
      </div>

      <div
        className="lg:hidden cursor-pointer text-3xl text-[#071952] transition-opacity duration-300"
        onClick={toggleMenu}
        style={{ opacity: isMenuOpen ? "0" : "1" }}
      >
        <i className="ri-menu-line"></i>
      </div>

      <div className="hidden lg:flex flex-row items-center gap-[45px] uppercase font-[Poppins] font-normal text-[14px] sm:text-[16px] text-[#071952]">
        <ul className="flex flex-row gap-[25px] xl:gap-[45px] items-center">
          {navLinks.map((item, index) => (
            <li key={index}>
              <a className="transition ease-in-out duration-200 hover:font-medium" href={item.link}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div  className="hidden lg:flex gap-[10px] px-2 justify-center items-center">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-instagram-line text-2xl text-[#102C57]"></i>
          </a>

          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-facebook-circle-line text-2xl text-[#102C57]"></i>
          </a>
      </div>

      {/* <div className="hidden lg:flex gap-[10px] px-2 justify-center items-center"> */}
        {/* {data.instagram && (
          <a href={data.instagram} target="_blank" rel="noopener noreferrer">
            <i className="ri-instagram-line text-2xl text-[#102C57]"></i>
          </a>
        )} */}
        {/* {data.facebook && (
          <a href={data.facebook} target="_blank" rel="noopener noreferrer">
            <i className="ri-facebook-circle-line text-2xl text-[#102C57]"></i>
          </a>
        )} */}
      {/* </div> */}

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-95 backdrop-blur-md flex flex-col items-center justify-center lg:hidden z-50">
          {/* Close Button */}
          <button className="absolute top-6 right-6 text-2xl text-[#071952] cursor-pointer" onClick={closeMenu}>
            ✖
          </button>

          <ul className="flex flex-col gap-6 text-xl text-[#071952]">
            {navLinks.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:font-medium"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.link); 
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
