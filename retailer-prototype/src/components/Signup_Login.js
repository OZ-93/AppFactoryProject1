import React, { Component }  from 'react';
import styled from "styled-components";
import { AccountBox } from "./accountBox";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import route from 'color-convert/route';
import { LoginForm } from './accountBox/loginForm';
import { SignupForm } from './accountBox/SignupForm';


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Signup_Login() {
  return (
    <AppContainer>
      <AccountBox />
  </AppContainer>
      


  );
}

export default Signup_Login;