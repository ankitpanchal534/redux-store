import React from 'react'
import './Card.css'
export default function Card(props) {


  
  return (
    <div className='card'>
      <img src={props.image} alt='product-image' className='product-image' />
      <span className='product-title'>{props.title}</span>
      <span>₹{props.price}</span>
      <button className='add-btn' onClick={()=>props.handleAdd(props)}>ADD TO CART</button>
    </div>
  )
}
