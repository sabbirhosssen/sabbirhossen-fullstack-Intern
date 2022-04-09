import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { GrLanguage } from "react-icons/gr";
import "./Header.css";
const Header = () => {
  const [button,setButton]=useState(true);
 const [navbar,setNavbar]=useState(false);

    return (
        <div className='navbar '>
            <Navbar collapseOnSelect expand="lg"  className="header_background">
         <Container>
         <Navbar.Brand href="#home" className='header_title_font'>
         <svg className='me-2 header-icon' width="36" height="36" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.49691e-07 8L2.34315 2.34315L8 3.49691e-07L13.6569 2.34315L16 8L13.6569 13.6569L8 16L2.34315 13.6569L3.49691e-07 8Z" fill="#FFCD37"/>
          </svg> <span className='header_title_font_span '>AkA</span>.coin</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggle' />
         <Navbar.Collapse id="responsive-navbar-nav " className='collapse'>
           <Nav className="ms-auto menu">
             <Nav.Link href="#features" className='header_font '>Ecosystem</Nav.Link>
             <Nav.Link href="#pricing" className='header_font'>Buy</Nav.Link>
             <Nav.Link href="#pricing" className='header_font'>What is AKO?</Nav.Link>
             <Nav.Link href="#pricing" className='header_font'>Learn</Nav.Link>
             <Nav.Link href="#pricing" className='header_font'>Community</Nav.Link>
             <NavDropdown title={<GrLanguage className='header_font'/>} align={{ lg: 'end' }} id="dropdown-menu-align-responsive-1" className=''>
               <NavDropdown.Item href="#action/3.1" className='header_font'>Action</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.2" className='header_font'>Another action</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.3" className='header_font'>Something</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
             </NavDropdown>
           </Nav>
           <Nav>
           </Nav>
         </Navbar.Collapse>
         </Container>
        </Navbar>
        </div>
    );
};

export default Header;