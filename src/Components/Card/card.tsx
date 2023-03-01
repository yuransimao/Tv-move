import { Link } from "react-router-dom"
import { BsFillInfoCircleFill } from "react-icons/bs"
import { AiOutlinePlayCircle } from "react-icons/ai"
import Styles from "./styles.module.scss"
import { Swiper, SwiperSlide } from "swiper/react";

const imgUrl = import.meta.env.VITE_IMG

interface Cardprops {
    id?: number
    img?: string
    move?:any
    
}
export function Cards(props: Cardprops) {

    return (
        <>
        
        <div className={Styles.moviecard} >


            <div className={Styles['card_Img']}>
                <img src={imgUrl + `${props.img}`} alt={'filme'}/>
            </div>
            <div className={Styles['btn']}>
                <Link to={`Synopsis/${props.id}`}> <BsFillInfoCircleFill /></Link>
                <Link to={`Video/${props.id}`}> <AiOutlinePlayCircle /></Link>
            </div>

        </div>
        </>

    )
}
