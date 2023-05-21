import { AdLists } from "../../Hooks/useAddList";
export function Watchlist(){
    const {topMovies} =AdLists()
    console.log(topMovies)
    return <h1>Waclist</h1>
}