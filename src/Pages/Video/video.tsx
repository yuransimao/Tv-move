import { useParams } from "react-router-dom"
import { useState, useEffect} from "react";
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


export function Videos(){

    const {id} = useParams()
    const [video , setVideo] = useState()
    
    const getVideo = async (url : any) =>{
        const resp = await fetch(url)
        const data = await resp.json()
        setVideo(data)
    }

    useEffect(()=>{
        const VideoUrl = `${moviesURL}${id}/video?${apiKey}`
        getVideo(VideoUrl)
    },[id])

    console.log(video)

    return (<>
    {video?.sucess === true ? <h1>Video sucess</h1> : <h1>Not video success</h1>}
    </>)
}