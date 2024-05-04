import React from "react";
import contact from "../assets/images/Contact_doodle.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <div className="mx-4 mt-32">
          <div>
            <img src={contact} alt="contact" />
          </div>
          <div className="mt-10 flex flex-col gap-4 bg-white py-4 px-6 rounded-md">
            <div className="flex flex-col gap-4">
              <p className="text-lg font-semibold">Name*</p>
              <input
                className="p-4 border border-gray-300 rounded-md"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-lg font-semibold">Email*</p>
              <input
                className="p-4 border border-gray-300 rounded-md"
                type="text"
                placeholder="Enter your Email"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-lg font-semibold">Phone*</p>
              <input
                className="p-4 border border-gray-300 rounded-md"
                type="text"
                placeholder="Enter your Phone No."
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-lg font-semibold">Message*</p>
              <textarea
                className="p-4 border border-gray-300 rounded-md h-40" // Adjust the height as needed (e.g., h-40 for 40px height)
                placeholder="Message"
              />
            </div>
            <div className="mt-6 button ">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
