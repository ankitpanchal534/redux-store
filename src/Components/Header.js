import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"

export default function Header() {
  return (
    <div className='header-parent'>
        <span>REDUX STORE</span>
        <div className='header-child'>
            <NavLink to="/" className="navLink">Home</NavLink>
            <NavLink to="cart" className="navLink">Cart</NavLink>
            <span className="navLink "><b>Cart ITEMS :0</b> </span>

            </div>
    </div>
  )
}
