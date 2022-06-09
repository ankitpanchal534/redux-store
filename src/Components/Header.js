import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="header-parent">
      <NavLink to="/" className="navLink">
        REDUX STORE
      </NavLink>
      <div className="header-child">
        <NavLink to="/" className="navLink">
          Home
        </NavLink>
        <NavLink to="cart" className="navLink">
          Cart <FaShoppingCart />{" "}
          <b className="cart-count">{cartItems.length}</b>
        </NavLink>
      </div>
    </div>
  );
}
