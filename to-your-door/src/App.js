import React from 'react';
import './App.css';
// import NavBar from './components/NavBar';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
  <>
  {/* <NavBar /> */}
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
  </>
  )
}

export default App;
