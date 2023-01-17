import React from 'react'
import './Home.css'
import Footer from '../../components/Footer/Footer'
import Slider1 from '../../components/Slider/Slider'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from './../../assets/image1.png'
import colon from './../../assets/colon.png'
import { Slider } from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';

const Home = () => {
  return (
    <>
    <NavBar />
    <div>
      <header className='home_header'>
        <Slider1 />
      </header>
      <Container>
        <Row className='home_product_services'>
          <Col className='image_home'>
            <img src={image1} alt="image1" />
            <div className='home_text py-4'>
              <h2>Product & Services</h2>
              <p className='pb-2'>Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus fuisset intellegam. Per case melius assentior ea. Et scaevola insolens eum. Ad vix verear eruditi ancillae, fabulas assentior his at, eum no dico euripidis reprehendunt. Cibo delectus eu ius, usu veri putent at. His tamquam evertitur appellantur an, eam omnis blandit officiis id, eu nostro tacimates pri. Te vim denique fabellas deseruisse, ad est mandamus neglegentur, vim adhuc consequat an. At putent commodo patrioque pro, nihil reprimique et pro. Et sea graece consulatu conclusionemque. Doctus iudicabit ex eam.
              </p>

            </div>
          </Col>
            <div className='product_box my-3'>
              <Row>
                <Col sm={7}>
                <div className='product_box_one py-10 px-12'>
                  <h4>Why Buy From Us ?</h4>
                  <p>
                    Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruissetid sed doctus fuisset intellegam. Per case melius assentior ea. Et scaevola insolens eum. Ad vix verear eruditi ancillae, fabulas assentior his at, eum no dico euripidis reprehendunt.
                  </p>
                </div>
                </Col>
                <Col >
                <div className='product_box_two py-10 px-12'>
                <h5 >Skill One</h5>
                <Slider
                sx={{ height: 8 }}
                defaultValue={50} 
                aria-label="Default" 
                valueLabelDisplay="auto" />
                <h5 >Skill One</h5>
                <Slider
                sx={{ height: 8 }}
                defaultValue={50} 
                aria-label="Default" 
                valueLabelDisplay="auto" />
                <h5 >Skill One</h5>
                <Slider
                sx={{ height: 8 }}
                defaultValue={50} 
                aria-label="Default" 
                valueLabelDisplay="auto" />
                </div>
                </Col>
              </Row>

            </div>
        </Row>
      </Container>

        <div className='home_banner'>
            <div className="overlay">
          <h2 className=''>How & Why of our<br/> products and services</h2>
          <button className=''>Read More</button>
            </div>
        </div>

        <div className='service_home pt-3 pb-16'>
          <div className='item1'>
            <div className='items_services px-8'>
            <div className="service_item">
              <div className='service_text py-3 px-8'>
                <h4>Store</h4>
                <h2>Service name</h2>
                <p>Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus <br/>fuisset intellegam.</p>
                <button>Read More</button>
              </div>
            </div>
            <div className="service_item">
            <div className='service_text py-3 px-8'>
                <h4>Store</h4>
                <h2>Service name</h2>
                <p>Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus <br/>fuisset intellegam.</p>
                <button>Read More</button>
              </div>
            </div>
            </div>
            <div className='items_services px-8'>
            <div className="service_item">
            <div className='service_text py-3 px-8'>
                <h4>Store</h4>
                <h2>Service name</h2>
                <p>Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus <br/>fuisset intellegam.</p>
                <button>Read More</button>
              </div>
            </div>
            <div className="service_item">
            <div className='service_text py-3 px-8'>
                <h4>Store</h4>
                <h2>Service name</h2>
                <p>Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus <br/>fuisset intellegam.</p>
                <button>Read More</button>
              </div>
            </div>
            </div>
          </div>

            <div className='item2 px-2 pt-24'>
              <div className="service_box pt-10 pl-6">
                <h1 >An Experience<br/>Design Agency
                </h1>
                <h6 className='pt-4'>Provides a full service range</h6>
                <p>Ability to put themselves in the merchant's shoes. It is meant to <br/>partner on the long run, and work as an extension of the merchant's <br/>team.</p>
                <button className='pt4'>About Us</button>
              </div>
            </div>
        </div>

        <div className="help pt-4 pb-12">
              <div className="help_block">
                <img src={colon} alt='img'/>
                <p className='pl-4'>Provide your business with a variety of digital solutions to promote<br/> your product or service online and help you</p>
              </div>
            </div>
        <Footer/>
    </div>
    </>
  )
}

export default Home