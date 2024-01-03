import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";


function Detail () {
    const params = useParams()
    const movieId = params.movieId; // abc
    const [movieInfo, setMovieInfo] = useState(Object)

    useEffect(()=>{
        getMovieInfo()
    },[])

    const getMovieInfo = async () => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`)
            .then((res) => res.json())
            .then((json)=> {
                setMovieInfo(json.data.movie)
        })    
    }
    
    return (
        <div>
            <Link to="/">Home으로</Link>

            <h2>Detail</h2>
            {
                movieInfo && movieInfo.title &&
                <>
                    <h3>{movieInfo.title}</h3>
                    <img src={`${movieInfo.medium_cover_image}`} alt="movie_img" />
                </>
            }
            
        </div>
    )
}

export default Detail