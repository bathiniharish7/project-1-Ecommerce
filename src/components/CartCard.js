import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';


function CartCard({product,card}) {

    const dispatch = useDispatch()
    const removeFromCart=(id)=>{
        dispatch(remove(id));
    }

  return (
    <div className='col-md-6 col-lg-4 col-xl-3' key={product.id} style={{marginBottom:'10px'}}>
    <Card className='pt-3 h-100'  >
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
  )
}

export default CartCard