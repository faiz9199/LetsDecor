import React from "react";
import person from "../assets/images/person.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


const testimonialsData = [
  {
    id: 1,
    imageUrl: person,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nam expedita libero exercitationem omnis quis aut sit non vitae dolor?",
  },
  {
    id: 2,
    imageUrl: person,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nam expedita libero exercitationem omnis quis aut sit non vitae dolor?",
  },
  {
    id: 3,
    imageUrl: person,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nam expedita libero exercitationem omnis quis aut sit non vitae dolor?",
  },
  {
    id: 4,
    imageUrl: person,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nam expedita libero exercitationem omnis quis aut sit non vitae dolor?",
  },
  {
    id: 5,
    imageUrl: person,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nam expedita libero exercitationem omnis quis aut sit non vitae dolor?",
  },
  {
    id: 6,
    imageUrl: person,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nam expedita libero exercitationem omnis quis aut sit non vitae dolor?",
  },
  {
    id: 7,
    imageUrl: person,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nam expedita libero exercitationem omnis quis aut sit non vitae dolor?",
  },
];

const Testimonials = () => {
  return (
    <>
      <Swiper>
        {testimonialsData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="m-4 bg-white p-4 rounded-lg shadow-lg text-center">
              <div className="flex justify-center items-center w-24 h-24 rounded-full overflow-hidden border-2 border-red-500 mx-auto">
                <img
                  src={testimonial.imageUrl}
                  alt="Testimonial"
                  className="object-cover w-full h-full"
                />
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
