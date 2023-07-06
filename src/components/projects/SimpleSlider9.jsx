
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./simpleslider9.css"
import java1 from './java-1.png'
import java2 from './java-2.png'
import java3 from './java-3.png'
import java4 from './java-4.png'
import java5 from './java-5.png'
import java6 from './java-6.png'



export default function SimpleSlider9() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
       
        <SwiperSlide>          
          <div >
            <img className="img-shift" alt="website-img" src={java1} ></img>
          </div>
        </SwiperSlide>


        <SwiperSlide>
        <div>
          <img className="img-shift" src={java2} alt="website-img" ></img>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
          <img className="img-shift" src={java3} alt="website-img" ></img>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
          <img className="img-shift" src={java4} alt="website-img"></img>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
          <img className="img-shift" src={java5} alt="website-img"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
          <img className="img-shift" src={java6} alt="website-img"></img>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}