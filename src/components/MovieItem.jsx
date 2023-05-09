import axios from "axios"
import { onMovieItems } from "components/url"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

export const MovieItem = (searchQuery) => { 
    const [movies, setMovies] = useState([])
    const [status, setStatus] = useState('idle')
    const location = useLocation()

    useEffect(() => {
        try {
            axios.get(`${onMovieItems}${searchQuery}`).then(res => {
                setMovies(res.data.result)
                setStatus('pending')
            })
        } catch {
                console.log('error')
                setStatus('error')
            }
        }   

    , [searchQuery])
    if (status === 'pending') { 
        return movies.length === 0 ? (
            <p>Sorry ........ no Movies</p>
        ) : (
                <ul>
                    {movies.map(movie => 
                        <li key={movie.id}>
                            <Link to={`${movie.id}`} state={{ from: location }}>
                                {movie.title}
                            </Link>
                        </li>
                    )}
                </ul>
        )
    }
}