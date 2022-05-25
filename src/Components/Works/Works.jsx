import './Works.scss';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import { worksData } from "../../WorksData"

function Works() {
  const [currentSlide,setCurrentSlide] = useState(0);
  
  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < worksData.length -1 ? currentSlide + 1 : 0);
  };
  

  return (
    <div className="works" id="works">
      <div 
        className='slider' 
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {worksData.map(data=>(
        <div className='container'>
          <div className='item'>
            <div className='left'>
              <div className='leftContainer'>
                <div className='imgContainer'>
                  <img src={data.icon} alt="Logo" />
                </div>
                <h2>{data.title}</h2>
                <p>{data.desc}</p>
                <span>Projects</span>
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