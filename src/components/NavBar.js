import React from 'react'
import './NavBar.css'
function NavBar() {
  return (
    <div className='nav'>
        <div className='left'>
        <h1>Amazon</h1>
        <div className='search-container'>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type='text' placeholder='Search Here'/>
        </div>
        </div>
    </div>
  )
}

export default NavBar