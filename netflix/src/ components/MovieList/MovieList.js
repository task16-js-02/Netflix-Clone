import Movie from "../Movie/Movie";
import '../MovieList/MovieList.css'
function MovieList(props){
    return(
        <div class="row">
       {
        props.Movies.map((movie)=> {
            console.log(props)
            
            return (
             
               <div class="column">
            <Movie  movie={movie}/>
            </div>
            
            );
            
        })

    }
   </div>
    );

}
export default MovieList;