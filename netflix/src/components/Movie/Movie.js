import Bar from "../Navbar/Navbar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import ModalMovie from "../ModalMovie/ModalMovie.js"


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
      {/* <h1> We are in the move page </h1> */}
      {/* <Bar /> */}

      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn-images-1.medium.com/max/1200/1*ty4NvNrGg4ReETxqU2N3Og.png"
        />
        <Card.Body>
          <Card.Title>{props.movie.titl}</Card.Title>
          <Card.Text>{props.movie.details}</Card.Text>
          <Button variant="primary" onClick={()=>{handleShow(props.movie)}}>
            Show Modal
          </Button>
        </Card.Body>
      </Card>
{
 clickedMovie && <ModalMovie show={show} handleClose={handleClose} clickedMovie= {clickedMovie}/>
}
      
    </>
  );
}
