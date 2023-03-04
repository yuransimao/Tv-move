import {Link} from "react-router-dom"
import Styles from "./styles.module.scss"

interface Buttonprops{
    title: string
    to?:any
    background: string;
    addItens ?: () => void
}

export function Button(props : Buttonprops){

    return(
        <Link to={props.to} className={`${Styles['button']} ${Styles[props.background]}`} onClick={props.addItens}>{props.title}</Link>

    )

}