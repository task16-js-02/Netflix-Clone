// import Movie from '../Movie/Movie'
import Spinner from "react-bootstrap/Spinner";

import MovieList from "../MovieList/MovieList.js";
import { useEffect, useState } from "react";
import Navbar1 from "../Navbar/Navbar.js"

export default function Home() {
  const [movies, setMovie] = useState([]);
  async function MovieLib() {
    let serverUrl = "https://moves-library-14.herokuapp.com/trending";
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

  return (<>
    <Navbar1/>
    {movies.length > 0 && <MovieList movies={movies} />}
    </>);

  
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
