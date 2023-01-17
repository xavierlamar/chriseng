import React from 'react'
import './NavBar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo.png'
import { Container } from 'react-bootstrap';


const NavBar = () => {

  return (
    <>
     <Navbar collapseOnSelect expand="lg"  bg="black" variant="dark">
        <Container className="container">
        <Link to="/" className='nav_links'>

          <div className="chriseng__logo">
            <img src={logo} alt="logo" />
        </div>
        </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav className="chriseng__links">
          <Link to="/" className='nav_links'>Home</Link>
            <Link to="/about" className='links_border nav_links'>About Us</Link>
            <Link to="/product_services" className='links_border nav_links'>Product & Services</Link>
            <Link to="/contact" className='links_border nav_links'>Contact Us</Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    {/* <div className='chriseng__navbar flex'>
        <div className="chriseng__logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="chriseng__links">
            <Link to="/" className='nav_links'>Home</Link>
            <Link to="/about" className='links_border nav_links'>About Us</Link>
            <Link to="/product_services" className='links_border nav_links'>Product & Services</Link>
            <Link to="/contact" className='links_border nav_links'>Contact Us</Link>
        </div>
        <div className="chriseng__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color='#FFF' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#FFF' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="chriseng__navbar-menu_container scale-up-center">
            <div className='chriseng__navbar-menu_container-links'>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/about">About Us</Link></p>
            <p><Link to="/product_services">Product & Services</Link></p>
            <p><Link to="/contact">Contact Us</Link></p>
            </div>
          </div>
        )}
      </div>
    </div> */}
    </>
  )
}

export default NavBar