import { useParams } from "react-router-dom"
import { useState, useEffect} from "react";
import {GETVIDEO} from "../../Hooks/useVideo"
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


export function Videos(){
    const {Videosuccess} = GETVIDEO()
   

    return (<>
    {Videosuccess ? <h1>Video sucess</h1> : <h1>Not video success</h1>}
    </>)
}