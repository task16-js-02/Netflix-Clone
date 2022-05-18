import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Navbar1 from "../Navbar/Navbar";
import { Container } from "react-bootstrap";
import '../FavList/FavList.css'

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

  

  async function handleDelete(id) {
    let url = `${process.env.REACT_APP_SERVER}/DELETE/${id}}`;
    let response = await fetch(url, {
      method: "DELETE",
    });

    if (response.status === 204) {
      getFavMovie();
      alert("Movie deleted successfully");
    }
  }

  useEffect(() => {
    getFavMovie();
  }, []);

  return (
    <>
    <h1> Fav list page </h1>
    <div class="row1">
      {favMovie &&
        favMovie.map((favMovies) => {
          return (
            <div class="column1">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w400/${favMovies.image}`}
              />
              <Card.Body>
                <Card.Title>{favMovies.name}</Card.Title>
                <Card.Text>{favMovies.release_date}</Card.Text>
                <Card.Text>{favMovies.summary}</Card.Text>
                <Card.Text>
                  {favMovies.comment}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleDelete(favMovies.id)}
                >
                  
                  Delete
                </Button>{"  "}

                <Button
                  variant="primary"
                  
                >
                  
                  Update
                </Button>
              </Card.Body>
            </Card>
            </div>
          );
        })}
        
        </div>
    </>
  );
}
