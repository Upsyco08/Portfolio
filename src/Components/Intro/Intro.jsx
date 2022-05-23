import './Intro.scss'
import profilePicture from "../../Images/img1_edited.png"
import arrow from "../../Images/arrow.png"
import { useEffect, useRef } from 'react'
import { init } from 'ityped';

let isLoading=true;

function Intro() {
  const textRef= useRef();
  useEffect(()=>{
    if (textRef.current && isLoading){
      isLoading =false;
    
    init(textRef.current,{
      showCursor: true,
      backDealy: 1500,
      backSpeed: 60,
      strings: ["Developer", "Designer"]
    });
    }
  }, []);

  return (
    <div className='intro' id="intro">
      <div className='left'>
        <div className='imgContainer'>
          <img src={profilePicture} alt="Profile Picutre" />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi There, I'm</h2>
          <h3>Sandesh Raj Shakya</h3>
          <h1>Computer Engineer <span ref={textRef} /></h1>
        </div>
        <a href="#portfolio">
          <img src={arrow} alt="Arrow" />
        </a>
      </div>
    </div>
  )
}

export default Intro