import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';

function Product() {

    const dispatch = useDispatch();
    const {data:products,status} = useSelector(state=>state.products)

    // const [products,getProducts] = useState([]);
    useEffect(()=>{
        //Dispacth an action for fetch products:
        dispatch(getProducts())
        // fetch('https://fakestoreapi.com/products')
        //     .then(res=>res.json())
        //     .then(json=>getProducts(json))

    },[])
    if(status === 'loading')
    {
        return <p>loading...</p>
    }
    if(status ==='error')
    {
        return <p>Something went wrong! Try again later</p>
    }

    const addToCart =(product)=>{
        dispatch(add(product));
    }

    const cards = products.map((product,index)=>(
        <div className='col-md-6 col-lg-4 col-xl-3'  key={product.id} style={{marginBottom:'10px'}}>
    <Card className='pt-3 h-100'>
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
      <Button variant="primary" onClick={()=>addToCart(product)}>Add to Cart</Button>
      </Card.Footer>
    </Card>

        </div>
    ))

  //   const cards = products.map((product, index) => (
  //     <Card key={product.id} className='col-md-6 col-lg-4 col-xl-3 ' style={{ marginBottom: '10px', width:'300px',margin:'10px' }}>
  //         <div className='text-center pt-3'>
  //             <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
  //         </div>
  
  //         <Card.Body>
  //             <Card.Title>{product.title}</Card.Title>
  //             <Card.Text>
  //                 INR:{product.price}/-
  //             </Card.Text>
  //         </Card.Body>
  
  //         <Card.Footer style={{ background: 'white' }}>
  //             <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
  //         </Card.Footer>
  //     </Card>
  // ));
  
  return (
    <>
     <h1>Product DashBoard</h1>
      <div className='container'>
      <div className='row pb-5'>
            {cards}
        </div>
      </div>
    </>
  )
}

export default Product