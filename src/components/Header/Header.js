import React from 'react';
import { useState } from 'react';
import { Form, FormControl, Nav, Navbar, Button, Container } from 'react-bootstrap';
import {NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
     
   
    return (
        
        <Navbar className="bg-info " expand="lg">
            <Container className="manu">
          <Navbar.Brand href="#" >
              <img src="" alt="" />
          </Navbar.Brand>
           <Navbar.Toggle aria-controls="navbarScroll" />
             <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 navbar-new"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/Home"  className="link-style" activeStyle={{
    
    color: "white",
    backgroundColor:"blue",
    borderRadius:"20px",

  }}>Home</NavLink>
            <NavLink to="/About"  className="link-style" activeStyle={{
    
    color: "white",
    backgroundColor:"blue",
    borderRadius:"20px",

  }}>About</NavLink>
 
            <NavLink to="/Search"  className="link-style" activeStyle={{
    
    color: "white",
    backgroundColor:"blue",
    borderRadius:"20px",

  }}>Search</NavLink>
        
            
          </Nav>
         
        </Navbar.Collapse>
        </Container>
      </Navbar>
    
    );
};

export default Header;