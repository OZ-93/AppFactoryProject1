import React from 'react'
import "./Sidebar.css";
import logo from "../../Assets/download.jpg";
//import "./App.css";
import Update from "../../components/pages/Updateprofile";
import Reports from '../../components/pages/Reports';
import routes from '../../routes'


const Sidebar=({sidebarOpen, closeSidebar})=>{
    return(
        <div className={sidebarOpen ? "sidebar-responsive": ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                <a href={routes.Main}>DASHBOARD</a>
                
                </div>
                <div className="sidebar__link">
                        <i className="fa fa-files-o"></i>
                        
                    </div>
                </div>

                <div className="sidebar__menu">

                    <div className="sidebar__link">
                        <a href={routes.AdminUpdate}>Update Profile</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-files-o"></i>
                        <a href={routes.Report}>Reports</a>
                    </div>
                    <div className="sidebar__logout">
                        <a href={routes.home}>Logout</a>
                 
                    </div>
               </div>
            </div>    
        
    )
}

export default Sidebar; 