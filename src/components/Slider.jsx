// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import './styles.css';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import slide1 from "../assets/images/slide1.jpg"
import slide2 from "../assets/images/slide2.jpg"
import slide4 from "../assets/images/slide4.jpg"

const Slider = () => {
  
  return (
    <>
      <Swiper id='cover' navigation={true} modules={[Navigation, Autoplay]} autoplay={true} speed={2000} className="mySwiper">
        <SwiperSlide>
            <img src={slide1} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="slide1" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
export default Slider