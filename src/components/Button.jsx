import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation

const Button = ({ text, link }) => {
  return (
    <div>
      <Link to={link} className="bg-black text-base text-white px-8 py-2 rounded-lg font-nunito">
        {text}
      </Link>
    </div>
  );
};

export default Button;
