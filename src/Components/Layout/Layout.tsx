import { Navbar } from "../NavBar/navbar"
import Styles from "./Styles.module.scss";
import { SubMenu } from "../SubMenu/submenu";
import {useState} from "react"
import { Outlet } from "react-router-dom";

export function Layout(){
    const [visivel , setVisivel] = useState(false)
    return(
        <div className= {Styles['Layout']}>
            <Navbar setvisivel={() => setVisivel(true)}/>
            <Outlet/>
           {visivel === true ? <SubMenu setvisivel={()=> setVisivel(false)}/> : false}
        </div>
    )
}