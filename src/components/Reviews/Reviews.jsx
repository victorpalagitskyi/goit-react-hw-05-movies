import axios from "axios"
import { baseUrl, onURLfromReviews } from "components/Urls"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Reviews = () => { 
    const [reviews, setReviews] = useState([])
    const [status, setStatus] = useState('idle')
    const { movieId } = useParams()
    

    useEffect(() => { 
        try {
            axios.get(`${baseUrl}${movieId}${onURLfromReviews}`).then(res => {

                setReviews(res.data.results)
                setStatus('pending')
            })
        } catch {
            console.log("error")
            setStatus('error')
        }
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        , [])
    
    console.log(reviews)
    if (status === 'error') 
        return <p>Some thing wrong</p>
    if (status === 'pending') { 
        if (reviews.length === 0) {
            <p>No result</p>
        }
        else { 
            return (
            <ul>
                {reviews.map(({ id, author, content }) => (
                    <li key={id}>
                        <p>Author: {author}</p>
                        <p>{content}</p>
                    </li>
                ))}
                </ul>
            )
        }

    }
        
} 