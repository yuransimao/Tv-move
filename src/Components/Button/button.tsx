import {Link} from "react-router-dom"
import Styles from "./styles.module.scss"

interface Buttonprops{
    title: string
    to:string
    background: string;
}

export function Button(props : Buttonprops){

    return(
        <Link to={props.to} className={Styles[props.background]}>{props.title}</Link>

    )

}