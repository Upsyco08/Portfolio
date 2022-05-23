import './Works.scss';
import mobile from "../../Images/mobile.png";

function Works() {
  return (
    <div className="works" id="works">
      <div className='slider'>
        <div className='container'>
          <div className='item'>
            <div className='left'>
              <div className='leftContainer'>
                <div className='imgContainer'>
                  <img src={mobile} alt="mobile" />
                </div>
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto perferendis reprehenderit nostrum quae laboriosam, recusandae aliquid dolor, totam, neque expedita atque voluptatem consequuntur dolorum laborum tempore! Quis nesciunt corporis laudantium!</p>
                <span>Projects</span>
              </div>
            </div>
            <div className='right'>
              <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works