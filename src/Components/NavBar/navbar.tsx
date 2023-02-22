import { Link } from "react-router-dom"
import { FiMenu } from "react-icons/fi"
import Styles from "./styles.module.scss"

export function Navbar() {
    return (
        <div className={Styles.Header}>

            <div className={Styles.Button_Menu}><button><FiMenu /></button></div>
            <div className={Styles.Navbar_list}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Movies">Movies</Link></li>
                    <li><Link to="/TVShows">Tv Shows</Link></li>
                    <li><Link to="/Watchlist">Watchlist</Link></li>
                    <li><Link to="/Geners">Geners</Link></li>
                </ul>
            </div>
            <div className={Styles.search}>
                <input type="search" />
            </div>
        </div>
    )
}