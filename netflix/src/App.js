import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Spinner from "react-bootstrap/Spinner";
import FavList from "./components/FavList/FavList.js";

function App() {
  return (
    <div className="App">
      {<h1>Welcome to Netflex-Clone!</h1>}
      <h1>We are at home now</h1>
      <>
        <Spinner animation="border" variant="primary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="warning" />
        <Spinner animation="border" variant="info" />
        <Spinner animation="grow" variant="warning" />
      
      </>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/favlist" element={<FavList />} /> 
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
