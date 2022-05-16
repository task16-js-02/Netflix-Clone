import "./Movie.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import ModalMovie from "../ModalMovie/ModalMovie.js";

export default function Movie(props) {
  const [show, setShow] = useState(false);
  const [clickedMovie, setclickedMovie] = useState();

  const handleClose = () => setShow(false);
  const handleShow = (movie) => {
    setclickedMovie(movie);
    setShow(true);
  };
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
        />
        <Card.Body>
          <Card.Title>{props.movie.title}</Card.Title>
          <Card.Text>{props.movie.release_date}</Card.Text>
          <Card.Text>{props.movie.overview}</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              handleShow(props.movie);
            }}
          >
            Show Modal
          </Button>
        </Card.Body>
      </Card>
      {clickedMovie && (
        <ModalMovie
          show={show}
          handleClose={handleClose}
          clickedMovie={clickedMovie}
          updateMovie={props.updateMovie}
        />
      )}
    </>
  );
}
