import React, { useEffect, useState } from 'react';
import './Game_page.css'; // Ensure the path to your CSS file is correct
import emailjs from 'emailjs-com';

import backgroundVideo from '../Video_Files/early access.mp4'; // Ensure correct file path
import mobileBackgroundVideo from '../Video_Files/earlyAccessMovileVideo.mp4';
import streetRunner from '../Image_Files/typo.png';

export default function EarlyAccess() {
    const [videoSource, setVideoSource] = useState(backgroundVideo);
    const [formData, setFormData] = useState({
        email: '',
    });
    const [isSending, setIsSending] = useState(false); // New state to handle the sending state
    const [message, setMessage] = useState(''); // New state to handle success/error message

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const templateParams = {
            email: formData.email, // Ensure this matches your template variable
        };

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        setIsSending(true); // Set sending state to true

        try {
            // Send email using public key for authentication
            const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
            console.log('Email sent successfully:', response);
            setFormData({ email: '' }); // Clear the form
            setMessage('Email has been sent. You will get access soon!'); // Set success message
        } catch (error) {
            console.log('Failed to send email:', error);
            setMessage('Failed to send email. Please try again later.'); // Set error message
        } finally {
            setIsSending(false); // Reset sending state after attempt
        }
    };

    // Handle window resize for responsive video
    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 600;
            setVideoSource(isMobile ? mobileBackgroundVideo : backgroundVideo);
        };

        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='relative w-full h-screen early-access-container'>
            {/* Background video */}
            <video
                key={videoSource} // Add a key prop to force re-render
                autoPlay
                muted
                loop
                className='w-full h-full object-cover'
                aria-label='Background video for early access'
            >
                <source src={videoSource} type='video/mp4' />
                Your browser does not support the video tag.
            </video>

            {/* Form for email submission */}
            <form onSubmit={handleSubmit}>
                <div className='absolute inset-0 flex justify-center items-center backdrop-blur-sm'>
                    <div className='px-20 max-sm:px-5 py-20 w-2/3 max-sm:w-[95%] max-md:w-[80%] e-a-bg'>
                        <div className='flex max-md:flex-col justify-between items-center'>
                            <h1 className='py-8 font-bold text-5xl text-white max-sm:text-3xl'>
                                Be A Part Of Our Testing Team
                            </h1>
                            <div className='w-[400px] max-sm:w-[200px] max-md:w-[300px]'>
                                <img
                                    src={streetRunner}
                                    alt='Street Runner Logo'
                                    className='max-w-full h-auto'
                                />
                            </div>
                        </div>
                        <p className='mt-4 font-medium text-center text-white text-xl tracking-wider'>
                            Dive into the action before anyone else. Unlock exclusive early access
                            and experience the game that’s set to redefine excitement. Don’t wait—be
                            part of the future of gaming today!
                        </p>
                        {message && (
                            <p className='mt-4 text-center text-lg text-white'>{message}</p>
                        )}
                        <div className='flex max-md:flex-col justify-center items-center gap-3 mt-6'>
                            <input
                                type='email'
                                className='border-white/30 bg-black/25 px-4 py-2 border rounded w-2/3 font-semibold text-lg text-white outline-none'
                                placeholder='Enter Your Email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={isSending} // Disable input while sending
                            />
                            <button
                                type='submit'
                                className='border-white/30 bg-black/25 hover:bg-white/60 px-8 py-2 border rounded max-md:w-2/3 font-semibold text-lg text-white hover:text-black tracking-wider transition duration-300'
                                disabled={isSending} // Disable button while sending
                            >
                                {isSending ? 'Sending...' : 'Get Access'} {/* Update button text */}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
