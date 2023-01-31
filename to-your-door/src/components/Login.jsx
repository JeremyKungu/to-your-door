import React from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Login({ onLogin, setUser}) {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [errors, setErrors] = useState("");

    // const navigate = useNavigate;

  return (
    <div className='login-container'>
        <div className='header'>
            <h6>Welcome to</h6>
            <h1>To Your Door App</h1>
        </div>

        <div className='main'>
            <form>
                <span>
                    <i className="fa fa-user icons"></i>
                    <input
                     type="text"
                     placeholder='Username'
                     name='username'
                    ></input>
                </span>
                <br></br>

                <span>
                    <i className="fa fa-lock"></i>
                    <input
                     type="password"
                     placeholder='password'
                     name='password'
                    ></input>
                </span>
                <br></br>

                <button type='submit' id='login-btn'>
                    Login
                </button>

                <div className='links'>
                    <p>Don't have an account?&nbsp;</p>
                    <Link to="/signup">Signup</Link>
                </div>
            </form>
        </div>

    </div>
  )
}

export default Login