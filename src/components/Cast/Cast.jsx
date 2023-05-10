import axios from "axios"
import { baseImgURL, baseUrl, onURLFromCast } from "components/Urls"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Cast = () => { 
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
                {actors.map(({ id, name, character, profile_path  }) => (
                    <li key={id}>
                        <img width={100} src={`${baseImgURL}${profile_path}`} alt=''/>
                        <p>Character: {character}</p>
                        <p>Name: {name}</p>
                    </li>
                ))}
            </ul>
        )
    }  
}
 
export default Cast