import React from 'react'
import './About.css'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import imgabout from './../../assets/imgabout.png'
import team1 from './../../assets/team1.png'
import team2 from './../../assets/team2.png'
import team3 from './../../assets/team3.png'
import team4 from './../../assets/team4.png'
import team5 from './../../assets/team5.png'
import buttonicon from './../../assets/buttonicon.png'
import process_img from './../../assets/process_img.png'
import { AiOutlinePlusCircle } from 'react-icons/ai'
const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <div className='header'>
        <div className="image-overlay">
          <h1>About Us</h1>
        </div>
      </div>

      {/* ABout */}
      <div className="about_section py-8">
        <div className='about_section1'>
          <div className="about_content px-3">
            <h1 >About CHRISENG</h1>
            <p>Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus fuisset intellegam.<br /> Per case melius assentior ea. Et scaevola insolens eum. Ad vix verear eruditi ancillae, fabulas assentior his at,<br /> eum no dico euripidis reprehendunt. Cibo delectus eu ius, usu veri putent at. His tamquam evertitur appellantur<br /> an, eam omnis blandit officiis id, eu nostro tacimates pri. Te vim denique fabellas deseruisse, ad est mandamus<br /> neglegentur, vim adhuc consequat an. At putent commodo patrioque pro, nihil reprimique et pro. Et sea graece<br /> consulatu conclusionemque. Doctus iudicabit ex eam.
            </p>

            <h2 className='py-4'>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus fuisset<br /> intellegam. Per case melius assentior ea. Et scaevola insolens eum. Ad vix verear eruditi ancillae, fabulas <br /> assentior his at, eum no dico euripidis reprehendunt. Cibo delectus eu ius, usu veri putent at. His tamquam</p>

            <div>
              <p className='border_down py-2'>Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit<br /> deterruisset, id sed doctus fuisset intellegam. Per case melius </p>
              <p className='border_down py-2'>Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit<br /> deterruisset, id sed doctus fuisset intellegam. Per case melius </p>
              <p className='border_down py-2'>Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit<br /> deterruisset, id sed doctus fuisset intellegam. Per case melius </p>

            </div>
          </div>
          <div className="about_image px-3">
            <img src={imgabout} alt="about" />
          </div>
        </div>

        <div className='myh1  py-10'>

          <h1 >Our Values</h1>
        </div>
        <div className='box_content'>
          <div className='about_box py-4 px-3'>
            <h6>LOREM IPSUM</h6>
            <p>Agency is a business you hire to outsource your digital marketing.</p>
            <div className='buttonflex'>
              <button><AiOutlinePlusCircle size={30} className='buttonicon mr-1' /></button>
              <span>Learn More</span>
            </div>
          </div>
          <div className='about_box py-4 px-3'>
            <h6>LOREM IPSUM</h6>
            <p>Agency is a business you hire to outsource your digital marketing.</p>
            <div className='buttonflex'>
              <button><AiOutlinePlusCircle size={30} className='buttonicon mr-1' /></button>
              <span>Learn More</span>
            </div>
          </div>
          <div className='about_box py-4 px-3'>
            <h6>LOREM IPSUM</h6>
            <p>Agency is a business you hire to outsource your digital marketing.</p>
            <div className='buttonflex'>
              <button><AiOutlinePlusCircle size={30} className='buttonicon mr-1' /></button>
              <span>Learn More</span>
            </div>
          </div>
          <div className='about_box py-4 px-3'>
            <h6>LOREM IPSUM</h6>
            <p>Agency is a business you hire to outsource your digital marketing.</p>
            <div className='buttonflex'>
              <button><AiOutlinePlusCircle size={30} className='buttonicon mr-1' /></button>
              <span>Learn More</span>
            </div>
          </div>

        </div>

      </div>



      {/* our process */}
      <div className="process_section">
        <div className="process_img mx-4">
          <h2>Our Process</h2>
          <p>Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed <br />doctus fuisset intellegam. Per case melius assentior ea. Et scaevola insolens eum. Ad<br /> vix verear eruditi ancillae, fabulas assentior his at, eum no dico euripidis reprehendunt.</p>
          <img src={process_img} alt='process' />
        </div>
        <div className="process_list mx-4">

          <div className="process_text ">
            <p className='mx-3'>Agency is a business<br /> you hire to outsource</p>
            <div className='text_list py-3 my-2 px-3 mx-3'>
              <h3 className='mr-4'>1</h3>
              <p >Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id<br /> sed doctus fuisset intellegam. Per case melius assentior ea. Et scaevola insolens<br /> eum. Ad vix verear eruditi ancillae, fabulas assentior his at, eum no dico euripidis</p>
            </div>
          </div>
          <div className="process_text ">
            <p className='mx-3'>Agency is a business<br /> you hire to outsource</p>
            <div className='text_list  py-3 my-2 px-3 mx-3'>
              <h3 className='mr-4 text_list2'>2</h3>
              <p >Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id<br /> sed doctus fuisset intellegam. Per case melius assentior ea. Et scaevola insolens<br /> eum. Ad vix verear eruditi ancillae, fabulas assentior his at, eum no dico euripidis</p>
            </div>
          </div>
          <div className="process_text ">
            <p className='mx-3'>Agency is a business<br /> you hire to outsource</p>
            <div className='text_list  py-3 my-2 px-3 mx-3'>
              <h3 className='mr-4'>3</h3>
              <p >Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id<br /> sed doctus fuisset intellegam. Per case melius assentior ea. Et scaevola insolens<br /> eum. Ad vix verear eruditi ancillae, fabulas assentior his at, eum no dico euripidis</p>
            </div>
          </div>
          <div className="process_text ">
            <p className='mx-3'>Agency is a business<br /> you hire to outsource</p>
            <div className='text_list py-3 my-2 px-3 mx-3'>
              <h3 className='mr-4'>4</h3>
              <p >Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id<br /> sed doctus fuisset intellegam. Per case melius assentior ea. Et scaevola insolens<br /> eum. Ad vix verear eruditi ancillae, fabulas assentior his at, eum no dico euripidis</p>
            </div>
          </div>
        </div>
      </div>

      {/*  team members */}
      <div className="team_section">
        <div className='team_content'>
          <img src={team1} alt="team1" />
          <h6>Azah Anyeni</h6>
          <p>Designer</p>
        </div>
        <div className='team_content'>

          <img src={team2} alt="team2" />
          <h6>Azah Anyeni</h6>
          <p>Designer</p>
        </div>
        <div className='team_content'>
          <img src={team3} alt="team3" />
          <h6>Azah Anyeni</h6>
          <p>Designer</p>
        </div>
        <div className='team_content'>
          <img src={team4} alt="team4" />
          <h6>Azah Anyeni</h6>
          <p>Designer</p>
        </div>
        <div className='team_content'>
          <img src={team5} alt="team5" />
          <h6>Azah Anyeni</h6>
          <p>Designer</p>
        </div>
      </div>

      {/* FAQ */}

      <div className="faq_section py-8">
        <div className="faq_section1 mx-20">
          <h6>FAQ</h6>
          <h1>Frequently Asked<br /> Questions</h1>
          <p>A digital agency is a business you hire to <br />outsource your digital marketing efforts, instead of handling in-house.</p>
          <button>Contact Us</button>
        </div>
        <div className="faq_section2">
          <div className="faq_items">
            <p>A digital agency is a business</p>
          </div>
          <div className="faq_items">
            <p>Hire to outsource your digital</p>
          </div>
          <div className="faq_items">
            <p>Marketing efforts</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AboutPage