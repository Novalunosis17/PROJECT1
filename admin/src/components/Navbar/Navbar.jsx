import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.Rlogo} alt="" />
      <img className='profile' src={assets.Rprofile_image} alt="" />
    </div>
  )
}

export default Navbar
