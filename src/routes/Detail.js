import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";


function Detail () {
    const params = useParams()
    const movieId = params.movieId; // abc
    const [loading, setLoading] = useState(true)
    const [movieInfo, setMovieInfo] = useState(Object)

    useEffect(()=>{
        getMovieInfo()
    },[])

    const getMovieInfo = async () => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`)
            .then((res) => res.json())
            .then((json)=> {
                setMovieInfo(json.data.movie)
                console.log(json.data.movie)
                setLoading(false)
        })    
    }
    
    return (
        <div>
            <Link to="/">Home으로</Link>

            <h2>Detail</h2>
            
            { loading ? 
                <strong>Loading</strong> 
                : 
                movieInfo && movieInfo.title &&
                <>
                    <h3>{movieInfo.title}</h3>
                    <img src={`${movieInfo.medium_cover_image}`} alt="movie_img" />
                    <a href={`${movieInfo.url}`}>Move to Movie</a>
                </>
            }
            
        </div>
    )
}

export default Detail