// import Bar from "../Navbar/Navbar"
// import MovieList from "../MovieList/MovieList"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {useState} from 'react';
import ModalMovie from '../ModalMovie/ModalMovie';

function Movie (props) {


  const [show, setShow] = useState(false);
  const [chosenMovie, setChosenMovie] = useState();

  const handleClose = () => setShow(false);
  const handleShow = (movie) => {
      setChosenMovie(movie);
      setShow(true)
  }
    return (
<>


<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.movie.Image}`} />
  <Card.Body>
    <Card.Title>{props.movie.titl}</Card.Title>
    <Card.Title>{props.movie.ID}</Card.Title>
    <Card.Text>  {props.movie.rleasDate}</Card.Text>
    <Card.Text>
    {props.movie.details}
    </Card.Text>
    <Button variant="primary" onClick={()=>{handleShow(props.movie)}}>Show MOvie</Button>{"  "}<Button variant="success">Add to Fav </Button>
    
  </Card.Body>
</Card>
{
    chosenMovie && (<ModalMovie show={show} handleClose={handleClose} chosenMovie={chosenMovie} updateMovie={props.updateMovie}/>)
  }
</>   
    )
}

export default Movie;