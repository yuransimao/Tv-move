
import { Button } from "../../Button/button"
import { AiFillStar } from "react-icons/ai";
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
    const [star, setStar] = useState('')
    const [title, setTitle] = useState('')

    const getSynopsis = async (url:any) => {
        const res = await fetch(url)
        const data = await res.json()
        setSynopsis(data.overview)
        setStar(data.vote_average)
        setTitle(data.title)

    }

    useEffect(()=>{
        const Synopsis = props.id && `${moviesURL}${props.id}?${apiKey}`
        getSynopsis(Synopsis)
        
        
    },[props.id])
    
   
    return (
        <div className={Styles.moviecard} >


            <div className={Styles['card_Img']}>
                <img src={imgUrl + `${props.img}`} alt={'filme'}/>
            </div>
            <div className={Styles['container']}>
                    <div className={Styles['title']}>
                        <h1>{title}</h1>
                    </div>
                <div className={Styles['Star']}>
                    <p><AiFillStar/><span>{Number(star).toFixed(1)}</span></p>
                    </div>
                <div className={Styles['Synops']}>
                    <p className={Styles['text']}>{Synopsis.slice(0, 95)}...</p>
                    </div>
                    <div className={Styles['btn']}>
                
                        <Button to={`Video/${props.id}`} title={"Watch now"} background={'Backgroundred'}/>
                        <Button to={`Synopsis/${props.id}`} title={"Add to watchlist"} background={'BackgroundTransp'}/>
                
                </div>
            </div>

        </div>


    )
}