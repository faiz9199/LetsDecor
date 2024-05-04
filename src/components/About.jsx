import about from "../assets/images/about.jpg";
import linkedin from "../assets/images/linkedin.png"
import insta from "../assets/images/insta.png"
import yt from "../assets/images/youtube.png"

const About = () => {
  return (
    <div className="bg-white mt-10 p-4" id="about">
      <div>
        <img className="rounded-full" src={about} alt="about" />
      </div>
      <div className="mt-8 text-4xl font-brush text-primary">
        <p>About Us</p>
      </div>
      <div className="font-nunito text-lg mt-4">
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
          every event we create. Let us turn your dreams into memories that will
          last a lifetime.
        </p>
      </div>
      <div className="flex gap-3 mt-4 mb-8">
        <img src={linkedin} alt="linkedin" />
        <img src={insta} alt="insta" />
        <img src={yt} alt="yt" />
      </div>
    </div>
  );
};
export default About;
