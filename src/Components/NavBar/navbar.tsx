import { Link, NavLink } from "react-router-dom"
import { FiMenu } from "react-icons/fi"
import { BiSearch,BiMoviePlay} from "react-icons/bi"
import Styles from "./styles.module.scss"
import {AiOutlineHome} from "react-icons/ai"
import {FaThList} from "react-icons/fa"
import {TbMovie}from "react-icons/tb"
import {CiStreamOn}from "react-icons/ci"
import { getSearch } from "../../Hooks/useSearch"

interface NavBarprops{
    children?:any
    setvisivel ?: () => void 
}





export function Navbar( props : NavBarprops) {
      const { handleSearch, Search, setSearchs} = getSearch()
       const ActiveLink = ({isActive}) => (isActive ? `${Styles.active}` : '' )
      
       return (
           <div className={Styles.Header}>
   
               <div className={Styles.Button_Menu}>
                   <button onClick={props.setvisivel}><FiMenu />
                   </button>
               </div>
   
               <div className={Styles['Navbar_list']}>
                   <ul >
                       <li><NavLink to="/" className={ActiveLink }>Home</NavLink></li>
                       <li><NavLink to="/Movies" className={ActiveLink }>Movies</NavLink></li>
                       <li><NavLink to="/TVShows" className={ActiveLink }>Tv Shows</NavLink></li>
                       <li><NavLink to="/Watchlist" className={ActiveLink }>Watchlist</NavLink></li>
                       <li><NavLink to="/Genres" className={ActiveLink }>Genres</NavLink></li>
                   </ul>
               </div>
                   <div className={Styles['Responsive_listItem']}>
                       <ul >
                           <li><NavLink to="/"><AiOutlineHome/></NavLink></li>
                           <li><NavLink to="/Movies"><BiMoviePlay/></NavLink></li>
                           <li><NavLink to="/TVShows"><CiStreamOn/></NavLink></li>
                           <li><NavLink to="/Watchlist"><FaThList/></NavLink></li>
                           <li><NavLink to="/Genres"><TbMovie/></NavLink></li>
                       </ul>
                   </div>
               
               <form onSubmit={handleSearch}>
           <div className={Styles.search_box}>
               <button className={Styles.search_btn}><BiSearch/></button>
               <input type="search" placeholder="Search" value={Search} onChange={(e) => setSearchs(e.target.value)}/>
           </div>
       </form>
               </div>
         
       )
   }
    
    