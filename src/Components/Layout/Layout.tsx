import { Navbar } from "../NavBar/navbar"
import Styles from "./Styles.module.scss";

export function Layout(){
    return(
        <div className= {Styles['Layout']}>
            <Navbar>

            </Navbar>
        </div>
    )
}