import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ModalMovie(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.clickedMovie.titl}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src="https://cdn-images-1.medium.com/max/1200/1*ty4NvNrGg4ReETxqU2N3Og.png"
            alt="Hey"
          />
          <br />

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
