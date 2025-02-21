import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Settings = () => {
    const api_url = 'https://rajwadiweddings.com';
    const [admin, setAdminData] = useState([]);

    const [UserName, setChangeUserName] = useState('');
    const [Password, setChangePassword] = useState('');
    const [Email, setChangeEmail] = useState('');
    const [Phone, setChangePhone] = useState('');
    const [Address, setChangeAddress] = useState('');
    const [Instagram, setChangeInstagram] = useState('');
    const [Facebook, setChangeFacebook] = useState('');

    const changeUserName = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${api_url}/api/admin_data/username.php`, { username: UserName });
            if (response.status === 200) {
                alert("Updated Username successfully");
                setChangeUserName("");
            }
        } catch (err) {
            console.error("Error updating username", err);
        }
    };

    const changePassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${api_url}/api/admin_data/password.php`, { password: Password });
            if (response.status === 200) {
                alert("Updated Password successfully");
                setChangePassword("");
            }
        } catch (err) {
            console.error("Error updating password", err);
        }
    };

    const changeEmail = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${api_url}/api/admin_data/email.php`, { email: Email });
            if (response.status === 200) {
                alert("Updated Email successfully");
                setChangeEmail("");
            }
        } catch (err) {
            console.error("Error updating email", err);
        }
    };

    const changePhone = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${api_url}/api/admin_data/phone.php`, { contact_no: Phone });
            if (response.status === 200) {
                alert("Updated Contact number successfully");
                setChangePhone("");
            }
        } catch (err) {
            console.error("Error updating contact", err);
        }
    };

    const changeAddress = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${api_url}/api/admin_data/address.php`, { address: Address });
            if (response.status === 200) {
                alert("Updated Address successfully");
                setChangeAddress("");
            }
        } catch (err) {
            console.error("Error updating address", err);
        }
    };

    const changeInstagram = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${api_url}/api/admin_data/instagram.php`, { instagram: Instagram });
            if (response.status === 200) {
                alert("Updated Instagram link successfully");
                setChangeInstagram("");
            }
        } catch (err) {
            console.error("Error updating Instagram link", err);
        }
    };

    const changeFacebook = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${api_url}/api/admin_data/facebook`, { facebook: Facebook });
            if (response.status === 200) {
                alert("Updated Facebook link successfully");
                setChangeFacebook("");
            }
        } catch (err) {
            console.error("Error updating Facebook link", err);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${api_url}/api/admin_data.php`);
                if (response.status === 200) {
                    setAdminData(response.data);
                }
            } catch (err) {
                console.error("Error fetching data", err);
            }
        };
        fetchData();
    }, [api_url]);

    return (
        <div className="w-full h-[130vh] p-6 bg-gray-100">
            <h1 className="text-2xl font-bold text-center mb-6 text-blue-800">Admin Settings</h1>
            <div className="max-w-4xl mx-auto grid gap-6">
                {admin.map((admin, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                        <div className="mb-3">
                            <p className="text-sm text-gray-600">Username</p>
                            <div className="text-lg font-medium text-gray-800">{admin.username}</div>
                            <div className="mt-2 flex items-center">
                                <input
                                    type="text"
                                    placeholder="Change Username"
                                    value={UserName}
                                    onChange={(e) => setChangeUserName(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button className="ml-3 px-4 py-2 bg-[#0D1282] text-white rounded-md hover:bg-[#0C359E]" onClick={changeUserName}>Update</button>
                            </div>
                        </div>
                        <div className="mb-3">
                            <p className="text-sm text-gray-600">Password</p>
                            <div className="text-lg font-medium text-gray-800">{admin.password}</div>
                            <div className="mt-2 flex items-center">
                                <input
                                    type="text"
                                    placeholder="Change Password"
                                    value={Password}
                                    onChange={(e) => setChangePassword(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button className="ml-3 px-4 py-2 bg-[#0D1282] text-white rounded-md hover:bg-[#0C359E]" onClick={changePassword}>Update</button>
                            </div>
                        </div>
                        <div className="mb-3">
                            <p className="text-sm text-gray-600">Email</p>
                            <div className="text-lg font-medium text-gray-800">{admin.email}</div>
                            <div className="mt-2 flex items-center">
                                <input
                                    type="text"
                                    placeholder="Change Email"
                                    value={Email}
                                    onChange={(e) => setChangeEmail(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button className="ml-3 px-4 py-2 bg-[#0D1282] text-white rounded-md hover:bg-[#0C359E]" onClick={changeEmail}>Update</button>
                            </div>
                        </div>
                        <div className="mb-3">
                            <p className="text-sm text-gray-600">Contact</p>
                            <div className="text-lg font-medium text-gray-800">{admin.contact_no}</div>
                            <div className="mt-2 flex items-center">
                                <input
                                    type="text"
                                    placeholder="Change Contact"
                                    value={Phone}
                                    onChange={(e) => setChangePhone(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button className="ml-3 px-4 py-2 bg-[#0D1282] text-white rounded-md hover:bg-[#0C359E]" onClick={changePhone}>Update</button>
                            </div>
                        </div>
                        <div className="mb-3">
                            <p className="text-sm text-gray-600">Address</p>
                            <div className="text-lg font-medium text-gray-800">{admin.address}</div>
                            <div className="mt-2 flex items-center">
                                <input
                                    type="text"
                                    placeholder="Change Address"
                                    value={Address}
                                    onChange={(e) => setChangeAddress(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button className="ml-3 px-4 py-2 bg-[#0D1282] text-white rounded-md hover:bg-[#0C359E]" onClick={changeAddress}>Update</button>
                            </div>
                        </div>
                        <div className="mb-3">
                            <p className="text-sm text-gray-600">Instagram</p>
                            <div className="text-lg font-medium text-gray-800">{admin.instagram}</div>
                            <div className="mt-2 flex items-center">
                                <input
                                    type="text"
                                    placeholder="Change Instagram Link"
                                    value={Instagram}
                                    onChange={(e) => setChangeInstagram(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button className="ml-3 px-4 py-2 bg-[#0D1282] text-white rounded-md hover:bg-[#0C359E]" onClick={changeInstagram}>Update</button>
                            </div>
                        </div>
                        <div className="mb-3">
                            <p className="text-sm text-gray-600">Facebook</p>
                            <div className="text-lg font-medium text-gray-800">{admin.facebook}</div>
                            <div className="mt-2 flex items-center">
                                <input
                                    type="text"
                                    placeholder="Change Facebook Link"
                                    value={Facebook}
                                    onChange={(e) => setChangeFacebook(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button className="ml-3 px-4 py-2 bg-[#0D1282] text-white rounded-md hover:bg-[#0C359E]" onClick={changeFacebook}>Update</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Settings;
