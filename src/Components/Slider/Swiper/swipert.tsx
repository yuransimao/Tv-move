import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Styles from"./swiperslidet.module.scss";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { CardR } from "../../Card/CardR/CardR";


interface SwiperProps{

    id: any
    poster_path: any
  }

export function Swipert(props : SwiperProps) {
    const img = props.poster_path
   const id = props.id
  return (
    <>
   
      <Swiper
        spaceBetween={30}
        pagination={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,Pagination]}
        className={Styles["mySwiper"]}
      >
        <SwiperSlide className={Styles["swiper-slide"]}> 
        <CardR img={img[13]} id={id[13]}/>
        </SwiperSlide>
        <SwiperSlide className={Styles["swiper-slide"]}> 
        <CardR img={img[2]} id={id[2]}/>
        </SwiperSlide>
        <SwiperSlide className={Styles["swiper-slide"]}> 
        <CardR img={img[3]} id={id[3]}/>
        </SwiperSlide>
        <SwiperSlide className={Styles["swiper-slide"]}> 
        <CardR img={img[1]} id={id[1]}/>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}