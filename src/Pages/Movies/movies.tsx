import { Swipert } from "../../Components/Slider/Swiper/swipert";
import { Swipers } from "../../Components/Slider/Swiper/swiper";
import { getMovies } from "../../Hooks/UseMovies";
import { useState, useEffect } from "react"






export function Movies() {

    
    
    
    const {
    cinemas,upcoming,popular,latest
    } = getMovies()

    return (
        <>
            <Swipert topMovies={cinemas} />
            <Swipers title={'Filme Popular'} topMovies={popular} />
            <Swipers title={'Filme Upcoming'} topMovies={upcoming}/>
            <Swipers title={'Filme top rated'} topMovies={latest}/>
        </>
    )
}