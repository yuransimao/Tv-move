import { useState, useEffect } from "react"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;




export function getMovies() {
    const [cinemas, setCinemas] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [popular, setPopular] = useState([])
    const [latest, setLatest] = useState([])
   

    const getCinema = async (url: any) => {
        const resp = await fetch(url)
        const data = await resp.json()

        setCinemas(data.results)
    }

    const getupcoming = async (url: any) => {
        const resp = await fetch(url)
        const data = await resp.json()
        setUpcoming(data.results)
    }
    const getpopular = async (url: any) => {
        const resp = await fetch(url)
        const data = await resp.json()
        setPopular(data.results)
    }
    const getlatest = async (url: any) => {
        const resp = await fetch(url)
        const data = await resp.json()
        setLatest(data.results)
    }

    useEffect(() => {
        const url = `${moviesURL}now_playing?${apiKey}`
        const Urlupcoming = `${moviesURL}upcoming?${apiKey}`
        const Urlpopular = `${moviesURL}popular?${apiKey}`
        const UrlLatest = `${moviesURL}top_rated?${apiKey}`
        getCinema(url)
        getupcoming(Urlupcoming)
        getpopular(Urlpopular)
        getlatest(UrlLatest)
    }, [])

 

    return {
    
    cinemas,upcoming,popular,latest
    }
}