import React, { useContext, useState } from 'react';
import { PortfolioContext } from '../Portfolio/Context';
import axios from 'axios';
export default function CareerForm() {
    const { ToggleForm, formVisible } = useContext(PortfolioContext);
    const [isSending, setIsSending] = useState(false); // New state for loading

    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        role: '',
        resume: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true); // Start loading

        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('phone', formData.phone);
        formDataToSend.append('role', formData.role);
        formDataToSend.append('resume', formData.file);
        console.log('Form submitted:', formData);
        try {
            const response = await axios.post('https://arinon.com/send_email.php', formDataToSend, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            setStatus(response.data.message);
            setIsSending(false); // End loading

            setFormData({
                name: '',
                email: '',
                phone: '',
                role: '',
                file: null,
            });
        } catch (error) {
            setStatus('Failed to send email. Please try again later.');
            setIsSending(false); // End loading
            setFormData({
                name: '',
                email: '',
                phone: '',
                role: '',
                file: null,
            });
        }
    };

    return (
        <div
            className={`bottom-0 w-full z-30 fixed bg-black text-black h-[60%] rounded-t-2xl transition-transform overflow-y-scroll duration-500 ease-in-out ${
                formVisible ? '-translate-y-0' : 'translate-y-full'
            } `}
        >
            <div className='left-5 absolute text-black'>
                <button className='p-4 font-bold text-3xl' onClick={ToggleForm}>
                    X
                </button>
            </div>
            <div className='flex justify-center items-center bg-gray-100'>
                <form onSubmit={handleSubmit} className='bg-white shadow-lg p-8 rounded-lg w-full'>
                    <h2 className='mb-6 font-semibold text-2xl text-center text-gray-700'>
                        Apply for a Position
                    </h2>

                    <div className='space-y-4'>
                        {/* Name */}
                        <div>
                            <label
                                htmlFor='name'
                                className='block font-medium text-gray-700 text-sm'
                            >
                                Full Name
                            </label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                className='border-gray-300 mt-2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-custom w-full focus:outline-none'
                                placeholder='e.g. John Doe'
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor='email'
                                className='block font-medium text-gray-700 text-sm'
                            >
                                Email Address
                            </label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                className='border-gray-300 mt-2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-custom w-full focus:outline-none'
                                placeholder='e.g. johndoe@example.com'
                                required
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label
                                htmlFor='phone'
                                className='block font-medium text-gray-700 text-sm'
                            >
                                Phone Number
                            </label>
                            <input
                                type='tel'
                                id='phone'
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                className='border-gray-300 mt-2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-custom w-full focus:outline-none'
                                placeholder='e.g. +91 12345-67890'
                                required
                            />
                        </div>

                        {/* Role */}
                        <div>
                            <label
                                htmlFor='role'
                                className='block font-medium text-gray-700 text-sm'
                            >
                                Desired Role
                            </label>
                            <input
                                type='text'
                                id='role'
                                name='role'
                                value={formData.role}
                                onChange={handleChange}
                                className='border-gray-300 mt-2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-custom w-full focus:outline-none'
                                placeholder='e.g. Software Engineer'
                                required
                            />
                        </div>

                        {/* Resume Upload */}
                        <div>
                            <label
                                htmlFor='resume'
                                className='block font-medium text-gray-700 text-sm'
                            >
                                Upload Resume
                            </label>
                            <input
                                type='file'
                                id='resume'
                                name='resume'
                                onChange={handleFileChange}
                                className='file:bg-blue-custom mt-2 file:px-4 file:py-2 file:rounded-md w-full text-sm file:text-white cursor-pointer'
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className='flex flex-col-reverse justify-center items-center'>
                            <button
                                type='submit'
                                disabled={isSending}
                                className='inline-flex justify-center items-center hover:border-white bg-blue-custom hover:bg-[#a62d7a] px-6 py-3 border border-transparent rounded-full w-3/5 font-medium text-white transition-all'
                            >
                                {isSending ? (
                                    <span className='relative text-white'>Sending...</span>
                                ) : (
                                    <span className='relative text-white'> Submit Application</span>
                                )}
                            </button>

                            {status && <p>{status}</p>}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
