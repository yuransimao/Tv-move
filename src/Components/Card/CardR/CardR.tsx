
import { Button } from "../../Button/button"
import Styles from "./styles.module.scss"


const imgUrl = import.meta.env.VITE_IMG

interface Cardprops {
    id: number
    img: string
}
export function CardR(props: Cardprops) {

    return (
        <div className={Styles.moviecard} >


            <div className={Styles['card_Img']}>
                <img src={imgUrl + `${props.img}`} alt={'filme'}/>
            </div>
            <div className={Styles['btn']}>
                <Button to={`Synopsis/${props.id}`} title={"Watch Now"} background={'Backgroundred'}/>
                
            </div>

        </div>


    )
}