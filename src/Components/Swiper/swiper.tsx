import React, { useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Card } from "../Card/card";
import Styles from"./styles.module.scss";


interface SwiperProps{
  topMovies:any
  id?: any
  poster_path?: any
}
export  function Swipers(props : SwiperProps) {
   const img = props.poster_path[0]
   const id = props.id[0]
   console.log(img, id)
  return (

    
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={Styles['mySwiper']}
      >
        <SwiperSlide className={Styles['SwiperSlide']}>

        <Card  img={img} id={id}></Card>
        </SwiperSlide>
        <SwiperSlide className={Styles['SwiperSlide']}>

        <Card  img={img} id={id}></Card>
        </SwiperSlide>
        
        
      </Swiper>
    
  );
}
