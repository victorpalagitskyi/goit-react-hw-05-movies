import axios from "axios"
import { onTrendings } from "components/Urls"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"




export const Trendings = () => { 
    const [movieList, setMovieList] = useState([])
    const location = useLocation()

    useEffect(() => {
        try {
            axios.get(`${onTrendings}`)
                .then(data => setMovieList(data.data.results))
        } catch { 
            console.error();
        }
    }, [])

    return (
        <>
            <h1>Now in trading....</h1>
            <ul>
                {movieList.map(({ id, title }) =>
                (
                    <li key={id}>
                        <Link to={`/movies/${id}`} state={{ from: location }}>
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
     
}