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
   const img = props.poster_path
   const id = props.id
   
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
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className={Styles['mySwiper']}
      >
        <SwiperSlide className={Styles['SwiperSlide']}>

        <Card  img={img[0]} id={id[0]}></Card>
        </SwiperSlide>
        <SwiperSlide className={Styles['SwiperSlide']}>
        <Card  img={img[1]} id={id[1]}></Card>
        </SwiperSlide>
        <SwiperSlide className={Styles['SwiperSlide']}>
        <Card  img={img[2]} id={id[2]}></Card>
        </SwiperSlide>
        <SwiperSlide className={Styles['SwiperSlide']}>
        <Card  img={img[3]} id={id[3]}></Card>
        </SwiperSlide>
        <SwiperSlide className={Styles['SwiperSlide']}>
        <Card  img={img[4]} id={id[4]}></Card>
        </SwiperSlide>
        <SwiperSlide className={Styles['SwiperSlide']}>
        <Card  img={img[5]} id={id[5]}></Card>
        </SwiperSlide>
        <SwiperSlide className={Styles['SwiperSlide']}>
        <Card  img={img[6]} id={id[6]}></Card>
        </SwiperSlide>
        <SwiperSlide className={Styles['SwiperSlide']}>
        <Card  img={img[7]} id={id[7]}></Card>
        </SwiperSlide>
        <SwiperSlide className={Styles['SwiperSlide']}>
        <Card  img={img[8]} id={id[8]}></Card>
        </SwiperSlide>
        <SwiperSlide className={Styles['SwiperSlide']}>
        <Card  img={img[9]} id={id[9]}></Card>
        </SwiperSlide>
        <SwiperSlide className={Styles['SwiperSlide']}>
        <Card  img={img[10]} id={id[10]}></Card>
        </SwiperSlide>
        <SwiperSlide className={Styles['SwiperSlide']}>
        <Card  img={img[11]} id={id[11]}></Card>
        </SwiperSlide>
        <SwiperSlide className={Styles['SwiperSlide']}>
        <Card  img={img[12]} id={id[12]}></Card>
        </SwiperSlide>
        <SwiperSlide className={Styles['SwiperSlide']}>
        <Card  img={img[13]} id={id[13]}></Card>
        </SwiperSlide>
        <SwiperSlide className={Styles['SwiperSlide']}>
        <Card  img={img[14]} id={id[14]}></Card>
        </SwiperSlide>
        <SwiperSlide className={Styles['SwiperSlide']}>
        <Card  img={img[15]} id={id[15]}></Card>
        </SwiperSlide>
        <SwiperSlide className={Styles['SwiperSlide']}>
        <Card  img={img[16]} id={id[16]}></Card>
        </SwiperSlide>
        <SwiperSlide className={Styles['SwiperSlide']}>
        <Card  img={img[17]} id={id[17]}></Card>
        </SwiperSlide>
        <SwiperSlide className={Styles['SwiperSlide']}>
        <Card  img={img[18]} id={id[18]}></Card>
        </SwiperSlide>
        <SwiperSlide className={Styles['SwiperSlide']}>
        <Card  img={img[19]} id={id[19]}></Card>
        </SwiperSlide>
        <SwiperSlide className={Styles['SwiperSlide']}>
        <Card  img={img[20]} id={id[20]}></Card>
        </SwiperSlide>
        
        
      </Swiper>
    
  );
}
