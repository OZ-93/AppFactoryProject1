import React from 'react'

//import './App.css';
import Home from './components/pages/Home';
import Signup_Login from './components/Signup_Login';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import AuthLayout from './Shared/Layout/AuthLayout';
import routes from './routes';
import ClientLayout from './Shared/Layout/ClientLayout';
import ClientDashboard from './components/pages/ClientDashboard/Index';
import { createBrowserHistory } from "history";
import AdminDashboard from './components/pages/AdminDashboard/index';
import Main from './components/pages/AdminDashboard/Main';
import AdminLayout from './Shared/Layout/AdminLayout';

//calling all pages involved
const pages = [
  // Public pages
  {
    exact:true,
    path: routes.home,
    component:Home,
    layout: AuthLayout
  },
  {
    exact: false,
    path: routes.Signup_Login,
    component: Signup_Login,
    layout: AuthLayout
    
  },

{
    exact: false,
    path: routes.main,
    component:AdminDashboard,
    layout: AdminLayout
  },
  
  // Authenticated pages
 {
    exact: false,
    path: routes.Dashboard,
    component:ClientDashboard,
    layout:ClientLayout
  }

  
];


const App =()=> {
  const history=createBrowserHistory();
  return (
    
    <Router history={history}>

    <Switch>
      {pages.map(
        ({ exact, path, component: Component, layout: Layout }, index) => (
          <Route
            key={index}
            exact={exact}
            path={path}
            render={props => (
              <Layout history={props.history}>
                <Component {...props} />
              </Layout>
            )}
          />
        )
      )}
      
      {/* Or Uncomment below to use a custom 404 page */}
      {/* <Route component={NotFoundPage} /> */}
    </Switch>
  </Router>
     
  
  );
}

export default App;


/*
import { useState } from "react";
import Main from "./Assets/main/Main";
import Navbar from "./Assets/navbar/Navbar";
import Sidebar from "./Assets/sidebar/Sidebar";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Update from "./pages/Updateprofile";
import Reports from "./pages/Reports";
import View from "./pages/viewreports";
import Assessment from "./pages/updateAss";
//import "./App.css";

const App=() =>{

  const [sidebarOpen, setSidebarOpen]= useState(false);

  const openSidebar=() =>{
    setSidebarOpen(true);
  }

  const closeSidebar=()=>{
    setSidebarOpen(false);
  }
  return (
    
    <div className="container">
      <>
    <Router>
     <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/> 
     <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
     
     <Switch>
    <Route path='/' exact component={Main}/>
    <Route path='/main' exact component={Main}/>
    <Route path='/Update' component={Update}/>
    <Route path='/Reports' component={Reports}/>
    <Route path='/View' component={View}/>
    <Route path='/Assessment' component={Assessment}/>
    <Redirect to='/main' exact component={Main}/>
    <Main/>
     </Switch>
  </Router>
    </>
    </div>
    
  );
}

export default App;
*/
