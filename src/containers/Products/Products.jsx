import React from 'react'
import Form from 'react-bootstrap/Form';
import { BsFillPlusCircleFill } from 'react-icons/bs'
import upload_pic from './../../assets/upload_pic.png'
import './Products.css'
const Products = () => {
  return (
    <div>
        <div className='add_slider  pb-16'>
              <button className='px-6 py-4' ><BsFillPlusCircleFill size={50} className="mr-6" />New Product</button>
            </div>
            <div className='form_div'>
                <div className='image_upload mx-6'>
                  <img src={upload_pic} alt="upload" />
                </div>

                <div className='form mx-4'>
                  <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <label>Product Name</label>
                    <Form.Control type="email" placeholder="Provide Product Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <label>Product Category</label>
                    <Form.Control type="email" placeholder="Product Category" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <label>Product Description</label>
                    <Form.Control as="textarea" rows={8} />
                  </Form.Group>

                </Form>
                </div>
                

            </div>
    </div>
  )
}

export default Products