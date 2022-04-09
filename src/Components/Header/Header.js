import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { GrLanguage } from "react-icons/gr";
import { Link } from 'react-router-dom';
import "./Header.css";
const Header = () => {

    return (
        <div className='navbar '>
            <Navbar collapseOnSelect expand="lg"  className="header_background py-3 border-bottom">
         <Container>
           
         <Navbar.Brand as={Link} to="/" className='header_title_font'>
         <svg className='me-2 header-icon' width="36" height="36" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.49691e-07 8L2.34315 2.34315L8 3.49691e-07L13.6569 2.34315L16 8L13.6569 13.6569L8 16L2.34315 13.6569L3.49691e-07 8Z" fill="#FFCD37"/>
          </svg> <span className='header_title_font_span '>AkA</span>.coin</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggle' />
         <Navbar.Collapse id="responsive-navbar-nav " className='collapse'>
           <Nav className="ms-auto menu">
             <Nav.Link as={Link} to="/intro" className='header_font '>Ecosystem</Nav.Link>
             <Nav.Link as={Link} to="/intro"  className='header_font'>Buy</Nav.Link>
             <Nav.Link as={Link} to="/intro"  className='header_font'>What is AKO?</Nav.Link>
             <Nav.Link as={Link} to="/intro" className='header_font'>Learn</Nav.Link>
             <Nav.Link as={Link} to="/intro"  className='header_font'>Community</Nav.Link>
             <NavDropdown 
             title={<GrLanguage className='header_font'/>} 
             align={{ lg: 'end' }} 
             id="dropdown-menu-align-responsive-1" 
             className=''>
               <NavDropdown.Item as={Link} to="/login" className='header_font'>Login</NavDropdown.Item>
               <NavDropdown.Item as={Link} to="/signup" className='header_font'>Sign up</NavDropdown.Item>
              
               {/* <NavDropdown.Divider /> */}
               
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