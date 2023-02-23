import Styles from "./styles.module.scss"
import {Routes, Route, BrowserRouter} from "react-router-dom"
import {Home} from"../Pages/Home/home"
import {Movies} from"../Pages/Movies/movies"
import {TvShows} from"../Pages/TvShows/tvshows"
import {Watchlist} from"../Pages/Watchlist/watchlis"
import {Genres} from"../Pages/Genres/genres"
import {Synopsis} from"../Pages/Synopsis/synopsis"
import {Search} from"../Pages/Search/search"
import {Layout} from "../Components/Layout/Layout"

export function Routers (){
    return(
        <BrowserRouter>
        <Layout/>
        <div className={Styles.Container}>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Movies" element={<Movies/>}/>
            <Route path="/TvShows" element={<TvShows/>}/>
            <Route path="/Watchlist" element={<Watchlist/>}/>
            <Route path="/Genres" element={<Genres/>}/>
            <Route path="Synopsis/:id" element={<Synopsis/>}/>
            <Route path="Search" element={<Search/>}/>
        </Routes>
        </div>
        </BrowserRouter>
    )
}