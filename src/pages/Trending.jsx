const { default: axios} = require("axios")
const { onTrendings } = require("components/url")
const { useState, useEffect } = require("react")
const { Link, useLocation } = require("react-router-dom")

export const Trendings = () => { 
    const [movieList, setMovieList] = useState([])
    const location = useLocation()
    useEffect(() => {
        try {
            axios.get(`${onTrendings}`)
                .then(dataMovies => setMovieList(dataMovies.data.results))
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
                        <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
     
}