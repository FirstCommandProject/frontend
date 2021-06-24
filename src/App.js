import React from "react";
import { Switch, Route } from "react-router-dom";
import RegisterPage from "./Component/RegisterPage/SignUp";
import SecondRegisterPage from "./Component/RegisterPage/SignUpSecondPage";
import LoginPage from "./Component/LoginPage/SignIn";
import Main from './Component/MainPart/MainPart.js';
import Description from './Component/DescriptionPage/Description.js';
import AllInstitute from './Component/AllInstitute/Instite';
import DescriptionFaculty from './Component/DescriptionFaculty/Faculty.js';
import Cab from './Component/PersonalData/PersonalData.js';
import PageNotFound from "./Component/PageNotFound/PageNotFound.js";

const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route path='/' exact component={Main} />
                <Route path="/login" component={LoginPage} />
                <Route path="/sign/up" exact component={RegisterPage} />
                <Route path="/sign/up/2" component={SecondRegisterPage} />
                <Route path='/departments' component={AllInstitute} />
                <Route path='/my/faculty/' component={DescriptionFaculty} />
                <Route path='/about' component={Description} />
                <Route path='/cab' component={Cab} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
};

export default App;
