import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Navbar1 from "../Navbar/Navbar";
import { Container } from "react-bootstrap";





export default function FavList() {

    
const [favMovie, setFavMovie] = useState();
  async function getFavMovie() {
    let url = `${process.env.REACT_APP_SERVER}/getMovies`;
    let response = await fetch(url, {
      method: "GET",
    });
    let recivedData = await response.json();
    setFavMovie(recivedData);
  }

  useEffect(() => {
    getFavMovie();
  }, []);

  async function handleDelete(id) {
    let url = `${process.env.REACT_APP_SERVER}/DELETE/${id}`;
    let response = await fetch(url, {
      method: 'DELETE',
        });

      if (response.status === 204) {
        getFavMovie();
        alert('Movie deleted successfully');
      }
    }

  return (
    <>
      {favMovie && favMovie.map((favMovies) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w400/${favMovies.image}`}
              />
              <Card.Body>
                <Card.Title>{favMovies.title}</Card.Title>
                <Card.Text>{favMovies.release_date}</Card.Text>
                <Card.Text>{favMovies.overview}</Card.Text>
                <Button  variant="primary" onClick={() => handleDelete(favMovies.id)}
                > Delete
                </Button>
              </Card.Body>
            </Card>
          );
        })}
    </>
  );
}
