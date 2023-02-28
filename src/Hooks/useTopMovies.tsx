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

    const poster_path = topMovies.map((movies: any) => {
        const poster_path = movies.poster_path

        return poster_path
    })

    const id = topMovies.map((movies: any) => {
        const id = movies.id

        return id
    })

    return{
        poster_path,
        id
    }

}