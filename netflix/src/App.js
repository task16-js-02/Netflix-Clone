import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './ components/Home/Home';
function App() {
  return (

    <div className="App">
    <h1>Welcome to Netflex-Clone!</h1>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="about" element={<About />} /> */}
    </Routes>
  </div>
    
  );
}

export default App;