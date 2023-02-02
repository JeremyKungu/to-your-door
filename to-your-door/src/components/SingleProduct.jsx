import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./SingleProduct.css";
import { CartState } from "../Context";

function SingleProduct({ foodData }) {
    const {
        state: { cart },
        dispatch,
    } = CartState();
    console.log(foodData)
  return (
    <div className='single-food-card'>
        {foodData.map((food) => (
            <div className='foodCard'>
                <img src={food.img_url} alt="food-item" />
                <p className='food_name'>{food.name}</p>
                <p>Price: {food.price}</p>
                <p>{food.category}</p>
                <Form>
                    <Form.Group className='quantity-box'>
                        <div className='order-action'>
                            {cart.some((p) => p.id === food.id) ? (
                                <Button
                                onClick={() => {
                                    dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: food,
                                    });
                                }}
                                variant="danger"
                                >Remove from Cart</Button>
                            ) : (
                                <Button
                                onClick={() => {
                                    dispatch({
                                        type: "ADD_TO_CART",
                                        payload: food,
                                    });
                                }}
                                >Add to Cart</Button>
                            )}
                        </div>
                    </Form.Group>
                </Form>
            </div>
        ))}
    </div>
  )
}

export default SingleProduct