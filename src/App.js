import React from "react";
import { Switch, Route } from "react-router-dom";

import RegisterPage from "./Pages/LoginPages/SignUpPage/SignUpFirstPage";
import SecondRegisterPage from "./Pages/LoginPages/SignUpPage/SignUpSecondPage";
import LoginPage from "./Pages/LoginPages/SignInPage/SignInPage";
import RestorePassword from './Pages/LoginPages/RestorePasswordPage/RestorePasswordPage.js';

import Main from './Pages/HomePage/HomePage.js';
import Description from './Pages/AboutPage/AboutPage.js';
import PageNotFound from "./Pages/404/404.js";
import AllInstitute from './Components/AllInstitute/Instite';
import DescriptionFaculty from './Components/DescriptionFaculty/Faculty.js';
import Cab from './Components/PersonalData/PersonalData.js';
import TestPage from './Pages/ExamPage/ExamPage.js';

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
                <Route path='/about' component={Description} />
                <Route path='/cab' component={Cab} />
                <Route path='/my/test' component={TestPage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
};

export default App;
