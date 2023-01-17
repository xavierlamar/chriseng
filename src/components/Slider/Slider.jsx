import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Carousel from 'react-bootstrap/Carousel';
import header1 from './../../assets/header1.png';
import './Slider.css'

const Slider1 = () => {
  return (
    <div>
    <Carousel >
      <Carousel.Item >
        <img
          className="d-block w-100 "
          src={header1}
          alt="First slide"
        />
        <Carousel.Caption className=''>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>

      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={header1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={header1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slider1