import React from 'react'
import Navbar from '../../Assets/navbar/Navbar'
import Sidebar from '../../Assets/sidebar/Sidebar'
import { useState } from 'react';

const AdminLayout = props=>{


    return(
    <div className="container">
            
            <Sidebar/>
            {props.children}
    </div>

    )
};

export default AdminLayout;