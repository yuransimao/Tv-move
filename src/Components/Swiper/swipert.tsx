import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Styles from"./swiperslidet.module.scss";

// import required modules
import { Pagination } from "swiper";
import { CardR } from "../Card/CardR/CardR";

interface SwiperProps{

    id: any
    poster_path?: any
  }

export function Swipert(props : SwiperProps) {
    const img = props.poster_path
   const id = props.id
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={Styles["mySwiper"]}
      >
        <SwiperSlide className={Styles["swiper-slide"]}> 
        <CardR img={img[10]} id={id[10]}/>
        </SwiperSlide>
        <SwiperSlide className={Styles["swiper-slide"]}> 
        <CardR img={img[2]} id={id[2]}/>
        </SwiperSlide>
        <SwiperSlide className={Styles["swiper-slide"]}> 
        <CardR img={img[5]} id={id[5]}/>
        </SwiperSlide>
        <SwiperSlide className={Styles["swiper-slide"]}> 
        <CardR img={img[17]} id={id[17]}/>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}