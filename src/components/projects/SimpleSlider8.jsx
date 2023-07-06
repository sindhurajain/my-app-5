
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./simpleslider8.css"
import trad from './trading-bot.png'



export default function SimpleSlider8() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
       
        <SwiperSlide>          
          <div >
            <img className="img-shift" alt="website-img" src={trad} width="500px"></img>
          </div>
        </SwiperSlide>


      </Swiper>
    </>
  );
}