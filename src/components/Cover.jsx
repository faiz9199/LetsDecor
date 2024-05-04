import { useState, useEffect } from 'react';
import cover from "../assets/images/cover.jpg";
import Button from "../components/Button";
import Navbar from "../components/Navbar"

const Cover = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="bg-cover bg-center h-screen relative"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <Navbar/>
      <div
        className={` mr-4 absolute bg-white p-4 mb-8 flex flex-col gap-2 transition-all duration-1000 ${loaded ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ maxWidth: "fit-content", bottom: "5%" }}
      >
        <p className="font-brush text-primary text-3xl">Event Decor</p>
        <h2 className="text-3xl font-cormorant">Lorem ipsum dolor sit</h2>
        <p className="font-nunito">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          illum!
        </p>
        <Button />
      </div>
    </div>
  );
};

export default Cover;
