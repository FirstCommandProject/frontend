import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import RegisterPage from "./Component/RegisterPage/SignUp";
import LoginPage from "./Component/LoginPage/SignIn";
import Main from './Component/MainPart/MainPart.js';
import Description from './Component/DescriptionPage/Description.js';
import AllInstitute from './Component/AllInstitute/Instite';
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/registration">
          <RegisterPage />
        </Route>
        <Route path='/my/institute'>
          <AllInstitute />
        </Route>
        <Route path='/about'>
          <Description />
        </Route>
        <Route path='/'>
          <Main />
        </Route>
        <Redirect from='' to='/' />
      </Switch>
    </div>
  );
};

export default App;
