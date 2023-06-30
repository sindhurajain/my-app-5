
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./simpleslider6.css"
import chrome1 from './chrome1.png'
import chrome2 from './chrome2.png'
import chrome3 from './chrome3.png'
import chrome4 from './chrome4.png'



export default function SimpleSlider6() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
       
        <SwiperSlide>          
          <div >
            <img className="img-shift" alt="website-img" src={chrome1} ></img>
          </div>
        </SwiperSlide>


        <SwiperSlide>
        <div>
          <img className="img-shift" src={chrome2} alt="website-img" ></img>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
          <img className="img-shift" src={chrome3} alt="website-img" ></img>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
          <img className="img-shift" src={chrome4} alt="website-img"></img>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}