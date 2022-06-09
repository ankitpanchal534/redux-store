import React from "react";
import "./CartCard.css";

export default function CartCard(props) {
  return (
    <div className="CartCard">
      <div className="cartCard-details">
        <img src={props.CartProducts.item.image} className="cartCardImage" />
        <div className="cart-product-title">
          <span>{props.CartProducts.item.title}</span>
          <br />
          <span className="product-category">
            {props.CartProducts.item.category}
          </span>
          <br />
          <span className="product-description">
            {props.CartProducts.item.description}
          </span>
          <br />

          <div className="product-details-rating">
            <span>Only {props.CartProducts.item.rating["count"]} Left</span>
            <span className="product-rating">
              {" "}
              ⭐ {props.CartProducts.item.rating["rate"]}{" "}
            </span>
          </div>
        </div>
      </div>
      <span className="cart-price-span">
        Price : ₹ {props.CartProducts.item.price}
      </span>

      <button
        className="del-btn"
        onClick={() => props.removeHandler(props.CartProducts)}
      >
        DELETE
      </button>
    </div>
  );
}
