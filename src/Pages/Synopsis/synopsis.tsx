import { useParams } from "react-router-dom"
import { useState, useEffect} from "react";
import { CardS } from "../../Components/Card/CardSynop/CardS";
import Styles from "./styles.module.scss"
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export function Synopsis(){
    const [movies , setMovies] = useState([])
    const {id} = useParams() 

    const getSynops = async (url : any) =>{
        const res = await fetch(url)
        const data = await res.json()
        
        setMovies(data)
           
    }
    
    useEffect(() =>{
        const SynopsisURL =  `${moviesURL}${id}?${apiKey}`
        getSynops(SynopsisURL)
    },[id])
    
    console.log(typeof movies)
    return (
        <div className={Styles['synops']}>
       
        <div className={Styles['Synops-Card']}>
           {movies &&  <CardS movie={movies}/>}
        </div>
        </div>
    )
}