import axios from "axios"
import { baseImgURL, baseUrl, onMovieSpec } from "components/Urls"

import { Suspense, useEffect, useRef, useState } from "react"
import { Link, Outlet, useLocation, useParams } from "react-router-dom"

const MovieSpec = () => { 
    const [movieInfo, setmovieInfo] = useState('')
    const [status, setStatus] = useState('idle')
    const { movieId } = useParams()
    const location = useRef(useLocation().state?.from ?? '/movies')
    

    useEffect(() => { 
        try {
            axios.get(`${baseUrl}${movieId}${onMovieSpec}`).then(res => {
                setmovieInfo(res)
                setStatus('pending')
            })
        } catch { 
            console.error()
            setStatus('error')
        }
    }, [movieId])
    if (status === 'error')
        return (
            <> 
                <Link to={location.current}>
                    <button>Back</button>
                </Link>
                <p>Some thing wrong</p>  
            </>     
        )
    if (status === 'pending') { 
        return (
            <> 
                <Link to={location.current}>
                    <button> {`<`} Back</button>
                </Link>
                <>
                    <img
                        width={200}
                        src={`${baseImgURL}${movieInfo.data.poster_path}`}
                        alt='poster'
                    />
                    <>
                        <h1>{movieInfo.data.title}</h1>
                        <p>Owerwiev</p>
                        <p>{movieInfo.data.overview}</p>

                    </>
                </>
                <>
                    <p>Information</p>
                    <ul>
                        <li> 
                            <Link to='cast' movieId={movieId}>
                                Cast 
                            </Link>
                        </li>
                        <li>
                            <Link to='reviews' movieId={movieId}>
                                Reviews 
                            </Link>
                        </li>
                    </ul>
                </>
                <Suspense fallback={<>Loading..........</>}>
                <Outlet/>
                </Suspense>
            </>
            
        )
    }
}

export default MovieSpec