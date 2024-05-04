import React from "react";
import Cover from "../components/Cover";
import Card from "../components/Card";
import wedding from "../assets/images/wedding.jpg";
import birthday from "../assets/images/new-birthday.jpg";
import party from "../assets/images/new-party.jpg";
import babyShower from "../assets/images/baby-shower.jpg";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";

const Home = () => {
  const cardData = [
    {
      id: 1,
      imageSrc: wedding,
      title: "Wedding Decor",
      description:
        "Transforming dreams into reality, creating enchanting memories with every detail."
    },
    {
      id: 2,
      imageSrc: birthday,
      title: "Birthday Decor",
      description:
        "Crafting celebrations that sparkle with joy, tailor-made for each special year."
  
    },
    {
      id: 3,
      imageSrc: party,
      title: "Corporate Events Decor",
      description:
        "Infusing professionalism with elegance, setting the stage for successful gatherings",
    },
    {
      id: 4,
      imageSrc: babyShower,
      title: "Baby Shower",
      description:
        "Welcoming bundles of joy with whimsical charm, every detail a sweet anticipation."
    },
  ];

  return (
    <div>
      <Navbar/>
      <Slider/>
      <div className="container mx-auto">
        <div className="mx-4" id="services">
          <div className="my-6 text-2xl uppercase font-nunito">
            <h1>Our Services</h1>
          </div>
          <div className="flex flex-col gap-6">
            {cardData.map((card) => (
              <Card
                key={card.id}
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
        <About />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
