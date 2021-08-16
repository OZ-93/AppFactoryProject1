import React,{useEffect,useState} from 'react'
import { BrowserRouter, Link } from 'react-router-dom';
import { Button } from '../Button';
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    
      <nav className='navbar'>
        <div className='navbar-container'>
        
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
           ATA
            <i class='' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
            
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
              
            </li>
            
            <li className='nav-item'>
              <Link
                to='/About-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact us
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                to='/Login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
             
            </li>
          </ul>
          
          {button && <Button className="btns" buttonStyle='btn--outline'>SIGN UP</Button>}
          {button && <Button buttonStyle='btn--outline'>Login</Button>}
        </div>
      </nav>
    
  );
}

export default Navbar;

/*const Navbar = ({ sidebarOpen, openSidebar }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        <a href="./about">About Us</a>
        <a href="#">Contact Us </a>
        <a className="active_link" href="#">
          User
        </a>
      </div>
      <div className="navbar__right">
      
      </div>
    </nav>
  );
};

export default Navbar;*/
