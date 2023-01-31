import React from 'react';
import './App.css';
// import NavBar from './components/NavBar';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Restaurant from './components/Restaurant';

function App() {
  return (
  <>
  {/* <NavBar /> */}
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/restaurant' element={<Restaurant />} />
  </Routes>
  </>
  )
}

export default App;
