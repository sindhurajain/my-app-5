
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./simpleslider4.css"
import ha1 from './hackathon-1.png'
import ha2 from './hackathon-2.png'


export default function SimpleSlider4() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>          
          <div >
            <img className="img-shift" src={ha1} width="500px" height="500px"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
          <img className="img-shift" src={ha2} width="500px" height="500px"></img>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}