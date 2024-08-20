import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <nav className="navbar">
      <div className="navbar-content">
        <h1>Healthify</h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/admin'>Admin</Link></li>
          <li><Link to='/patients'>Patients</Link></li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
