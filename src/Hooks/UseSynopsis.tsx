import { useParams } from "react-router-dom"
import { useState, useEffect} from "react";
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const  TVURL = import.meta.env.VITE_APITV;

export function Synopsiss (){
    const [movies , setMovies] = useState(null)
    const {id} = useParams() 
    console.log(id)
    const getSynops = async (url : any) =>{
        const res = await fetch(url)
        const data = await res.json()
        
        setMovies(data)
           
    }
    
    useEffect(() =>{
        const SynopsisURL =  `${moviesURL}${id}?${apiKey}`
        getSynops(SynopsisURL)
    },[id])
    
    const genres = movies?.genres
    const gener = genres?.map( (g:any) => g.name)
    const production =movies?.production_companies
    const production_companies =production?.map( (p:any )=> p.name)

    return{
        movies,gener, production_companies
    }

}