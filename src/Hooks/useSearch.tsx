
import { useSearchParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

const SearchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

export function getSearch() {

    const [searchParams] = useSearchParams()
    const query = searchParams.get('q')
    const [search, setSearch] = useState([])
    const [Search, setSearchs] = useState('')
    const Navigate = useNavigate()

    const handleSearch = (e: any) => {
        e.preventDefault()
        if (!Search) return;

        Navigate(`/Search?q=${Search}`)
        setSearchs('')
    }

    const getSearchs = async (url: any) => {
        const res = await fetch(url)
        const data = await res.json()
        setSearch(data.results)

    }

    useEffect(() => {

        const topUrl = `${SearchURL}?${apiKey}&query=${query}`
        getSearchs(topUrl)


    }, [query])

    return {
        query,
        search,
        handleSearch,
        Search, 
        setSearchs
    }


}