import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <div className='footer-social-logo'>
                <img src={assets.Logo3} alt="" />    
            </div>
            <p>Hopia like it!</p>
        </div>
        <div className="footer-content-left">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>Globe: 0905 520 0362</li>
                <li>DITO: 0994 358 9435</li>
                <li>parohinogsherylashleymharie@gmail.com</li>
                <li>Address: 790 sevilla st. binondo manila</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">© 2025 Hopia's Eatery. All rights reserved.</p>
    </div>
  )
}

export default Footer

//removed:
/*
        <div className="footer-content-right">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
*/
/*
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
            </div>
*/
