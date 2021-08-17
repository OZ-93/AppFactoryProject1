import React, { useState } from 'react';
import "./Navbar.css";
//import * as FaIcons from 'react-icons/fa';
//import * as AiIcons from 'react-icons/ai';
//import {Link} from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar'
//import { IconContext } from 'react-icons';

const Navbar=({sidebarOpen, openSidebar})=>{
  
    return(
        <nav className="navbar">
            <div className="nav_icon" onClick={()=> openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>
           
            <div className="navbar__right">
                <a href="#">Gijima Logo</a>
            </div>
        </nav>
        
    )
}
export default Navbar;