import mrt1 from './mrt-1.png'
import mrt2 from './mrt-2.png'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./simpleslider.css";
import { Navigation } from "swiper";


export default function SimpleSlider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>          
          <div >
            <img className="img-shift" alt="website-img" src={mrt2} width="500px" height="500px"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
          <img className="img-shift"alt="website-img" src={mrt1} width="500px" height="500px"></img>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}