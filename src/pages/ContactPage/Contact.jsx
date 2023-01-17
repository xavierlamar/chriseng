import React from 'react'
import './Contact.css'
import NavBar from '../../components/NavBar/NavBar'
import contact from '../../assets/contact_img.png'
import Footer from '../../components/Footer/Footer'
const Contact = () => {
  return (
    <div>
      <NavBar />
      <div className="contact_section px-2 py-8">
        <div className='mx-3'>
          <img src={contact} alt="contact" className='contact_img my-3' />
        </div>
        <div className="contact_form px-10 py-3">
          <h3>Get In Touch</h3>
          <input type="text" className='my-2 mx' placeholder='Your Email'/>
          <input type="text" className='my-2' placeholder='Subject'/>
          <input type="text" className='my-2' placeholder='Message'/>
          <button className=' my-6'>SUBMIT NOW</button>
        </div>
      </div>
      <div className="faq_section ">
        <div className="faq_section1 mx-3">
          <h3>Frequently Asked<br/> Questions</h3>
          <div>
            <p>A digital agency is a business you hire to outsource your digital marketing efforts, <br/>instead of handling in-house.</p>
          <h6>Ask us anything</h6>
          </div>
          
        </div>
        <div className="faq_section2 mx-3">
        <div className="faq_items">
         <p>A digital agency is a business</p> 
        </div>
        <div className="faq_items">
         <p>Hire to outsource your digital</p> 
        </div>
        <div className="faq_items">
         <p>Marketing efforts</p> 
        </div>
        <div className="faq_items">
         <p>Can provide your business</p> 
        </div>
        </div>
      </div>

      {/* map */}
      <div className="section_map">
        <div className="section_map1">
        
        </div>
        <div className="section_map2">
          <div className='items'>
            <h5>PHONE</h5>
            <p>+1 (234) 567-89-00</p>
          </div>
          <div className='items'>
            <h5>EMAIL</h5>
            <p>info@agency.com</p>
          </div>
          <div className='items ml-20'>
            <h5>ADDRESS</h5>
            <p>2247 Lunetta Street, TX 76301</p>
          </div>
        </div>
      </div>

      <Footer/>
      </div>
  )
}

export default Contact