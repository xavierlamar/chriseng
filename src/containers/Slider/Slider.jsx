import React, { useState } from 'react'
import './Slider.css'
import { Col, Row } from 'react-bootstrap'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { BsFillStopBtnFill } from 'react-icons/bs'
import upload_pic from './../../assets/upload_pic.png'


const Slider = () => {
  const [addSlider, SetAddSlider] = useState(false)

  return (
    <div>
        <div className='add_slider pr-20 pb-16'>
          {
            addSlider
            ? <div className='flex mt-8'>
              <button className='px-6 py-4 mx-2'><BsFillPlusCircleFill size={50} className="mr-6" />Upload Image</button>
              <button onClick={()=> SetAddSlider(false)} className='px-6 py-4'><BsFillStopBtnFill size={50} className="mr-6" />Cancel</button>
              </div>
            :<button onClick={()=> SetAddSlider(true)} className='px-6 py-4'><BsFillPlusCircleFill size={50} className="mr-6" />New Slider</button>
          }
            </div>
            <Row style={{ display: addSlider ? "none" : "flex" }}>
              <Col className='py-2'>
                <div className="slider_item">
                  <div className="item_overlay">
                    <AiFillDelete size={50} color="red" className='mx-2' />
                    <AiFillEdit size={50} color="#B09043" className='mx-2' />
                  </div>
                </div>
              </Col>
              <Col className='py-2'>
                <div className="slider_item">
                  <div className="item_overlay">
                    <AiFillDelete size={50} color="red" className='mx-2' />
                    <AiFillEdit size={50} color="#B09043" className='mx-2' />
                  </div>
                </div>
              </Col>
              <Col className='py-2'>
                <div className="slider_item">
                  <div className="item_overlay">
                    <AiFillDelete size={50} color="red" className='mx-2' />
                    <AiFillEdit size={50} color="#B09043" className='mx-2' />
                  </div>
                </div>
              </Col>
              <Col className='py-2'>
                <div className="slider_item">
                  <div className="item_overlay">
                    <AiFillDelete size={50} color="red" className='mx-2' />
                    <AiFillEdit size={50} color="#B09043" className='mx-2' />
                  </div>
                </div>
              </Col>
              <Col className='py-2'>
                <div className="slider_item">
                  <div className="item_overlay">
                    <AiFillDelete size={50} color="red" className='mx-2' />
                    <AiFillEdit size={50} color="#B09043" className='mx-2' />
                  </div>
                </div>
              </Col>
              <Col className='py-2'>
                <div className="slider_item">
                  <div className="item_overlay">
                    <AiFillDelete size={50} color="red" className='mx-2' />
                    <AiFillEdit size={50} color="#B09043" className='mx-2' />
                  </div>
                </div>
              </Col>
            </Row>
            <div className='addSlider py-8 ' style={{ display: addSlider ? "flex" : "none" }}>
            <div className='image_upload mt-20'>
                  <img src={upload_pic} alt="upload" />
              </div>
              <div className='my-4'>
                <h3>Slider Title</h3>
                <input type="text" className="upload_input"/>
              </div>
            </div>
    </div>
  )
}

export default Slider