import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef } from "react";

export default function ModalMovie(props) {
  let commentRef = useRef();

  function handelcomment(e) {
    e.preventDefault();
    let userComment = commentRef.current.value;
   
    let newMovie={...props.clickedMovie,userComment}
    props.updateMovie(newMovie,props.clickedMovie.id);
    
  }

  async function handelAdd(e,movie) {
    e.preventDefault();
    //console.log(movie);
    let url=`${process.env.REACT_APP_SERVER}/addMovie`;
    let data={
      name:movie.title,
      summary:movie.overview,
      image:movie.poster_path,
      comment:movie.comment,

    }
    //console.log(data);
   
    let response = await fetch(url, {
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(data),
    })

    let addedmovies= await response.json();
   // console.log(addedmovies,"heheheh");
    
    
  }
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.clickedMovie.titl}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={`https://image.tmdb.org/t/p/w500/${props.clickedMovie.poster_path}`}
            alt="Hey"
          />
          <br />
          {props.clickedMovie.comment?props.clickedMovie.comment:"No comment"}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Comment</Form.Label>
              <Form.Control ref={commentRef} type="text" placeholder="Add Comment" />
              <Form.Text className="text-muted">
                Add your own comment.
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={(e)=>{handelcomment(e)}}>
              Submit
            </Button>
            <Button variant="primary" type="submit" onClick={(e)=>{handelAdd(e,props.clickedMovie)}}>
              addToFav
            </Button>
          </Form>
          {props.clickedMovie.details}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
