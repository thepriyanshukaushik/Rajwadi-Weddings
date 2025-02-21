import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Panel_home from './Panel_home';

const Customer_inquiry = () => {
  const api_url = 'https://rajwadiweddings.com';
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${api_url}/api/data.php`);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (err) {
      }
    };
    fetchData();
  }, [api_url]);

  if (!data.length) {
    return <div className="text-center text-white">Loading or no inquiries available...</div>;
  }

  return (
    <>
      <div className="min-h-screen bg-white py-6 px-4 sm:px-6 lg:px-8 text-white w-[3/4]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6 text-black">Customer Inquiries Related to Their Events</h1>
          <div className="overflow-x-auto shadow-xl rounded-lg bg-blue-800">
            <table className="min-w-full table-auto text-sm sm:text-base">
              <thead>
                <tr className="bg-blue-900">
                  <th className="py-3 px-6 text-left">Id</th>
                  <th className="py-3 px-6 text-left">First Name</th>
                  <th className="py-3 px-6 text-left">Last Name</th>
                  <th className="py-3 px-6 text-left">Phone Number</th>
                  <th className="py-3 px-6 text-left">Referral Message</th>
                  <th className="py-3 px-6 text-left">Event Date</th>
                  <th className="py-3 px-6 text-left">Guest Count</th>
                  <th className="py-3 px-6 text-left">About Event</th>
                  <th className="py-3 px-6 text-left">Investment</th>
                  <th className="py-3 px-6 text-left">Location</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user, index) => (
                  <tr key={index} className="bg-blue-700 hover:bg-blue-600 transition duration-300">
                    <td className="py-3 px-6">{index + 1}</td>
                    <td className="py-3 px-6">{user.first_name}</td>
                    <td className="py-3 px-6">{user.last_name}</td>
                    <td className="py-3 px-6">{user.contact_no}</td>
                    <td className="py-3 px-6">{user.referral}</td>
                    <td className="py-3 px-6">{user.event_date}</td>
                    <td className="py-3 px-6">{user.guest_count}</td>
                    <td className="py-3 px-6">{user.about_event}</td>
                    <td className="py-3 px-6">{user.investment}</td>
                    <td className="py-3 px-6">{user.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer_inquiry;
