import './Education.scss';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import { educationData } from "../../EducationData"

function Works() {
  const [currentSlide,setCurrentSlide] = useState(0);
  
  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < educationData.length -1 ? currentSlide + 1 : 0);
  };
  

  return (
    <div className="works" id="works">
      <div 
        className='slider' 
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {educationData.map(data=>(
          <div className='container'>
          <div className='item'>
            <div className='left'>
              <div className='leftContainer'>
                <h2>{data.title}</h2>
                <h3>{data.location}</h3>
                <h4>{data.time}</h4>
                <p>{data.desc}</p>
                <span>{data.info}</span>
              </div>
            </div>
            <div className='right'>
              <img src={data.img} alt="" />
            </div>
          </div>
        </div>
        ))}
      </div>
    <ArrowBackIosNewIcon className='arrow left' onClick={()=>handleClick('left')}/>
    <ArrowForwardIosIcon className='arrow right' onClick={()=>handleClick()}/>
    </div>
  )
}

export default Works