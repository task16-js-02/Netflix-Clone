import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown'
// import DropdownButton from 'react-bootstrap/DropdownButton'
import Button from 'react-bootstrap/Button'
import  Form  from 'react-bootstrap/Form';
import  FormControl  from 'react-bootstrap/FormControl';

 function Bar() {
return (


<>
  <Navbar bg="black" variant="dark">
    <Container>
    <Navbar.Brand href=""><Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Done By
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="">Murad Alazzeh</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Ahmad Ijmail</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/"><Button variant="success">Home</Button>{' '}</Nav.Link>
       <Nav.Link href="/trending"><Button variant="warning">Movie</Button></Nav.Link>
       
    </Nav>
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Container>
  </Navbar>
 </>
)

}
export default Bar;