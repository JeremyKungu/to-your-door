import React from 'react'
import Button from "react-bootstrap/Button";
import "./CartItem.css"

function CartItem( {food, dispatch}) {   

  return (
    <div className='cart-item'>
        <img className="cartItem-img" src={food.img_url} alt={food.name} />
        <div className='cart-info'>
            <div className='cartItem-detail'>
                <span>{food.name}</span>
                <span>Ksh {food.price}</span>
            </div>
            <Button
            fontSize="20px"
            style={{ cursor: "pointer", margin: ".75rem"}}
            onClick={() => 
                dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: food,
                })
            }
            >
                Remove
            </Button>
        </div>
    </div>
  )
}

export default CartItem