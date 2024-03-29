import { useState, useEffect } from "react"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export function TopMovies() {
    const [topMovies, setMovies] = useState([])

    const getTopMovies = async (url: any) => {
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data.results)
    }
    useEffect(() => {

        const topUrl = `${moviesURL}top_rated?${apiKey}`
        getTopMovies(topUrl)

    }, [])

    console.log(typeof topMovies)

    return{
         topMovies
    }

}