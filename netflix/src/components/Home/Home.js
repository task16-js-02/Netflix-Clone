// import Movie from '../Movie/Movie'
import Spinner from "react-bootstrap/Spinner";

import MovieList from "../MovieList/MovieList.js";
import { useEffect, useState } from "react";
import Navbar1 from "../Navbar/Navbar.js";

export default function Home() {
  const [movies, setMovie] = useState([]);
  
  async function MovieLib() {
    let serverUrl = `${process.env.REACT_APP_SERVER}/trending`;
    let response = await fetch(
      `${process.env.REACT_APP_SERVER}/trending`
    );

    let movieData = await response.json();
   

    setMovie(movieData);
  }

  function updateMovie(newMovie, id) {
    let updatedMovies = movies.map((movie) => {
      if (movie.id == id) {
        movie.comment = newMovie.userComment;
        return movie;
      } else {
        return movie;

      }
      
    });
    setMovie(updatedMovies);
  }
  useEffect(() => {
    MovieLib();
  }, []);

  return (
    <>
      <Navbar1 />
      {movies.length > 0 && <MovieList movies={movies} updateMovie={updateMovie} />}
    </>
  );
}

{
  /* <h1>Welcome to Netflex-Clone!</h1>
    <h1>We are at home now</h1>

  <Spinner animation="border" variant="primary" />
  <Spinner animation="grow" variant="success" />
  <Spinner animation="border" variant="success" />
  <Spinner animation="border" variant="danger" />
  <Spinner animation="border" variant="warning" />
  <Spinner animation="border" variant="info" />
  <Spinner animation="grow" variant="warning" />
  <Spinner animation="border" variant="dark" />
  <Bar/> */
}
