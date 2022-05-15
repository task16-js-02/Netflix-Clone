import Movie from '../Movie/Movie'

import MovieList from '../MovieList/MovieList'
import { useEffect, useState } from 'react';


export default function Home(){
const [Movies , setMovies]= useState ([]);
async function MovieLib(){
    // let serverUrl=process.env.REACT_KEY_SERVER
    let serverUrl="https://moves-library-14.herokuapp.com/trending";
    console.log(serverUrl)
// let response = await fetch(`${serverUrl}/trending`)
let response = await fetch(serverUrl)
let movieData=await response.json()
console.log("all", movieData)
setMovies(movieData);
console.log("1, After updating", Movies)
}
useEffect(() => { 
  MovieLib();
}, [])



return(
    <>

  
  {
  Movies.length > 0 && <MovieList Movies={Movies}/>
}
  </>
 
 
)

}