import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/navbar.css"

function navbar() {
  return (
    <div className='main'>
      <ul className='nav'>
        <li>
          {/* <a  className='active' href="/home">Home</a> */}
          <NavLink to="/home">Home</NavLink>

        </li>
        <li>
          {/* <a className='active' href="/pricing">Pricing</a> */}
          <NavLink to="/contact">Contact</NavLink>

        </li>
        <li>
          {/* <a  className='active' href="/about">About</a> */}
          <NavLink to="/about">About</NavLink>

        </li>
        <li>
          {/* <a  className='active' href="/github">Github</a> */}
          <NavLink to="/github">Social Media</NavLink>

        </li>
      </ul>
      
    </div >
  )
}

export default navbar