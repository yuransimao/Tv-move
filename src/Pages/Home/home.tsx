

import { Swipers} from "../../Components/Slider/Swiper/swiper";
import { Swipert} from "../../Components/Slider/Swiper/swipert";
import { SwiperTV} from "../../Components/Slider/SwipperTv/swiperTv";
import Styles from "./styles.module.scss"
import { TopMovies } from "../../Hooks/useTopMovies";

import {useEffect, useState} from 'react'



const  TVURL = import.meta.env.VITE_APITV;
const apiKey = import.meta.env.VITE_API_KEY;



export function Home(){

 const {topMovies}= TopMovies ()
const [TV , setTV] = useState([])

    const getTv = async (url:any) =>{
        const resp = await fetch(url)
        const data = await resp.json()
        setTV(data.results) 
    }

    useEffect(()=>{
        const Tvurl = `${TVURL}top_rated?${apiKey}`
        getTv(Tvurl)
    },[])

    const poster_paths = TV.flatMap((tv : any) =>{ 
        const poster_patha = tv.poster_path

        return poster_patha
    })
    const ids = TV.flatMap((tv :any) =>{ 
        const ids = tv.id
        
        return ids
    })
  const newid = ids.filter((item , element, array) => array.indexOf(item) == element)
    


    return (
   
    <div className={Styles['home_container']}>
        
        
        <Swipert topMovies ={topMovies}/>
        
        <Swipers title={'Top Movies'} topMovies ={topMovies}/>

        <SwiperTV Tv={TV}/>
        
    </div>
  
    )
}