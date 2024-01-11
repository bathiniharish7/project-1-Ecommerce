import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice';
import OrderDetails from './OrderDetails';
import CartCard from './CartCard';

function Cart() {

    const products = useSelector(state=>state.cart);
    const cards = products.map((product,index)=>{
      return <CartCard product={product} index={index}/>
    })
    
  return (
    <>
    <div className='container'>
    <h2 className='mb-3'>My Cart - Order Summary</h2>
    <OrderDetails items={products}/>
    <button className='btn btn-warning text-dark w-100 ' style={{fontWeight:'600',border:'0.6px solid black'}}
    onClick={()=>{alert("This Feature is under Development")}}
    >ORDER NOW</button>
    <div className='row mt-5'>
        {cards}
    </div>
    </div>

    </>
  )
}

export default Cart