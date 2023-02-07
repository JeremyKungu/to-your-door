import React, { useState } from 'react';
import './App.css';
// import NavBar from './components/NavBar';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Restaurant from './components/Restaurant';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Food from './components/Food';
import ProtectedRoutes from "./ProtectedRoutes"
import Cart from './components/Cart';

function App() {
  const [user, setUser] = useState("User");
  const [amount, setAmount] = useState("");
  return (
  <>
  {/* <NavBar /> */}
  <Routes>
    <Route path="/" element={<Home />} />
    <Route element={<ProtectedRoutes />}>
      <Route path='/cart' element={<Cart setAmount={setAmount}/>} />
      <Route path='/restaurant' element={<Restaurant />} />      
      <Route path="/food" element={<Food />} />
    </Route>

    <Route path='/login' element={<Login setUser={setUser}/>} />
    <Route path='/signup' element={<SignUp />} />
    
  </Routes>
  </>
  )
}

export default App;
