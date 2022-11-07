import React from 'react'
import {
    Container ,Nav ,Navbar  
} from 'react-bootstrap'
import { Link} from 'react-router-dom'

const Header = () => {
  return <header>
    <Navbar bg="light" expand="lg">
      <Container>
      
        <Navbar.Brand  >E-shop</Navbar.Brand>
         
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto'>
        
       
               {/* <Nav.Link as={Link} to={"/cart"}> */}
               <Nav.Link as={Link} to="/cart">

              <i className='fas fa-shopping-cart'></i>Cart
              </Nav.Link>
             

    
            <Nav.Link ><i className='fas fa-user'></i>Sign In</Nav.Link>
           
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
}

export default Header