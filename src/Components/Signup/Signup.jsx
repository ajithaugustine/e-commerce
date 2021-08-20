import React from "react";
import {Link} from 'react-router-dom';
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Signup.css";
function Signup() {
  return (
    <div>
      <Navbar />
      <div className="signup">
        <form className='signupform' onSubmit={(e)=>e.preventDefault()}>
              <h3>SignUp</h3>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="username"
            />
            <label >Name</label>
          </div>
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
              type="number"
              className="form-control"
         
              placeholder="Phonenumber"
            />
            <label >Phone</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
        
              placeholder="password"
            />
            <label >Password</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
          
              placeholder="Confirm Password"
            />
            <label >Confirm Password</label>
          </div>
          <button className="btn ">SignUp</button>
          <p>Already have an account? <Link to ='/login'>Login</Link> </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
