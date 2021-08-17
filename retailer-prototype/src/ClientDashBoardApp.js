import { useState } from 'react';
import Main from "./components/main/DashboardMain";
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/sidebar';

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
  
  return 
  (
    <div className="container">
      <>
      <Router>
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/> 
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
     
     <Switch>
       <Route path = '/' exact component = {Main}/>
       <Route path = '/main' excat component = {Main}/>

       <Redirect to = '/main' exact component = {Main}/>
      <Main/>
      </Switch>
      </Router>
    </>
    </div>
  );
}

export default ClientDashBoardApp;
