import React from "react";
import { Switch, Route } from "react-router-dom";
import RegisterPage from "./Component/RegisterPage/SignUp";
import LoginPage from "./Component/LoginPage/SignIn";
import Main from './Component/MainPart/MainPart.js';
import Description from './Component/DescriptionPage/Description.js';
import AllInstitute from './Component/AllInstitute/Instite';
import DescriptionFaculty from './Component/DescriptionFaculty/Faculty';
import Cab from './Component/PersonalAccount/PersonalAcc';
import PageNotFound from "./Component/PageNotFound/PageNotFound";

const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route path='/' exact component={Main} />
                <Route path="/login" component={LoginPage} />
                <Route path="/registration" component={RegisterPage} />
                <Route path='/my/institute' component={AllInstitute} />
                <Route path='/my/faculty/' component={DescriptionFaculty} />
                <Route path='/about' component={Description} />
                <Route path='/cab' component={Cab} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
};

export default App;
