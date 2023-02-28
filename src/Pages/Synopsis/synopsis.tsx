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
    const production =movies?.production_companies
    const production_companies =production?.map( p => p.name)

    console.log(gener)
        
    return (
        <div className={Styles['synops']}>
        <div className={Styles['Synops-Card']}>
           {movies &&  <CardS movie={movies}/>}
        </div>
        <div className={Styles['container_snops']}>
            {<CardSearch movie={movies}/>}
            <div className={'Synops-Text'}>
                
                <div className={Styles['Descricao']}>
                    <h1>Synopsis</h1> <hr/>
                    <p className={Styles['overview']}>{movies?.overview}</p>
                </div>
                <div className={Styles['Gener']}>
                    <h2>Gener</h2>
                    <p>{gener}</p>
                </div>
                <div className={Styles['Prodution']}>
                    <h3>Production Companie</h3>
                    <p>{production_companies}</p>
                </div>
                <div className={Styles['date']}>
                    <h4>Date</h4>
                    <p>{movies?.release_date}</p>
                </div>
            </div>
        </div>
        </div>
    )
}