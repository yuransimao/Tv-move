import React, { useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Cards } from "../Card/card";
import Styles from"./styles.module.scss";


interface SwiperProps{

  id: any
  poster_path?: any
}
export  function Swipers(props : SwiperProps) {
   const img = props.poster_path
   const id = props.id
   
  return (

    <>
    <Swiper
    effect={"coverflow"}
    grabCursor={true}
    centeredSlides={false}
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
    className={Styles['swiper']}
  >
   
       
        <SwiperSlide className={Styles['swiper-slide']}>
        <Cards  img={img[0]} id={id[0]}/>
        </SwiperSlide>

        <SwiperSlide className={Styles['swiper-slide']}>
        <Cards  img={img[1]} id={id[1]}/>
        </SwiperSlide>

        <SwiperSlide className={Styles['swiper-slide']}>
        <Cards  img={img[2]} id={id[2]}/>
        </SwiperSlide>

        <SwiperSlide className={Styles['swiper-slide']}>
        <Cards  img={img[3]} id={id[3]}/>
        </SwiperSlide>

        <SwiperSlide className={Styles['swiper-slide']}>
        <Cards  img={img[4]} id={id[4]}/>
        </SwiperSlide>
        <SwiperSlide className={Styles['swiper-slide']}>
        <Cards  img={img[5]} id={id[5]}/>
        </SwiperSlide>
        <SwiperSlide className={Styles['swiper-slide']}>
        <Cards  img={img[6]} id={id[6]}/>
        </SwiperSlide>
        <SwiperSlide className={Styles['swiper-slide']}>
        <Cards  img={img[7]} id={id[7]}/>
        </SwiperSlide>
        <SwiperSlide className={Styles['swiper-slide']}>
        <Cards  img={img[8]} id={id[8]}/>
        </SwiperSlide>
        <SwiperSlide className={Styles['swiper-slide']}>
        <Cards  img={img[9]} id={id[9]}/>
        </SwiperSlide>
        <SwiperSlide className={Styles['swiper-slide']}>
        <Cards  img={img[10]} id={id[10]}/>
        </SwiperSlide>
        <SwiperSlide className={Styles['swiper-slide']}>
        <Cards  img={img[11]} id={id[11]}/>
        </SwiperSlide>
        <SwiperSlide className={Styles['swiper-slide']}>
        <Cards  img={img[12]} id={id[12]}/>
        </SwiperSlide>
        <SwiperSlide className={Styles['swiper-slide']}>
        <Cards  img={img[13]} id={id[13]}/>
        </SwiperSlide>
        <SwiperSlide className={Styles['swiper-slide']}>
        <Cards  img={img[14]} id={id[14]}/>
        </SwiperSlide>
        <SwiperSlide className={Styles['swiper-slide']}>
        <Cards  img={img[15]} id={id[15]}/>
        </SwiperSlide>
        <SwiperSlide className={Styles['swiper-slide']}>
        <Cards  img={img[16]} id={id[16]}/>
        </SwiperSlide>
        <SwiperSlide className={Styles['swiper-slide']}>
        <Cards  img={img[17]} id={id[17]}/>
        </SwiperSlide>
        <SwiperSlide className={Styles['swiper-slide']}>
        <Cards  img={img[18]} id={id[18]}/>
        </SwiperSlide>
        <SwiperSlide className={Styles['swiper-slide']}>
        <Cards  img={img[19]} id={id[19]}/>
        </SwiperSlide>
        <SwiperSlide className={Styles['swiper-slide']}>
        <Cards  img={img[20]} id={id[20]}/>
        </SwiperSlide>
        
        
      </Swiper>
      </>
  );
}
