import React from 'react'
import './Contact.css'
import NavBar from '../../components/NavBar/NavBar'
import contact from '../../assets/contact_img.png'
import Footer from '../../components/Footer/Footer'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Contact = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <NavBar />
      <div className="contact_section px-2 py-8">
        <div className='mx-3'>
          <img src={contact} alt="contact" className='contact_img my-3' />
        </div>
        <div className="contact_form px-10 py-3">
          <h3>Get In Touch</h3>
          <input type="text" className='my-2 mx' placeholder='Your Email' />
          <input type="text" className='my-2' placeholder='Subject' />
          <input type="text" className='my-2' placeholder='Message' />
          <button className=' my-6'>SUBMIT NOW</button>
        </div>
      </div>
      <div className="faq_section pb-20">
        <div className="faq_section1 mx-3 ">
          <h3>Frequently Asked<br /> Questions</h3>
          <div>
            <p>A digital agency is a business you hire to outsource your digital marketing efforts, <br />instead of handling in-house.</p>
            <h6>Ask us anything</h6>
          </div>

        </div>
        <div className="faq_section2 mx-3 ">
          <Accordion className='faq_items my-1' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '100%', flexShrink: 0 }} >
              Digital agency is a business
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion  className='faq_items my-1' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: '100%', flexShrink: 0 }}>Hire to outsource your digital</Typography>

            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                laoreet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className='faq_items my-1' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: '100%', flexShrink: 0 }}>
              <p>Can provide your business</p>
              </Typography>

            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                amet egestas eros, vitae egestas augue. Duis vel est augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion  className='faq_items my-1' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: '100%', flexShrink: 0 }}><p>Marketing efforts</p> </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{fontWeight:'200'}}>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                amet egestas eros, vitae egestas augue. Duis vel est augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
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
          <div className='items '>
            <h5>ADDRESS</h5>
            <p>2247 Lunetta  StreetTX 76301</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact