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

    topMovies: any
    
  }

export function Swipert(props : SwiperProps) {
   

  
   


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

        {props.topMovies.map((movies:any)=>(
          <SwiperSlide className={Styles["swiper-slide"]}> 
          <CardR 
          key={movies.id}
          img={movies.poster_path} id={movies.id} />
          </SwiperSlide>
        ))}
        
        
      </Swiper>
    </>
  );
}