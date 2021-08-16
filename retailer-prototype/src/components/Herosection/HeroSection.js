import React from 'react';
import '../App.css';

import { Button } from '../Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
    
      <h1>ASSESSMENT TOOLING APP</h1>
      <p></p>
      <div className='hero-btns'>

      
 
        <Button
        
          type=""
          children=""
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('/Signup')}
          >
          Sign Up <i className='fas fa-user-plus' />
        </Button>

        <Button
        
        type=""
        children=""
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('/Signup')}
        >
        Login <i className='fas fa-sign-in-alt' />
      </Button>
      </div>
    </div>
  );
}

export default HeroSection;