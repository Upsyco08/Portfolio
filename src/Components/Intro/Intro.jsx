import './Intro.scss'
import profilePicture from "../../Images/img3.jpg"

function Intro() {
  return (
    <div className='intro' id="intro">
      <div className='left'>
        <div className='imgContainer'>
          <img src={profilePicture} alt="Profile Picutre" />
        </div>
      </div>
      <div className='right'>

      </div>
    </div>
  )
}

export default Intro