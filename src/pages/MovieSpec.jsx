import axios from "axios"
import { baseUrl, onMovieSpec } from "components/url"
import { Suspense, useEffect, useRef, useState } from "react"
import { Link, Outlet, useLocation, useParams } from "react-router-dom"

export const MovieSpec = () => { 
    const [movieInfo, setmovieInfo] = useState('')
    const [status, setStatus] = useState('idle')
    const { movieId } = useParams
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
                  <p>Some thing wrong</p>  
                </Link>
            </>     
        )
    if (status === 'pending') { 
        return (
            <> 
                <Link to={location.current}>
                    <button>Back</button>
                </Link>
                <>
                    <img
                        width={200}
                        src={`${baseUrl}${movieInfo.data.poster_path}`}
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
                            <Link to='review' movieId={movieId}>
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