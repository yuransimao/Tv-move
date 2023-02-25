import {useState , useEffect} from "react"
import { Swipers} from "../../Components/Swiper/swiper";
import { Swipert} from "../../Components/Swiper/swipert";
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
const poster_path = topMovies.map((movies:any)=> {
    const poster_path = movies.poster_path

    return poster_path
})
const id = topMovies.map((movies:any)=> {
    const id = movies.id

    return id
})
  
    return (
   
    <div className={Styles['home_container']}>
        
        <Swipert poster_path={poster_path} id={id}/>
        
        <Swipers  poster_path={poster_path} id={id}/>
        
    </div>
  
    )
}