import {useState} from "react"
export function Visivel(){
    const [visivel , setVisivel] = useState(false)

    return{
        visivel , setVisivel,
        VisivelSubmen : visivel === true
}
}