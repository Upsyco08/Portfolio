import './Contact.scss'
import shake from "../../Images/shake.svg"
import { useState } from 'react';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

function Contact() {
  const[message, setMessage]=useState(false)
  const handleSubmit =(e)=>{
    e.preventDefault();
    setMessage(true);
  }
  return (
    <div className='contact' id="contact">
      <div className='left'>
        <img src={shake} alt="shake" />
      </div>
      <div className='right'>
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message here" />
          <button type="submit" >Send</button>
          {message && <span>Thanks, I'll reply ASAP.<SentimentSatisfiedAltIcon color="success" /> </span>}
        </form>
      </div>
    </div>
  )
}

export default Contact