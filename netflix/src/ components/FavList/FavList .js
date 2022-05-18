import { useState, useEffect } from 'react';
import Movie from '../Movie/Movie';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'


export default function FavList() {
    const [favMovie, setFavMovie] = useState();
console.log(favMovie)
    async function getFavMovies() {
        let url = `${process.env.REACT_APP_SERVER}/getMovies`
        let response = await fetch(url, {
            method: 'GET',
           
        });

        let recivedData = await response.json();
        setFavMovie(recivedData)
        console.log(recivedData,"11111111111")  
      }

      async function handleDelete(ID) {
        let url = `${process.env.REACT_APP_SERVER}/DELETE/${ID}`;
        let response = await fetch(url, {
            method: 'DELETE',
        })
        

        if (response.status == 204) {
            getFavMovies();
            alert("Movie deleted successfully");
        }

    } 

useEffect(() => {
    getFavMovies();
}, []);
return (
    <>
        <h1>Favourite Movie Page</h1>

         {
    favMovie &&favMovie.map((favMovie) => {
         return (
             <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={favMovie.Image} />
                  <Card.Body>
                      <Card.Title>{favMovie.titl}</Card.Title>
                     <Card.Text>
                        {favMovie.details}
                    </Card.Text>
                    <Button variant="primary" onClick={()=>handleDelete(favMovie.ID)}>Delete</Button>
                  </Card.Body>
              </Card>
         )
     }
     )
 }
       
    </>
)
}


