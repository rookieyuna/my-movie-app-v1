import { Link } from "react-router-dom";

function Movie({movie}) {

  return (      
    <div key={movie.id}>
        <img src={movie.medium_cover_image} style={{"width":"300px"}} onerror="this.src='/logo512.png'" alt="Movie_image"/> 
        <h2><Link to={`/detail/${movie.id}`}>{movie.title} ({movie.year})</Link></h2>
        <ul>
        {movie.genres.map((genre, idx)=> <li key={idx}>{genre}</li>)}
        </ul>
        <h4>Summary</h4>
        <p style={{"height":'80px', 'overflow':'hidden'}}>{movie.summary}</p>   
        <hr /> 
    </div> 
  );
}

export default Movie;
