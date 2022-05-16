import { useState, useEffect } from 'react';
import Movie from '../Movie/Movie';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

export default function FavList() {
    const [favMovie, setFavMovie] = useState();

    async function getFavMovies() {
        let url = `${process.env.REACT_APP_SERVER}/getMovies`
        let response = await fetch(url, {
            method: 'GET'
        });

        let recivedData = await response.json();
        setFavMovie(recivedData)
    }

useEffect(() => {
    getFavMovies();
}, []);
return (
    <>
        <h1>Favourite Recipes Page</h1>
        {
           favMovie &&favMovie.map((favMovie) => {
                return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={favMovie.poster_pathe} />
                        <Card.Body>
                            <Card.Title>{favMovie.title}</Card.Title>
                            <Card.Text>
                                {favMovie.overview}
                            </Card.Text>
                            {/* <Button variant="primary" onClick={()=>handleDelete(favMovie.id)}>Delete</Button> */}
                        </Card.Body>
                    </Card>
                )
            }
            )
        }

    </>
)
}

