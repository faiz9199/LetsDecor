import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const WorkCard = ({ image, title, venue, date }) => {
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <div className=" flex justify-center items-center" data-aos-duration="1000"
    data-aos="fade-up"
    data-aos-once>
      <div className="container flex justify-center">
        <div className="max-w-sm">
          <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
            <img className="rounded-t-lg" src={image} alt="image" />
            <div className="py-6 px-8 rounded-lg bg-white">
              <h1 className="text-primary font-bold font-brush text-2xl mb-3">
                {title}
              </h1>
              <p className="font-nunito text-lg font-bold tracking-wide">
                {venue}
              </p>
              <p className="font-nunito text-lg font-bold tracking-wide">
                {date}
              </p>
              <button className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
                See more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkCard;
