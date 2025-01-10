import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import contactIllu from '../Image_Files/contect form ill png.png';

const ContactForm = () => {
    
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        Description: '',
    });

    const [isSending, setIsSending] = useState(false); // New state for loading

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true); // Start loading

        emailjs
            .send(
                'service_nj1ykpa', // Replace with your Email.js service ID
                'template_txey6fx', // Replace with your Email.js template ID
                {
                    to_name: 'Arinon Digital',
                    from_name: formData.userName,
                    email: formData.email,
                    description: formData.Description,
                },
                'yeAmpylh4nVI7d0kv', // Replace with your Email.js public key
            )
            .then(
                (response) => {
                    alert('Email sent successfully!', response);
                    setFormData({ userName: '', email: '', Description: '' }); // Clear form
                    setIsSending(false); // End loading
                },
                (error) => {
                    alert('Failed to send email. Please try again.');
                    console.error('Error:', error);
                    setIsSending(false); // End loading on error
                },
            );
    };

    return (
        <div className='flex flex-col justify-center items-center px-4 py-6 w-full'>
            <div className='flex lg:flex-row justify-center items-center gap-10 lg:gap-28 px-5 py-8 rounded-md w-full'>
                {/* Contact Form Section */}
                <div className='flex flex-col items-center gap-4 px-4 w-full lg:w-1/2'>
                    <h1 className='font-semibold text-3xl text-center md:text-4xl lg:text-5xl'>
                        Contact
                    </h1>
                    <form
                        onSubmit={handleSubmit}
                        className='flex flex-col items-center gap-4 w-full'
                    >
                        <input
                            type='text'
                            className='px-4 py-2 border rounded-3xl w-full min-w-60 max-w-64 text-black outline-none'
                            autoComplete='on'
                            id='UserName'
                            name='userName'
                            placeholder=' Name'
                            value={formData.userName}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type='email'
                            className='px-4 py-2 border rounded-3xl w-full min-w-60 max-w-64 text-black outline-none'
                            id='email'
                            name='email'
                            autoComplete='on'
                            placeholder=' Email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name='Description'
                            id='disc'
                            className='px-4 py-3 border rounded-3xl w-full min-w-60 max-w-64 text-black outline-none resize-none'
                            rows='4'
                            placeholder='Drop Your Message'
                            value={formData.Description}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <div className='mt-4 border rounded-full'>
                            <button
                                type='submit'
                                aria-label='Submit Form'
                                className='inline-flex relative justify-center items-center bg-blue-custom hover:bg-[#a62d7a] px-6 py-3 rounded-full font-medium text-white transition-all group'
                                disabled={isSending} // Disable the button during submission
                            >
                                {isSending ? (
                                    <span className='relative text-white'>Sending...</span>
                                ) : (
                                    <span className='group-hover:text-white relative text-white'>
                                        Submit
                                    </span>
                                )}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Illustration Section */}
                <div className='md:block hidden w-full lg:w-1/2 h-64 lg:h-auto'>
                    <img
                        src={contactIllu}
                        alt='Contact Illustration'
                        className='w-full h-full object-contain'
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
