import { Link } from "react-router-dom"
import { BsFillInfoCircleFill } from "react-icons/bs"
import { AiOutlinePlayCircle } from "react-icons/ai"
import Styles from "./Search.module.scss"
import { Swiper, SwiperSlide } from "swiper/react";

const imgUrl = import.meta.env.VITE_IMG


export function CardSearch({movie}) {

    return (
        <>
        
        <div className={Styles.moviecard} >


            <div className={Styles['card_Img']}>
                <img src={imgUrl + `${movie.poster_path}`} alt={'filme'}/>
            </div>
            <div className={Styles['btn']}>
                <Link to={`Synopsis/${movie.id}`}> <BsFillInfoCircleFill /></Link>
                <Link to={`Synopsis/${movie.id}`}> <AiOutlinePlayCircle /></Link>
            </div>

        </div>
        </>

    )
}