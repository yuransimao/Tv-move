import { Link } from "react-router-dom"
import { FiMenu } from "react-icons/fi"
import { BiSearch} from "react-icons/bi"
import Styles from "./styles.module.scss"
import {useState, useRef} from 'react'

export function Navbar() {
       const ul = useRef<HTMLUListElement>(null)
    
    console.log(ul.current?.classList)
    
   
    return (
        <div className={Styles.Header}>

            <div className={Styles.Button_Menu}>
                <button><FiMenu />
                </button>
            </div>

            <div className={Styles.Navbar_list}>
                <ul ref={ul}>
                    <li><Link to="/" className={Styles['item_link']}>Home</Link></li>
                    <li><Link to="/Movies" className={Styles['item_link']}>Movies</Link></li>
                    <li><Link to="/TVShows" className={Styles['item_link']}>Tv Shows</Link></li>
                    <li><Link to="/Watchlist" className={Styles['item_link']}>Watchlist</Link></li>
                    <li><Link to="/Genres" className={Styles['item_link']}>Genres</Link></li>
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