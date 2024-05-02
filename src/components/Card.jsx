import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";

const Card = ({ imageSrc, title, description }) => {
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <div
      className="bg-white rounded-lg shadow-lg"
      data-aos-duration="1000"
      data-aos="fade-up"
      data-aos-once
    >
      <div className="p-4">
        <div>
          <img className="rounded-lg" src={imageSrc} alt={title} />
        </div>
        <p className="font-brush text-3xl mt-4 text-primary">{title}</p>
        <p className="font-nunito text-lg text-primary my-2">{description}</p>
        <div className="my-4">
          <button className="bg-black text-base text-white px-8 py-2 rounded-lg font-nunito">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
