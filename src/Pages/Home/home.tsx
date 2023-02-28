

import { Swipers} from "../../Components/Swiper/swiper";
import { Swipert} from "../../Components/Swiper/swipert";
import Styles from "./styles.module.scss"
import { TopMovies } from "../../Hooks/useTopMovies";






export function Home(){

 const {poster_path, id}= TopMovies ()


  

    return (
   
    <div className={Styles['home_container']}>
        
        
        <Swipert poster_path={poster_path} id={id}/>
        
        <Swipers  poster_path={poster_path} id={id}/>
        
    </div>
  
    )
}