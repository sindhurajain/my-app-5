import web1 from './website-1.png'
import web2 from './website-2.png'
import web3 from './website-3.png'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./simpleslider2.css";
import { Navigation } from "swiper";

export default function SimpleSlider2() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>          
          <div >
            <img className="img-shift" src={web1} alt="website-img" width="500px" height="500px"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
          <img className="img-shift" src={web2} alt="website-img" width="500px" height="500px"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
          <img className="img-shift" src={web3} alt="website-img" width="500px" height="500px"></img>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

