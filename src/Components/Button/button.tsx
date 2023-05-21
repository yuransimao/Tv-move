import {Link} from "react-router-dom"
import Styles from "./styles.module.scss"
import {useState} from "react"
import { AdLists } from "../../Hooks/useAddList";


interface Buttonprops{
    title: string
    to?:any
    background: string;
    id?:any
}

export function Button(props : Buttonprops){
    
   
    const {setID} =AdLists()
    
    const AddList =  () => {
       console.log(props.id)
       setID(props.id)
    }
    return(
        <Link to={props.to} className={`${Styles['button']} ${Styles[props.background]}`} onClick={AddList}>{props.title}</Link>

    )

}