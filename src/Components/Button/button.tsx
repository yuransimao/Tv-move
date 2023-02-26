import {Link} from "react-router-dom"

interface Buttonprops{
    title: string
    to:string
}

export function Button(props : Buttonprops){

    return(
        <Link to={props.to}>{props.title}</Link>

    )

}