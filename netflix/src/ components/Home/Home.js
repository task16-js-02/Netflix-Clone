// import Movie from '../Movie/Movie'
import Spinner from 'react-bootstrap/Spinner'
import Bar from '../Navbar/Navbar'
import MovieList from '../MovieList/MovieList'
import { useEffect,useStat } from 'react'


export default function Home(){
const [movies,setMovie]=useStat([]);
 async function MovieLib(){
    let serverUrl=process.env.REACT_KEY_SERVER
   
    console.log(serverUrl)
let response = await fetch(`${serverUrl}/trending`)

let movieData=await response.json()

setMovie(movieData);
}
useEffect(()=>{
    MovieLib();
},[])



return(
    <>
    <h1>Welcome to Netflex-Clone!</h1>
    <h1>We are at home now</h1>

  <Spinner animation="border" variant="primary" />
  <Spinner animation="grow" variant="success" />
  <Spinner animation="border" variant="success" />
  <Spinner animation="border" variant="danger" />
  <Spinner animation="border" variant="warning" />
  <Spinner animation="border" variant="info" />
  <Spinner animation="grow" variant="warning" />
  <Spinner animation="border" variant="dark" />
  <Bar/>
  {
  (movies.length > 0) && <MovieList movee={movies}/>
}
  </>
 
 
)

}