import { Navbar } from "../NavBar/navbar"
import Styles from "./Styles.module.scss";
import { SubMenu } from "../SubMenu/submenu";
import {useState} from "react"

export function Layout(){
    const [visivel , setVisivel] = useState(false)
    return(
        <div className= {Styles['Layout']}>
            <Navbar setvisivel={() => setVisivel(true)}/>
           {visivel === true ? <SubMenu setvisivel={()=> setVisivel(false)}/> : false}
        </div>
    )
}