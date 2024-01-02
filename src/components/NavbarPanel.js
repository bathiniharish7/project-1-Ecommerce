import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function NavbarPanel() {
    const cartProduct = useSelector((state)=>state.cart)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="/">Redux - Toolkit</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to='/' as={Link}>All Products</Nav.Link>
        </Nav>
        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
            <Nav.Link to='/cart' as={Link}>MY Bag {cartProduct.length}</Nav.Link>
            </Navbar.Text>
        </Navbar.Collapse>

       
      
    </Container>
  </Navbar>
  )
}

export default NavbarPanel