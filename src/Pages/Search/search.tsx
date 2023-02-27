import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Cards } from "../../Components/Card/card"

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
        <>
        <h1>{query}</h1>
        {search.map((movie : any)=> <Cards key={movie.id} move ={movie}/>)}
        </>
    )
}