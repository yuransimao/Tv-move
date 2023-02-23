import { Link } from "react-router-dom"
import { FiMenu } from "react-icons/fi"
import { BiSearch,BiMoviePlay} from "react-icons/bi"
import Styles from "./styles.module.scss"
import {useState, useRef} from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {FaThList} from "react-icons/fa"
import {TbMovie}from "react-icons/tb"
import {CiStreamOn}from "react-icons/ci"

interface NavBarprops{
    children?:any
    setvisivel ?: () => void 
}





export function Navbar( props : NavBarprops) {
       const ul = useRef<HTMLUListElement>(null)
    
    console.log(ul.current?.classList.contains(Styles['item_link']))
    
   
    return (
        <div className={Styles.Header}>

            <div className={Styles.Button_Menu}>
                <button onClick={props.setvisivel}><FiMenu />
                </button>
            </div>

            <div className={Styles['Navbar_list']}>
                <ul ref={ul}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Movies">Movies</Link></li>
                    <li><Link to="/TVShows">Tv Shows</Link></li>
                    <li><Link to="/Watchlist">Watchlist</Link></li>
                    <li><Link to="/Genres">Genres</Link></li>
                </ul>
            </div>
                <div className={Styles['Responsive_listItem']}>
                    <ul ref={ul}>
                        <li><Link to="/"><AiOutlineHome/></Link></li>
                        <li><Link to="/Movies"><BiMoviePlay/></Link></li>
                        <li><Link to="/TVShows"><CiStreamOn/></Link></li>
                        <li><Link to="/Watchlist"><FaThList/></Link></li>
                        <li><Link to="/Genres"><TbMovie/></Link></li>
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