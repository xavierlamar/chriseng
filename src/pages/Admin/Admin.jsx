import React, { useState } from 'react'
import './Admin.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo.png'
import {Container} from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import Slider from '../../containers/Slider/Slider';
import Products from '../../containers/Products/Products';
import Services from '../../containers/Services/Services';
import CLient from '../../containers/Clients/Client';


const Admin = () => {

  const [slider, SetSlider] = useState(true);
  const [products, SetProducts] = useState(true);
  const [services, SetServices] = useState(true);
  const [client, SetClient] = useState(true);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
        <Container className="container">
          <Link to="/" className='nav_links'>

            <div className="chriseng__logo">
              <img src={logo} alt="logo" />
            </div>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
            <Nav className="chriseng__links">

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <div className='dashboard px-5'>
        <div className='section1 '>

          <p onClick={() => {
            SetSlider(false)
            SetProducts(true)
            SetServices(true)
            SetClient(true)
          }}>
            Slider
          </p>


          <p onClick={() => {
            SetProducts(false)
            SetSlider(true)
            SetServices(true)
            SetClient(true)
          }}>
            Products
          </p>


          <p onClick={() => {
            SetServices(false)
            SetProducts(true)
            SetSlider(true)
            SetClient(true)
          }}>
            Services
          </p>

          <p onClick={() => {
            SetClient(false)
            SetServices(true)
            SetProducts(true)
            SetSlider(true)
          }}>
            Client Messages
          </p>

        </div>
        <div className=''>

          {/* Slider */}
          <div style={{ display: slider ? "none" : "block" }} className='section2 slider_items px-7'>
            <Slider/>
          </div>

          {/* Products */}
          <div style={{ display: products ? "none" : "block" }} className='section3'>
            <Products/>
          </div>

          {/* Services */}
          <div style={{ display: services ? "none" : "block" }} className='section4'>
          <Services/>
          </div>

          {/* Client */}
          <div style={{ display: client ? "none" : "block" }} className='section5 mx-4'>
            <CLient/>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Admin