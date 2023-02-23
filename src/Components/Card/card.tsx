import { Link } from "react-router-dom"
import {BsFillInfoCircleFill} from "react-icons/bs"
import {AiOutlinePlayCircle} from "react-icons/ai"
import Styles from "./styles.module.scss"

const imgUrl = import.meta.env.VITE_IMG

interface Cardprops{
    movie?:string;
    poster_path?:String
    title?: String
}
export function Card({movie}){
    return (
        <div className={Styles['movie-card']}>
            <img src={imgUrl + movie.poster_path} alt={movie.title}/>
            <Link to= {`Synopsis/${movie.id}`} >Detalhes</Link>
        </div>
    )
}