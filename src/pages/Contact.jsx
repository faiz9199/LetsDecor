import React, { useState } from "react";
import contact from "../assets/images/Contact_doodle.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, for example, send data to backend
    console.log(formData); // Placeholder for sending data
    // Clear form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <div className="mx-4 mt-32">
          <div>
            <img src={contact} alt="contact" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-10 flex flex-col gap-4 bg-white py-4 px-6 rounded-md">
              <div className="flex flex-col gap-4">
                <p className="text-lg font-semibold">Name*</p>
                <input
                  className="p-4 border border-gray-300 rounded-md"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-lg font-semibold">Email*</p>
                <input
                  className="p-4 border border-gray-300 rounded-md"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your Email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-lg font-semibold">Phone*</p>
                <input
                  className="p-4 border border-gray-300 rounded-md"
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your Phone No."
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-lg font-semibold">Message*</p>
                <textarea
                  className="p-4 border border-gray-300 rounded-md h-40"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                />
              </div>
              <div className="mt-6 button ">
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
