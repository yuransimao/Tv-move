import { Link } from "react-router-dom"
import { FiMenu } from "react-icons/fi"
import { BiSearch} from "react-icons/bi"
import Styles from "./styles.module.scss"

export function Navbar() {
    
    return (
        <div className={Styles.Header}>

            <div className={Styles.Button_Menu}>
                <button><FiMenu />
                </button>
            </div>

            <div className={Styles.Navbar_list}>
                <ul>
                    <li><Link to="/" className={Styles.active}>Home</Link></li>
                    <li><Link to="/Movies">Movies</Link></li>
                    <li><Link to="/TVShows">Tv Shows</Link></li>
                    <li><Link to="/Watchlist">Watchlist</Link></li>
                    <li><Link to="/Genres">Genres</Link></li>
                </ul>
            </div>
            
            <form>
        <div className={Styles.search_box}>
            <button className={Styles.search_btn}><BiSearch/></button>
            <input type="search" placeholder="Search"/>
        </div>
    </form>
            </div>
      
    )
}