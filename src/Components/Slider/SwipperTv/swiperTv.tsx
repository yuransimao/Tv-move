

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
import { Cards } from "../../Card/card";
import Styles from"./styles.module.scss";


interface SwiperProps{

  Tv: any
}
export  function SwiperTV(props : SwiperProps) {
   
   
  return (

    <>
    <div  className={Styles['text']}>
      <h1>Top TV</h1><hr />
    </div>
    <Swiper
    slidesPerView={1}
    pagination={false}
    breakpoints={{
      500: {
        slidesPerView: 3,
        spaceBetween: 2,
      },
      540: {
        slidesPerView: 3,
        spaceBetween: 2,
      },
      600: {
        slidesPerView: 3,
        spaceBetween: 2,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 2,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 8,
        spaceBetween: 10,
      },
    }}
    modules={[Pagination]}
    
    className={Styles['swiper']}
  >
         
       {props.Tv.map((tv: any)=>(
        <SwiperSlide className={Styles['swiper-slide']}>
        <Cards
        key={tv.id}  
        img={tv.poster_path} id={tv.id}/>
        </SwiperSlide>
       ))}
        

        
        
        
      </Swiper>
      </>
  );
}
