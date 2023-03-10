import React from 'react'
import "./NavBar.css"
import { NavLink, Link } from "react-router-dom";
import { MdDeliveryDining } from "react-icons/md";
import { Modal, Badge } from "react-bootstrap";
import { useState } from 'react';
import { CartState } from '../Context';
import CartItem from './CartItem';
import Button from "react-bootstrap/Button";

function NavBar() {
  const [show, setShow] = useState(false);
  // for the modal and is set to false so that the modal doesnt show
  const handleClose =() => setShow(false);
  // this checks for the close event and hides the modal
  const handleShow = () => setShow(true);
  const {
    state: { cart },
    dispatch,
  } = CartState();
  //shows the modal

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
                    <NavLink className="navlink" onClick={handleShow}>
                    <i className="fa fa-shopping-cart"></i>&nbsp;Cart &nbsp;
                    <Badge>{cart.length}</Badge>
                    </NavLink>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Shopping Cart</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        {cart.length > 0 ? (
                          <>
                          {cart.map((food) => (
                            <CartItem food={food} dispatch={dispatch} />
                          ))}
                          <Link to="/cart">
                            <Button style={{ width: "95%", margin: "0 10px" }}>
                              Go to Checkout
                            </Button>
                          </Link>
                          </>
                        ) : (
                          <span>Cart is Empty!</span>
                        )}
                      </Modal.Body>
                    </Modal>
                </li>
            </ul>
        </div>
    </nav>
    </>
  );
}

export default NavBar