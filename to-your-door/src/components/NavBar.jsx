import React from 'react'
import "./NavBar.css"
import { NavLink } from "react-router-dom";
import { MdDeliveryDining } from "react-icons/md";

function NavBar() {
  return (
    <>
    <nav className='navbar'>
        <div className='nav-brand'>
        <MdDeliveryDining className="delivery-icon" size="30px" />
        <h2>To Your Door</h2>
        </div>

        <div className='navbar-nav'>
            <ul id='my-nav-links' className='nav-links'>
            <li>
              <NavLink className="navlink" to="/">
                <i className="fa fa-fw fa-home"></i>Home
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to="/profile">
                <i className="fa fa-fw fa-user"></i>Profile
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to="/login">
                <i className="fa fa-sign-in"></i> My Account
              </NavLink>
            </li>

                <li>
                    <NavLink className="navlink">
                    <i className="fa fa-shopping-cart"></i>&nbsp;Cart &nbsp;
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default NavBar