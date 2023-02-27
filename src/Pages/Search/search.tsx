import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import {CardSearch} from "../../Components/Card/CardSearch/CardSearch"
import Styles from "./styles.module.scss"
const SearchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

export function Search() {
    const [searchParams] = useSearchParams()
    const query = searchParams.get('q')
    const [search, setSearch] = useState([])
    
    const getSearchs = async (url: any) => {
        const res = await fetch(url)
        const data = await res.json()
        setSearch(data.results)
        
    }

    useEffect(() => {

        const topUrl = `${SearchURL}?${apiKey}&query=${query}`
        getSearchs(topUrl)
        

    }, [query])
    console.log(search)
    return (
        <div className={Styles['Search']}>
            {search.length > 0  ?(
        <h1><span>Resultado da Pesquisa : </span>{query}</h1>) : <h1> Not items : <span>{query}</span></h1> }
        <div className={Styles['moviecontainer']}>{search.map((movie : any)=> <CardSearch key={movie.id} movie ={movie}/>)}
        </div>
        </div>
    )
}