import {useState , useEffect} from "react"
import { Card } from "../../Components/Card/card";
import Styles from "./styles.module.scss"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export function Home(){
const [topMovies , setMovies] = useState([])


const getTopMovies = async (url:any) =>{
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data.results)
}
useEffect(()=>{

    const topUrl =`${moviesURL}top_rated?${apiKey}`
    getTopMovies(topUrl)

},[])
    
    return (
    <div className={Styles['home_container']}>
        <h1>Home</h1>
        <div className={Styles['home_card']}>{topMovies.map((movie:any) => <Card key={movie.id} movie={movie}/> )}</div>
    </div>
    )
}