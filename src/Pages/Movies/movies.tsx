import { Swipert } from "../../Components/Slider/Swiper/swipert";
import { Swipers } from "../../Components/Slider/Swiper/swiper";
import { getMovies } from "../../Hooks/UseMovies";
import { useState, useEffect } from "react"






export function Movies() {

    
    
    
    const {
        id, idupcoming, idpopular,idlatest,  poster_path, poster_pathupcoming,poster_pathpopular,poster_pathlatest
    } = getMovies()

    return (
        <>
            <Swipert id={id} poster_path={poster_path} />
            <Swipers title={'Filme Popular'} id={idpopular} poster_path={poster_pathpopular} />
            <Swipers title={'Filme Upcoming'} id={idupcoming} poster_path={poster_pathupcoming} />
            <Swipers title={'Filme top rated'} id={idlatest} poster_path={poster_pathlatest} />
        </>
    )
}