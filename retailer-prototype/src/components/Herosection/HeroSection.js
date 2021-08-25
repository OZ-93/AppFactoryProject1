import React from 'react';
import '../App.css';
import Signup_Login from '../Signup_Login';
import { Button } from '../Button';
import './HeroSection.css';
import routes from '../../routes';


const HeroSection=props=> {
  const gotoSignupLogin = () => {
    props.history.push(routes.Signup_Login);
  }
  return (
   
    
  
   <div className='hero-container'>
    
    
      <h2>ASSESSMENT TOOLING APP</h2>
      <p>gghjgjhgjgjghj</p>
      <div className='hero-btns'>

      
 
        <Button
        
          type=""
          children=""
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={gotoSignupLogin}
          >
          Sign Up <i className='fas fa-user-plus' />
        </Button>

        <Button
        
        type=""
        children=""
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={gotoSignupLogin}
        >
        Login <i className='fas fa-sign-in-alt' />
      </Button>
      </div>
    </div>
  );
}

export default HeroSection;