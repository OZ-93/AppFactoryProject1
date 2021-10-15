import React from 'react';
import '../App.css';
import Signup_Login from '../Signup_Login';
//import { Button } from '../Button';
import './HeroSection.css';
import routes from '../../routes';
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';

const HeroSection=props=> {
  
  

  const [open, setOpen] = React.useState(false);
  
  const handleClickToOpen = () => {
    setOpen(true);
  };
  
  const handleToClose = () => {
    setOpen(false);
  };

  return (
   
    
  
   <div className='hero-container'>


<div stlye={{}}>
      
     
      <Dialog open={open} onClose={handleToClose}>
        <DialogTitle>{"User Type"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You are Registering as?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Link to='/SignupLogin' >
        <Button onClick={routes.AdminSignup} 
                  color="primary" autoFocus>
            Admin
          </Button>
          </Link>
          <Link to='/SignupLogin/Adminsignup'>
          <Button onClick={routes.AdminSignup} 
                  color="primary" autoFocus>
            Retailer
          </Button>
          </Link>
          <Button onClick={handleToClose} 
                  color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    
    
      <h2>ASSESSMENT TOOLING APP</h2>
      <p>gghjgjhgjgjghj</p>
      <div className='hero-btns'>

      
 
        <Button
        
          type=""
          children=""
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={handleClickToOpen}
          >
          Sign Up <i className='fas fa-user-plus' />
        </Button>

        <Button
        
        type=""
        children=""
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={routes.Signup_Login}
        >
        Login <i className='fas fa-sign-in-alt' />
      </Button>
      </div>
    </div>
  );
}

export default HeroSection;