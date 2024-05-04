import React from "react";
import person from "../assets/images/person.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
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
    <div className="text-2xl uppercase font-nunito ml-4 mt-8" id="testimonials">
      <p>Testimonilas</p>
    </div>
      <Swiper>
        {testimonialsData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="m-4 bg-white p-4 rounded-lg shadow-lg text-center">
              {/* <div className="flex justify-center items-center w-24 h-24 rounded-full overflow-hidden border-2 border-red-500 mx-auto">
                <img
                  src={testimonial.imageUrl}
                  alt="Testimonial"
                  className="object-cover w-full h-full"
                />
              </div> */}
              
              <p className="font-nunito mb-4 text-xl font-bold">Rahul Kumar</p>
              <div className="flex gap-2">
                <FaStar size={15} style={{color:"#ffd700"}}/>
                <FaStar size={15} style={{color:"#ffd700"}}/>
                <FaStar size={15} style={{color:"#ffd700"}}/>
                <FaStar size={15} style={{color:"#ffd700"}}/>
                <FaStarHalfAlt size={15} style={{color:"#ffd700"}}/>
                
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
