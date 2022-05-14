import Movie from "../Movie/Movie";
;

function MovieList(props){
    return(
        <>
       {
        props.movies.map((movie)=> {
            <Movie  move={movie}/>
        
        })
    }
    </>
    )

}
export default MovieList;