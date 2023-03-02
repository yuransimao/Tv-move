import { Swipert} from "../../Components/Slider/Swiper/swipert";
import {useState, useEffect} from "react"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


export function Movies(){
    const [cinemas, setCinemas] =useState([])
    
    const getCinema = async (url :any) =>{
        const resp = await fetch(url)
        const data = await resp.json()

        setCinemas(data.results)

    }
    useEffect(() =>{
        const url = `${moviesURL}now_playing?${apiKey}`
        getCinema(url)
    }, [])

    const id = cinemas.map((cinemas :any) => {
        const id = cinemas.id
        return id
    })
    const poster_path = cinemas.map((cinemas : any) => {
        const poster_path = cinemas.poster_path

        return poster_path
        
            })




    console.log(cinemas)
    return (
        <>
        <Swipert id ={id} poster_path={poster_path}/>
        </>
    )
}