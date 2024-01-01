import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true)
  const [movieList, setMovieList] = useState([])

  useEffect(()=> {
    fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year')
    .then(res => res.json())
    .then(json => {
      setMovieList(json.data.movies)
      setLoading(false)
    }) //same as getMovies()
  },[])

  const getMovies = async() => {
    const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year')).json();
    setMovieList(json.data.movies);
    setLoading(false);
  }

  return (
    <div>
      <h2>MovieList ({movieList.length})</h2>
      
      { loading ? 
        <strong>Loading</strong> 
        : 
        movieList.map((movie)=> <Movie movie={movie}/>) }
    </div>
  );
}

export default Home;
