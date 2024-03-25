// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import "./Product.css"
function Product({searchValue,setSearchValue}) {
    const[open,setOpen] = useState(false);
    const dispatch = useDispatch();
    const {data:products,status} = useSelector(state=>state.products);
    const [apiData,setApiData] = useState([]);

    useEffect(() => { 
      //clearing search
      setSearchValue("")
      // Dispatch an action for fetch products:
      dispatch(getProducts())
          .then((response) => {
              // Set products data to apiData state
              console.log("Data",response.payload);
              setApiData(response.payload);
          })
          .catch((error) => {
              console.error('Error fetching products:', error);
          });
  }, [dispatch]);
  
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

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false); // Close message
    };
    const cards = apiData.map((product,index)=>(
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
        <div>
           <Button variant="contained" onClick={()=>{
            addToCart(product);
            setOpen(true);
            
           }}>Add to Cart</Button>
            <Snackbar
              open={open}
              autoHideDuration={4000}
              onClose={handleClose}
             
             
            >
              <Alert elevation={0} variant="filled" onClose={handleClose} severity="success">
          Item added to cart!
        </Alert>
            </Snackbar>
           
        
        </div>
     
      
      </Card.Footer>
    </Card>

        </div>
    ));
    const cards2 = apiData.filter((product,index)=>(product.title.toLowerCase()).includes(searchValue.toLowerCase())).map((product,index)=>(
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
      <div>
         <Button variant="contained" onClick={()=>{
          addToCart(product);
          setOpen(true);
          
         }}>Add to Cart</Button>
          <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
           
           
          >
            <Alert elevation={0} variant="filled" onClose={handleClose} severity="success">
        Item added to cart!
      </Alert>
          </Snackbar>
         
      
      </div>
   
    
    </Card.Footer>
  </Card>

      </div>
  ));;


  return (
    <>
     {/* <h1>Product DashBoard</h1> */}
      <div className='container'>
      <div className='row pb-5'>
            {/* {cards} */}
            {searchValue===""?cards :(cards2.length>0?cards2:<div className='no-data'
            >No Data</div>)}
        </div>
      </div>
    </>
  )
}

export default Product