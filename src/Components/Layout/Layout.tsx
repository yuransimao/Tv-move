import { Navbar } from "../NavBar/navbar"
import Styles from "./Styles.module.scss";
import { SubMenu } from "../SubMenu/submenu";
import { Outlet } from "react-router-dom";
import { Visivel } from "../../Hooks/useVisivel";

export function Layout(){
    const {visivel , setVisivel, VisivelSubmen } = Visivel()
   
    return(
        <div className= {Styles['Layout']}>
            <Navbar setvisivel={() => setVisivel(true)}/>
            <Outlet/>
           {VisivelSubmen ? <SubMenu setvisivel={()=> setVisivel(false)}/> : false}
        </div>
    )
}