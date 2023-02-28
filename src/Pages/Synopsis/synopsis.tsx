import { useParams } from "react-router-dom"
import { useState, useEffect} from "react";
import { CardS } from "../../Components/Card/CardSynop/CardS";
import Styles from "./styles.module.scss"
import { CardSearch } from "../../Components/Card/CardSearch/CardSearch";
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;



export function Synopsis(){
    const [movies , setMovies] = useState(null)
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
    
    const genres = movies?.genres
    const gener = genres?.map(g => g.name)
    console.log(gener)
        
    return (
        <div className={Styles['synops']}>
        <div className={Styles['Synops-Card']}>
           {movies &&  <CardS movie={movies}/>}
        </div>
        <div className={Styles['container_snops']}>
            {<CardSearch movie={movies}/>}
            <div className={'Synops-Text'}>
                <h1>{movies?.title}</h1>
                <p>{movies?.overview}</p>
                <p>{gener}</p>
            </div>
        </div>
        </div>
    )
}