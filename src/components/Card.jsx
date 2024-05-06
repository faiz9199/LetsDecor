import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import Button from "./Button"; // Assuming Button.js is in the same directory as Card.js

const Card = ({ imageSrc, title, description, buttonText, buttonLink }) => {
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
          <Button text={buttonText} link={buttonLink} />
        </div>
      </div>
    </div>
  );
};

export default Card;
