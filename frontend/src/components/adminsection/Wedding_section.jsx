import React, { useEffect, useState } from "react";
import axios from "axios";

const Wedding_section = () => {
  const [wedding, setWeddingData] = useState({
    title: "",
    thumbnail: null,
    description: "",
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null,
  });

  const [recievedWeddingData, setRecievedWeddingData] = useState([]);
  const api_url = 'https://rajwadiweddings.com';

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setWeddingData({ ...wedding, [name]: files[0] });
    } else {
      setWeddingData({ ...wedding, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    console.log("Wedding Data:", wedding);

    formData.append("title", wedding.title);
    formData.append("description", wedding.description);
    formData.append("thumbnail", wedding.thumbnail);
    formData.append("image1", wedding.image1);
    formData.append("image2", wedding.image2);
    formData.append("image3", wedding.image3);
    formData.append("image4", wedding.image4);
    formData.append("image5", wedding.image5);

    try {
      const response = await axios.post(`${api_url}/api/wedding.php`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        alert("Wedding section created successfully!");
        setWeddingData({
          title: "",
          thumbnail: null,
          description: "",
          image1: null,
          image2: null,
          image3: null,
          image4: null,
          image5: null,
        });
      }
    } catch (error) {
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.post(`${api_url}/api/wedding_data/delete.php`, {
        id: id,
      });
  
      if (response.status === 200) {
        alert("Wedding entry deleted successfully!");
        setRecievedWeddingData(recievedWeddingData.filter((item) => item.id !== id));
      }
    } catch (error) {
      alert(error);
    }
  };
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${api_url}/api/wedding_data.php`);
        if (response.status === 200) {
          setRecievedWeddingData(response.data);
        } 
      } catch (err) {
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className="w-full min-h-screen px-4 sm:px-8 py-10 bg-gray-100 flex flex-col justify-center items-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-medium py-2 text-center bg-[#102C57] mb-6 rounded-[20px] text-[#fff]">
          Wedding Section
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#102C57] mb-1">Title:</label>
            <input
              type="text"
              name="title"
              value={wedding.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the title"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-[#102C57] mb-1">Thumbnail:</label>
            <input
              type="file"
              name="thumbnail"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-[#102C57] mb-1">Description:</label>
            <textarea
              name="description"
              value={wedding.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter a description"
              rows="4"
            ></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            {["image1", "image2", "image3", "image4", "image5"].map((image, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-[#102C57] mb-1">Image {index + 1}:</label>
                <input
                  type="file"
                  name={image}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="bg-[#fff] w-full text-[#201658] font-[Poppins] font-normal tracking-[.2em] uppercase px-8 border-solid border-[#201658] rounded-[20px] border-[2px] hover:bg-[#201658] hover:text-white transition ease-out duration-200 py-[8px] my-2 text-[16px]"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 mt-6">
        <h2 className="text-2xl font-medium text-[#102C57] mb-4">Wedding Data</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border p-2 text-sm font-medium text-[#102C57] bg-[#102C57] text-white">Title</th>
              <th className="border p-2 text-sm font-medium text-[#102C57] bg-[#102C57] text-white">Description</th>
              <th className="border p-2 text-sm font-medium text-[#102C57] bg-[#102C57] text-white">Thumbnail</th>
              <th className="border p-2 text-sm font-medium text-[#102C57] bg-[#102C57] text-white">Images</th>
              <th className="border p-2 text-sm font-medium text-[#102C57] bg-[#102C57] text-white">Wanna delete</th>
            </tr>
          </thead>
          <tbody>
            {recievedWeddingData.map((data, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border p-2">{data.title}</td>
                <td className="border p-2">{data.description}</td>
                <td className="border p-2">
                  {data.thumbnail && (
                    <img
                      src={`${api_url}/images/${data.thumbnail}`}
                      alt="Thumbnail"
                      className="w-20 h-20 object-cover rounded-md"
                    />
                  )}
                </td>
                <td className="border p-2 flex gap-2 flex-wrap">
                  {data.image1 && (
                    <img
                      src={`${api_url}/images/${data.image1}`}
                      alt="Image 1"
                      className="w-20 h-20 object-cover rounded-md"
                    />
                  )}
                  {data.image2 && (
                    <img
                      src={`${api_url}/images/${data.image2}`}
                      alt="Image 2"
                      className="w-20 h-20 object-cover rounded-md"
                    />
                  )}
                  {data.image3 && (
                    <img
                      src={`${api_url}/images/${data.image3}`}
                      alt="Image 3"
                      className="w-20 h-20 object-cover rounded-md"
                    />
                  )}
                  {data.image4 && (
                    <img
                      src={`${api_url}/images/${data.image4}`}
                      alt="Image 4"
                      className="w-20 h-20 object-cover rounded-md"
                    />
                  )}
                  {data.image5 && (
                    <img
                      src={`${api_url}/images/${data.image5}`}
                      alt="Image 5"
                      className="w-20 h-20 object-cover rounded-md"
                    />
                  )}
                </td>
                <td className="border p-2">
                  <button
                    onClick={() => handleDelete(data.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wedding_section;
