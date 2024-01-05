import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

function OrderDetails({items}) {
    const[counter,setCounter] =useState(0);
    useEffect(()=>{
      console.log("UseEffect Triggered");
      console.log(items);
      setCounter(counter+1);
    },[items])
    
    const total=items.reduce((acc,current)=>{
        acc = acc + current.price;
        return acc;
    },0);
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>SL.NO</th>
        <th>Item Name</th>
        <th>Price</th>
       
      </tr>
    </thead>
    <tbody>
       {
       items.map((item,index) => (

        
          <tr key={index}>
            <td>{index+1}</td>
            <td>{item.title}</td>
            <td>{item.price}</td>
          </tr>
        ))}

        <tr>
          <th colSpan="2">Total Amount : </th>
          <th>Rs.{total.toFixed(2)}</th>
        </tr>
      
    </tbody>
  </Table>
  )
}

export default OrderDetails