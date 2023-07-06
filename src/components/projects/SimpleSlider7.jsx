
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./simpleslider7.css"
import stock1 from './stock1.png'
import stock2 from './stock2.png'



export default function SimpleSlider7() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
       
        <SwiperSlide>          
          <div >
            <img className="img-shift" alt="website-img" src={stock1} ></img>
          </div>
        </SwiperSlide>


        <SwiperSlide>
        <div>
          <img className="img-shift" src={stock2} alt="website-img" ></img>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}