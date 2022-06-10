import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../Store/cartSlice";
import CartCard from "./CartCard";
export default function Cart() {
  const Products = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const removeHandler = (product) => {
  
    dispatch(remove(product.item));
  };

  return (
    <div className="cart">
      <h1>My Cart</h1>
      <div className={Products ==""?"cartProducts-flex":"cartProducts-block"}>
        {Products ==""?(
          <h1> Your Cart is Empty</h1>
        ):(
          Products.map((item, i) => (
            <CartCard
              CartProducts={item}
              key={i}
              removeHandler={removeHandler}
            />
          ))
        )
      
      
      
      }
      </div>
    </div>
  );
}
