import React from 'react'
import "./Sidebar.css";
import logo from "../../Assets/download.jpg";
//import "./App.css";
import Update from "../../components/pages/Updateprofile";
import Reports from '../../components/pages/Reports';


const Sidebar=({sidebarOpen, closeSidebar})=>{
    return(
        <div className={sidebarOpen ? "sidebar-responsive": ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="download"/>
                </div>
                <div className="sidebar__link">
                        <i className="fa fa-files-o"></i>
                        <a href="/main">Dashboard</a>
                    </div>
                </div>

                <div className="sidebar__menu">

                    <div className="sidebar__link">
                        <a href="/Update">Update Profile</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-files-o"></i>
                        <a href="/Reports">Reports</a>
                    </div>
                    <div className="sidebar__logout">
                        <a href="#">Logout</a>
                 
                    </div>
               </div>
            </div>    
        
    )
}

export default Sidebar; 