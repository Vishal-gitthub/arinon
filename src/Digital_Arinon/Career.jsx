import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import contactIllu from '../Image_Files/careerForm.png';
import PortfolioNavbar from './Portfolio/PortfolioNavbar';
import careerbg from '../Image_Files/careerFormBg.png';

const CareerForm = () => {
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
        <>
            <PortfolioNavbar />
            <div className='flex justify-evenly items-center mx-10 mt-10 px-6 py-3 w-full text-black'>
                <div className='flex flex-col justify-center items-center gap-4 shadow-lg py-5 min-w-[18rem] max-w-md text-center'>
                    <p className='font-medium text-lg'>Video Editor</p>
                    <p className='flex flex-shrink-0 mt-1 text-sm'>GHITORNI, DELHI</p>
                    <p className='mt-1 text-sm'>2+ years</p>
                    <button className='inline-flex relative justify-center items-center bg-blue-custom hover:bg-[#a62d7a] px-6 py-3 rounded-full font-medium text-white transition-all group'>
                        Apply Now
                    </button>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 shadow-lg py-5 min-w-[18rem] text-center'>
                    <p className='font-medium text-lg'>Video Editor</p>
                    <p className='flex flex-shrink-0 mt-1 text-sm'>GHITORNI, DELHI</p>
                    <p className='mt-1 text-sm'>2+ years</p>
                    <button className='inline-flex relative justify-center items-center bg-blue-custom hover:bg-[#a62d7a] px-6 py-3 rounded-full font-medium text-white transition-all group'>
                        Apply Now
                    </button>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 shadow-lg py-5 min-w-[18rem] text-center'>
                    <p className='font-medium text-lg'>Video Editor</p>
                    <p className='flex flex-shrink-0 mt-1 text-sm'>GHITORNI, DELHI</p>
                    <p className='mt-1 text-sm'>2+ years</p>
                    <button className='inline-flex relative justify-center items-center bg-blue-custom hover:bg-[#a62d7a] px-6 py-3 rounded-full font-medium text-white transition-all group'>
                        Apply Now
                    </button>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center bg-opacity-35 px-4 py-6 w-full h-full'>
                <div className='flex lg:flex-row justify-center items-center gap-10 lg:gap-28 px-5 py-8 rounded-md w-full'>
                    {/* Contact Form Section */}
                    <div className='flex flex-col items-center gap-4 px-4 w-full lg:w-1/2'>
                        <h1 className='text-3xl text-center md:text-4xl lg:text-5xl'>Contact</h1>
                        <form
                            onSubmit={handleSubmit}
                            className='flex flex-col items-center gap-4 w-full'
                        >
                            <input
                                type='text'
                                className='px-4 py-2 border rounded-3xl w-full min-w-60 max-w-96 text-black outline-none'
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
                                className='px-4 py-2 border rounded-3xl w-full min-w-60 max-w-96 text-black outline-none'
                                id='email'
                                name='email'
                                autoComplete='on'
                                placeholder=' Email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type='text'
                                className='px-4 py-2 border rounded-3xl w-full min-w-60 max-w-96 text-black outline-none'
                                id='phone'
                                name='phone'
                                autoComplete='on'
                                placeholder='Phone Number'
                                // value={formData.email}
                                // onChange={handleChange}
                                required
                            />
                            <input
                                type='file'
                                className='px-4 py-2 border rounded-3xl w-full min-w-60 max-w-96 text-black outline-none'
                                id='file'
                                name='file'
                                autoComplete='on'
                                placeholder='FILE'
                                // value={formData.email}
                                // onChange={handleChange}
                                required
                            />
                            <select
                                name='positions'
                                id='positions'
                                className='px-4 py-2 border rounded-3xl w-full min-w-60 max-w-96 font-serif'
                            >
                                <option value='Select Your Position' disabled>
                                    Select Your Position
                                </option>

                                {/* <!-- Development Roles --> */}
                                <option value='Backend Developer'>Backend Developer</option>
                                <option value='Frontend Developer'>Frontend Developer</option>
                                <option value='Full Stack Developer'>Full Stack Developer</option>
                                <option value='Game Developer'>Game Developer</option>
                                <option value='Software Developer'>Software Developer</option>

                                {/* <!-- AI Roles --> */}
                                <option value='AI Engineer'>AI Engineer</option>

                                {/* <!-- Creative Roles --> */}
                                <option value='3D Animator'>3D Animator</option>
                                <option value='Content Creator'>Content Creator</option>
                                <option value='Gaming Content Creator'>
                                    Gaming Content Creator
                                </option>
                                <option value='Graphic Designer'>Graphic Designer</option>
                                <option value='Motion Graphics Designer'>
                                    Motion Graphics Designer
                                </option>
                                <option value='UI/UX Designer'>UI/UX Designer</option>
                                <option value='Video Editor'>Video Editor</option>
                                <option value='Visual Effects (VFX) Artist'>
                                    Visual Effects (VFX) Artist
                                </option>

                                {/* <!-- Digital Marketing Roles --> */}
                                <option value='Affiliate Marketing Manager'>
                                    Affiliate Marketing Manager
                                </option>
                                <option value='Content Marketing Manager'>
                                    Content Marketing Manager
                                </option>
                                <option value='Digital Marketing Specialist'>
                                    Digital Marketing Specialist
                                </option>
                                <option value='Email Marketing Specialist'>
                                    Email Marketing Specialist
                                </option>
                                <option value='Gaming Marketing Specialist'>
                                    Gaming Marketing Specialist
                                </option>
                                <option value='Influencer Marketing Manager'>
                                    Influencer Marketing Manager
                                </option>
                                <option value='SEO Specialist'>SEO Specialist</option>
                                <option value='Social Media Manager'>Social Media Manager</option>

                                {/* <!-- Management and Sales Roles --> */}
                                <option value='Business Development Manager'>
                                    Business Development Manager
                                </option>
                                <option value='HR/Admin'>HR/Admin</option>
                                <option value='Marketing Specialist'>Marketing Specialist</option>
                                <option value='Sales Manager'>Sales Manager</option>

                                {/* <!-- Miscellaneous Roles --> */}
                                <option value='E-commerce Specialist'>E-commerce Specialist</option>
                                <option value='Game Tester'>Game Tester</option>
                                <option value='Technical Writer'>Technical Writer</option>
                            </select>

                            <textarea
                                name='Description'
                                id='disc'
                                className='px-4 py-3 border rounded-3xl w-full min-w-60 max-w-96 text-black outline-none resize-none'
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
        </>
    );
};

export default CareerForm;
