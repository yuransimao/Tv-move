import { useParams } from "react-router-dom"
import { useState, useEffect} from "react";
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

interface Video{
    sucess:any
}
export function GETVIDEO (){
    const {id} = useParams()
    const [video , setVideo] = useState<Video | null>()
    
    const getVideo = async (url : any) =>{
        const resp = await fetch(url)
        const data = await resp.json()
        setVideo(data)
    }

    useEffect(()=>{
        const VideoUrl = `${moviesURL}${id}/video?${apiKey}`
        getVideo(VideoUrl)
    },[id])

    return{
        Videosuccess: video?.sucess === true,
        video
    }
}