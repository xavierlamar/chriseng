import React from 'react'
import './Product.css'
import NavBar from '../../components/NavBar/NavBar'
import product1 from '../../assets/product1.png'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'

const ProductService = () => {
  return (
    <div>
      <NavBar />
      <div className="header">
        <div className="image-overlay">
          <h1>Title of the horizontal block</h1>
          <div className='textbutton'>
            <div className='paragraph'>
              <p>Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus fuisset intellegam.Per case melius assentior ea. Et scaevola insolens eum. Ad vix verear eruditi ancillae, fabulas assentiorhis at, eum no dico euripidis reprehendunt. Cibo delectus eu ius, usu veri putent at. </p>
              <button>Read the article</button>
            </div>
          </div>
        </div>

      </div>

      {/* banner */}
      <div className=' my-5 '>
        <div className="banner1">
          <div className="banner_item1 px-10">
            <p>Unlock The Greatest <br />Value Possible</p>
          </div>
          <div className="banner_item2">
            <p>Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus fuisset intellegam. Per case melius <br /> assentior ea. Et scaevola insolens eum. Ad vix verear eruditi ancillae, fabulas assentior his at, eum no dico euripidis reprehendunt.<br /> Cibo delectus eu ius, usu veri putent at. His tamquam evertitur appellantur an, eam omnis blandit officiis id, eu nostro tacimates pri. <br />Te vim denique fabellas deseruisse, ad est mandamus neglegentur, vim adhuc consequat an. At putent commodo patrioque pro, nihil<br /> reprimique et pro. Et sea graece consulatu conclusionemque. Doctus iudicabit ex eam.</p>
          </div>
        </div>
      </div>

      {/* Product */}
      <div className="product_section ">
        <div className="sectioncard">
          <Link to="/product_details" className='link'>
          <div className="product_items">
            <img src={product1} alt="img" />
            <div className='img_card py-4 px-3'>
              <h4 className="title">Card title</h4>
              <p>This is a wider card with supporting text below as a natural lead-in to additional content. This </p>
              <span>Last updated 3 mins ago</span>
            </div>
          </div>
          </Link>
          <Link to="/product_details" className='link'>
          <div className="product_items">
            <img src={product1} alt="img" />
            <div className='img_card py-4 px-3'>
              <h4 className="title">Card title</h4>
              <p>This is a wider card with supporting text below as a natural lead-in to additional content. This </p>
              <span>Last updated 3 mins ago</span>
            </div>
          </div>
          </Link>
          
          
        </div>
        <div className="sectioncard">
          <Link to="/product_details" className='link'>
          <div className="product_items">
            <img src={product1} alt="img" />
            <div className='img_card py-4 px-3'>
              <h4 className="title">Card title</h4>
              <p>This is a wider card with supporting text below as a natural lead-in to additional content. This </p>
              <span>Last updated 3 mins ago</span>
            </div>
          </div>
          </Link>
          <Link to="/product_details" className='link'>
          <div className="product_items">
            <img src={product1} alt="img" />
            <div className='img_card py-4 px-3'>
              <h4 className="title">Card title</h4>
              <p>This is a wider card with supporting text below as a natural lead-in to additional content. This </p>
              <span>Last updated 3 mins ago</span>
            </div>
          </div>
          </Link>
          
          
        </div>
        

      </div>
      <div className="product_section ">
        <div className="sectioncard">
          <Link to="/product_details" className='link'>
          <div className="product_items">
            <img src={product1} alt="img" />
            <div className='img_card py-4 px-3'>
              <h4 className="title">Card title</h4>
              <p>This is a wider card with supporting text below as a natural lead-in to additional content. This </p>
              <span>Last updated 3 mins ago</span>
            </div>
          </div>
          </Link>
          <Link to="/product_details" className='link'>
          <div className="product_items">
            <img src={product1} alt="img" />
            <div className='img_card py-4 px-3'>
              <h4 className="title">Card title</h4>
              <p>This is a wider card with supporting text below as a natural lead-in to additional content. This </p>
              <span>Last updated 3 mins ago</span>
            </div>
          </div>
          </Link>
          
          
        </div>
        <div className="sectioncard">
          <Link to="/product_details" className='link'>
          <div className="product_items">
            <img src={product1} alt="img" />
            <div className='img_card py-4 px-3'>
              <h4 className="title">Card title</h4>
              <p>This is a wider card with supporting text below as a natural lead-in to additional content. This </p>
              <span>Last updated 3 mins ago</span>
            </div>
          </div>
          </Link>
          <Link to="/product_details" className='link'>
          <div className="product_items">
            <img src={product1} alt="img" />
            <div className='img_card py-4 px-3'>
              <h4 className="title">Card title</h4>
              <p>This is a wider card with supporting text below as a natural lead-in to additional content. This </p>
              <span>Last updated 3 mins ago</span>
            </div>
          </div>
          </Link>
          
          
        </div>
        

      </div>
  


      {/* banner2 */}
      <div className=' my-5 '>
        <div className="banner2">
          <div className="banner_item1 px-10">
            <p>Unlock The Greatest <br />Value Possible</p>
          </div>
          <div className="banner_item2">
            <p>Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus fuisset intellegam. Per case melius <br /> assentior ea. Et scaevola insolens eum. Ad vix verear eruditi ancillae, fabulas assentior his at, eum no dico euripidis reprehendunt.<br /> Cibo delectus eu ius, usu veri putent at. His tamquam evertitur appellantur an, eam omnis blandit officiis id, eu nostro tacimates pri. <br />Te vim denique fabellas deseruisse, ad est mandamus neglegentur, vim adhuc consequat an. At putent commodo patrioque pro, nihil<br /> reprimique et pro. Et sea graece consulatu conclusionemque. Doctus iudicabit ex eam.</p>
          </div>
        </div>
      </div>

      {/* Product2 */}
      <div className="product_section ">
        <div className="sectioncard">
          <Link to="/product_details" className='link'>
          <div className="product_items">
            <img src={product1} alt="img" />
            <div className='img_card py-4 px-3'>
              <h4 className="title">Card title</h4>
              <p>This is a wider card with supporting text below as a natural lead-in to additional content. This </p>
              <span>Last updated 3 mins ago</span>
            </div>
          </div>
          </Link>
          <Link to="/product_details" className='link'>
          <div className="product_items">
            <img src={product1} alt="img" />
            <div className='img_card py-4 px-3'>
              <h4 className="title">Card title</h4>
              <p>This is a wider card with supporting text below as a natural lead-in to additional content. This </p>
              <span>Last updated 3 mins ago</span>
            </div>
          </div>
          </Link>
          
          
        </div>
        <div className="sectioncard">
          <Link to="/product_details" className='link'>
          <div className="product_items">
            <img src={product1} alt="img" />
            <div className='img_card py-4 px-3'>
              <h4 className="title">Card title</h4>
              <p>This is a wider card with supporting text below as a natural lead-in to additional content. This </p>
              <span>Last updated 3 mins ago</span>
            </div>
          </div>
          </Link>
          <Link to="/product_details" className='link'>
          <div className="product_items">
            <img src={product1} alt="img" />
            <div className='img_card py-4 px-3'>
              <h4 className="title">Card title</h4>
              <p>This is a wider card with supporting text below as a natural lead-in to additional content. This </p>
              <span>Last updated 3 mins ago</span>
            </div>
          </div>
          </Link>
          
          
        </div>
        

      </div>
      <div className="product_section ">
        <div className="sectioncard">
          <Link to="/product_details" className='link'>
          <div className="product_items">
            <img src={product1} alt="img" />
            <div className='img_card py-4 px-3'>
              <h4 className="title">Card title</h4>
              <p>This is a wider card with supporting text below as a natural lead-in to additional content. This </p>
              <span>Last updated 3 mins ago</span>
            </div>
          </div>
          </Link>
          <Link to="/product_details" className='link'>
          <div className="product_items">
            <img src={product1} alt="img" />
            <div className='img_card py-4 px-3'>
              <h4 className="title">Card title</h4>
              <p>This is a wider card with supporting text below as a natural lead-in to additional content. This </p>
              <span>Last updated 3 mins ago</span>
            </div>
          </div>
          </Link>
          
          
        </div>
        <div className="sectioncard">
          <Link to="/product_details" className='link'>
          <div className="product_items">
            <img src={product1} alt="img" />
            <div className='img_card py-4 px-3'>
              <h4 className="title">Card title</h4>
              <p>This is a wider card with supporting text below as a natural lead-in to additional content. This </p>
              <span>Last updated 3 mins ago</span>
            </div>
          </div>
          </Link>
          <Link to="/product_details" className='link'>
          <div className="product_items">
            <img src={product1} alt="img" />
            <div className='img_card py-4 px-3'>
              <h4 className="title">Card title</h4>
              <p>This is a wider card with supporting text below as a natural lead-in to additional content. This </p>
              <span>Last updated 3 mins ago</span>
            </div>
          </div>
          </Link>
          
          
        </div>
        

      </div>
      



      {/* footer */}
      <div className='mt-8'>

      <Footer />
      </div>
    </div>
  )
}

export default ProductService