import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    return (
        <div className='Navbar'>
    <div className="logo"><h2>e-store</h2>  </div>

    <Link to='/' className='navlink'>Home</Link>
    <Link to='/products' className='navlink'>Products</Link>  

<div className="user">   
  <div className="dropdown">
    <p className=" dropdown-toggle far fa-user " type="button"  data-bs-toggle="dropdown" data-bs-display="static" ></p>
    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start  bg-dark">

    <li> <Link to='/login' className='userlink  dropdown-item'>Login</Link></li>
    <li><Link to='signup' className='userlink dropdown-item'>SignUp</Link></li>
  </ul>
</div>
</div>

            
        </div>
    )
}

export default Navbar
