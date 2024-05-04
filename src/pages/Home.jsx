import React from "react";
import Cover from "../components/Cover";
import Card from "../components/Card";
import wedding from "../assets/images/new-wedding.jpg";
import birthday from "../assets/images/new-birthday.jpg";
import party from "../assets/images/new-party.jpg";
import babyShower from "../assets/images/baby-shower.jpg";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  const cardData = [
    {
      id: 1,
      imageSrc: wedding,
      title: "Wedding Planner",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At aliquam, repellendus totam suscipit quidem illo.",
    },
    {
      id: 2,
      imageSrc: birthday,
      title: "Birthday Planner",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At aliquam, repellendus totam suscipit quidem illo.",
    },
    {
      id: 3,
      imageSrc: party,
      title: "Partu Organizer",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At aliquam, repellendus totam suscipit quidem illo.",
    },
    {
      id: 4,
      imageSrc: babyShower,
      title: "Baby Shower",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At aliquam, repellendus totam suscipit quidem illo.",
    },
  ];

  return (
    <div>
      <Cover />
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
