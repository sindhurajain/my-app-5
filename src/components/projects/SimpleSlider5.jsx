
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./simpleslider5.css"
import blog1 from './blog1.png'
import blog2 from './blog2.png'
import blog3 from './blog3.png'
import blog4 from './blog4.png'
import blog5 from './blog5.png'
import blog6 from './blog6.png'
import blog7 from './blog7.png'
import blog8 from './blog8.png'
import blog9 from './blog9.png'



export default function SimpleSlider5() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>          
          <div >
            <img className="img-shift" alt="website-img" src={blog1} width="500px" height="500px"></img>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
          <img className="img-shift" src={blog2} alt="website-img" width="500px" height="500px"></img>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
          <img className="img-shift" src={blog3} alt="website-img" width="500px" height="500px"></img>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
          <img className="img-shift" src={blog4} alt="website-img" width="500px" height="500px"></img>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
          <img className="img-shift" src={blog5} alt="website-img" width="500px" height="500px"></img>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
          <img className="img-shift" src={blog6} alt="website-img" width="500px" height="500px"></img>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
          <img className="img-shift" src={blog7} alt="website-img" width="500px" height="500px"></img>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
          <img className="img-shift" src={blog8} alt="website-img" width="500px" height="500px"></img>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
          <img className="img-shift" src={blog9} alt="website-img" width="500px" height="500px"></img>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}