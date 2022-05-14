import Bar from "../Navbar/Navbar"
import MovieList from "../MovieList/MovieList"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Movie (props){
    return (
<>
        <h1> We are in the move page </h1>
<Bar/>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

</>   
    )
}
export default Movie;