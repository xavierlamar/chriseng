import React from 'react'
import './Footer.css'
import vortex from './../../assets/vortex.png'
import fuzion from './../../assets/fuzion.png'
import digital from './../../assets/digital.png'
import mediapic from './../../assets/mediaquery.png'
import travel from './../../assets/travel.png'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {
  return (
    <>
    <div className="partner py-4">
          <img src={digital} className='py-4 px-20' alt='digital'/>
          <img src={vortex} className='py-4 px-20' alt='vortex'/>
          <img src={travel} className='py-4 px-20' alt='travel'/>
          <img src={fuzion} className='py-4 px-20' alt='fuzion'/>
          <img src={mediapic} className='py-4 px-20' alt='mediaquery'/>

        </div>
    <div className='footer py-5 px-3'>
        
        <div className="footer_section1 px-34">
            <h2>CHRISENG © 2018</h2>
            <h3>A Travelers’ Blog</h3>
            <p>Our main focus is to provide high quality, objective and informative travelling content from over the world.</p>
        </div>
        <div className="footer_section2 py-4 px-34">
            <div className='flex'>

            <div className='section11 px-10'>
                <h6>Navigation</h6>
                <p>Home</p>
                <p>Discover</p>
                <p>Search</p> 
                <p>Upload</p> 
            </div>
            <div  className='section22 px-10'>
                <h6>Links</h6>
                <p>about Us</p>
                <p>Contact Us</p>
                <p>Sitemap</p>
                <p>Contribute</p>
            </div>
            </div>
            <div className='follow px-10 pb-28'>
                <h6><b>Follow Us</b></h6>
                <div className='flex'>
                    <AiFillFacebook  size={50}  />
                    <AiFillTwitterSquare size={50}/>
                    <AiFillInstagram size={50}/>
                    <AiFillYoutube size={50}/>
                </div>
            </div>
        </div>
    </div>
    </>

  )
}

export default Footer