import './Testimonials.scss'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {testimonialsData} from "../../TestimonialsData"

function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className='container'>
      {testimonialsData.map(d=>(
        <div className={d.featured ? 'card featured' : "card"}>
          <div className='top'>
            <EmailIcon color="action" className='leftIcon'/>
            <img src={d.img} className="myImage" alt="Sandesh" />
            <LinkedInIcon color="primary" className='rightIcon'/>
          </div>
          <div className="center">
            <p>
              {d.desc}
            </p>
          </div>
          <div className='bottom'>
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
        </div>
      ))}    
      </div>
    </div>
  )
}

export default Testimonials