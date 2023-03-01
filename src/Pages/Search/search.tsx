
import {CardSearch} from "../../Components/Card/CardSearch/CardSearch"
import Styles from "./styles.module.scss"
import { getSearch } from "../../Hooks/useSearch"


export function Search() {

    const{ query, search} = getSearch()
   
    
    return (
        <div className={Styles['Search']}>
            {search.length > 0  ?(
        <h1>Resultado da Pesquisa : <span> " {query} "</span></h1>) : <h1> Not items : <span>{query}</span></h1> }
        <div className={Styles['moviecontainer']}>{search.map((movie : any)=> <CardSearch  key={movie.id} movie ={movie}/>)}
        </div>
        </div>
    )
}