import { useParams } from "react-router-dom"
import { useState, useEffect} from "react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export function Synopsis(){
    const [movie , setMovies] = useState([])
    const {id} = useParams() 

    const getSynopsis = async (url : any) =>{
        const res = await fetch(url)
        const data = await res.json()
        
        setMovies(data.results)
    }
    
    useEffect(() =>{
        const SynopsisURL = id && `${moviesURL}${id}?${apiKey}`
        getSynopsis(SynopsisURL)
        
        
    },[id])
    console.log(movie)
    return <h1>Synopsis</h1>
}