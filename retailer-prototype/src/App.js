
import './App.css';
import Home from './components/pages/Home';
import Signup_Login from './components/Signup_Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HeroSection from './components/Herosection/HeroSection';

function App() {
  return (
    <div >
      <Router> 
      <Switch>
              
        <Route path="/" exact component={Home} />
        <Route path="/Signup_Login" component={Signup_Login} />
       
        
      </Switch>
    </Router>
     
    </div>
  );
}

export default App;
