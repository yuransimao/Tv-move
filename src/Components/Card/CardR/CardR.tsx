
import { Button } from "../../Button/button"
import { useState, useEffect } from "react";
import Styles from "./styles.module.scss"


const imgUrl = import.meta.env.VITE_IMG
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

interface Cardprops {
    id: number
    img: string
}
export function CardR(props: Cardprops) {
    const [Synopsis , setSynopsis] = useState([])

    const getSynopsis = async (url:any) => {
        const res = await fetch(url)
        const data = await res.json()
        setSynopsis(data.overview)

    }

    useEffect(()=>{
        const Synopsis = `${moviesURL}${props.id}?${apiKey}`
        getSynopsis(Synopsis)
        
    },[])

    console.log(Synopsis)
    return (
        <div className={Styles.moviecard} >


            <div className={Styles['card_Img']}>
                <img src={imgUrl + `${props.img}`} alt={'filme'}/>
            </div>
            <div className={Styles['btn']}>
                <p>{Synopsis}</p>
                <Button to={`Synopsis/${props.id}`} title={"Watch now"} background={'Backgroundred'}/>
                <Button to={`Synopsis/${props.id}`} title={"Add to watchlist"} background={'BackgroundTransp'}/>
                
            </div>

        </div>


    )
}