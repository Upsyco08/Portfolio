import './Testimonials.scss'
import ReplyIcon from '@mui/icons-material/Reply';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Photo from "../../Images/img2.jpg"

function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
        <div classname="container">
          <div className='card'>
            <div className='top'>
              <ReplyIcon className='leftIcon'/>
              <img src={Photo} className="myImage" alt="Sandesh" />
              <YouTubeIcon className='rightIcon'/>
            </div>
            <div className="center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <div className='bottom'>
              <h3>Sushan Shakya</h3>
              <h4>Senior Engineer at LeapFrog</h4>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Testimonials