import React, { useState } from 'react';
import './App.css';
// import NavBar from './components/NavBar';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Restaurant from './components/Restaurant';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState("User");
  return (
  <>
  {/* <NavBar /> */}
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/restaurant' element={<Restaurant />} />
    <Route path='/login' element={<Login setUser={setUser}/>} />
  </Routes>
  </>
  )
}

export default App;
