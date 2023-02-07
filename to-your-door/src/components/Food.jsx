import React, { useState, useEffect} from 'react'
import SingleProduct from "./SingleProduct";


function Food() {
    const [foodData, setFoodData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/meals")
        .then((res) => res.json())
        .then((data) => setFoodData(data))
    }, []);
    console.log(foodData)

  return (
    <div className='food-card-container'>
        <SingleProduct foodData={foodData} />
    </div>
  )
}

export default Food