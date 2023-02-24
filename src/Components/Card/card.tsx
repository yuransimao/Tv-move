import { Link } from "react-router-dom"
import {BsFillInfoCircleFill} from "react-icons/bs"
import {AiOutlinePlayCircle} from "react-icons/ai"
import Styles from "./styles.module.scss"
import {motion} from "framer-motion"
const imgUrl = import.meta.env.VITE_IMG

interface Cardprops{
    movie?:string;
    poster_path?:String
    title?: String
}
export function Card({movie}){
    return (
        
            <motion.div className={Styles['item']}>
                <div className={Styles['movie-card']}>
                    <div className={Styles['card_Img']}>
                        <img src={imgUrl + movie.poster_path} alt={movie.title}/>
                    </div>
                    <div className={Styles['btn']}>
                        <Link to= {`Synopsis/${movie.id}`}> <BsFillInfoCircleFill/></Link>
                        <Link to= {`Synopsis/${movie.id}`}> <AiOutlinePlayCircle  /></Link>
                    </div>
                </div>
            </motion.div>
        
    )
}