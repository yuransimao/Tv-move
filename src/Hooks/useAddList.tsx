import { useState, useEffect } from "react"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export function AdLists() {
    const [topMovies, setMovies] = useState([])
    const [id, setID ] = useState()

    const getTopMovies = async (url: any) => {
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data.results)
    }
    useEffect(() => {

        const topUrl = id && `${moviesURL}${id}/top_rated?${apiKey}`
        getTopMovies(topUrl)

    }, [])

    

    return{
        topMovies,
        setID
    }

}