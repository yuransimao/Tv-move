import {Link} from "react-router-dom"
import Styles from "./styles.module.sass"
export function Navbar(){
    return (
        <div>
            <div className={Styles.Navbar_list}>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Movies">Movies</Link></li>
            <li><Link to="/TVShows">Tv Shows</Link></li>
            <li><Link to="/Watchlist">Watchlist</Link></li>
            <li><Link to="/Geners">Geners</Link></li>
            </ul>
            </div>
        </div>
    )
}