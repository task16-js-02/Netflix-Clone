import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useRef } from 'react';
export default function ModalMovie(props) {
    let commentRef=useRef();

    function handleComment(com){
        com.preventDefault();
        let userComment=commentRef.current.value
        console.log(` what the user write${userComment}`)
        let newComment={...props.chosenMovie,userComment}
       
        props.updateMovie(newComment,props.chosenMovie.ID);

        console.log(` wanted id  ${props.chosenMovie.ID}`)
        console.log(newComment)
    }

   async function handleAddFav (com,Movie){
        com.preventDefault();
        let url=`${process.env.REACT_APP_SERVER}/addMovie`
        let data = {
            titl: Movie.titl,
            rleasDate: Movie. rleasDate,
            details: Movie.details,
            Image: Movie.Image,
            comment: Movie.comment,
        }
        let response=await fetch (url,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        let addedMovie=await response.json();
        console.log(addedMovie,"heeeeeeeeeeee")

    }



    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.chosenMovie.titl}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${props.chosenMovie.Image}`}
                        alt="movie pic"
                    />
                    <br />

                    {props.chosenMovie.details}
                    <br/>
                    {props.chosenMovie.ID}
                    <br/>
                    <br/>
                    {props.chosenMovie.comment?props.chosenMovie.comment:"no comment , say somthing man"}

                </Modal.Body>
                <Form>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label><h4>Add your comment</h4></Form.Label>
                        <Form.Control ref={commentRef} as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="warning" type="submit" onClick={(com)=>handleComment(com)} >Submit comment</Button>{'  '}
                    <Button variant="success" type="submit" onClick={(com)=>handleAddFav(com,props.chosenMovie) }>Add to FAV</Button>{' '}
                </Form>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                  
                </Modal.Footer>
            </Modal>
        </>
    );
}
