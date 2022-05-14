import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Button from 'react-bootstrap/Button'




export default function Navbar1() {
    
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">Movie library</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">FavList </Nav.Link>
          </Nav>
          </Container>
        </Navbar>
        <br />
        
      </>
)}


// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import { Link } from "react-router-dom";
// import Dropdown from 'react-bootstrap/Dropdown'
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Button from 'react-bootstrap/Button'

// export default function Navbar1() {
// return (


// <>
//   <Navbar bg="black" variant="dark">
//     <Container>
   
//     <Nav className="me-auto">
//       <Nav.Link href="/"><Button variant="success">Home</Button>{' '}</Nav.Link>
//        <Nav.Link href="/trending"><Button variant="warning">Movie</Button></Nav.Link>
       
//     </Nav>
//     </Container>
//   </Navbar>
//  </>
// )

// }
 