import React from 'react'
import './Card.css'
export default function Card(props) {


  
  return (
    <div className='card'>
      <img src={props.item.image} alt='product-image' className='product-image' />
      <span className='product-title'>{props.item.title}</span>
      <span>₹{props.item.price}</span>
      <button className='add-btn' onClick={()=>props.handleAdd(props)}>ADD TO CART</button>
    </div>
  )
} 
