import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nam expedita libero exercitationem omnis quis aut sit non vitae dolor?",
    rating: 4.5, // Example rating, can be any value between 0 and 5
  },
  {
    id: 2,
    name: "Rohit Kumar",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nam expedita libero exercitationem omnis quis aut sit non vitae dolor?",
    rating: 3.5, // Example rating, can be any value between 0 and 5
  },
  {
    id: 3,
    name: "Shivam Singh",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nam expedita libero exercitationem omnis quis aut sit non vitae dolor?",
    rating: 2, // Example rating, can be any value between 0 and 5
  },
  // Add more testimonials here
];

const Testimonials = () => {
  return (
    <>
      <div className="text-2xl uppercase font-nunito ml-4 mt-4 " id="testimonials">
        <p>Testimonials</p>
      </div>
      <Swiper>
        {testimonialsData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="m-4 bg-white p-4 rounded-lg shadow-lg text-center">
              <p className="font-nunito mb-4 text-xl font-bold">{testimonial.name}</p>
              <div className="flex gap-2">
                {[...Array(Math.floor(testimonial.rating))].map((_, index) => (
                  <FaStar key={index} size={15} style={{ color: "#ffd700" }} />
                ))}
                {testimonial.rating % 1 !== 0 && (
                  <FaStarHalfAlt size={15} style={{ color: "#ffd700" }} />
                )}
              </div>
              <div className="mt-4">
                <p>{testimonial.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonials;
