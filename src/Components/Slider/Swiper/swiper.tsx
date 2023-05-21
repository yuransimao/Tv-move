

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
import { Cards } from "../../Card/card";
import Styles from"./styles.module.scss";
import { Movies } from "../../../Pages/Movies/movies";


interface SwiperProps{

  topMovies: any
  title : string
}
export  function Swipers(props : SwiperProps) {
   
   
  return (

    <>
    <div  className={Styles['text']}>
      <h1>{props.title}</h1><hr />
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
         
       { props.topMovies.map((movies :any)=>(
        <SwiperSlide className={Styles['swiper-slide']}>
        <Cards  key={movies.id}
          img={movies.poster_path} id={movies.id} />
        </SwiperSlide>
       ))}
        

       
        
      </Swiper>
      </>
  );
}
