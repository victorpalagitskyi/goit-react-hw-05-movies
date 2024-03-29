
import { MovieItem } from "components/MoviItem/MovieItem"
import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

const Movies = () => {
    const [searchMovie, setSearchMovie] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()
     const movieName = searchParams.get('name')
    
    useEffect(() => {
        if (movieName === '') {
            return
        }
        setSearchMovie(movieName)   
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const setMovie= e =>{ 
        setSearchParams({ name: e.target.value})
    }
    const onSubmit = event => { 
        event.preventDefault()
        setSearchMovie(movieName)
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <button type="submit">Search movie</button>
                <input type="text" value={movieName} onChange={setMovie} />
            </form>
            <Suspense fallback={<div>Loading......</div>}>
                {searchMovie ? (<MovieItem searchQuery={searchMovie}/>) : null }
            </Suspense>
        </>
    )
    
}

export default Movies
