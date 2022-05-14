import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import Movie from './components/Movie/Movie';

function App() {
  return (

    <div className="App">

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trending" element={<Movie />} />
    </Routes>

  </div>
    
  );
}

export default App;
