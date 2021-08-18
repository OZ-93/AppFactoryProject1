import React from 'react';
import '../App.css';
import Signup_Login from '../Signup_Login';
import { Button } from '../Button';
import './HeroSection.css';


function HeroSection() {
  return (
   
    
    <div className='hero-container'>
    
      <h2>ASSESSMENT TOOLING APP</h2>
      <p></p>
      <div className='hero-btns'>

      
 
        <Button
        
          type=""
          children=""
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('/Signup_Login')}
          >
          Sign Up <i className='fas fa-user-plus' />
        </Button>

        <Button
        
        type=""
        children=""
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('/Signup_Login')}
        >
        Login <i className='fas fa-sign-in-alt' />
      </Button>
      </div>
    </div>
  );
}

export default HeroSection;