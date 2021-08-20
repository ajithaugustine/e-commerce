import React from 'react'
import {Link} from 'react-router-dom';
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './Login.css'

function Login() {
    return (
        <div>
        <Navbar />
        <div className="login">
          <form className='loginform' onSubmit={(e)=>e.preventDefault()}>
                <h3>Login</h3>
 
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
          
                placeholder="name@example.com"
              />
              <label >Email address</label>
            </div>
  
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
          
                placeholder="password"
              />
              <label >Password</label>
            </div>
    
            <button className="btn ">Login</button>
            <p>Don't have an account? <Link to ='/signup'>SignUp</Link> </p>
          </form>
        </div>
        <Footer />
      </div>
    )
}

export default Login
