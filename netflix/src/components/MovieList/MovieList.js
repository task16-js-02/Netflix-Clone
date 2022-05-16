import Movie from "../Movie/Movie.js";
import '../MovieList/MovieList.css'


export default function MovieList(props) {
  return (
    <div class="row">
      {props.movies.map((movie) => {
        return (
          <div class="column">

            <Movie movie={movie} updateMovie={props.updateMovie} />;
            </div>
        );
      })}
    </div>
  );
}
