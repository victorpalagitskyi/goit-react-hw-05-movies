import axios from "axios"
import { baseUrl, onURLFromCast } from "components/url"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Cast = () => { 
    const [actors, setActors] = useState([])
    const [status, setStatus] = useState('idle')
    const {movieId} = useParams()
    useEffect(() => { 
        try {
            axios.get(`${baseUrl}${movieId}${onURLFromCast}`).then(res => {
                setActors(res.data.cast)
                setStatus('pending')
            })
        } catch {
            console.log("error")
            setStatus('error')
        }
       // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
    if (status === 'error') { 
        return <p>Some thing wrong</p>
    }
    if (status === 'pending') { 
        return (
            <ul>
                {actors.map(({ id, profile_path, character, name }) => (
                    <li key={id}>
                        <img width={100} src={`${baseUrl}${profile_path}`} alt=''/>
                        <p>Character: {character}</p>
                        <p>Name: {name}</p>
                    </li>
                ))}
            </ul>
        )
    }  
}

 