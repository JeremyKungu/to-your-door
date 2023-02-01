import React, { useState} from 'react'
import "./SignUp.css"
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {
    const [errors, setErrors] = useState()
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        password: "",
        password_confirmation: "",
    });

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:3000/signup", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            localStorage.setItem("user", JSON.stringify(data.customer))
            localStorage.setItem("token", data.token)
            navigate("/")
        })
        .catch((err) => console.error(err))
    };
  return (
    <div className='signup-container'>
        <div className='signup-header'>
            <h3>Hi there! Order today</h3>
            <h1>To Your Door</h1>
        </div>

        <div className='main-content'>
            <form>
                <input
                type="text"
                name=""
                onChange={(e) => 
                    setFormData({ ...formData, first_name: e.target.value })
                }
                placeholder="First Name"
                ></input>

                <input
                type="text"
                name=""
                onChange={(e) => 
                    setFormData({ ...formData, last_name: e.target.value })
                }
                placeholder="Last Name"
                ></input>

                <input
                type="email"
                name=""
                onChange={(e) => 
                    setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Email"
                ></input>

                <input
                type="text"
                name=""
                onChange={(e) => 
                    setFormData({ ...formData, username: e.target.value })
                }
                placeholder="Username"
                ></input>  

                <input
                type="password"
                name=""
                onChange={(e) => 
                    setFormData({ ...formData, password: e.target.value })
                }
                placeholder="Password"
                ></input> 

                <input
                type="password"
                name=""
                onChange={(e) => 
                    setFormData({ ...formData, password_confirmation: e.target.value })
                }
                placeholder="Confirm Password"
                ></input>

                <div className='signup-link'>
                    <button
                        type='submit'
                        onClick={(e) => handleSubmit(e)}
                        className='signup-btn'
                    >Signup</button>&nbsp;
                    <p>Already have an account?</p> &nbsp;
                    <Link to='/login'>Login</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp