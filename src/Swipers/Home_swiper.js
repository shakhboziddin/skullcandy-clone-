import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style1.css";

// import required modules
import { Navigation } from "swiper";

export default function Home_swiper() {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper">
                <SwiperSlide><img style={{height: '600px'}} src="https://images.prismic.io/skullcandy/416d330f-8745-43f5-bb9a-4b4c805441ef_4_mobile_dime2+%281%29.jpg?auto=compress,format&rect=0,0,800,1400&w=800&h=1400" alt="" /></SwiperSlide>
                <SwiperSlide><img style={{height: '600px'}} src="https://images.prismic.io/skullcandy/a12c475c-6569-4981-a636-9ec957b6293e_4_mobile_mod+%282%29.jpg?auto=compress,format&rect=0,0,800,1400&w=800&h=1400" alt="" /></SwiperSlide>
                <SwiperSlide><img style={{height: '600px'}} src="https://images.prismic.io/skullcandy/edffcf0f-48d2-4649-bf41-0ab94305319f_4_mobile_pushactive+%281%29.jpg?auto=compress,format&rect=0,0,800,1400&w=800&h=1400" alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
}
