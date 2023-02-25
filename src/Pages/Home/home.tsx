import {useState , useEffect} from "react"
import { Card } from "../../Components/Card/card";
import { Swipers} from "../../Components/Swiper/swiper";
import Styles from "./styles.module.scss"




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
const poster_path = topMovies.map((movies , array)=> {
    const poster_path = movies.poster_path

    return poster_path
})
const id = topMovies.map((movies)=> {
    const id = movies.id

    return id
})
  console.log(poster_path[0], id[0])
    return (
   
    <div className={Styles['home_container']}>
        <h1>Home</h1>
        <div className={Styles['home_card']}>
        <Swipers topMovies ={topMovies} poster_path={poster_path} id={id}/>
        </div>
    </div>
  
    )
}