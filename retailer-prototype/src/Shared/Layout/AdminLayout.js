import React from 'react'
import Navbar from '../../Assets/navbar/Navbar'
import Sidebar from '../../Assets/sidebar/Sidebar'
import { useState } from 'react';

const AdminLayout = props=>{

        const [sidebarOpen, setSidebarOpen]= useState(false);
      
        const openSidebar=() =>{
          setSidebarOpen(true);
        }
      
        const closeSidebar=()=>{
          setSidebarOpen(false);
        }

    return(
    <div className="container">
            <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/> 
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
            {props.children}
    </div>

    )
};

export default AdminLayout;