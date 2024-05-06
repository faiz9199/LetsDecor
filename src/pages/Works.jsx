import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WorkCard from "../components/WorkCard";
import decor from "../assets/images/decor.avif";
import birthday from "../assets/images/birrthdayDecor.avif";
import party from "../assets/images/partydecor.webp";

const Works = () => {
  const cardData = [
    {
      id: 1,
      image: decor,
      title: "Wedding/Engagement",
      venue: "Kathara, Officer's Club",
      date: "01/01/2024",
    },
    {
      id: 2,
      image: birthday,
      title: "Bithday",
      venue: "Jdfe KJskd, kdsfwewe",
      date: "02/02/2024",
    },
    {
      id: 3,
      image: party,
      title: "Party Decor",
      venue: "See More fgd fddfsdfsd",
      date: "03/03/2024",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-24">
        <div className="mx-4">
          <p className="my-6 text-2xl uppercase font-nunito">
            Our Recent Works
          </p>
          <div className="flex flex-col gap-10">
            {cardData.map((card)=> (
              <WorkCard
                key={card.id}
                image={card.image}
                title={card.title}
                venue={card.venue}
                date={card.date}
                />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Works;
