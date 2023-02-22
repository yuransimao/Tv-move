import Styles from "./styles.module.scss"
import {Routes, Route, BrowserRouter} from "react-router-dom"
import {Home} from"../Pages/Home/home"
import {Movies} from"../Pages/Movies/movies"
import {TvShows} from"../Pages/TvShows/tvshows"
import {Watchlist} from"../Pages/Watchlist/watchlis"
import {Geners} from"../Pages/Geners/geners"
import {Search} from"../Pages/Search/search"
import {Navbar} from "../Components/NavBar/navbar"

export function Routers (){
    return(
        <BrowserRouter>
        <Navbar/>
        <div className={Styles.Container}>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Movies" element={<Movies/>}/>
            <Route path="/TvShows" element={<TvShows/>}/>
            <Route path="/Watchlist" element={<Watchlist/>}/>
            <Route path="/Geners" element={<Geners/>}/>
            <Route path="/Search" element={<Search/>}/>
        </Routes>
        </div>
        </BrowserRouter>
    )
}