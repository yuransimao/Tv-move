

import { Swipers} from "../../Components/Slider/Swiper/swiper";
import { Swipert} from "../../Components/Slider/Swiper/swipert";
import { SwiperTV} from "../../Components/Slider/SwipperTv/swiperTv";
import Styles from "./styles.module.scss"
import { TopMovies } from "../../Hooks/useTopMovies";

import {useEffect, useState} from 'react'



const  TVURL = import.meta.env.VITE_APITV;
const apiKey = import.meta.env.VITE_API_KEY;



export function Home(){

 const {poster_path, id}= TopMovies ()
const [TV , setTV] = useState([])

    const getTv = async (url:any) =>{
        const resp = await fetch(url)
        const data = await resp.json()
        setTV(data.results) 
    }

    useEffect(()=>{
        const Tvurl = `${TVURL}popular?${apiKey}`
        getTv(Tvurl)
    },[])

    const poster_paths = TV.map((tv) =>{ 
        const poster_patha = tv.poster_path

        return poster_patha
    })
    const ids = TV.map((tv) =>{ 
        const ids = tv.id

        return id
    })
  console.log(TV)

    return (
   
    <div className={Styles['home_container']}>
        
        
        <Swipert poster_path={poster_path} id={id}/>
        
        <Swipers  poster_path={poster_path} id={id}/>

        <SwiperTV poster_path={poster_paths} id={ids}/>
        
    </div>
  
    )
}