
import { Button } from "../../Button/button"
import { AiFillStar } from "react-icons/ai";
import { useState, useEffect } from "react";
import Styles from "./styles.module.scss"


const imgUrl = import.meta.env.VITE_IMG
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


export function CardS({movie}) {
   
    
   
    return (
        <div className={Styles.moviecard} >


            <div className={Styles['card_Img']}>
                <img src={imgUrl + `${movie.poster_path}`} alt={'filme'}/>
            </div>
            <div className={Styles['container']}>
                    <div className={Styles['title']}>
                        <h1>{movie.title}</h1>
                    </div>
                <div className={Styles['Star']}>
                    <p><AiFillStar/><span>{Number(movie.vote_average).toFixed(1)}</span></p>
                    </div>
                <div className={Styles['Synops']}>
                    <p className={Styles['text']}></p>
                    </div>
                    <div className={Styles['btn']}>
                
                        <Button to={`Synopsis/${movie.id}`} title={"Watch now"} background={'Backgroundred'}/>
                        <Button to={`Synopsis/${movie.id}`} title={"Add to watchlist"} background={'BackgroundTransp'}/>
                
                </div>
            </div>

        </div>


    )
}