import React from 'react';
import { useState } from 'react';
import Main from "./components/main/DashboardMain";
import Navbar from './Assets/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';

import Schedule from "./components/ScheduleNew/ScheduleNew";
import UpdateBookings from "./components/UpdateBookings/UpdateBooking";
import Logs from "./components/ViewLogged/ViewLogged";


import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


const ClientDashBoardApp = () =>
{
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar=() =>
  {
    setSidebarOpen(true);
  }

  const closeSidebar=()=>
  {
    setSidebarOpen(false);
  }
  return (
    <div className="container">
    
      <Router>
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/> 
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
     
     <Switch>
       <Route path = '/' exact component = {Main}/>
       <Route path = '/main' excat component = {Main}/>

       <Redirect to = '/main' exact component = {Main}/>

        <Route path = '/Schedule' component = {Schedule}/>
        <Route path = ' /UpdateBookings' component = {UpdateBookings}/>
        <Route path = '/Logs' component = {Logs}/>

      <Main/>
      </Switch>
      </Router>
    
    </div>
  
  );
}

export default ClientDashBoardApp;

