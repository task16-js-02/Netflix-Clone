import Movie from "../Movie/Movie.js";

export default function MovieList(props) {
  return (
    <>
      {props.movies.map((movie) => {
        return (
          <>
            <Movie movie={movie} />;
          </>
        );
      })}
    </>
  );
}
