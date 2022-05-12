
import Spinner from 'react-bootstrap/Spinner'

export default function Home(){
return(
    <>
    <h1>We are at home now</h1>

  <Spinner animation="border" variant="primary" />
  <Spinner animation="grow" variant="success" />
  <Spinner animation="border" variant="success" />
  <Spinner animation="border" variant="danger" />
  <Spinner animation="border" variant="warning" />
  <Spinner animation="border" variant="info" />
  <Spinner animation="grow" variant="warning" />
  <Spinner animation="border" variant="dark" />
  </>
)

}