import about from "../assets/images/about.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <div
      className="bg-white mt-10 p-4"
      id="about"
      data-aos-duration="1000"
      data-aos="fade-up"
      data-aos-once
    >
      <div>
        <img className="rounded-full" src={about} alt="about" />
      </div>
      <div className="mt-8 text-4xl font-brush text-primary">
        <p>About Us</p>
      </div>
      <div className="font-nunito text-base mt-4">
        <p>
          Welcome to Let's Decor, where dreams meet reality through impeccable
          event planning and design. With a passion for creating unforgettable
          experiences, we specialize in crafting extraordinary events tailored
          to your unique vision. Our team of skilled professionals brings
          creativity, innovation, and attention to detail to every occasion,
          ensuring your event exceeds expectations. At Let's Decor, we
          understand that every event is a reflection of your style and
          personality. Whether it's a wedding, corporate gathering, or special
          celebration, we take pride in translating your ideas into stunning
          reality. From concept development to flawless execution, we are
          dedicated to bringing your vision to life, leaving you free to enjoy
          every moment of your special day. With Let's Decor, you can expect
          unparalleled service, unwavering commitment, and a touch of magic in
          every event we create. Let us turn your dreams into memories that will last a lifetime.
        </p>
      </div>
      <div className="flex gap-4 my-4">
        <a href="https://www.instagram.com/lets_dcor/?igsh=MXFmcWh0aGExcTJ2OQ%3D%3D&utm_source=qr">
          <FaInstagram size={30} />
        </a>
        <FaYoutube size={30} />
        <FaLinkedin size={30} />
      </div>
    </div>
  );
};
export default About;
