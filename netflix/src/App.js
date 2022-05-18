import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './ components/Home/Home';
import Movie from './ components/Movie/Movie';
import Spinner from 'react-bootstrap/Spinner'
import Bar from '../src/ components/Navbar/Navbar'
import Footer from './ components/Footer/Footer';
import FavList from './ components/FavList/FavList ';

function App() {
  return (

    <div className="App">
 { <h1>Welcome to Netflex-Clone!</h1> }    
  <h1>We are at home now</h1>
<>
<Spinner animation="border" variant="primary" />
<Spinner animation="grow" variant="success" />
<Spinner animation="border" variant="success" />
<Spinner animation="border" variant="danger" />
<Spinner animation="border" variant="warning" />
<Spinner animation="border" variant="info" />
<Spinner animation="grow" variant="warning" /> 
<Bar/> 
</>
    <Routes>
    <Route path="FavList" element={<FavList />} />
      <Route path="/" element={<Home />} />
  
    </Routes>
    <>
    <Footer/>
    </>
  </div>
   
  );
}

export default App;
