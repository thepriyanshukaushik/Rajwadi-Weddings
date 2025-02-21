import React, { useState, useEffect } from "react";
import axios from "axios";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    contact_no: "",
    referral: "",
    event_date: "",
    guest_count: "",
    about_event: "",
    investment: "",
    location: "",
  });

  const api_url = 'https://rajwadiweddings.com';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${api_url}/api/adduser.php`, formData);

      if (response.status === 200) {
        setFormData({
          first_name: "",
          last_name: "",
          contact_no: "",
          referral: "",
          event_date: "",
          guest_count: "",
          about_event: "",
          investment: "",
          location: "",
        });
        setIsSubmitted(true);
      } else {
        alert("Failed to submit the form.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while submitting the form.");
    }
  };

  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${api_url}/api/getsettingsinfo.php`);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (err) {
      }
    };
    fetchData();
  }, [api_url]);

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div  className="relative">
        <div
          data-scroll
           data-scroll-speed="-.4"
          className="w-full h-[100vh] bg-[url('/images/Contact.jpg')] bg-cover bg-center bg-no-repeat"
        ></div>
        <h1
         data-scroll data-scroll-speed="3"
          className="absolute top-[55%] left-[10%] z-20 text-white font-normal text-[50px] sm:text-[65px] uppercase tracking-tighter"
        >
          Contact Us
        </h1>
      </div>

      <div data-scroll data-scroll-speed="-.3" className="w-full h-auto py-20 flex justify-center bg-gray-100">
        <div data-scroll data-scroll-speed="-.5" className="w-full h-auto flex flex-col justify-center items-center">
          <div className="py-4 flex justify-center flex-col items-center">
            <h1 className="text-[45px] sm:text-[55px] font-[Sevillana] font-medium text-[#102C57]">Contact Us</h1>
            <p className="text-[#006989] text-[14px] sm:text-[15px] font-[Poppins] w-[90%] sm:w-[60%] leading-[20px] font-normal text-center py-2">
              We value your thoughts and are here to assist you with anything you need! Our team is dedicated to providing you with the best support possible. Whether it's a simple question or a more detailed inquiry, we're just a form away.
              <br />Fill out the form below, and we’ll get back to you as soon as possible. Your feedback is important to us, and we look forward to hearing from you. Feel free to share any thoughts, concerns, or ideas — we are here to help in any way we can.
              <br />Our commitment is to ensure that your experience with us is seamless and enjoyable. We believe in creating strong relationships, and we’re always ready to listen to your needs and provide solutions tailored to you.
            </p>
          </div>

          <div className="pt-12 pb-4 px-4">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-6 mb-4">
                <div>
                  <label className="font-[Poppins] text-[#3B3486] text-[15px]" htmlFor="first_name">First Name</label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="block w-full sm:w-[300px] border-solid border-[#61677A] border-[1px] py-1 px-2 mt-1"
                    required
                  />
                </div>
                <div>
                  <label className="font-[Poppins] text-[#3B3486] text-[15px]" htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="block w-full sm:w-[300px] border-solid border-[#61677A] border-[1px] py-1 px-2 mt-1"
                    required
                  />
                </div>
              </div>

              <div className="mb-[10px]">
                <label className="font-[Poppins] text-[#3B3486] text-[15px]" htmlFor="contact_no">Contact Number</label>
                <input
                  type="text"
                  id="contact_no"
                  name="contact_no"
                  value={formData.contact_no}
                  onChange={handleChange}
                  className="block w-full sm:w-[625px] border-solid border-[#61677A] border-[1px] py-1 px-2 mt-1"
                  required
                />
              </div>

              <div className="mb-[10px]">
                <label className="font-[Poppins] text-[#3B3486] text-[15px]" htmlFor="referral">Referral</label>
                <h4 className="font-[Poppins] text-[#3B3486] text-[12px] opacity-[70%]">How did you get to know about us?</h4>
                <input
                  type="text"
                  id="referral"
                  name="referral"
                  value={formData.referral}
                  onChange={handleChange}
                  className="block w-full sm:w-[625px] border-solid border-[#61677A] border-[1px] py-1 px-2 mt-1"
                />
              </div>

              <div className="mb-[10px]">
                <label className="font-[Poppins] text-[#3B3486] text-[15px]" htmlFor="event_date">Event Date</label>
                <input
                  type="date"
                  id="event_date"
                  name="event_date"
                  value={formData.event_date}
                  onChange={handleChange}
                  className="block w-full sm:w-[625px] border-solid border-[#61677A] border-[1px] py-1 px-2 mt-1"
                  required
                />
              </div>

              <div className="mb-[10px]">
                <label className="font-[Poppins] text-[#3B3486] text-[15px]" htmlFor="guest_count">Guest Count</label>
                <input
                  type="number"
                  id="guest_count"
                  name="guest_count"
                  value={formData.guest_count}
                  onChange={handleChange}
                  className="block w-full sm:w-[625px] border-solid border-[#61677A] border-[1px] py-1 px-2 mt-1"
                  required
                />
              </div>

              <div className="mb-[10px]">
                <label className="font-[Poppins] text-[#3B3486] text-[15px]" htmlFor="about_event">About the Event</label>
                <h4 className="font-[Poppins] text-[#3B3486] text-[12px] opacity-[70%]">Please share more about your event.</h4>
                <textarea
                  id="about_event"
                  name="about_event"
                  value={formData.about_event}
                  onChange={handleChange}
                  rows="4"
                  className="block w-full sm:w-[625px] border-solid border-[#61677A] border-[1px] py-1 px-2 mt-1"
                ></textarea>
              </div>

              <div className="mb-[10px]">
                <label className="font-[Poppins] text-[#3B3486] text-[15px]" htmlFor="investment">Investment</label>
                <input
                  type="number"
                  id="investment"
                  name="investment"
                  value={formData.investment}
                  onChange={handleChange}
                  className="block w-full sm:w-[200px] border-solid border-[#61677A] border-[1px] py-1 px-2 mt-1"
                  required
                />
              </div>

              <div className="mb-[10px]">
                <label className="font-[Poppins] text-[#3B3486] text-[15px]" htmlFor="location">Location</label>
                <h4 className="font-[Poppins] text-[#3B3486] text-[12px] opacity-[70%]">Please share your preferred location for the event.</h4>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="block w-full sm:w-[625px] border-solid border-[#61677A] border-[1px] py-1 px-2 mt-1"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-[#fff] text-[#201658] font-[Poppins] font-normal tracking-[.2em] uppercase px-8 border-solid border-[#201658] border-[2px] hover:bg-[#201658] hover:text-white transition ease-out duration-200 py-[12px] my-4 text-[16px]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
          {isSubmitted && (
            <div className="w-full h-auto flex justify-center items-center  py-10">
              <div className="w-[80%] sm:w-[50%] bg-white shadow-lg rounded-lg p-6 text-center">
                <h2 className="text-2xl font-semibold text-[#2F8D46]">Your request has been submitted!</h2>
                <p className="mt-4 text-lg text-[#555]">Our team will contact you soon. Thank you for reaching out to us!</p>
              </div>
            </div>
          )}


    </div>
  );
};

export default ContactForm;
