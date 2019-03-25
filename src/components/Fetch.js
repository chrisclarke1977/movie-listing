import React, { useState, useEffect } from "react"
import Card from "./Card"

function useFetch(url, defaultData) {
    const [data, updateData] = useState(defaultData)

    useEffect(async () => {
        const resp = await fetch(url)
        const json = await resp.json()
        updateData(json)
    }, [url])

    return data
}

function useFetchMovie(location) {
    const api_key = "bdb34cb7372925f35b899407f36fe89a"
    const query = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`
    
    return useFetch(query, {})
}

function makePostImage(poster_path) {
    return `http://image.tmdb.org/t/p/w342/${poster_path}`
}

function ListMovies({
    list
}) {
    return (
        list.map(({title, popularity, poster_path}) => 
            <Card title={title} label={popularity} poster={makePostImage(poster_path)} description="Some long description" />
        )
    )
}

function Example() {
    const [location, setLocation] = useState("Cuptertino, CA")
    const result = useFetchMovie(location)
    
    return (
        <div>
            <input type="input" value={location} onChange={evt => setLocation(evt.target.value)} />
            { result.results && result.results.length ? <ListMovies list={result.results} /> : '' }
        </div>
    )
}

/**
{JSON.stringify(result)}
* { result.results > 1 ?
                result.results.map(({title, popularity}) => <Card title={title} label={popularity} description="Some long description" />)
                :
                'Loading...'
            }
 */

export default Example