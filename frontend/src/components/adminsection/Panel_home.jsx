import React from 'react';
import { Link } from 'react-router-dom';

const Panel_home = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/4 bg-gray-800 text-white min-h-screen p-4">
          <div className="flex items-center mb-8 flex-col gap-[10px] justify-center items-center my-10">
            <img src="/public/images/rRajwadi.jpg" alt="Company Logo" className="w-32 h-auto rounded-full" />
            <h2 className="text-3xl lg:text-4xl font-bold">R Rajwadi</h2>
          </div>
          <nav className="space-y-4 flex flex-col gap-[25px] py-10 lg:py-20">
            <Link to="customer_inquiries">
              <button className="w-full text-left py-4 px-8 text-[16px] lg:text-[18px] font-[Poppins] bg-blue-600 hover:bg-blue-700 rounded-md">
                Customer Queries
              </button>
            </Link>
            <Link to="wedding_section">
              <button className="w-full text-left py-4 px-8 text-[16px] lg:text-[18px] font-[Poppins] bg-blue-600 hover:bg-blue-700 rounded-md">
                Wedding Section
              </button>
            </Link>
            <Link to="settings">
              <button className="w-full text-left py-4 px-6 text-[16px] lg:text-[18px] font-[Poppins] bg-blue-600 hover:bg-blue-700 rounded-md">
                <i className="ri-settings-line m-2"></i>Settings
              </button>
            </Link>
          </nav>
        </div>

        <div className="w-full lg:w-3/4 bg-gray-100 min-h-screen p-8">
          <div className="flex justify-center items-center min-h-full">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-6">
                Welcome to the Admin Dashboard</h3>
              <p className="text-lg lg:text-xl text-gray-600 mb-8">
                Please use the buttons on the left to access the following functionalities:</p>
              <ul className="list-disc text-left text-gray-700 space-y-4 text-base lg:text-lg pl-6">
                <li>
                  <strong className="text-gray-800">Customer Queries:</strong> See inquiries from customer.</li>
                <li>
                  <strong className="text-gray-800">Wedding Section:</strong> Manage wedding-related content.</li>
                <li>
                  <strong className="text-gray-800">Settings:</strong> Configure application settings.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Panel_home;
