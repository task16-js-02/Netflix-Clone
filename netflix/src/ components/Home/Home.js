import Movie from '../Movie/Movie'
import MovieList from '../MovieList/MovieList'
import { useEffect, useState } from 'react';

import axios from "axios";
export default function Home(){
const [Movies , setMovies]= useState ([]);
async function MovieLib(){
    let serverUrl=process.env.REACT_APP_SERVER
    // let serverUrl="https://moves-library-14.herokuapp.com/trending";
    // console.log(serverUrl)
let response = await axios.get(`${serverUrl}/trending`)
.then((response)=>{
  setMovies(response.data);
})
// let response = await fetch(serverUrl)
// let movieData=await response.json()
// console.log("all", movieData)

console.log("1, After updating", Movies)
}
function updateMovie(newMove,ID){
let updatedComment=Movies.map((movie)=>{
if(movie.ID === ID){
  movie.comment=newMove.userComment;
  return movie;
} else{
  return movie;
}
})

setMovies(updatedComment)
}

useEffect(() => { 
  MovieLib();
}, [])



return(
    <>

  
  {
  Movies.length > 0 && <MovieList Movies={Movies} updateMovie={updateMovie}/>
}
  </>
 
 
)

}