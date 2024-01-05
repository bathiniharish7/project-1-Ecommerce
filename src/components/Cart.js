import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice';
import OrderDetails from './OrderDetails';

function Cart() {

    const dispatch = useDispatch();
    const removeFromCart=(id)=>{
        dispatch(remove(id));
    }

    const products = useSelector(state=>state.cart);
    const cards = products.map((product)=>(
        <div className='col-md-6 col-lg-4 col-xl-3' style={{marginBottom:'10px'}}>
    <Card className='pt-3 h-100' key={product.id} >
        <div className='text-center'>
        <Card.Img variant="top" src={product.image} style={{width:'100px',height:'130px'} } />
        </div>
     
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
         INR:{product.price}/-
        </Card.Text>
        
      </Card.Body>
      <Card.Footer style={{background:'white'}}>
      <Button variant="danger" onClick={()=>removeFromCart(product.id)}>Remove From Cart</Button>
      </Card.Footer>
    </Card>

        </div>
    ))


    
  return (
    <>
    <div className='container'>
    <h2 className='mb-3'>My Cart - Order Summary</h2>
    <OrderDetails items={products}/>
    <div className='row mt-5'>
        {cards}
    </div>
    </div>

    </>
  )
}

export default Cart