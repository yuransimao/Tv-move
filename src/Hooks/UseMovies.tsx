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

    const id = cinemas.map((cinemas: any) => {
        const id = cinemas.id
        return id
    })
    const idupcoming = upcoming.map((cinemas: any) => {
        const id = cinemas.id
        return id
    })
    const idpopular = popular.map((cinemas: any) => {
        const id = cinemas.id
        return id
    })

    const idlatest = latest.map((cinemas: any) => {
        const id = cinemas.id
        return id
    })

    const poster_path = cinemas.map((cinemas: any) => {
        const poster_path = cinemas.poster_path
        console.log(upcoming)
        return poster_path

    })

    const poster_pathupcoming = upcoming.map((cinemas: any) => {
        const poster_path = cinemas.poster_path
        console.log(upcoming)
        return poster_path

    })

    const poster_pathpopular = popular.map((cinemas: any) => {
        const poster_path = cinemas.poster_path
        console.log(upcoming)
        return poster_path

    })
    const poster_pathlatest = latest.map((cinemas: any) => {
        const poster_path = cinemas.poster_path
        console.log(upcoming)
        return poster_path

    })

    return {
        id, idupcoming, idpopular,idlatest,  poster_path, poster_pathupcoming,poster_pathpopular,poster_pathlatest
    }
}