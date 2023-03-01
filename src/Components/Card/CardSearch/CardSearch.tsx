import { Link } from "react-router-dom"
import { BsFillInfoCircleFill } from "react-icons/bs"
import { AiOutlinePlayCircle } from "react-icons/ai"
import Styles from "./Search.module.scss"
import { Swiper, SwiperSlide } from "swiper/react";

const imgUrl = import.meta.env.VITE_IMG

interface PropsCunston{
    CustomClass?:any
    movie:any
}
interface Movie{
    movie: {}
}
export function CardSearch(props : PropsCunston, ) {

    return (
        <>
        
        <div className={Styles.moviecard} >


            <div className={Styles['card_Img']}>
                <img src={imgUrl + `${props.movie?.poster_path}`} alt='filme'/>
            </div>
            <div className={Styles[props.CustomClass]}>
                <Link to={`Synopsis/${props.movie?.id}`}> <BsFillInfoCircleFill /></Link>
                <Link to={`Video/${props.movie?.id}`}> <AiOutlinePlayCircle /></Link>
            </div>

        </div>
        </>

    )
}