import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className='footer'>
         
        <div className='Content'>
           <div className="sections">
               <h4>Get to Know Us</h4>
               <p>About Us</p>
               <p>Careers</p>
               <p>Amazon Cares</p>
               
           </div>
           <div className="sections">
               <h4>Connect with Us</h4>
               <p className="fab fa-facebook"> Facebook</p> <br />
               <p className="fab fa-twitter"> Twitter</p> <br />
               <p className="fab fa-instagram"> Instagram</p>
           </div>
           <div className="sections">
               <h4>Select Country</h4>
               <p>Australia</p>
               <p>Brazil</p>
               <p>India</p>
               <p>Japan</p>
               <p>Uk</p>
           </div>
           <div className="sections">
               <h4>Language</h4>
               <p>English</p>
               <p>French</p>
               <p>Chinese</p>
               <p>Hindi</p>
               <p>Malayalam</p>
           </div>
        </div>
        <div className='divider'></div>
        <div className='footerlogo'>
        <h3>e-store</h3>
        </div>
        </div>
    )
}

export default Footer
