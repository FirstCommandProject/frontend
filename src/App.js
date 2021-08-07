import React from "react";
import { Switch, Route } from "react-router-dom";

import RegisterPage from "./Pages/LoginPages/SignUpPage/SignUp";
import SecondRegisterPage from "./Pages/LoginPages/SignUpPage/SignUpSecondPage";
import LoginPage from "./Pages/LoginPages/SignInPage/SignIn";
import RestorePassword from './Pages/LoginPages/RestorePassword/RestorePassword.js';

import Main from './Pages/HomePage/HomePage.js';
import Description from './Pages/AboutPage/AboutPage.js';
import AllInstitute from './Components/AllInstitute/Instite';
import DescriptionFaculty from './Components/DescriptionFaculty/Faculty.js';
import Cab from './Components/PersonalData/PersonalData.js';
import PageNotFound from "./Pages/404/404.js";

const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route path='/' exact component={Main} />
                <Route path="/login" component={LoginPage} />
                <Route path="/sign/up" exact component={RegisterPage} />
                <Route path="/sign/up/2" component={SecondRegisterPage} />
                <Route path="/forgot_password" component={RestorePassword} />
                <Route path='/departments' component={AllInstitute} />
                {/* <Route path='/my/faculty/' component={DescriptionFaculty} /> */}
                <Route path='/about' component={Description} />
                <Route path='/cab' component={Cab} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
};

export default App;
