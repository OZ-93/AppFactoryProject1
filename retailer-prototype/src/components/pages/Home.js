import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import HeroSection from '../Herosection/HeroSection';

import Navbar from '../nav/navbar';



function Home() {
  return (
    
    

    <Router> 
    <Navbar/>
      <Switch>
       
    <HeroSection/>
        
        
        
        
        
      </Switch>
    </Router>
      
      
    
  );
}

export default Home;
