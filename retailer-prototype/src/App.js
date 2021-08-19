import React from 'react'

//import './App.css';
import Home from './components/pages/Home';
import Signup_Login from './components/Signup_Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HeroSection from './components/Herosection/HeroSection';
import { LoginForm } from './components/accountBox/loginForm';
import route from 'color-convert/route';
import Main from './Assets/main/Main'
import Dash from './components/Dash';
import Update from "./components/pages/Updateprofile";
import Reports from "./components/pages/Reports";
import View from "./components/pages/viewreports";
import Assessment from "./components/pages/updateAss";
import Client from './ClientDashBoardApp';

function App() {
  return (
    
      <Router> 
      <Switch>
              
        <Route path="/" exact component={Home} />
        <Route path="/Signup_Login" component={Signup_Login} />
        <Route path="/Dash" component={Dash}/>
        <Route path='/Update' component={Update}/>
    <Route path='/Reports' component={Reports}/>
    <Route path='/View' component={View}/>
    <Route path='/Assessment' component={Assessment}/>
    <Route path='/Client' component={Client}/>
    <Route path = '/main' excat component = {Main}/>

       
      
        
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
