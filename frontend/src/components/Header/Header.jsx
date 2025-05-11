import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>Kung gusto mo ng masarap, sa Hopia's Eatery mo lamang ito malalasap—order na!</p>
        <p>Hopia's eatery: sarap that feels home.</p>
        <a href="#explore-menu">
          <button>View Menu</button>
        </a>
      </div>
    </div>
  )
}

export default Header
