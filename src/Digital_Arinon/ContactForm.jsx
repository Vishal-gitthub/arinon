import React, { useState } from "react";
import emailjs from "emailjs-com";
import contactIllu from "../Image_Files/contect form ill png.png";

const ContactForm = () => {
      const [formData, setFormData] = useState({
            userName: "",
            email: "",
            Description: "",
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
                        "service_nj1ykpa", // Replace with your Email.js service ID
                        "template_txey6fx", // Replace with your Email.js template ID
                        {
                              to_name: "Arinon Digital",
                              from_name: formData.userName,
                              email: formData.email,
                              description: formData.Description,
                        },
                        "yeAmpylh4nVI7d0kv" // Replace with your Email.js public key
                  )
                  .then(
                        (response) => {
                              alert("Email sent successfully!", response);
                              setFormData({ userName: "", email: "", Description: "" }); // Clear form
                              setIsSending(false); // End loading
                        },
                        (error) => {
                              alert("Failed to send email. Please try again.");
                              console.error("Error:", error);
                              setIsSending(false); // End loading on error
                        }
                  );
      };

      return (
            <div className="flex flex-col w-full items-center justify-center px-4 py-6">
                  <div className="flex lg:flex-row w-full justify-center items-center gap-10 lg:gap-28 py-8 px-5 rounded-md">
                        {/* Contact Form Section */}
                        <div className="flex flex-col gap-4 items-center w-full lg:w-1/2 px-4">
                              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
                                    Contact
                              </h1>
                              <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4">
                                    <input
                                          type="text"
                                          className="py-2 px-4 text-black outline-none rounded-3xl w-full border min-w-60 max-w-64"
                                          autoComplete="on"
                                          id="UserName"
                                          name="userName"
                                          placeholder=" Name"
                                          value={formData.userName}
                                          onChange={handleChange}
                                          required
                                    />
                                    <input
                                          type="email"
                                          className="py-2 px-4 text-black outline-none rounded-3xl w-full border min-w-60 max-w-64"
                                          id="email"
                                          name="email"
                                          autoComplete="on"
                                          placeholder=" Email"
                                          value={formData.email}
                                          onChange={handleChange}
                                          required
                                    />
                                    <textarea
                                          name="Description"
                                          id="disc"
                                          className="py-3 px-4 text-black outline-none border w-full rounded-3xl resize-none min-w-60 max-w-64"
                                          rows="4"
                                          placeholder="Drop Your Message"
                                          value={formData.Description}
                                          onChange={handleChange}
                                          required
                                    ></textarea>
                                    <div className="border rounded-full mt-4">
                                          <button
                                                type="submit"
                                                aria-label="Submit Form"
                                                className="relative inline-flex items-center justify-center px-6 py-3 font-medium bg-blue-custom text-white rounded-full hover:bg-[#a62d7a] group transition-all"
                                                disabled={isSending} // Disable the button during submission
                                          >
                                                {isSending ? (
                                                      <span className="relative text-white">Sending...</span>
                                                ) : (
                                                      <span className="relative text-white group-hover:text-white">
                                                            Submit
                                                      </span>
                                                )}
                                          </button>
                                    </div>
                              </form>
                        </div>

                        {/* Illustration Section */}
                        <div className="hidden md:block lg:w-1/2 w-full h-64 lg:h-auto">
                              <img
                                    src={contactIllu}
                                    alt="Contact Illustration"
                                    className="w-full h-full object-contain"
                              />
                        </div>
                  </div>
            </div>
      );
};

export default ContactForm;
