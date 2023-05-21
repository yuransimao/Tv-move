
import { CardS } from "../../Components/Card/CardSynop/CardS";
import Styles from "./styles.module.scss"
import { CardSearch } from "../../Components/Card/CardSearch/CardSearch";
import {Synopsiss} from "../../Hooks/UseSynopsis"



export function Synopsis(){
    const { movies,gener, production_companies} = Synopsiss()
    
        
    return (
        <div className={Styles['synops']}>

        <div className={Styles['Synops-Card']}>
           {movies &&  <CardS movie={movies}/>}
        </div>

        <div className={Styles['container_snops']}>
            
            <div className={Styles['container-card']}>
                <CardSearch  movie={movies} CustomClass={'btnNone'}/>
                <div className={Styles['Date']}>
                    <h4>Date</h4>
                    <p>{movies?.release_date }</p>
                </div>

            </div>
           
            <div className={Styles['Synops-Text']}>
                
                <div className={Styles['Descricao']}>
                    <h1>Synopsis</h1> <hr/>
                    <p>{movies?.overview}</p>
                </div>

                <div className={Styles['Gener-Prodution']}>
                    <div className={Styles['Gener']}>
                        <h2>Gener</h2>
                        <p>{gener}</p>
                    </div>
                    <div className={Styles['Prodution']}>
                        <h3>Production Companie</h3>
                        <p>{production_companies}</p>
                    </div>
                </div>

                
            </div>

        </div>
        </div>
    )
}