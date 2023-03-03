import { Swipert} from "../../Components/Slider/Swiper/swipert";
import { Swipers} from "../../Components/Slider/Swiper/swiper";
import {useState, useEffect} from "react"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

 


export function Movies(){
    const [cinemas, setCinemas] =useState([])
    const [upcoming, setUpcoming] =useState([])
    
    const getCinema = async (url :any) =>{
        const resp = await fetch(url)
        const data = await resp.json()

        setCinemas(data.results)
    }

    const getupcoming = async(url : any) => {
        const  resp = await fetch (url)
        const data = await resp.json()
        setUpcoming(data.results)
    }

    useEffect(() =>{
        const url = `${moviesURL}now_playing?${apiKey}`
        const Urlupcoming =`${moviesURL}upcoming?${apiKey}`
        getCinema(url)
        getupcoming(Urlupcoming)
    }, [])

    const id = cinemas.map((cinemas :any) => {
        const id = cinemas.id
        return id
    })
    const idupcoming = upcoming.map((cinemas :any) => {
        const id = cinemas.id
        return id
    })
    const poster_path = cinemas.map((cinemas : any) => {
        const poster_path = cinemas.poster_path
        console.log(upcoming)
        return poster_path
        
            })
    const poster_pathupcoming= upcoming.map((cinemas : any) => {
        const poster_path = cinemas.poster_path
        console.log(upcoming)
        return poster_path
        
            })




    console.log(upcoming)
    return (
        <>
        <Swipert id ={id} poster_path={poster_path}/>
        <Swipers title ={'Filme popular'} id ={idupcoming} poster_path={poster_pathupcoming}/>
        </>
    )
}