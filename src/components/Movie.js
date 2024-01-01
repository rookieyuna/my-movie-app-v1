import { useState, useEffect } from "react";

function Movie({movie}) {

  const moveToMovieDetail = () => {
    
  }
  
  return (      
    <div key={movie.id}>
        <h2>{movie.title} ({movie.year})</h2>
        <ul>
        {movie.genres.map((genre, idx)=> <li key={idx}>{genre}</li>)}
        </ul>
        <img src={movie.medium_cover_image} style={{"width":"300px"}} onerror="this.src='/logo512.png'" alt="Movie image"/> 
        <h4>Summary</h4>
        <p style={{"height":'80px', 'overflow':'hidden'}}>{movie.summary}</p>   
        <hr /> 
    </div> 
  );
}

export default Movie;
