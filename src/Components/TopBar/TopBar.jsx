import './TopBar.scss'
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';

function TopBar() {
  return (
    <div className='topBar active'>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className='logo'>Genius.</a>
                <div className='itemContainer'>
                    <PersonIcon className='PersonIcon'/>
                    <span>+977 9818174850</span>
                </div>
                <div className='itemContainer'>
                    <EmailIcon className='EmailIcon'/>
                    <span>sandsshakya444@gmail.com</span>
                </div>
            </div>
            <div className="right">
                <div className="hamburger">
                    <span className='line1'></span>
                    <span className='line2'></span>
                    <span className='line3'></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopBar