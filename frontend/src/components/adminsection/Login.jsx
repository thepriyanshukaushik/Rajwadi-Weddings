import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const api_url = 'https://rajwadiweddings.com';

  const handleLogin = async (e) => {
    e.preventDefault(); 
  
    try {
      console.log("Sending data:", { username, password }); 
  
      const response = await axios.post(`${api_url}/api/login.php`, {
        username: username,
        password: password,
      });
  
      if (response.status === 200) {
        alert("Success");
        navigate('/admin/home');  
        
      }else{
        setError('Invalid credentials');
      }
    } catch (error) {
      setError('Failed to login');
    }
  };
  
  
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src="/rRajwadi.jpg" id="logo" alt="" className="w-32 h-auto mb-4" />
      <h1 className="text-2xl font-bold mb-6">R Rajwadi Admin Panel</h1>
      <form
        id="loginform"
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm"
        onSubmit={handleLogin}
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <input
          type="submit"
          id="submit-btn"
          value="Submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {error && <p className="text-red-600 text-center mt-4">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
