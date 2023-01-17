import React from 'react'
import './ProductDetails.css'
import NavBar from '../../components/NavBar/NavBar'
import detailimage from './../../assets/detailimage.png'
import product1 from '../../assets/product1.png'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'


const ProductDetails = () => {
  return (
    <div>
      <NavBar/>
      <div className="content_header">
      <div className="header_overlay">
        <h1>Product Details</h1>
      </div>
      </div>

      <div className="content py-20">
        <div className=' mx-4'>
        <img src={detailimage} className="image" alt="img" />
        </div>
        <div className='mx-4 mt-8'>
          <h1>lorem ipsum</h1>
          <div className='paragraph'>

          <p>Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus fuisset intellegam. Per case melius assentior ea. Et scaevola insolens eum. Ad vix verear eruditi ancillae, fabulas assentior his at, eum no dico euripidis reprehendunt. Cibo delectus eu ius, usu veri putent at. His tamquam evertitur appellantur an, eam omnis blandit officiis id, eu nostro tacimates pri. Te vim denique fabellas deseruisse, ad est mandamus neglegentur, vim adhuc consequat an. At putent commodo patrioque pro, nihil reprimique et pro. Et sea graece consulatu conclusionemque. 
              </p>Doctus iudicabit ex eam. Vel quando oratio maiorum eu, diam admodum tincidunt ad pri, vis an reque postea. Has nisl temporibus cu. Est cu aperiam splendide, sit et mazim sonet mollis. Wisi homero inermis no pri, ancillae sensibus no nam. Has quem stet eu, elit persius id mel. Ea nam magna quidam, ex ignota inimicus expetendis nam, et nec eius postea. Meliore vivendum imperdiet no eos, quo te admodum voluptatum disputationi, id qui docendi expetenda. Ne velit efficiendi has, ut vidisse integre antiopam sea. An luptatum tractatos has. Ut est decore sanctus. Legere tibique lucilius est ut, nisl posse per at.
            <p>
             Quo ut democritum assueverit contentiones, enim congue delectus et per. Ei cum euripidis sadipscing. Et simul voluptua appetere mea, in sit dolores posidonium. Ut suas denique mel, ei cum etiam animal. Eius laudem consulatu ex mei. Nam id porro saepe. Eam id habemus recusabo posidonium. Cu soluta fierent sed, at mea perfecto mediocrem voluptaria, tation aliquid oporteat at mei. Mel dolorum fuisset id, no usu eirmod dignissim. Mei te brute ullamcorper, facilis eloquentiam liberavisse mea ex. Eu omittam ponderum sea. Debet concludaturque conclusionemque per id, ne quo utinam probatus insolens. Altera ancillae temporibus ad mei, cum perfecto maluisset an. Qua
              </p>
              <p>
             s modus utroque et mei, te his amet soleat efficiantur, aliquid corpora deleniti cu has. No his possim blandit constituam, et meliore lobortis pro. Qui te impetus volumus adipiscing. Est in dolores voluptaria, est et esse recusabo. Id vis quod eleifend, usu at timeam fabulas fastidii, ornatus docendi democritum ea usu. Ius inermis adversarium ne. At deleniti posidonium his. In homero lobortis duo, at nibh recusabo salutatus eam. At vim repudiare evertitur abhorreant, est ei nobis choro assueverit. Sea no saepe expetendis adipiscing. Ad iudico perpetua nec, ei duo nonumy interesset, ridens laboramus sed ex. Vis ad movet dicunt, ea modus tincidunt sea. Populo impetus offendit eu sit, his at scripserit definitionem, mei amet tale alterum ut. Veniam dissentiet eum et, tota legere tacimates et his, nec ut sonet sensibus maluisset. Graece docendi maluisset vix ad, tantas consul posidonium ei vel.
              </p>
              <p>
             s modus utroque et mei, te his amet soleat efficiantur, aliquid corpora deleniti cu has. No his possim blandit constituam, et meliore lobortis pro. Qui te impetus volumus adipiscing. Est in dolores voluptaria, est et esse recusabo. Id vis quod eleifend, usu at timeam fabulas fastidii, ornatus docendi democritum ea usu. Ius inermis adversarium ne. At deleniti posidonium his. In homero lobortis duo, at nibh recusabo salutatus eam. At vim repudiare evertitur abhorreant, est ei nobis choro assueverit. Sea no saepe expetendis adipiscing. Ad iudico perpetua nec, ei duo nonumy interesset, ridens laboramus sed ex. Vis ad movet dicunt, ea modus tincidunt sea. Populo impetus offendit eu sit, his at scripserit definitionem, mei amet tale alterum ut. Veniam dissentiet eum et, tota legere tacimates et his, nec ut sonet sensibus maluisset. Graece docendi maluisset vix ad, tantas consul posidonium ei vel.
              </p>
              <p>

              set, ridens laboramus sed ex. Vis ad movet dicunt, ea modus tincidunt sea. Populo impetus offendit eu sit, his at scripserit definitionem, mei amet tale alterum ut. Veniam dissentiet eum et, tota legere tacimates et his, nec ut sonet sensibus maluisset.
              </p>

        </div>
        
        </div>
      </div>

      <div className="other_products">
        <h1>Related Products & Services</h1>
      </div>
      <div className="product_section my-4">
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

      <Footer/>

    </div>
  )
}

export default ProductDetails