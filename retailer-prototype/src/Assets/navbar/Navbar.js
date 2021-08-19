//import React from 'react';
import React, { useState } from 'react';
import "./navbar.css";
import gijima from '../../components/images/gijima.png';
import Sidebar from '../sidebar/Sidebar';


const navbar=({sidebarOpen, openSidebar})=>{
  
    return(
        <nav className="navbar">
            <div className="nav_icon" onClick={()=> openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>
           
            <div className="navbar__right">
                <img width="125" height="60" padding="50px"  src={gijima} alt="gijima"/>
            </div>
        </nav>
        
    )
}
export default navbar;