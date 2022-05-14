// import Movie from '../Movie/Movie'
import Spinner from "react-bootstrap/Spinner";
import Bar from "../Navbar/Navbar";
import MovieList from "../MovieList/MovieList.js";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovie] = useState([]);
  async function MovieLib() {
    let serverUrl = "https://moves-library-14.herokuapp.com";
    let response = await fetch(
      `https://moves-library-14.herokuapp.com/trending`
    );
    console.log("serverurl", serverUrl);
    let movieData = await response.json();
    console.log("after updating", movieData);

    setMovie(movieData);
  }
  useEffect(() => {
    MovieLib();
  }, []);

  return <>{movies.length > 0 && <MovieList movies={movies} />}</>;
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
