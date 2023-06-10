import "./simpleslider3.css"
import pfp1 from './pfp-1.PNG'
import pfp2 from './pfp-2.PNG'
import pfp3 from './pfp-3.PNG'
import pfp4 from './pfp-4.PNG'
import pfp5 from './pfp-5.PNG'
import pfp6 from './pfp-6.PNG'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";


export default function SimpleSlider3() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>          
          <div >
            <img className="img-shift" src={pfp1} width="300px" height="300px"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
          <img className="img-shift" src={pfp2} width="300px" height="300px"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
          <img className="img-shift" src={pfp3} width="300px" height="300px"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
          <img className="img-shift" src={pfp4} width="300px" height="300px"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
          <img className="img-shift" src={pfp5} width="300px" height="300px"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
          <img className="img-shift" src={pfp6} width="300px" height="300px"></img>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

